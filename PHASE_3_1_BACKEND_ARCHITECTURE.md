# 🏗️ PHASE 3.1: BACKEND ARCHITECTURE SPECIFICATION

**Status:** Phase 3.0 Audit Complete → Ready for Implementation  
**Duration:** 2-3 days  
**Deliverable:** Production-ready backend foundation  

---

## ARCHITECTURE OVERVIEW

```
┌─────────────────────────────────────────────────────────────┐
│                      FRONTEND (React 19)                    │
│              ✅ 27 pages, 40+ components, 100%             │
└──────────────────────┬──────────────────────────────────────┘
                       │
                       ├─ HTTP/REST API
                       │
┌──────────────────────▼──────────────────────────────────────┐
│                    API GATEWAY (Express)                     │
│  ┌──────────────────────────────────────────────────────┐  │
│  │ Middleware Layer                                     │  │
│  │ - CORS, Authentication, Rate Limiting, Logging      │  │
│  └──────────────────────────────────────────────────────┘  │
└──────────────────────┬──────────────────────────────────────┘
                       │
        ┌──────────────┼──────────────┐
        │              │              │
        ▼              ▼              ▼
   ┌─────────┐  ┌─────────┐  ┌────────────┐
   │ Routes  │  │Services │  │Middleware  │
   └────┬────┘  └────┬────┘  └────┬───────┘
        │             │             │
        └─────────────┼─────────────┘
                      │
        ┌─────────────┼─────────────┐
        │             │             │
        ▼             ▼             ▼
    ┌────────┐  ┌──────────┐  ┌──────────┐
    │Database│  │Email Svc │  │Analytics │
    │ (PG)   │  │(SendGrid)│  │(Events)  │
    └────────┘  └──────────┘  └──────────┘
```

---

## PROJECT STRUCTURE

```
backend/
├── src/
│   ├── config/
│   │   ├── database.js              # Database connection pool
│   │   ├── environment.js           # Environment variables
│   │   └── constants.js             # App constants
│   │
│   ├── middleware/
│   │   ├── auth.js                  # JWT/Session auth
│   │   ├── errorHandler.js          # Global error handling
│   │   ├── validation.js            # Input validation
│   │   ├── logging.js               # Request/response logging
│   │   ├── rateLimit.js             # Rate limiting
│   │   └── cors.js                  # CORS configuration
│   │
│   ├── routes/
│   │   ├── auth.js                  # Authentication routes
│   │   ├── leads.js                 # Lead management routes
│   │   ├── courses.js               # Course routes
│   │   ├── students.js              # Student routes
│   │   ├── applications.js          # Career/internship apps
│   │   ├── analytics.js             # Analytics routes
│   │   ├── admin.js                 # Admin dashboard routes
│   │   ├── payments.js              # Payment routes
│   │   └── index.js                 # Route aggregation
│   │
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── leadController.js
│   │   ├── courseController.js
│   │   ├── studentController.js
│   │   ├── applicationController.js
│   │   ├── analyticsController.js
│   │   ├── adminController.js
│   │   └── paymentController.js
│   │
│   ├── services/
│   │   ├── leadService.js           # Lead business logic
│   │   ├── emailService.js          # Email sending
│   │   ├── analyticsService.js      # Analytics processing
│   │   ├── crmService.js            # CRM operations
│   │   ├── paymentService.js        # Payment processing
│   │   ├── fileService.js           # File storage/upload
│   │   └── notificationService.js   # Notifications
│   │
│   ├── repositories/
│   │   ├── leadRepository.js        # Lead data access
│   │   ├── userRepository.js        # User data access
│   │   ├── courseRepository.js      # Course data access
│   │   ├── studentRepository.js     # Student data access
│   │   └── applicationRepository.js # Application data access
│   │
│   ├── models/
│   │   ├── Lead.js                  # Lead model
│   │   ├── User.js                  # User model
│   │   ├── Student.js               # Student model
│   │   ├── Course.js                # Course model
│   │   ├── Application.js           # Application model
│   │   └── index.js                 # Model exports
│   │
│   ├── utils/
│   │   ├── validators.js            # Validation utilities
│   │   ├── encryption.js            # Password hashing
│   │   ├── jwt.js                   # JWT token management
│   │   ├── responses.js             # Standard API responses
│   │   └── helpers.js               # Helper functions
│   │
│   ├── database/
│   │   ├── migrations/              # Database migrations
│   │   │   ├── 001_create_users.sql
│   │   │   ├── 002_create_leads.sql
│   │   │   ├── 003_create_courses.sql
│   │   │   └── ...
│   │   ├── seeds/                   # Seed data
│   │   │   ├── users.js
│   │   │   ├── courses.js
│   │   │   └── leads.js
│   │   └── schema.sql               # Full schema
│   │
│   ├── constants/
│   │   ├── leadStatus.js
│   │   ├── eventTypes.js
│   │   ├── userRoles.js
│   │   └── httpStatus.js
│   │
│   ├── exceptions/
│   │   ├── AppError.js
│   │   ├── ValidationError.js
│   │   ├── AuthenticationError.js
│   │   └── AuthorizationError.js
│   │
│   ├── logs/
│   │   ├── app.log                  # Application logs
│   │   └── error.log                # Error logs
│   │
│   └── app.js                       # Express app config
│
├── tests/
│   ├── unit/                        # Unit tests
│   ├── integration/                 # Integration tests
│   ├── api/                         # API tests
│   └── fixtures/                    # Test data
│
├── .env.example                     # Environment template
├── .env                             # Environment variables (git ignored)
├── .gitignore
├── package.json
├── server.js                        # Entry point
└── README.md
```

