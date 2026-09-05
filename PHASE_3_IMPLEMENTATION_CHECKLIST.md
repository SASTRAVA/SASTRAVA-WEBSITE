# ✅ PHASE 3 IMPLEMENTATION CHECKLIST
## Quick Reference for Development Team

**Duration:** 20-30 days  
**Team Size:** 1-2 backend engineers  
**Daily Standup:** 15 min sync on progress  

---

## WEEK 1: FOUNDATION (Days 1-5)

### Day 1: Setup & Infrastructure (4 hours)

#### Morning (2 hours)
- [ ] Create `/backend` directory
- [ ] `npm init -y` initialize project
- [ ] Create `.env.example` template
- [ ] Create `.env` with test values
- [ ] Create `.gitignore` (node_modules, .env, logs/)

#### Afternoon (2 hours)
- [ ] Install dependencies:
  ```bash
  npm install express pg dotenv bcryptjs jsonwebtoken joi helmet cors morgan winston
  npm install --save-dev jest supertest nodemon
  ```
- [ ] Create folder structure (16 folders)
- [ ] Create `server.js` entry point
- [ ] Create `src/app.js` Express configuration
- [ ] Verify server starts: `npm run dev`

**Deliverable:** Runnable Node.js server with folder structure

---

### Day 2: Authentication System (6 hours)

#### Morning (3 hours)
- [ ] Create `src/utils/jwt.js` - Token generation/verification
- [ ] Create `src/utils/encryption.js` - Password hashing
- [ ] Create `src/middleware/auth.js` - JWT verification middleware
- [ ] Create `src/exceptions/AuthenticationError.js`
- [ ] Test JWT generation and verification

#### Afternoon (3 hours)
- [ ] Create `src/controllers/authController.js`
  - [ ] register handler
  - [ ] login handler
  - [ ] logout handler
  - [ ] refresh token handler
- [ ] Create `src/routes/auth.js`
- [ ] Add routes to main app
- [ ] Test with Postman/cURL

**Deliverable:** Working authentication endpoints (login, register, token refresh)

---

### Day 3: Database Setup (4 hours)

#### Morning (2 hours)
- [ ] Install PostgreSQL locally / use cloud instance
- [ ] Create database: `CREATE DATABASE sastrava_dev;`
- [ ] Create `src/config/database.js` - Connection pool
- [ ] Test database connection

#### Afternoon (2 hours)
- [ ] Create all 18 migration files (SQL scripts)
- [ ] Run migrations against database
- [ ] Verify all tables created
- [ ] Create seed scripts
- [ ] Run seed scripts
- [ ] Verify data in database

**Deliverable:** PostgreSQL database with 18 tables + seed data

---

### Day 4: Lead Management API (6 hours)

#### Morning (3 hours)
- [ ] Create `src/models/Lead.js`
- [ ] Create `src/repositories/leadRepository.js`
  - [ ] create()
  - [ ] findById()
  - [ ] findByEmail()
  - [ ] findAll()
  - [ ] update()
  - [ ] delete()

#### Afternoon (3 hours)
- [ ] Create `src/services/leadService.js`
  - [ ] createLead()
  - [ ] getLeadById()
  - [ ] updateLead()
  - [ ] qualifyLead()
  - [ ] convertLead()
- [ ] Create `src/controllers/leadController.js`
- [ ] Create `src/routes/leads.js`
- [ ] Test all endpoints

**Deliverable:** Full CRUD API for leads

---

### Day 5: Email Integration (4 hours)

#### Morning (2 hours)
- [ ] Setup SendGrid API key in .env
- [ ] Create `src/services/emailService.js`
- [ ] Create email templates (HTML)
  - [ ] Lead confirmation email
  - [ ] Admin notification email
  - [ ] Status change email
- [ ] Test email sending

#### Afternoon (2 hours)
- [ ] Integrate email into lead creation
- [ ] Integrate email into lead update
- [ ] Test email delivery
- [ ] Add email error handling

**Deliverable:** Email notifications for all lead events

---

## WEEK 2: FORM CONNECTIVITY (Days 6-10)

### Day 6: Connect Frontend Forms (3 hours)

