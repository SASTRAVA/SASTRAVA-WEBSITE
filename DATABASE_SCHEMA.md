# SASTRAVA Database Schema

**Database**: MongoDB (NoSQL)  
**Version**: 1.0

---

## Collections

### 1. Leads Collection

Stores all lead submissions from forms across the website.

**Collection Name**: `leads`

**Schema**:
```javascript
{
  _id: ObjectId,
  
  // Basic Information
  firstName: String (required),
  lastName: String (required),
  email: String (required, unique, indexed),
  phone: String (10 digits),
  company: String,
  jobTitle: String,
  
  // Location
  city: String,
  country: String (default: "India"),
  
  // Lead Classification
  leadType: String (enum: [
    "course_enrollment",
    "service_inquiry",
    "contact_inquiry",
    "internship_application",
    "consultation_request",
    "freelancing_request",
    "career_application",
    "general_inquiry"
  ]),
  status: String (enum: [
    "new",
    "contacted",
    "interested",
    "qualified",
    "rejected",
    "enrolled",
    "completed"
  ], default: "new", indexed),
  
  // Service/Course Information
  selectedService: String,
  selectedCourse: String,
  batchPreference: String,
  qualification: String,
  
  // Lead Message
  message: String,
  
  // Tracking Information
  sourcePage: String (indexed),
  sourceButton: String,
  campaign: String,
  
  // System Information
  ipAddress: String,
  userAgent: String,
  referrer: String,
  
  // Timestamps
  submittedAt: Date (default: now, indexed),
  updatedAt: Date (default: now),
  contactedAt: Date,
  enrolledAt: Date,
  
  // Admin Fields
  assignedTo: String,
  notes: [{
    _id: ObjectId,
    note: String,
    addedBy: String,
    addedAt: Date,
    type: String (enum: ["call", "email", "meeting", "internal"])
  }],
  
  // Email Status
  emailSent: Boolean (default: false),
  emailSentAt: Date,
  emailOpen: Boolean (default: false),
  emailOpenedAt: Date,
  
  // Conversion Tracking
  conversions: [{
    _id: ObjectId,
    type: String (enum: ["email_open", "link_click", "purchase"]),
    timestamp: Date
  }]
}
```

**Indexes**:
```javascript
// Primary
db.leads.createIndex({ email: 1 }, { unique: true })
db.leads.createIndex({ submittedAt: -1 })

// Filtering
db.leads.createIndex({ status: 1 })
db.leads.createIndex({ leadType: 1 })
db.leads.createIndex({ sourcePage: 1 })
db.leads.createIndex({ city: 1 })

// Analytics
db.leads.createIndex({ submittedAt: 1, status: 1 })
db.leads.createIndex({ submittedAt: 1, leadType: 1 })

// Search
db.leads.createIndex({ firstName: "text", lastName: "text", email: "text" })
```

**Example Document**:
```json
{
  "_id": ObjectId("507f1f77bcf86cd799439011"),
  "firstName": "Ravi",
  "lastName": "Kumar",
  "email": "ravi.kumar@gmail.com",
  "phone": "9876543210",
  "company": "Tech Solutions",
  "city": "Bangalore",
  "country": "India",
  "leadType": "course_enrollment",
  "status": "new",
  "selectedCourse": "Cybersecurity Essentials",
  "qualification": "Bachelor's",
  "batchPreference": "Batch 3",
  "message": "Interested in learning cybersecurity",
  "sourcePage": "/courses",
  "sourceButton": "Enroll Now",
  "campaign": "summer_2026",
  "ipAddress": "203.0.113.45",
  "userAgent": "Mozilla/5.0...",
  "submittedAt": ISODate("2026-06-10T10:30:00Z"),
  "updatedAt": ISODate("2026-06-10T10:30:00Z"),
  "notes": [],
  "emailSent": true,
  "emailSentAt": ISODate("2026-06-10T10:31:00Z"),
  "conversions": []
}
```

---

### 2. Courses Collection

Stores course information and enrollment details.

**Collection Name**: `courses`

**Schema**:
```javascript
{
  _id: ObjectId,
  
  // Basic Information
  title: String (required, indexed),
  slug: String (required, unique),
  description: String,
  category: String (indexed),
  level: String (enum: ["Foundation", "Professional", "Expert"]),
  
  // Content
  overview: String,
  learningOutcomes: [String],
  modules: Number,
  topics: [String],
  
  // Enrollment
  capacity: Number,
  enrolledCount: Number (default: 0),
  batches: [{
    _id: ObjectId,
    name: String,
    startDate: Date,
    endDate: Date,
    instructors: [String],
    capacity: Number,
    enrolled: Number
  }],
  
  // Pricing
  price: Number,
  currency: String (default: "INR"),
  discount: Number,
  
  // Media
  thumbnail: String,
  featuredImage: String,
  videos: [String],
  
  // Metadata
  rating: Number,
  reviews: Number,
  duration: String,
  badge: String,
  tag: String,
  popular: Boolean (default: false),
  
  // Timestamps
  createdAt: Date,
  updatedAt: Date,
  publishedAt: Date
}
```

---

### 3. Services Collection

Stores service offerings and details.

**Collection Name**: `services`

