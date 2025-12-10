# MedFox - Medical Billing & RCM Platform

A comprehensive medical billing, revenue cycle management (RCM), and medical consulting web application built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Medical Billing Management**: Complete claims processing workflow
- **Revenue Cycle Management**: End-to-end RCM consulting and optimization
- **Certified Coding & Audit**: Professional medical coding services
- **Admin Dashboard**: Comprehensive billing and claims management
- **Role-based Authentication**: Secure access for admins, coders, billers, and clients
- **Real-time Reporting**: AR days, clean claim rates, and collection analytics

## Tech Stack

- **Frontend**: Next.js 14, TypeScript, Tailwind CSS, React
- **Backend**: Next.js API Routes, TypeScript
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: JWT with secure password hashing (bcrypt)
- **Testing**: Jest (unit tests), Playwright (E2E tests)
- **CI/CD**: GitHub Actions, Vercel deployment

## Getting Started

### Prerequisites

- Node.js 18+ 
- PostgreSQL database
- Git

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd medfox
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Set up the database:
```bash
npx prisma generate
npx prisma db push
npx prisma db seed
```

5. Start the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Environment Variables

Create a `.env.local` file with the following variables:

```env
DATABASE_URL="postgresql://username:password@localhost:5432/medfox"
JWT_SECRET="your-jwt-secret-key"
SMTP_HOST="smtp.gmail.com"
SMTP_USER="your-email@gmail.com"
SMTP_PASS="your-app-password"
NEXT_PUBLIC_SITE_URL="http://localhost:3000"
RECAPTCHA_KEY="your-recaptcha-key"
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run test` - Run unit tests
- `npm run test:e2e` - Run E2E tests
- `npm run db:seed` - Seed database with demo data

## Demo Account

After seeding the database, you can log in with:

- **Admin**: admin@medfox.com / password123
- **Biller**: biller@medfox.com / password123
- **Client**: client@medfox.com / password123

## Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Manual Deployment

```bash
npm run build
npm run start
```

## Project Structure

```
medfox/
├── src/
│   ├── app/                 # Next.js app router pages
│   ├── components/          # Reusable React components
│   ├── lib/                 # Utility functions and configurations
│   ├── types/               # TypeScript type definitions
│   └── middleware.ts        # Authentication middleware
├── prisma/                  # Database schema and migrations
├── public/                  # Static assets
├── tests/                   # Test files
└── docs/                    # Documentation
```

## Contributing

1. Create a feature branch: `git checkout -b feat/feature-name`
2. Make your changes and add tests
3. Run tests: `npm run test && npm run test:e2e`
4. Commit your changes: `git commit -m "feat: add feature"`
5. Push to the branch: `git push origin feat/feature-name`
6. Open a Pull Request

## License

This project is licensed under the MIT License.