---

## TECHNOLOGY STACK

### Core
- **Runtime:** Node.js 18+
- **Framework:** Express.js 4.18+
- **Language:** JavaScript (ES6+)

### Database
- **Primary:** PostgreSQL 14+
- **ORM:** Prisma or Sequelize
- **Migrations:** Knex.js or Prisma migrations

### Authentication
- **Strategy:** JWT (JSON Web Tokens)
- **Hashing:** bcryptjs (for password hashing)
- **Session:** Redis (optional, for distributed sessions)

### Services
- **Email:** SendGrid or Nodemailer
- **File Storage:** AWS S3 or Cloudinary
- **Payment:** Razorpay or Stripe
- **Analytics:** Custom database storage

### Security
- **Validation:** Joi or Yup
- **Rate Limiting:** express-rate-limit
- **Helmet:** express-helmet (security headers)
- **CORS:** express-cors (cross-origin requests)

### Monitoring & Logging
- **Logging:** Winston or Morgan
- **Error Tracking:** Sentry
- **Monitoring:** Prometheus + Grafana (optional)

### Testing
- **Unit Tests:** Jest
- **Integration Tests:** Jest + Supertest
- **API Testing:** Postman collections

---

## MIDDLEWARE LAYER

### 1. CORS Middleware
```javascript
// Allow requests from frontend only
{
  origin: ['http://localhost:5173', 'https://sastrava.com'],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization']
}
```

### 2. Authentication Middleware
```javascript
// Verify JWT token on protected routes
// Extract user from token
// Add user to request object
```

### 3. Validation Middleware
```javascript
// Validate request body/params/query
// Return 400 with validation errors if invalid
```

### 4. Rate Limiting Middleware
```javascript
// Limit requests per IP/user
// 100 requests per 15 minutes per IP
// 1000 requests per hour per user (authenticated)
```

### 5. Error Handler Middleware
```javascript
// Catch all errors
// Return standardized error response
// Log to error tracking system
```

### 6. Logging Middleware
```javascript
// Log all requests
// Log response status, duration
// Log user and action for audit trail
```

---

## API RESPONSE FORMAT

### Success Response (2xx)
```javascript
{
  success: true,
  status: 200,
  message: "Request successful",
  data: {
    id: "lead-123",
    firstName: "John",
    // ... entity data
  },
  timestamp: "2026-06-10T10:30:00Z"
}
```

### Error Response (4xx, 5xx)
```javascript
{
  success: false,
  status: 400,
  message: "Validation failed",
  errors: {
    email: "Invalid email format",
    phone: "Phone number is required"
  },
  timestamp: "2026-06-10T10:30:00Z",
  requestId: "req-123" // For debugging
}
```

---

## AUTHENTICATION FLOW

### JWT Token Structure
```javascript
Header: {
  alg: "HS256",
  typ: "JWT"
}

Payload: {
  userId: "user-123",
  email: "user@example.com",
  role: "admin", // student, admin, instructor
  iat: 1717959000,
  exp: 1717962600 // 1 hour expiry
}

Signature: HMAC_SHA256(...)
```

### Login Flow
```
1. User sends: POST /api/auth/login
   Body: { email, password }

2. Server:
   - Fetch user by email
   - Verify password against hash
   - Generate JWT token
   - Return token + user info

3. Frontend:
   - Store token in localStorage
   - Add to Authorization header: "Bearer {token}"

4. Subsequent requests:
   - Include: Authorization: Bearer {token}
   - Middleware verifies token
   - Proceeds with request
```