#### Steps:
- [ ] Update `src/services/leadService.js` (frontend) with backend URL
- [ ] Change `const API_BASE_URL = 'http://localhost:3001/api';`
- [ ] Test Contact form submission from browser
- [ ] Verify data in database
- [ ] Verify confirmation email sent
- [ ] Check admin notification email

**Deliverable:** Contact form fully connected, tested end-to-end

---

### Day 7: Course Enrollment API (6 hours)

#### Morning (3 hours)
- [ ] Create `src/models/Course.js`
- [ ] Create `src/models/Enrollment.js`
- [ ] Create `src/repositories/courseRepository.js`
- [ ] Create `src/repositories/enrollmentRepository.js`
- [ ] Create database tables for courses/enrollments

#### Afternoon (3 hours)
- [ ] Create `src/services/enrollmentService.js`
- [ ] Create `src/controllers/courseController.js`
- [ ] Implement POST `/api/courses/:id/enroll`
- [ ] Create enrollment confirmation email
- [ ] Test enrollment flow

**Deliverable:** Course enrollment system working

---

### Day 8: Payment Integration (6 hours)

#### Morning (3 hours)
- [ ] Setup Razorpay API keys in .env
- [ ] Create `src/services/paymentService.js`
- [ ] Implement `createOrder()` function
- [ ] Implement `verifyPayment()` function
- [ ] Create `src/routes/payments.js`

#### Afternoon (3 hours)
- [ ] Create POST `/api/payments/create-order`
- [ ] Create POST `/api/payments/verify`
- [ ] Create order records in database
- [ ] Link orders to leads
- [ ] Test payment flow with test keys

**Deliverable:** Payment processing working with Razorpay

---

### Day 9: Analytics Event Tracking (4 hours)

#### Morning (2 hours)
- [ ] Create `src/models/AnalyticsEvent.js`
- [ ] Create `src/services/analyticsService.js`
- [ ] Create POST `/api/events` endpoint
- [ ] Implement event persistence

#### Afternoon (2 hours)
- [ ] Update frontend tracking to use backend
- [ ] Verify events captured in database
- [ ] Create event aggregation functions
- [ ] Test conversion funnel tracking

**Deliverable:** Analytics events persisted and queryable

---

### Day 10: Additional Forms (5 hours)

#### Forms to connect:
- [ ] Newsletter signup form (create endpoint)
- [ ] Consultation request form (link to leads)
- [ ] Corporate inquiry form (create endpoints)
- [ ] Workshop registration (create endpoints)
- [ ] Test all forms

**Deliverable:** All user-facing forms connected

---

## WEEK 3: CRM & ADMIN (Days 11-15)

### Day 11: CRM Accounts & Contacts (5 hours)

#### Morning (2.5 hours)
- [ ] Create `src/models/CRMAccount.js`
- [ ] Create `src/repositories/crmRepository.js`
- [ ] Implement account CRUD operations

#### Afternoon (2.5 hours)
- [ ] Create CRM contact model/repository
- [ ] Create endpoints for account management
- [ ] Link leads to accounts
- [ ] Test CRM account operations

**Deliverable:** CRM account and contact system

---

### Day 12: CRM Deals & Activities (5 hours)

#### Morning (2.5 hours)
- [ ] Create `src/models/Deal.js`
- [ ] Create `src/models/Activity.js`
- [ ] Implement deal CRUD operations

#### Afternoon (2.5 hours)
- [ ] Implement activity logging
- [ ] Create deal pipeline endpoints
- [ ] Link deals to accounts
- [ ] Test workflow

**Deliverable:** Sales pipeline and activity tracking

---

### Day 13: Admin Dashboard Backend (6 hours)

#### Morning (3 hours)
- [ ] Create `src/controllers/adminController.js`
- [ ] Implement GET `/api/admin/dashboard`
  - [ ] Total leads count
  - [ ] Leads by status
  - [ ] Revenue metrics
  - [ ] Top sources

#### Afternoon (3 hours)
- [ ] Implement GET `/api/admin/leads` (with filters)
- [ ] Implement GET `/api/admin/analytics`
- [ ] Implement GET `/api/admin/reports/:type`
- [ ] Add role-based access control

**Deliverable:** Admin API endpoints functional

---

### Day 14: Admin Dashboard Frontend (8 hours)

