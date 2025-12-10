import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { prisma } from '@/lib/prisma'
import { getUserFromRequest } from '@/lib/auth'
import { ClaimStatus } from '@/types'

const createClaimSchema = z.object({
  clientId: z.string(),
  providerId: z.string(),
  patientId: z.string(),
  claimNumber: z.string(),
  dateOfService: z.string().transform((str) => new Date(str)),
  totalCharge: z.number().positive(),
  status: z.nativeEnum(ClaimStatus).optional().default(ClaimStatus.SUBMITTED),
})

const querySchema = z.object({
  page: z.string().optional().default('1').transform(Number),
  limit: z.string().optional().default('10').transform(Number),
  status: z.string().optional(),
  clientId: z.string().optional(),
  providerId: z.string().optional(),
  search: z.string().optional(),
})

export async function GET(request: NextRequest) {
  try {
    const user = getUserFromRequest(request)
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { searchParams } = new URL(request.url)
    const { page, limit, status, clientId, providerId, search } = querySchema.parse(
      Object.fromEntries(searchParams)
    )

    const skip = (page - 1) * limit

    // Build where clause
    const where: any = {}
    
    if (status) {
      where.status = status
    }
    
    if (clientId) {
      where.clientId = clientId
    }
    
    if (providerId) {
      where.providerId = providerId
    }
    
    if (search) {
      where.OR = [
        { claimNumber: { contains: search, mode: 'insensitive' } },
        { patient: { name: { contains: search, mode: 'insensitive' } } },
      ]
    }

    // Get claims with related data
    const [claims, total] = await Promise.all([
      prisma.claim.findMany({
        where,
        include: {
          client: true,
          provider: true,
          patient: true,
          payments: true,
          denials: true,
        },
        orderBy: { createdAt: 'desc' },
        skip,
        take: limit,
      }),
      prisma.claim.count({ where }),
    ])

    return NextResponse.json({
      claims,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit),
      },
    })
  } catch (error) {
    console.error('Get claims error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const user = getUserFromRequest(request)
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Check if user has permission to create claims
    if (!['ADMIN', 'BILLER', 'CODER'].includes(user.role)) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }

    const body = await request.json()
    const data = createClaimSchema.parse(body)

    // Check if claim number already exists
    const existingClaim = await prisma.claim.findUnique({
      where: { claimNumber: data.claimNumber },
    })

    if (existingClaim) {
      return NextResponse.json(
        { error: 'Claim number already exists' },
        { status: 409 }
      )
    }

    // Create claim
    const claim = await prisma.claim.create({
      data,
      include: {
        client: true,
        provider: true,
        patient: true,
      },
    })

    // Create claim event
    await prisma.claimEvent.create({
      data: {
        claimId: claim.id,
        eventType: 'CREATED',
        note: 'Claim created and submitted',
        createdBy: user.userId,
      },
    })

    return NextResponse.json(claim, { status: 201 })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Validation error', details: error.issues },
        { status: 400 }
      )
    }

    console.error('Create claim error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}