# Backend Server Setup Guide

**Status**: Step-by-step implementation guide  
**Stack**: Node.js + Express + MongoDB  
**Time Estimate**: 4-6 hours for complete setup

---

## Prerequisites

- Node.js 16+ 
- MongoDB (local or Atlas)
- npm or yarn
- Git

---

## Step 1: Initialize Backend Project

```bash
# Create project directory
mkdir sastrava-backend
cd sastrava-backend

# Initialize npm
npm init -y

# Create folder structure
mkdir src
mkdir src/routes
mkdir src/models
mkdir src/controllers
mkdir src/middleware
mkdir src/utils
mkdir src/services
mkdir src/config
```

---

## Step 2: Install Dependencies

```bash
npm install express mongoose dotenv cors helmet morgan validator bcryptjs jsonwebtoken redis nodemailer express-rate-limit

# Dev dependencies
npm install --save-dev nodemon eslint prettier

# Optional but recommended
npm install express-async-errors
```

**Package.json scripts**:
```json
{
  "scripts": {
    "start": "node src/index.js",
    "dev": "nodemon src/index.js",
    "lint": "eslint src/",
    "test": "jest"
  }
}
```

---

## Step 3: Environment Configuration

**Create `.env` file**:
```env
# Server
PORT=3001
NODE_ENV=development
BASE_URL=http://localhost:3001

# Database
MONGODB_URI=mongodb+srv://user:password@cluster.mongodb.net/sastrava
MONGODB_NAME=sastrava

# JWT
JWT_SECRET=your-super-secret-key-min-32-chars-long
JWT_EXPIRY=24h
JWT_REFRESH_EXPIRY=30d

# CORS
FRONTEND_URL=http://localhost:5173
ALLOWED_ORIGINS=http://localhost:5173,https://sastrava.com

# Email (SendGrid)
SENDGRID_API_KEY=SG.xxxxx
SENDGRID_FROM_EMAIL=noreply@sastrava.com
SENDGRID_FROM_NAME=SASTRAVA

# Rate Limiting
RATE_LIMIT_WINDOW=15
RATE_LIMIT_MAX_REQUESTS=100

# Redis (optional)
REDIS_URL=redis://localhost:6379

# Admin Panel
ADMIN_EMAIL=admin@sastrava.com
ADMIN_PASSWORD=secure_password_here
```

**Create `.env.production` file** (for production):
```env
PORT=3001
NODE_ENV=production
BASE_URL=https://api.sastrava.com
MONGODB_URI=mongodb+srv://prod_user:prod_pass@prod-cluster.mongodb.net/sastrava-prod
# ... other production vars
```

---

## Step 4: Create Main Server File

**`src/index.js`**:
```javascript
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
require('express-async-errors');

const app = express();

// Middleware
app.use(helmet());
app.use(cors({
  origin: process.env.ALLOWED_ORIGINS?.split(',') || ['http://localhost:5173'],
  credentials: true
}));
app.use(morgan('dev'));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));

// Database Connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  maxPoolSize: 10,
  serverSelectionTimeoutMS: 5000,
}).then(() => {
  console.log('✅ MongoDB Connected');
}).catch(err => {
  console.error('❌ MongoDB Connection Error:', err);
  process.exit(1);
});

// Routes (will create these in Step 5-7)
app.use('/api/auth', require('./routes/auth'));
app.use('/api/leads', require('./routes/leads'));
app.use('/api/analytics', require('./routes/analytics'));
app.use('/api/admin', require('./routes/admin'));

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Error handling
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({
    success: false,
    error: err.message || 'Internal Server Error',
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
  });
});

// Start server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV}`);
});
```

---

## Step 5: Create Models

**`src/models/Lead.js`**:
```javascript
const mongoose = require('mongoose');