#### Steps:
- [ ] Create `/src/pages/AdminDashboard.jsx`
- [ ] Create dashboard layout components
- [ ] Implement lead management UI
- [ ] Implement analytics display
- [ ] Implement reporting UI
- [ ] Connect to backend APIs
- [ ] Add authentication check
- [ ] Test admin functions

**Deliverable:** Admin dashboard fully functional

---

### Day 15: Advanced Workflows (6 hours)

#### Morning (3 hours)
- [ ] Implement lead scoring logic
- [ ] Implement lead qualification logic
- [ ] Create lead assignment logic

#### Afternoon (3 hours)
- [ ] Implement workflow automations
- [ ] Create follow-up scheduling
- [ ] Test workflows
- [ ] Document workflow rules

**Deliverable:** CRM workflows operational

---

## WEEK 4: TESTING & LAUNCH (Days 16-20)

### Day 16: Unit Tests (6 hours)

#### Tests to write:
- [ ] All utility functions (jwt, encryption, validators)
- [ ] Email service (mock SendGrid)
- [ ] Lead service (all methods)
- [ ] Payment service (mock Razorpay)
- [ ] Analytics service

#### Verification:
- [ ] Run `npm test`
- [ ] Check coverage: `npm test -- --coverage`
- [ ] Target: 80%+ coverage

**Deliverable:** Unit test suite passing

---

### Day 17: Integration Tests (6 hours)

#### Tests to write:
- [ ] Authentication flow (register → login → token refresh)
- [ ] Lead submission flow (form → database → email)
- [ ] Course enrollment flow (enroll → payment → email)
- [ ] Analytics tracking flow
- [ ] CRM workflow

#### Verification:
- [ ] All tests passing
- [ ] No false positives
- [ ] Document test cases

**Deliverable:** Integration tests passing

---

### Day 18: Security Hardening (5 hours)

#### Checklist:
- [ ] Input validation on all endpoints
- [ ] SQL injection protection (parameterized queries)
- [ ] XSS protection (sanitize outputs)
- [ ] CSRF tokens (if needed)
- [ ] Rate limiting on all endpoints
- [ ] Password hashing verified
- [ ] Secrets not in code (use .env)
- [ ] HTTPS enforced in production
- [ ] CORS properly configured
- [ ] Security headers added (helmet.js)

**Deliverable:** Security audit passed

---

### Day 19: Performance Optimization (6 hours)

#### Checklist:
- [ ] Query optimization (check slow queries)
- [ ] Database indexes verified
- [ ] Connection pooling configured
- [ ] Response caching where appropriate
- [ ] API response times < 200ms
- [ ] Load testing: 1000 concurrent users
- [ ] Memory leaks checked
- [ ] Database backups working

**Deliverable:** Performance baseline established

---

### Day 20: Launch Readiness (6 hours)

#### Checklist:
- [ ] All 50+ APIs documented
- [ ] API documentation (Swagger)
- [ ] Admin user guide created
- [ ] Deployment guide written
- [ ] Rollback procedures documented
- [ ] Monitoring configured
- [ ] Error tracking (Sentry) active
- [ ] Backup procedures tested
- [ ] Team trained
- [ ] Go/no-go decision made

**Deliverable:** Production-ready system

---

## DAILY CHECKLIST

### Start of Day
- [ ] Check team Slack for blockers
- [ ] Review yesterday's progress
- [ ] Understand today's tasks
- [ ] Identify dependencies

### During Day
- [ ] Commit code frequently (every 1-2 hours)
- [ ] Run tests before commit
- [ ] Update task status
- [ ] Document decisions
- [ ] Help teammates

### End of Day
- [ ] Push code to Git
- [ ] Update progress tracking
- [ ] Document blockers
- [ ] Prepare standup notes
- [ ] Plan next day

---

## KEY MILESTONES

| Milestone | Target Date | Status |
|-----------|-------------|--------|
| Backend foundation | Day 2 | ⏳ |
| Authentication | Day 2 | ⏳ |
| Database complete | Day 3 | ⏳ |
| Lead API working | Day 4 | ⏳ |
| Email system | Day 5 | ⏳ |
| Forms connected | Day 6 | ⏳ |
| Payment working | Day 8 | ⏳ |
| Analytics tracking | Day 9 | ⏳ |
| CRM system | Day 12 | ⏳ |
| Admin dashboard | Day 14 | ⏳ |
| Unit tests done | Day 16 | ⏳ |
| Security hardened | Day 18 | ⏳ |
| **LAUNCH READY** | **Day 20** | **⏳** |