### Token Refresh Flow
```
1. Token expires (1 hour)
2. Frontend calls: POST /api/auth/refresh
3. Server validates refresh token
4. Returns new JWT token
5. Frontend updates localStorage
```

---

## CONTROLLER STRUCTURE

### Example: Lead Controller
```javascript
// src/controllers/leadController.js

class LeadController {
  
  // POST /api/leads
  async createLead(req, res, next) {
    try {
      // Validate input
      // Create lead object
      // Save to database
      // Trigger notifications
      // Track analytics event
      // Return created lead
    } catch (error) {
      next(error);
    }
  }

  // GET /api/leads/:id
  async getLeadById(req, res, next) {
    try {
      // Verify authentication
      // Fetch lead by ID
      // Check authorization
      // Return lead data
    } catch (error) {
      next(error);
    }
  }

  // PATCH /api/leads/:id
  async updateLead(req, res, next) {
    try {
      // Validate authorization (admin only)
      // Validate input
      // Update lead in database
      // Log audit event
      // Return updated lead
    } catch (error) {
      next(error);
    }
  }

  // GET /api/leads (admin)
  async getAllLeads(req, res, next) {
    try {
      // Verify admin role
      // Handle pagination: page, limit
      // Handle filters: status, type, date range
      // Handle sorting: createdAt, status
      // Return paginated leads
    } catch (error) {
      next(error);
    }
  }
}
```

---

## SERVICE LAYER

### Lead Service Example
```javascript
// src/services/leadService.js

class LeadService {
  
  async createLead(leadData) {
    // 1. Validate data
    this.validateLeadData(leadData);
    
    // 2. Check for duplicates
    const existing = await this.leadRepository.findByEmail(leadData.email);
    if (existing) {
      throw new Error('Lead already exists');
    }
    
    // 3. Create lead
    const lead = await this.leadRepository.create(leadData);
    
    // 4. Trigger notifications
    await this.emailService.sendLeadConfirmation(lead);
    await this.emailService.notifyAdmin(lead);
    
    // 5. Track analytics
    await this.analyticsService.trackEvent('lead_created', {
      leadId: lead.id,
      type: lead.type,
      source: lead.source
    });
    
    // 6. Add to CRM
    await this.crmService.addContact(lead);
    
    return lead;
  }

  async qualifyLead(leadId) {
    // Calculate lead score
    // Assign to appropriate team
    // Update CRM status
    // Send notifications
  }

  async convertLead(leadId, orderId) {
    // Mark as converted
    // Link to order
    // Update CRM pipeline
    // Track conversion metrics
  }
}
```

---

## DATABASE REPOSITORY PATTERN

### Lead Repository
```javascript
// src/repositories/leadRepository.js

class LeadRepository {
  
  async create(data) {
    // INSERT INTO leads (...)
    return await db.query(...);
  }

  async findById(id) {
    // SELECT * FROM leads WHERE id = ?
    return await db.query(...);
  }

  async findByEmail(email) {
    // SELECT * FROM leads WHERE email = ?
    return await db.query(...);
  }

  async findAll(filters, pagination) {
    // SELECT * FROM leads WHERE ... LIMIT ? OFFSET ?
    return await db.query(...);
  }

  async update(id, data) {
    // UPDATE leads SET ... WHERE id = ?
    return await db.query(...);
  }

  async delete(id) {
    // DELETE FROM leads WHERE id = ?
    return await db.query(...);
  }

  async findBySources(sources, dateRange) {
    // Find leads from specific sources in date range
  }

  async findByStatus(status) {
    // Find all leads with specific status
  }

  async countByType(type) {
    // Count leads by type
  }
}
```

---

## ERROR HANDLING

### Custom Error Classes
```javascript
// src/exceptions/AppError.js
class AppError extends Error {
  constructor(message, status = 500) {
    super(message);
    this.status = status;
    this.timestamp = new Date().toISOString();
  }
}

// src/exceptions/ValidationError.js
class ValidationError extends AppError {
  constructor(message, errors = {}) {
    super(message, 400);
    this.errors = errors;
  }
}

// src/exceptions/AuthenticationError.js
class AuthenticationError extends AppError {
  constructor(message = 'Unauthorized') {
    super(message, 401);
  }
}

// src/exceptions/AuthorizationError.js
class AuthorizationError extends AppError {
  constructor(message = 'Forbidden') {
    super(message, 403);
  }
}
```