**Schema**:
```javascript
{
  _id: ObjectId,
  
  // Basic Information
  title: String (required, indexed),
  slug: String (required, unique),
  description: String,
  category: String (indexed),
  
  // Content
  overview: String,
  capabilities: [String],
  servesAudience: [String],
  
  // Details
  tagline: String,
  icon: String,
  featured: Boolean (default: false),
  
  // Metadata
  createdAt: Date,
  updatedAt: Date,
  publishedAt: Date
}
```

---

### 4. Users Collection

Stores team members and admin users.

**Collection Name**: `users`

**Schema**:
```javascript
{
  _id: ObjectId,
  
  // Basic Information
  firstName: String (required),
  lastName: String (required),
  email: String (required, unique, indexed),
  phone: String,
  
  // Authentication
  hashedPassword: String,
  passwordResetToken: String,
  passwordResetExpires: Date,
  
  // Authorization
  role: String (enum: ["admin", "sales", "support", "analyst"], indexed),
  permissions: [String],
  
  // Profile
  avatar: String,
  bio: String,
  department: String,
  
  // Activity
  lastLogin: Date,
  lastActivity: Date,
  
  // Status
  active: Boolean (default: true),
  createdAt: Date,
  updatedAt: Date
}
```

**Indexes**:
```javascript
db.users.createIndex({ email: 1 }, { unique: true })
db.users.createIndex({ role: 1 })
db.users.createIndex({ active: 1 })
```

---

### 5. Email Templates Collection

Stores email templates for automated communications.

**Collection Name**: `emailTemplates`

**Schema**:
```javascript
{
  _id: ObjectId,
  
  // Identification
  templateId: String (required, unique),
  name: String,
  category: String,
  
  // Content
  subject: String,
  htmlBody: String,
  textBody: String,
  
  // Variables
  variables: [String],
  
  // Configuration
  active: Boolean (default: true),
  createdAt: Date,
  updatedAt: Date
}
```

**Example**:
```json
{
  "templateId": "enrollment_confirmation_v1",
  "name": "Course Enrollment Confirmation",
  "subject": "Welcome to {{courseName}} at SASTRAVA!",
  "htmlBody": "<h1>Welcome {{firstName}}!</h1><p>...</p>",
  "variables": ["firstName", "courseName", "batchDate"],
  "active": true
}
```

---

### 6. Analytics Events Collection

Stores user interactions for analytics and tracking.

**Collection Name**: `analyticsEvents`

**Schema**:
```javascript
{
  _id: ObjectId,
  
  // Event Details
  event: String (indexed),
  category: String,
  action: String,
  label: String,
  
  // User Information
  leadId: ObjectId (indexed),
  userAgent: String,
  ipAddress: String,
  
  // Metadata
  metadata: Object,
  
  // Timestamp
  timestamp: Date (indexed, default: now),
  
  // TTL (auto-delete after 90 days)
  createdAt: Date (default: now, expires: 7776000)
}
```

**Indexes**:
```javascript
db.analyticsEvents.createIndex({ timestamp: 1 }, { expireAfterSeconds: 7776000 })
db.analyticsEvents.createIndex({ leadId: 1, timestamp: -1 })
db.analyticsEvents.createIndex({ event: 1, timestamp: -1 })
```

---

### 7. Audit Log Collection

Tracks all admin actions for compliance and debugging.

**Collection Name**: `auditLog`

**Schema**:
```javascript
{
  _id: ObjectId,
  
  // Action Details
  action: String,
  resourceType: String,
  resourceId: ObjectId,
  
  // User Information
  userId: ObjectId,
  userName: String,
  
  // Changes
  changes: {
    before: Object,
    after: Object
  },
  
  // Status
  status: String (enum: ["success", "failure"]),
  errorMessage: String,
  
  // Metadata
  ipAddress: String,
  userAgent: String,
  timestamp: Date (default: now, indexed)
}
```

---

## Indexing Strategy

**Database-level Indexes**:
```javascript
// Performance optimization
db.leads.createIndex({ email: 1 }, { background: true })
db.leads.createIndex({ submittedAt: -1 }, { background: true })
db.leads.createIndex({ status: 1, submittedAt: -1 }, { background: true })

// TTL Index for temporary data
db.sessions.createIndex({ createdAt: 1 }, { expireAfterSeconds: 604800 })
```

---

## Data Retention Policy

| Collection | Retention | Auto-Cleanup |
|-----------|-----------|--------------|
| leads | Forever | No |
| courses | Forever | No |
| analyticsEvents | 90 days | Yes (TTL) |
| auditLog | 1 year | No |
| sessions | 7 days | Yes (TTL) |

---

## Backup Strategy

1. **Daily Backups**: Automated daily backup to cloud storage
2. **Point-in-time Recovery**: 30-day backup retention
3. **Disaster Recovery**: Replicated to secondary region

---

## Migration Guide

### Initial Setup

```javascript
// 1. Create collections
db.createCollection("leads")
db.createCollection("courses")
db.createCollection("services")
db.createCollection("users")
db.createCollection("emailTemplates")
db.createCollection("analyticsEvents")
db.createCollection("auditLog")

// 2. Create indexes
// (See "Indexes" section above)

// 3. Insert default data
db.courses.insertMany([...])
db.services.insertMany([...])
```

---

## Connection Example (Node.js)

```javascript
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  maxPoolSize: 10,
  serverSelectionTimeoutMS: 5000,
});

// Define schemas (as above)
```

---

**Database Admin Contact**: db-admin@sastrava.com