---

## COMMON TASKS

### Testing an endpoint
```bash
# Using curl
curl -X POST http://localhost:3001/api/leads \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "John",
    "lastName": "Doe",
    "email": "john@example.com",
    "phone": "1234567890"
  }'

# Using Postman
# Create new request: POST http://localhost:3001/api/leads
# Body (JSON): { ... }
# Click Send
```

### Database inspection
```bash
# Connect to database
psql -d sastrava_dev

# List all tables
\dt

# View table schema
\d leads

# Quick query
SELECT * FROM leads LIMIT 5;
```

### Running tests
```bash
# Run all tests
npm test

# Run specific test file
npm test leadService.test.js

# With coverage
npm test -- --coverage

# Watch mode
npm test -- --watch
```

### Checking logs
```bash
# View application logs
tail -f logs/app.log

# View error logs
tail -f logs/error.log

# Search logs
grep "ERROR" logs/error.log
```

---

## GIT WORKFLOW

### Daily commits
```bash
# Create feature branch
git checkout -b feature/lead-api

# Make changes...

# Commit frequently
git add src/services/leadService.js
git commit -m "Implement lead service methods"

# Push to origin
git push origin feature/lead-api

# Create pull request (code review)
# After approval: merge to main
# Delete feature branch
```

### Before deployment
```bash
# Pull latest
git pull origin main

# Verify no uncommitted changes
git status

# Check recent commits
git log --oneline -5

# Tag release
git tag -a v3.0.0 -m "Phase 3 Release"
git push origin v3.0.0
```

---

## TROUBLESHOOTING

### Common Issues

#### Database connection fails
**Problem:** `ECONNREFUSED` on port 5432  
**Solution:**
1. Check PostgreSQL is running: `pg_isready`
2. Verify connection string in .env
3. Restart PostgreSQL: `brew services restart postgresql`

#### API returns 500 error
**Problem:** Request fails with generic error  
**Solution:**
1. Check server logs: `tail -f logs/error.log`
2. Check request body is valid JSON
3. Add console.log for debugging
4. Use Postman to test endpoint

#### Tests failing
**Problem:** Unit tests not passing  
**Solution:**
1. Run specific test: `npm test filename.test.js`
2. Check error message carefully
3. Mock external services (SendGrid, etc.)
4. Verify test data

#### Email not sending
**Problem:** No emails received  
**Solution:**
1. Check SendGrid API key in .env
2. Verify email is not in spam
3. Check SendGrid dashboard for failed sends
4. Review email template HTML

---

## HELPFUL COMMANDS

```bash
# Start development server
npm run dev

# Run tests
npm test

# Check code coverage
npm test -- --coverage

# Lint code
npm run lint

# Format code
npm run format

# Build for production
npm run build

# Start production server
npm start

# Database commands
psql -d sastrava_dev
psql -f migrations/001_create_tables.sql

# Git commands
git log --oneline -10
git diff
git status
git branch -a
```

---

## DOCUMENTATION REFERENCES

- Backend Architecture: `PHASE_3_1_BACKEND_ARCHITECTURE.md`
- Database Schema: `PHASE_3_2_DATABASE_SCHEMA.md`
- Implementation Plan: `PHASE_3_IMPLEMENTATION_ROADMAP.md`
- Audit Report: `PHASE_3_0_LEGACY_RECONCILIATION_AUDIT.md`

---

## EMERGENCY CONTACTS

**Lead Architect:** [Contact info]  
**Tech Lead:** [Contact info]  
**Database Admin:** [Contact info]  

---

## DAILY STANDUP TEMPLATE

```
YESTERDAY:
- Completed: [tasks]
- Blockers: [issues]

TODAY:
- Will do: [tasks]
- Expected blockers: [known issues]

SUPPORT NEEDED:
- [Questions/help needed]
```

---

**Last Updated:** June 10, 2026  
**Status:** Ready for implementation  
**Target Completion:** July 10, 2026

**Good luck! 🚀**