const leadSchema = new mongoose.Schema({
  // Basic Info
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { 
    type: String, 
    required: true, 
    unique: true,
    lowercase: true,
    index: true
  },
  phone: String,
  company: String,
  jobTitle: String,
  
  // Location
  city: String,
  country: { type: String, default: 'India' },
  
  // Lead Classification
  leadType: {
    type: String,
    enum: ['course_enrollment', 'service_inquiry', 'contact_inquiry', 
            'internship_application', 'consultation_request', 'freelancing_request',
            'career_application', 'general_inquiry'],
    default: 'general_inquiry',
    index: true
  },
  status: {
    type: String,
    enum: ['new', 'contacted', 'interested', 'qualified', 'rejected', 'enrolled', 'completed'],
    default: 'new',
    index: true
  },
  
  // Service/Course Info
  selectedService: String,
  selectedCourse: String,
  batchPreference: String,
  qualification: String,
  message: String,
  
  // Tracking
  sourcePage: { type: String, index: true },
  sourceButton: String,
  campaign: String,
  ipAddress: String,
  userAgent: String,
  referrer: String,
  
  // Admin
  assignedTo: String,
  notes: [{
    note: String,
    addedBy: String,
    addedAt: { type: Date, default: Date.now },
    type: String
  }],
  
  // Email
  emailSent: { type: Boolean, default: false },
  emailSentAt: Date,
  
  // Timestamps
  submittedAt: { type: Date, default: Date.now, index: true },
  updatedAt: { type: Date, default: Date.now },
  contactedAt: Date,
  enrolledAt: Date
});

// Auto-update updatedAt
leadSchema.pre('save', function(next) {
  this.updatedAt = new Date();
  next();
});

module.exports = mongoose.model('Lead', leadSchema);
```

**`src/models/User.js`**:
```javascript
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { 
    type: String, 
    required: true, 
    unique: true,
    lowercase: true,
    index: true
  },
  phone: String,
  hashedPassword: { type: String, required: true },
  role: {
    type: String,
    enum: ['admin', 'sales', 'support', 'analyst'],
    default: 'support',
    index: true
  },
  permissions: [String],
  avatar: String,
  department: String,
  active: { type: Boolean, default: true },
  lastLogin: Date,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

// Hash password before save
userSchema.pre('save', async function(next) {
  if (!this.isModified('hashedPassword')) return next();
  try {
    this.hashedPassword = await bcrypt.hash(this.hashedPassword, 10);
    next();
  } catch (err) {
    next(err);
  }
});

// Method to verify password
userSchema.methods.verifyPassword = async function(password) {
  return await bcrypt.compare(password, this.hashedPassword);
};

module.exports = mongoose.model('User', userSchema);
```

---

## Step 6: Create Middleware

**`src/middleware/auth.js`**:
```javascript
const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    
    if (!token) {
      return res.status(401).json({ success: false, error: 'No token provided' });
    }
    
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ success: false, error: 'Invalid token' });
  }
};

module.exports = auth;
```

**`src/middleware/validation.js`**:
```javascript
const { body, validationResult } = require('express-validator');

const validateLead = [
  body('firstName').notEmpty().trim().escape(),
  body('lastName').notEmpty().trim().escape(),
  body('email').isEmail().normalizeEmail(),
  body('phone').optional().matches(/^[0-9]{10}$/),
  body('message').optional().trim().escape(),
];

const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, errors: errors.array() });
  }
  next();
};

module.exports = { validateLead, handleValidationErrors };
```

---

## Step 7: Create Routes

**`src/routes/leads.js`**:
```javascript
const express = require('express');
const router = express.Router();
const Lead = require('../models/Lead');
const auth = require('../middleware/auth');

