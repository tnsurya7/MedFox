import { PrismaClient, UserRole, ClaimStatus } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Seeding database...')

  // Create users
  const adminUser = await prisma.user.create({
    data: {
      name: 'Admin User',
      email: 'admin@medfox.com',
      passwordHash: await bcrypt.hash('password123', 10),
      role: UserRole.ADMIN,
    },
  })

  const billerUser = await prisma.user.create({
    data: {
      name: 'Biller User',
      email: 'biller@medfox.com',
      passwordHash: await bcrypt.hash('password123', 10),
      role: UserRole.BILLER,
    },
  })

  const coderUser = await prisma.user.create({
    data: {
      name: 'Coder User',
      email: 'coder@medfox.com',
      passwordHash: await bcrypt.hash('password123', 10),
      role: UserRole.CODER,
    },
  })

  const clientUser = await prisma.user.create({
    data: {
      name: 'Client User',
      email: 'client@medfox.com',
      passwordHash: await bcrypt.hash('password123', 10),
      role: UserRole.CLIENT,
    },
  })

  // Create clients
  const client1 = await prisma.client.create({
    data: {
      name: 'Sunrise Medical Clinic',
      address: '123 Healthcare Ave, Medical City, MC 12345',
      phone: '(555) 123-4567',
      tin: '12-3456789',
      contactPerson: 'Dr. Sarah Johnson',
    },
  })

  const client2 = await prisma.client.create({
    data: {
      name: 'Downtown Family Practice',
      address: '456 Main St, Downtown, DT 67890',
      phone: '(555) 987-6543',
      tin: '98-7654321',
      contactPerson: 'Dr. Michael Chen',
    },
  })

  const client3 = await prisma.client.create({
    data: {
      name: 'Specialty Orthopedic Center',
      address: '789 Bone Rd, Orthopedic Hills, OH 11111',
      phone: '(555) 456-7890',
      tin: '45-6789012',
      contactPerson: 'Dr. Emily Rodriguez',
    },
  })

  // Create providers
  const providers = await Promise.all([
    prisma.provider.create({
      data: {
        clientId: client1.id,
        name: 'Dr. Sarah Johnson',
        npi: '1234567890',
        specialty: 'Family Medicine',
      },
    }),
    prisma.provider.create({
      data: {
        clientId: client1.id,
        name: 'Dr. James Wilson',
        npi: '2345678901',
        specialty: 'Internal Medicine',
      },
    }),
    prisma.provider.create({
      data: {
        clientId: client2.id,
        name: 'Dr. Michael Chen',
        npi: '3456789012',
        specialty: 'Family Medicine',
      },
    }),
    prisma.provider.create({
      data: {
        clientId: client2.id,
        name: 'Dr. Lisa Park',
        npi: '4567890123',
        specialty: 'Pediatrics',
      },
    }),
    prisma.provider.create({
      data: {
        clientId: client3.id,
        name: 'Dr. Emily Rodriguez',
        npi: '5678901234',
        specialty: 'Orthopedic Surgery',
      },
    }),
  ])

  // Create patients
  const patients = await Promise.all([
    prisma.patient.create({
      data: {
        clientId: client1.id,
        name: 'John Smith',
        dob: new Date('1985-03-15'),
        gender: 'Male',
        identifier: 'MRN001',
      },
    }),
    prisma.patient.create({
      data: {
        clientId: client1.id,
        name: 'Mary Johnson',
        dob: new Date('1992-07-22'),
        gender: 'Female',
        identifier: 'MRN002',
      },
    }),
    prisma.patient.create({
      data: {
        clientId: client1.id,
        name: 'Robert Davis',
        dob: new Date('1978-11-08'),
        gender: 'Male',
        identifier: 'MRN003',
      },
    }),
    prisma.patient.create({
      data: {
        clientId: client2.id,
        name: 'Jennifer Wilson',
        dob: new Date('1990-05-12'),
        gender: 'Female',
        identifier: 'MRN004',
      },
    }),
    prisma.patient.create({
      data: {
        clientId: client2.id,
        name: 'David Brown',
        dob: new Date('1983-09-30'),
        gender: 'Male',
        identifier: 'MRN005',
      },
    }),
    prisma.patient.create({
      data: {
        clientId: client2.id,
        name: 'Susan Miller',
        dob: new Date('1975-12-18'),
        gender: 'Female',
        identifier: 'MRN006',
      },
    }),
    prisma.patient.create({
      data: {
        clientId: client3.id,
        name: 'Michael Garcia',
        dob: new Date('1988-04-25'),
        gender: 'Male',
        identifier: 'MRN007',
      },
    }),
    prisma.patient.create({
      data: {
        clientId: client3.id,
        name: 'Lisa Anderson',
        dob: new Date('1995-08-14'),
        gender: 'Female',
        identifier: 'MRN008',
      },
    }),
    prisma.patient.create({
      data: {
        clientId: client3.id,
        name: 'Christopher Taylor',
        dob: new Date('1982-01-07'),
        gender: 'Male',
        identifier: 'MRN009',
      },
    }),
    prisma.patient.create({
      data: {
        clientId: client1.id,
        name: 'Amanda White',
        dob: new Date('1987-06-03'),
        gender: 'Female',
        identifier: 'MRN010',
      },
    }),
  ])

  // Create claims with various statuses
  const claims = []
  const statuses = [ClaimStatus.SUBMITTED, ClaimStatus.PENDING, ClaimStatus.PAID, ClaimStatus.DENIED, ClaimStatus.APPEALED]
  
  for (let i = 0; i < 30; i++) {
    const randomClient = [client1, client2, client3][Math.floor(Math.random() * 3)]
    const clientProviders = providers.filter(p => p.clientId === randomClient.id)
    const clientPatients = patients.filter(p => p.clientId === randomClient.id)
    
    if (clientProviders.length > 0 && clientPatients.length > 0) {
      const claim = await prisma.claim.create({
        data: {
          clientId: randomClient.id,
          providerId: clientProviders[Math.floor(Math.random() * clientProviders.length)].id,
          patientId: clientPatients[Math.floor(Math.random() * clientPatients.length)].id,
          claimNumber: `CLM${String(i + 1).padStart(6, '0')}`,
          dateOfService: new Date(Date.now() - Math.random() * 90 * 24 * 60 * 60 * 1000), // Random date within last 90 days
          totalCharge: Math.floor(Math.random() * 5000) + 100, // Random charge between $100-$5100
          status: statuses[Math.floor(Math.random() * statuses.length)],
        },
      })
      claims.push(claim)
    }
  }

  // Create claim events
  for (const claim of claims.slice(0, 15)) {
    await prisma.claimEvent.create({
      data: {
        claimId: claim.id,
        eventType: 'CREATED',
        note: 'Claim created and submitted to payer',
        createdBy: billerUser.id,
      },
    })
  }

  // Create payments for paid claims
  const paidClaims = claims.filter(c => c.status === ClaimStatus.PAID)
  for (const claim of paidClaims.slice(0, 10)) {
    await prisma.payment.create({
      data: {
        claimId: claim.id,
        amount: claim.totalCharge,
        dateReceived: new Date(claim.createdAt.getTime() + Math.random() * 30 * 24 * 60 * 60 * 1000),
        payer: 'Blue Cross Blue Shield',
        method: 'Electronic',
      },
    })
  }

  // Create denials for denied claims
  const deniedClaims = claims.filter(c => c.status === ClaimStatus.DENIED)
  const denialReasons = [
    'Missing prior authorization',
    'Incorrect diagnosis code',
    'Service not covered',
    'Duplicate claim'
  ]
  
  for (const claim of deniedClaims.slice(0, 4)) {
    await prisma.denial.create({
      data: {
        claimId: claim.id,
        denialCode: 'CO-' + Math.floor(Math.random() * 100),
        reason: denialReasons[Math.floor(Math.random() * denialReasons.length)],
        resolved: Math.random() > 0.5,
        resolvedAt: Math.random() > 0.5 ? new Date() : null,
      },
    })
  }

  // Create audit logs
  await prisma.auditLog.create({
    data: {
      userId: adminUser.id,
      action: 'LOGIN',
      ip: '192.168.1.100',
      userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)',
    },
  })

  console.log('✅ Database seeded successfully!')
  console.log('\n📋 Demo Accounts:')
  console.log('Admin: admin@medfox.com / password123')
  console.log('Biller: biller@medfox.com / password123')
  console.log('Coder: coder@medfox.com / password123')
  console.log('Client: client@medfox.com / password123')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })