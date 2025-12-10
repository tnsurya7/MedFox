# MedFox Deployment Guide

## 🚀 Quick Start

### Local Development

1. **Clone the repository:**
```bash
git clone https://github.com/tnsurya7/MedFox.git
cd MedFox
```

2. **Install dependencies:**
```bash
npm install
```

3. **Set up environment variables:**
```bash
cp .env.example .env.local
```
Edit `.env.local` with your database and other configuration values.

4. **Start PostgreSQL database:**
```bash
# Option 1: Using Docker Compose (recommended)
docker-compose up postgres -d

# Option 2: Use your own PostgreSQL instance
# Make sure to update DATABASE_URL in .env.local
```

5. **Set up the database:**
```bash
npx prisma generate
npx prisma db push
npx prisma db seed
```

6. **Start the development server:**
```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the application.

### Demo Accounts

After seeding the database, you can log in with these demo accounts:

- **Admin**: admin@medfox.com / password123
- **Biller**: biller@medfox.com / password123
- **Coder**: coder@medfox.com / password123
- **Client**: client@medfox.com / password123

## 🌐 Production Deployment

### Vercel Deployment (Recommended)

1. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will automatically detect it's a Next.js project

2. **Set Environment Variables in Vercel:**
   ```
   DATABASE_URL=your_production_database_url
   JWT_SECRET=your_production_jwt_secret
   SMTP_HOST=your_smtp_host
   SMTP_USER=your_smtp_user
   SMTP_PASS=your_smtp_password
   NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
   ```

3. **Deploy:**
   - Push to main branch triggers automatic deployment
   - Or use the deploy script: `./deploy.sh`

### Manual Deployment

1. **Build the application:**
```bash
npm run build
```

2. **Start the production server:**
```bash
npm start
```

### Docker Deployment

1. **Build and run with Docker Compose:**
```bash
docker-compose up --build
```

2. **Or build Docker image manually:**
```bash
docker build -t medfox .
docker run -p 3000:3000 medfox
```

## 🗄️ Database Setup

### Production Database

For production, use a managed PostgreSQL service:

- **Vercel Postgres** (recommended for Vercel deployments)
- **Supabase**
- **PlanetScale**
- **AWS RDS**
- **Google Cloud SQL**

### Database Migration

```bash
# Generate Prisma client
npx prisma generate

# Push schema to database
npx prisma db push

# Seed with demo data
npx prisma db seed

# View data in Prisma Studio
npx prisma studio
```

## 🔧 Configuration

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `DATABASE_URL` | PostgreSQL connection string | Yes |
| `JWT_SECRET` | Secret key for JWT tokens | Yes |
| `SMTP_HOST` | Email server host | No |
| `SMTP_USER` | Email username | No |
| `SMTP_PASS` | Email password | No |
| `NEXT_PUBLIC_SITE_URL` | Public URL of your site | Yes |
| `RECAPTCHA_SITE_KEY` | reCAPTCHA site key | No |
| `RECAPTCHA_SECRET_KEY` | reCAPTCHA secret key | No |

### Email Configuration

For production email functionality, configure SMTP settings:

1. **Gmail:**
   - Use App Passwords for authentication
   - SMTP_HOST: smtp.gmail.com
   - SMTP_PORT: 587

2. **SendGrid:**
   - SMTP_HOST: smtp.sendgrid.net
   - SMTP_USER: apikey
   - SMTP_PASS: your_sendgrid_api_key

## 🔒 Security Checklist

### Before Production

- [ ] Change JWT_SECRET to a strong, random value
- [ ] Set up proper database credentials
- [ ] Configure HTTPS/SSL certificates
- [ ] Set up proper CORS policies
- [ ] Enable rate limiting
- [ ] Configure proper backup strategies
- [ ] Set up monitoring and logging
- [ ] Review and update security headers

### HIPAA Compliance

For healthcare data, ensure:

- [ ] Use BAA-compliant hosting (AWS, Google Cloud, Azure)
- [ ] Enable encryption at rest and in transit
- [ ] Implement proper access controls
- [ ] Set up audit logging
- [ ] Regular security assessments
- [ ] Staff training on HIPAA requirements

## 🧪 Testing

### Run Tests

```bash
# Unit tests
npm test

# E2E tests
npm run test:e2e

# Linting
npm run lint

# Type checking
npx tsc --noEmit
```

### CI/CD Pipeline

The GitHub Actions workflow automatically:

1. Runs tests on pull requests
2. Deploys to Vercel on main branch pushes
3. Performs security checks
4. Builds and validates the application

## 📊 Monitoring

### Production Monitoring

Consider setting up:

- **Error Tracking**: Sentry
- **Analytics**: Google Analytics, Mixpanel
- **Performance**: Vercel Analytics
- **Uptime**: Pingdom, UptimeRobot
- **Database**: Database-specific monitoring tools

### Health Checks

The application includes a health check endpoint:
```
GET /api/health
```

## 🔄 Updates and Maintenance

### Regular Tasks

1. **Update dependencies:**
```bash
npm update
npm audit fix
```

2. **Database maintenance:**
```bash
# Backup database
pg_dump $DATABASE_URL > backup.sql

# Monitor database performance
npx prisma studio
```

3. **Security updates:**
   - Regularly update Node.js and dependencies
   - Monitor security advisories
   - Review access logs

## 🆘 Troubleshooting

### Common Issues

1. **Database Connection Issues:**
   - Verify DATABASE_URL format
   - Check network connectivity
   - Ensure database is running

2. **Build Failures:**
   - Clear .next folder: `rm -rf .next`
   - Reinstall dependencies: `rm -rf node_modules && npm install`
   - Check TypeScript errors: `npx tsc --noEmit`

3. **Authentication Issues:**
   - Verify JWT_SECRET is set
   - Check cookie settings
   - Ensure HTTPS in production

### Support

For issues and questions:
- Check the GitHub Issues
- Review the documentation
- Contact the development team

## 📈 Scaling

### Performance Optimization

- Enable Next.js caching
- Use CDN for static assets
- Implement database indexing
- Consider Redis for session storage
- Monitor and optimize database queries

### Infrastructure Scaling

- Use load balancers for high traffic
- Implement database read replicas
- Consider microservices architecture
- Set up auto-scaling policies