// Create Lead (PUBLIC)
router.post('/', async (req, res) => {
  try {
    const lead = new Lead(req.body);
    await lead.save();
    
    // Send confirmation email (implement in Step 8)
    // await sendLeadConfirmationEmail(lead);
    
    res.status(201).json({
      success: true,
      leadId: lead._id,
      message: 'Lead created successfully'
    });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
});

// Get Lead by ID (PROTECTED)
router.get('/:leadId', auth, async (req, res) => {
  try {
    const lead = await Lead.findById(req.params.leadId);
    if (!lead) {
      return res.status(404).json({ success: false, error: 'Lead not found' });
    }
    res.json({ success: true, data: lead });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Get all leads with filtering (PROTECTED)
router.get('/', auth, async (req, res) => {
  try {
    const { status, leadType, city, page = 1, limit = 50 } = req.query;
    
    const filter = {};
    if (status) filter.status = status;
    if (leadType) filter.leadType = leadType;
    if (city) filter.city = city;
    
    const leads = await Lead.find(filter)
      .sort({ submittedAt: -1 })
      .skip((page - 1) * limit)
      .limit(parseInt(limit));
    
    const total = await Lead.countDocuments(filter);
    
    res.json({
      success: true,
      data: leads,
      pagination: { page: parseInt(page), limit, total, pages: Math.ceil(total / limit) }
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Update Lead (PROTECTED)
router.patch('/:leadId', auth, async (req, res) => {
  try {
    const lead = await Lead.findByIdAndUpdate(req.params.leadId, req.body, { new: true });
    res.json({ success: true, data: lead });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

module.exports = router;
```

---

## Step 8: Email Service (SendGrid)

**`src/services/emailService.js`**:
```javascript
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendLeadConfirmation = async (lead) => {
  const msg = {
    to: lead.email,
    from: process.env.SENDGRID_FROM_EMAIL,
    subject: 'Welcome to SASTRAVA!',
    html: `
      <h1>Welcome ${lead.firstName}!</h1>
      <p>Thank you for your interest in SASTRAVA.</p>
      <p>We'll be in touch shortly with more information.</p>
      <p>Best regards,<br>SASTRAVA Team</p>
    `
  };
  
  return await sgMail.send(msg);
};

module.exports = { sendLeadConfirmation };
```

---

## Step 9: Testing the Backend

```bash
# Start dev server
npm run dev

# Test endpoint
curl -X POST http://localhost:3001/api/leads \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "Test",
    "lastName": "User",
    "email": "test@example.com",
    "phone": "9876543210",
    "leadType": "contact_inquiry",
    "message": "Test message"
  }'
```

---

## Step 10: Database Setup

**Create user and database in MongoDB Atlas**:

1. Go to https://www.mongodb.com/cloud/atlas
2. Create/sign in to account
3. Create a new cluster
4. Create a database user
5. Get connection string
6. Add to `.env` as `MONGODB_URI`

**Initialize indexes**:
```javascript
// Run once during setup
const mongoose = require('mongoose');
const Lead = require('./models/Lead');

mongoose.connect(process.env.MONGODB_URI);

Lead.collection.createIndex({ email: 1 }, { unique: true });
Lead.collection.createIndex({ submittedAt: -1 });
Lead.collection.createIndex({ status: 1 });

console.log('Indexes created');
```

---

## Deployment Checklist

- [ ] All environment variables set
- [ ] Database connection working
- [ ] API endpoints tested
- [ ] Error handling implemented
- [ ] Logging configured
- [ ] CORS configured
- [ ] Rate limiting active
- [ ] JWT authentication working
- [ ] Email service working
- [ ] Security headers set
- [ ] Database backups enabled
- [ ] Monitoring setup

---

## Common Issues & Solutions

**CORS Error**:
```javascript
// Add frontend URL to ALLOWED_ORIGINS
ALLOWED_ORIGINS=http://localhost:5173,https://sastrava.com
```

**MongoDB Connection Failed**:
```javascript
// Check:
1. Connection string is correct
2. IP whitelist includes your IP
3. Database user has correct permissions
4. Network connectivity
```

**JWT Token Expired**:
```javascript
// Implement refresh token endpoint
POST /api/auth/refresh
// Returns new access token
```

---

## Next Steps

1. ✅ Set up local development server
2. ✅ Test all API endpoints
3. ✅ Implement authentication
4. ✅ Set up email notifications
5. ✅ Deploy to production
6. ✅ Set up monitoring & logging

---

**Documentation**: Complete  
**Last Updated**: June 10, 2026