### Global Error Handler
```javascript
// Express middleware that catches all errors
app.use((error, req, res, next) => {
  const status = error.status || 500;
  const message = error.message || 'Internal server error';
  
  // Log error
  logger.error({
    message,
    status,
    stack: error.stack,
    requestId: req.id
  });
  
  // Send error response
  res.status(status).json({
    success: false,
    status,
    message,
    errors: error.errors || {},
    timestamp: new Date().toISOString(),
    requestId: req.id
  });
});
```

---

## VALIDATION UTILITIES

### Input Validation Schema
```javascript
// Using Joi library

const leadValidationSchema = {
  firstName: Joi.string().required().min(2).max(50),
  lastName: Joi.string().required().min(2).max(50),
  email: Joi.string().email().required(),
  phone: Joi.string().pattern(/^[0-9]{10}$/).required(),
  company: Joi.string().max(100),
  jobTitle: Joi.string().max(100),
  leadType: Joi.string()
    .valid('GENERAL_INQUIRY', 'COURSE_INTEREST', 'SERVICE_INQUIRY', ...)
    .required(),
  budget: Joi.string()
    .valid('< 50K', '50K - 100K', '100K - 500K', '500K+'),
  message: Joi.string().max(1000)
};

// Validation middleware
const validate = (schema) => (req, res, next) => {
  const { error, value } = schema.validate(req.body);
  
  if (error) {
    const errors = {};
    error.details.forEach(detail => {
      errors[detail.path[0]] = detail.message;
    });
    throw new ValidationError('Validation failed', errors);
  }
  
  req.validated = value;
  next();
};
```

---

## ENVIRONMENT CONFIGURATION

### .env Template
```env
# Server
NODE_ENV=production
PORT=3001
API_URL=https://api.sastrava.com

# Frontend
FRONTEND_URL=https://sastrava.com

# Database
DB_HOST=localhost
DB_PORT=5432
DB_NAME=sastrava_prod
DB_USER=sastrava_user
DB_PASSWORD=secure_password_here

# JWT
JWT_SECRET=very_long_random_string_here
JWT_EXPIRY=1h
REFRESH_TOKEN_SECRET=another_long_random_string
REFRESH_TOKEN_EXPIRY=30d

# Email Service
SENDGRID_API_KEY=SG.xxx
SENDGRID_FROM_EMAIL=no-reply@sastrava.com
ADMIN_EMAIL=admin@sastrava.com

# File Storage
AWS_ACCESS_KEY_ID=xxx
AWS_SECRET_ACCESS_KEY=xxx
AWS_S3_BUCKET=sastrava-uploads
AWS_REGION=us-east-1

# Payment Gateway
RAZORPAY_KEY_ID=xxx
RAZORPAY_KEY_SECRET=xxx

# Error Tracking
SENTRY_DSN=https://xxx@sentry.io/xxx

# Analytics
ANALYTICS_DATABASE_URL=postgresql://...

# Logging
LOG_LEVEL=info
LOG_FILE=logs/app.log
```

---

## SETUP INSTRUCTIONS

### 1. Initialize Project
```bash
mkdir backend
cd backend
npm init -y
npm install express pg dotenv bcryptjs jsonwebtoken joi helmet cors morgan winston
npm install --save-dev jest supertest nodemon
```

### 2. Create Directory Structure
```bash
mkdir -p src/{config,middleware,routes,controllers,services,repositories,models,utils,database/migrations,database/seeds,constants,exceptions,logs}
mkdir -p tests/{unit,integration,api,fixtures}
```

### 3. Create Main Files
- [ ] server.js - Entry point
- [ ] src/app.js - Express app
- [ ] src/config/database.js - DB connection
- [ ] .env - Environment variables
- [ ] .env.example - Template

### 4. Setup Database
- [ ] PostgreSQL installed
- [ ] Create database: `CREATE DATABASE sastrava_prod;`
- [ ] Setup migrations
- [ ] Run migrations: `npm run migrate`
- [ ] Seed initial data: `npm run seed`

### 5. Run Server
```bash
npm run dev  # Development with nodemon
npm start    # Production
```

---

## NEXT PHASE

**Phase 3.2: Database Architecture Implementation**
- Design complete schema (24 tables)
- Create migrations
- Setup relationships
- Create seed data

---

**Status:** Phase 3.1 Architecture Complete  
**Next:** Approve Phase 3.2 Database Schema Design
