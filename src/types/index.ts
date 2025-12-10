export interface User {
  id: string
  name: string
  email: string
  role: UserRole
  createdAt: Date
  lastLogin?: Date
}

export interface Client {
  id: string
  name: string
  address?: string
  phone?: string
  tin?: string
  contactPerson?: string
  createdAt: Date
}

export interface Provider {
  id: string
  clientId: string
  name: string
  npi?: string
  specialty?: string
  client?: Client
}

export interface Patient {
  id: string
  clientId: string
  name: string
  dob?: Date
  gender?: string
  identifier?: string
  client?: Client
}

export interface Claim {
  id: string
  clientId: string
  providerId: string
  patientId: string
  claimNumber: string
  dateOfService: Date
  totalCharge: number
  status: ClaimStatus
  createdAt: Date
  updatedAt: Date
  client?: Client
  provider?: Provider
  patient?: Patient
  events?: ClaimEvent[]
  payments?: Payment[]
  denials?: Denial[]
}

export interface ClaimEvent {
  id: string
  claimId: string
  eventType: string
  note?: string
  createdBy: string
  createdAt: Date
  user?: User
}

export interface Payment {
  id: string
  claimId: string
  amount: number
  dateReceived: Date
  payer: string
  method?: string
}

export interface Denial {
  id: string
  claimId: string
  denialCode: string
  reason: string
  resolved: boolean
  resolvedAt?: Date
}

export interface AuditLog {
  id: string
  userId: string
  action: string
  ip?: string
  userAgent?: string
  createdAt: Date
  user?: User
}

export enum UserRole {
  ADMIN = 'ADMIN',
  CODER = 'CODER',
  BILLER = 'BILLER',
  CLIENT = 'CLIENT'
}

export enum ClaimStatus {
  SUBMITTED = 'SUBMITTED',
  PENDING = 'PENDING',
  PAID = 'PAID',
  DENIED = 'DENIED',
  APPEALED = 'APPEALED'
}

export interface LoginRequest {
  email: string
  password: string
}

export interface SignupRequest {
  name: string
  email: string
  password: string
  role?: UserRole
}

export interface ContactRequest {
  name: string
  email: string
  phone?: string
  company?: string
  message: string
}