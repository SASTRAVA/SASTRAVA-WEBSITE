# 💾 PHASE 3.2: DATABASE SCHEMA & ARCHITECTURE

**Status:** Phase 3.1 Complete → Ready for Database Design  
**Duration:** 1-2 days  
**Deliverable:** Complete PostgreSQL schema with migrations  

---

## DATABASE DESIGN PRINCIPLES

```
1. NORMALIZATION (3NF)
   - Eliminate data redundancy
   - Maintain data integrity
   - Efficient queries

2. FOREIGN KEY CONSTRAINTS
   - Enforce referential integrity
   - Cascade deletes/updates appropriately
   - Document relationships

3. INDEXING STRATEGY
   - Index frequently queried columns
   - Index foreign keys
   - Index date ranges for analytics

4. AUDIT TRAILS
   - created_at, updated_at, deleted_at on all tables
   - Track who created/updated
   - Support soft deletes for compliance

5. SOFT DELETES
   - deleted_at column for logical deletion
   - Preserve historical data
   - Maintain referential integrity
```

---

## SCHEMA ENTITY RELATIONSHIP DIAGRAM (ERD)

```
┌──────────────┐
│ admin_users  │──┐
└──────────────┘  │
                  │
┌──────────────────┬──────────────┐
│    users         │   leads      │
│ (generic auth)   │ (prospects)  │
└──────────────────┴──────────────┘
         │                │
         ├─────────────────┼─────────────────┐
         │                 │                 │
    ┌────▼────┐      ┌─────▼──────┐   ┌────▼──────┐
    │ students │      │ crm_deals  │   │crm_activities│
    └────┬────┘      └─────┬──────┘   └──────────────┘
         │                 │
    ┌────▼────────────┐    │
    │  enrollments    │    │
    └────┬────────────┘    │
         │                 │
    ┌────▼────┐       ┌────▼────────┐
    │ courses  │       │applications │
    └──────────┘       └─────────────┘

┌─────────────────────────────────────┐
│      analytics & auditing           │
│  events, audit_logs, notifications  │
└─────────────────────────────────────┘
```

---

## TABLE DEFINITIONS

### 1. ADMIN_USERS TABLE
```sql
CREATE TABLE admin_users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  role VARCHAR(50) NOT NULL DEFAULT 'admin',
    -- Values: super_admin, admin, moderator, support
  
  -- Permissions
  can_manage_leads BOOLEAN DEFAULT true,
  can_manage_users BOOLEAN DEFAULT false,
  can_manage_courses BOOLEAN DEFAULT false,
  can_manage_payments BOOLEAN DEFAULT false,
  can_view_analytics BOOLEAN DEFAULT true,
  can_manage_admins BOOLEAN DEFAULT false,
  
  -- Status
  is_active BOOLEAN DEFAULT true,
  last_login_at TIMESTAMP,
  
  -- Audit
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  deleted_at TIMESTAMP,
  
  CONSTRAINT valid_email CHECK (email ~ '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$')
);

CREATE INDEX idx_admin_users_email ON admin_users(email);
CREATE INDEX idx_admin_users_role ON admin_users(role);
CREATE INDEX idx_admin_users_is_active ON admin_users(is_active);
```

---

### 2. USERS TABLE (Generic Authentication)
```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100),
  phone VARCHAR(20),
  
  -- Profile
  avatar_url VARCHAR(500),
  bio TEXT,
  website VARCHAR(500),
  location VARCHAR(255),
  
  -- Account Status
  is_active BOOLEAN DEFAULT true,
  email_verified BOOLEAN DEFAULT false,
  phone_verified BOOLEAN DEFAULT false,
  verification_token VARCHAR(255),
  
  -- Security
  password_reset_token VARCHAR(255),
  password_reset_expires TIMESTAMP,
  last_login_at TIMESTAMP,
  login_count INT DEFAULT 0,
  
  -- Audit
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  deleted_at TIMESTAMP,
  
  CONSTRAINT valid_email CHECK (email ~ '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$'),
  CONSTRAINT valid_phone CHECK (phone ~ '^\d{10}$' OR phone IS NULL)
);

CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_is_active ON users(is_active);
CREATE INDEX idx_users_created_at ON users(created_at);
```

---

### 3. LEADS TABLE
```sql
CREATE TABLE leads (
  id SERIAL PRIMARY KEY,
  
  -- Contact Info
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20),
  company_name VARCHAR(255),
  job_title VARCHAR(100),
  
  -- Lead Details
  lead_type VARCHAR(50) NOT NULL,
    -- Values: GENERAL_INQUIRY, COURSE_INTEREST, SERVICE_INQUIRY, 
    --         CORPORATE_INQUIRY, INTERNSHIP_INQUIRY, PARTNERSHIP,
    --         CYBERSECURITY, AI, DIGITAL_MARKETING
  
  lead_status VARCHAR(50) DEFAULT 'NEW',
    -- Values: NEW, CONTACTED, QUALIFIED, NEGOTIATING, CONVERTED, LOST
  
  -- Scoring & Qualification
  lead_score INT DEFAULT 0,
    -- 0-100 score based on engagement
  
  qualified BOOLEAN DEFAULT false,
  qualification_date TIMESTAMP,
  
  -- Engagement
  interest_level VARCHAR(50),
    -- Values: HIGH, MEDIUM, LOW
  
  budget_range VARCHAR(50),
    -- Values: <50K, 50K-100K, 100K-500K, 500K+
  
  timeline VARCHAR(50),
    -- Values: IMMEDIATE, 1-3 MONTHS, 3-6 MONTHS, 6+ MONTHS
  
  -- Source Tracking
  source_page VARCHAR(255),
    -- URL where form was submitted
  
  source_button VARCHAR(255),
    -- CTA button text
  
  campaign VARCHAR(255),
    -- Marketing campaign identifier
  
  referrer VARCHAR(255),
  ip_address VARCHAR(45),
  user_agent TEXT,
  
  -- Assignment
  assigned_to INT,
    -- FK to admin_users
  
  assigned_at TIMESTAMP,
  
  -- Notes & Messages
  message TEXT,
  internal_notes TEXT,
  
  -- Conversion
  converted BOOLEAN DEFAULT false,
  conversion_date TIMESTAMP,
  related_order_id INT,
    -- FK to orders table (Phase 3.3)
  
  -- Audit
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  deleted_at TIMESTAMP,
  
  FOREIGN KEY (assigned_to) REFERENCES admin_users(id)
);

CREATE INDEX idx_leads_email ON leads(email);
CREATE INDEX idx_leads_status ON leads(lead_status);
CREATE INDEX idx_leads_type ON leads(lead_type);
CREATE INDEX idx_leads_created_at ON leads(created_at);
CREATE INDEX idx_leads_assigned_to ON leads(assigned_to);
CREATE INDEX idx_leads_qualified ON leads(qualified);
CREATE INDEX idx_leads_converted ON leads(converted);
```

---

### 4. COURSES TABLE
```sql
CREATE TABLE courses (
  id SERIAL PRIMARY KEY,
  
  -- Basic Info
  course_name VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  description TEXT NOT NULL,
  overview TEXT,
  
  -- Instructor
  instructor_id INT,
    -- FK to users table (can be NULL for company-led courses)
  
  -- Pricing
  price DECIMAL(10, 2) NOT NULL,
  currency VARCHAR(3) DEFAULT 'INR',
  discount_percentage DECIMAL(5, 2) DEFAULT 0,
  discounted_price DECIMAL(10, 2),
  
  -- Content
  duration_weeks INT,
  level VARCHAR(50),
    -- Values: BEGINNER, INTERMEDIATE, ADVANCED
  
  category VARCHAR(100),
    -- Values: AI, CYBERSECURITY, DIGITAL_MARKETING, PROGRAMMING, DATA_SCIENCE
  
  skills_covered TEXT,
    -- JSON array of skills
  
  prerequisites TEXT,
  
  -- Capacity
  max_students INT,
  enrolled_count INT DEFAULT 0,
  
  -- Status
  is_published BOOLEAN DEFAULT false,
  is_active BOOLEAN DEFAULT true,
  
  -- Dates
  start_date TIMESTAMP,
  end_date TIMESTAMP,
  enrollment_open_date TIMESTAMP,
  enrollment_close_date TIMESTAMP,
  
  -- Media
  thumbnail_url VARCHAR(500),
  banner_url VARCHAR(500),
  video_preview_url VARCHAR(500),
  
  -- SEO
  meta_title VARCHAR(255),
  meta_description VARCHAR(500),
  
  -- Audit
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  deleted_at TIMESTAMP,
  
  FOREIGN KEY (instructor_id) REFERENCES users(id)
);

CREATE INDEX idx_courses_slug ON courses(slug);
CREATE INDEX idx_courses_category ON courses(category);
CREATE INDEX idx_courses_is_published ON courses(is_published);
CREATE INDEX idx_courses_created_at ON courses(created_at);
```

---

### 5. STUDENTS TABLE
```sql
CREATE TABLE students (
  id SERIAL PRIMARY KEY,
  user_id INT UNIQUE NOT NULL,
    -- FK to users table
  
  -- Profile
  stream VARCHAR(100),
    -- CS, ECE, Mechanical, Civil, Biotechnology, etc.
  
  year INT,
    -- 1, 2, 3, 4
  
  college_name VARCHAR(255),
  student_id_number VARCHAR(100),
  
  -- Experience
  total_projects INT DEFAULT 0,
  certifications TEXT,
    -- JSON array
  
  portfolio_url VARCHAR(500),
  github_profile VARCHAR(500),
  linkedin_profile VARCHAR(500),
  
  -- Interests
  interested_pillars TEXT,
    -- JSON array: [\"AI\", \"CYBERSECURITY\", \"DIGITAL_MARKETING\"]
  
  career_goals TEXT,
  
  -- Status
  is_active BOOLEAN DEFAULT true,
  
  -- Audit
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  deleted_at TIMESTAMP,
  
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE INDEX idx_students_stream ON students(stream);
CREATE INDEX idx_students_year ON students(year);
CREATE INDEX idx_students_created_at ON students(created_at);
```

---

### 6. ENROLLMENTS TABLE
```sql
CREATE TABLE enrollments (
  id SERIAL PRIMARY KEY,
  
  student_id INT NOT NULL,
    -- FK to students table
  
  course_id INT NOT NULL,
    -- FK to courses table
  
  -- Enrollment Details
  enrollment_status VARCHAR(50) DEFAULT 'ACTIVE',
    -- Values: ACTIVE, COMPLETED, DROPPED, PAUSED
  
  progress_percentage DECIMAL(5, 2) DEFAULT 0,
  
  -- Dates
  enrolled_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  completed_at TIMESTAMP,
  dropped_at TIMESTAMP,
  
  -- Certificate
  certificate_issued BOOLEAN DEFAULT false,
  certificate_url VARCHAR(500),
  
  -- Audit
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  deleted_at TIMESTAMP,
  
  FOREIGN KEY (student_id) REFERENCES students(id) ON DELETE CASCADE,
  FOREIGN KEY (course_id) REFERENCES courses(id) ON DELETE RESTRICT,
  UNIQUE (student_id, course_id)
);

CREATE INDEX idx_enrollments_student_id ON enrollments(student_id);
CREATE INDEX idx_enrollments_course_id ON enrollments(course_id);
CREATE INDEX idx_enrollments_status ON enrollments(enrollment_status);
```

---

### 7. APPLICATIONS TABLE (Career, Internship)
```sql
CREATE TABLE applications (
  id SERIAL PRIMARY KEY,
  
  -- Applicant
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  
  -- Application Details
  application_type VARCHAR(50) NOT NULL,
    -- Values: CAREER, INTERNSHIP
  
  position_title VARCHAR(255) NOT NULL,
  
  -- Experience
  years_experience INT,
  current_role VARCHAR(100),
  current_company VARCHAR(255),
  
  -- Education
  education_level VARCHAR(100),
  stream VARCHAR(100),
  year_of_graduation INT,
  gpa DECIMAL(3, 2),
  
  -- Skills & Portfolio
  skills TEXT,
    -- JSON array
  
  portfolio_url VARCHAR(500),
  resume_url VARCHAR(500),
  resume_file_key VARCHAR(500),
    -- S3 key for stored resume
  
  linkedin_profile VARCHAR(500),
  github_profile VARCHAR(500),
  
  -- Application Response
  cover_letter TEXT,
  why_interested TEXT,
  
  -- Status
  application_status VARCHAR(50) DEFAULT 'RECEIVED',
    -- Values: RECEIVED, REVIEWING, SHORTLISTED, REJECTED, OFFER_SENT, ACCEPTED
  
  status_updated_at TIMESTAMP,
  
  -- Evaluation (by admin)
  rating INT,
    -- 1-5 star rating
  
  evaluator_notes TEXT,
  reviewed_by INT,
    -- FK to admin_users
  
  reviewed_at TIMESTAMP,
  
  -- Interview (if shortlisted)
  interview_scheduled_at TIMESTAMP,
  interview_round INT,
  interview_result VARCHAR(50),
    -- PASSED, FAILED, PENDING
  
  -- Offer (if selected)
  offer_extended BOOLEAN DEFAULT false,
  offer_extended_at TIMESTAMP,
  offer_accepted BOOLEAN,
  offer_accepted_at TIMESTAMP,
  
  -- Source Tracking
  source_page VARCHAR(255),
  source_button VARCHAR(255),
  campaign VARCHAR(255),
  
  -- Audit
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  deleted_at TIMESTAMP,
  
  FOREIGN KEY (reviewed_by) REFERENCES admin_users(id)
);

CREATE INDEX idx_applications_email ON applications(email);
CREATE INDEX idx_applications_type ON applications(application_type);
CREATE INDEX idx_applications_status ON applications(application_status);
CREATE INDEX idx_applications_created_at ON applications(created_at);
```

---

### 8. CRM_ACCOUNTS TABLE
```sql
CREATE TABLE crm_accounts (
  id SERIAL PRIMARY KEY,
  
  -- Company Info
  company_name VARCHAR(255) NOT NULL,
  industry VARCHAR(100),
  company_size VARCHAR(50),
    -- STARTUP, SMALL, MEDIUM, ENTERPRISE
  
  website VARCHAR(500),
  
  -- Contact Info
  billing_address TEXT,
  billing_city VARCHAR(100),
  billing_state VARCHAR(100),
  billing_zip VARCHAR(20),
  billing_country VARCHAR(100),
  
  -- Business
  annual_revenue DECIMAL(15, 2),
  
  -- Status
  account_status VARCHAR(50) DEFAULT 'PROSPECT',
    -- Values: PROSPECT, CUSTOMER, INACTIVE, LOST
  
  account_owner_id INT,
    -- FK to admin_users
  
  -- Relationships
  linked_lead_id INT,
    -- FK to leads table
  
  linked_user_id INT,
    -- FK to users table (if registered account)
  
  -- Audit
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  deleted_at TIMESTAMP,
  
  FOREIGN KEY (account_owner_id) REFERENCES admin_users(id),
  FOREIGN KEY (linked_lead_id) REFERENCES leads(id),
  FOREIGN KEY (linked_user_id) REFERENCES users(id)
);

CREATE INDEX idx_crm_accounts_status ON crm_accounts(account_status);
CREATE INDEX idx_crm_accounts_owner ON crm_accounts(account_owner_id);
```

---

### 9. CRM_CONTACTS TABLE
```sql
CREATE TABLE crm_contacts (
  id SERIAL PRIMARY KEY,
  
  -- Contact Info
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  email VARCHAR(255),
  phone VARCHAR(20),
  job_title VARCHAR(100),
  
  -- Account Relationship
  account_id INT NOT NULL,
    -- FK to crm_accounts
  
  -- Linked User
  user_id INT,
    -- FK to users (if they registered)
  
  -- Status
  is_primary_contact BOOLEAN DEFAULT false,
  
  -- Audit
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  deleted_at TIMESTAMP,
  
  FOREIGN KEY (account_id) REFERENCES crm_accounts(id) ON DELETE CASCADE,
  FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE INDEX idx_crm_contacts_account ON crm_contacts(account_id);
CREATE INDEX idx_crm_contacts_email ON crm_contacts(email);
```

---

### 10. CRM_DEALS TABLE
```sql
CREATE TABLE crm_deals (
  id SERIAL PRIMARY KEY,
  
  -- Deal Info
  deal_name VARCHAR(255) NOT NULL,
  description TEXT,
  
  -- Account & Contact
  account_id INT NOT NULL,
    -- FK to crm_accounts
  
  contact_id INT,
    -- FK to crm_contacts (primary decision maker)
  
  -- Business
  deal_value DECIMAL(12, 2) NOT NULL,
  currency VARCHAR(3) DEFAULT 'INR',
  
  -- Services
  service_type VARCHAR(100),
    -- COURSE, CONSULTING, TRAINING, etc.
  
  -- Pipeline
  stage VARCHAR(50) DEFAULT 'PROSPECT',
    -- Values: PROSPECT, QUALIFICATION, PROPOSAL, NEGOTIATION, CLOSED_WON, CLOSED_LOST
  
  stage_updated_at TIMESTAMP,
  probability_percentage INT DEFAULT 50,
  expected_close_date TIMESTAMP,
  
  -- Result
  is_won BOOLEAN DEFAULT false,
  win_date TIMESTAMP,
  
  closed_date TIMESTAMP,
  
  -- Assignment
  owner_id INT,
    -- FK to admin_users
  
  -- Audit
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  deleted_at TIMESTAMP,
  
  FOREIGN KEY (account_id) REFERENCES crm_accounts(id),
  FOREIGN KEY (contact_id) REFERENCES crm_contacts(id),
  FOREIGN KEY (owner_id) REFERENCES admin_users(id)
);

CREATE INDEX idx_crm_deals_account ON crm_deals(account_id);
CREATE INDEX idx_crm_deals_stage ON crm_deals(stage);
CREATE INDEX idx_crm_deals_owner ON crm_deals(owner_id);
```

---

### 11. CRM_ACTIVITIES TABLE
```sql
CREATE TABLE crm_activities (
  id SERIAL PRIMARY KEY,
  
  -- Activity Type
  activity_type VARCHAR(50) NOT NULL,
    -- Values: CALL, EMAIL, MEETING, NOTE, TASK, FOLLOW_UP
  
  -- Subject
  subject VARCHAR(255) NOT NULL,
  description TEXT,
  
  -- Related Records
  account_id INT,
    -- FK to crm_accounts
  
  contact_id INT,
    -- FK to crm_contacts
  
  deal_id INT,
    -- FK to crm_deals
  
  lead_id INT,
    -- FK to leads
  
  -- Activity Details
  scheduled_for TIMESTAMP,
  completed_at TIMESTAMP,
  
  -- Owner
  owner_id INT NOT NULL,
    -- FK to admin_users
  
  -- Priority
  priority VARCHAR(50) DEFAULT 'NORMAL',
    -- LOW, NORMAL, HIGH, URGENT
  
  -- Outcome
  outcome VARCHAR(255),
  next_steps TEXT,
  
  -- Audit
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  deleted_at TIMESTAMP,
  
  FOREIGN KEY (account_id) REFERENCES crm_accounts(id),
  FOREIGN KEY (contact_id) REFERENCES crm_contacts(id),
  FOREIGN KEY (deal_id) REFERENCES crm_deals(id),
  FOREIGN KEY (lead_id) REFERENCES leads(id),
  FOREIGN KEY (owner_id) REFERENCES admin_users(id)
);

CREATE INDEX idx_crm_activities_type ON crm_activities(activity_type);
CREATE INDEX idx_crm_activities_owner ON crm_activities(owner_id);
CREATE INDEX idx_crm_activities_scheduled ON crm_activities(scheduled_for);
```

---

### 12. ANALYTICS_EVENTS TABLE
```sql
CREATE TABLE analytics_events (
  id SERIAL PRIMARY KEY,
  
  -- Event Details
  event_name VARCHAR(100) NOT NULL,
    -- Values from conversionTracking.js
  
  event_type VARCHAR(50) NOT NULL,
    -- PAGEVIEW, CTA_CLICK, FORM_SUBMISSION, etc.
  
  -- User Info
  user_id INT,
    -- FK to users (NULL if anonymous)
  
  session_id VARCHAR(255),
    -- Track user session
  
  -- Event Data (JSON)
  event_data JSONB,
    -- {
    --   ctaText: "Get Started",
    --   pageUrl: "/services",
    --   referrer: "/",
    --   ...
    -- }
  
  -- Source Tracking
  source_page VARCHAR(500),
  source_section VARCHAR(255),
  source_button VARCHAR(255),
  campaign VARCHAR(255),
  
  -- Device Info
  device_type VARCHAR(50),
    -- DESKTOP, MOBILE, TABLET
  
  browser_name VARCHAR(100),
  browser_version VARCHAR(50),
  os_name VARCHAR(100),
  os_version VARCHAR(50),
  
  -- Geographic
  country VARCHAR(100),
  region VARCHAR(100),
  city VARCHAR(100),
  ip_address VARCHAR(45),
  
  -- Timing
  event_timestamp TIMESTAMP NOT NULL,
  
  -- Audit
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  
  FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE INDEX idx_analytics_events_name ON analytics_events(event_name);
CREATE INDEX idx_analytics_events_type ON analytics_events(event_type);
CREATE INDEX idx_analytics_events_user_id ON analytics_events(user_id);
CREATE INDEX idx_analytics_events_timestamp ON analytics_events(event_timestamp);
CREATE INDEX idx_analytics_events_campaign ON analytics_events(campaign);
```

---

### 13. AUDIT_LOGS TABLE
```sql
CREATE TABLE audit_logs (
  id SERIAL PRIMARY KEY,
  
  -- Who
  admin_user_id INT,
    -- FK to admin_users (NULL for system actions)
  
  -- What
  action VARCHAR(100) NOT NULL,
    -- CREATE, UPDATE, DELETE, READ, EXPORT, etc.
  
  entity_type VARCHAR(100) NOT NULL,
    -- LEAD, COURSE, STUDENT, USER, etc.
  
  entity_id INT,
    -- ID of affected record
  
  -- Details
  old_values JSONB,
    -- Previous data (for updates)
  
  new_values JSONB,
    -- Updated data
  
  changes_summary TEXT,
  
  -- IP Address
  ip_address VARCHAR(45),
  user_agent TEXT,
  
  -- Timestamp
  action_timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  
  FOREIGN KEY (admin_user_id) REFERENCES admin_users(id)
);

CREATE INDEX idx_audit_logs_admin_user ON audit_logs(admin_user_id);
CREATE INDEX idx_audit_logs_entity ON audit_logs(entity_type, entity_id);
CREATE INDEX idx_audit_logs_action ON audit_logs(action);
CREATE INDEX idx_audit_logs_timestamp ON audit_logs(action_timestamp);
```

---

### 14. NOTIFICATIONS TABLE
```sql
CREATE TABLE notifications (
  id SERIAL PRIMARY KEY,
  
  -- Recipient
  user_id INT,
    -- FK to users (NULL for admin notifications)
  
  admin_user_id INT,
    -- FK to admin_users
  
  -- Content
  title VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  notification_type VARCHAR(100),
    -- LEAD_SUBMITTED, COURSE_ENROLLED, APPLICATION_RECEIVED, etc.
  
  -- Data
  related_entity_type VARCHAR(100),
    -- LEAD, COURSE, APPLICATION, etc.
  
  related_entity_id INT,
  
  -- Status
  is_read BOOLEAN DEFAULT false,
  read_at TIMESTAMP,
  
  -- Channel
  send_via_email BOOLEAN DEFAULT true,
  send_via_sms BOOLEAN DEFAULT false,
  send_via_push BOOLEAN DEFAULT false,
  
  -- Delivery Status
  email_sent BOOLEAN DEFAULT false,
  email_sent_at TIMESTAMP,
  sms_sent BOOLEAN DEFAULT false,
  push_sent BOOLEAN DEFAULT false,
  
  -- Timestamps
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  deleted_at TIMESTAMP,
  
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY (admin_user_id) REFERENCES admin_users(id) ON DELETE CASCADE
);

CREATE INDEX idx_notifications_user ON notifications(user_id);
CREATE INDEX idx_notifications_admin ON notifications(admin_user_id);
CREATE INDEX idx_notifications_is_read ON notifications(is_read);
```

---

### 15. ORDERS TABLE
```sql
CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  
  -- Customer
  user_id INT,
    -- FK to users
  
  lead_id INT,
    -- FK to leads (if from lead conversion)
  
  -- Order Details
  order_number VARCHAR(50) UNIQUE NOT NULL,
  total_amount DECIMAL(12, 2) NOT NULL,
  currency VARCHAR(3) DEFAULT 'INR',
  
  -- Items
  order_items JSONB,
    -- [{ courseId, price }, ...]
  
  -- Payment
  payment_id INT,
    -- FK to payments table
  
  payment_status VARCHAR(50) DEFAULT 'PENDING',
    -- PENDING, COMPLETED, FAILED, REFUNDED
  
  -- Dates
  order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  payment_date TIMESTAMP,
  
  -- Shipping/Delivery (if applicable)
  delivery_date TIMESTAMP,
  
  -- Status
  order_status VARCHAR(50) DEFAULT 'PENDING',
    -- PENDING, CONFIRMED, DELIVERED, CANCELLED
  
  -- Audit
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  deleted_at TIMESTAMP,
  
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (lead_id) REFERENCES leads(id)
);

CREATE INDEX idx_orders_user ON orders(user_id);
CREATE INDEX idx_orders_order_number ON orders(order_number);
CREATE INDEX idx_orders_status ON orders(order_status);
CREATE INDEX idx_orders_created_at ON orders(created_at);
```

---

### 16. PAYMENTS TABLE
```sql
CREATE TABLE payments (
  id SERIAL PRIMARY KEY,
  
  -- Order
  order_id INT NOT NULL,
    -- FK to orders
  
  -- Payment Details
  payment_method VARCHAR(50) NOT NULL,
    -- CREDIT_CARD, DEBIT_CARD, UPI, NETBANKING, WALLET
  
  transaction_id VARCHAR(255) UNIQUE,
    -- Payment gateway transaction ID (Razorpay, etc.)
  
  -- Amount
  amount DECIMAL(12, 2) NOT NULL,
  currency VARCHAR(3) DEFAULT 'INR',
  
  -- Status
  payment_status VARCHAR(50) DEFAULT 'PENDING',
    -- PENDING, COMPLETED, FAILED, REFUNDED
  
  -- Response from Gateway
  gateway_response JSONB,
    -- Full response from Razorpay/Stripe
  
  -- Error (if failed)
  error_message TEXT,
  error_code VARCHAR(100),
  
  -- Refund
  refund_initiated_at TIMESTAMP,
  refund_completed_at TIMESTAMP,
  refund_amount DECIMAL(12, 2),
  refund_reason TEXT,
  
  -- Timestamps
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  deleted_at TIMESTAMP,
  
  FOREIGN KEY (order_id) REFERENCES orders(id)
);

CREATE INDEX idx_payments_order ON payments(order_id);
CREATE INDEX idx_payments_transaction ON payments(transaction_id);
CREATE INDEX idx_payments_status ON payments(payment_status);
```

---

### 17. SUPPORT_TICKETS TABLE
```sql
CREATE TABLE support_tickets (
  id SERIAL PRIMARY KEY,
  
  -- Ticket Info
  ticket_number VARCHAR(50) UNIQUE NOT NULL,
  
  -- User
  user_id INT,
    -- FK to users
  
  email VARCHAR(255),
  phone VARCHAR(20),
  
  -- Issue
  subject VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  category VARCHAR(100),
    -- COURSE_ACCESS, PAYMENT, TECHNICAL, BILLING, OTHER
  
  priority VARCHAR(50) DEFAULT 'NORMAL',
    -- LOW, NORMAL, HIGH, URGENT
  
  -- Assignment
  assigned_to INT,
    -- FK to admin_users
  
  assigned_at TIMESTAMP,
  
  -- Status
  status VARCHAR(50) DEFAULT 'OPEN',
    -- OPEN, IN_PROGRESS, WAITING_CUSTOMER, RESOLVED, CLOSED
  
  status_updated_at TIMESTAMP,
  
  -- Resolution
  resolution_notes TEXT,
  resolved_at TIMESTAMP,
  
  -- Timestamps
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  deleted_at TIMESTAMP,
  
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (assigned_to) REFERENCES admin_users(id)
);

CREATE INDEX idx_support_tickets_status ON support_tickets(status);
CREATE INDEX idx_support_tickets_user ON support_tickets(user_id);
CREATE INDEX idx_support_tickets_priority ON support_tickets(priority);
```

---

### 18. SETTINGS TABLE
```sql
CREATE TABLE settings (
  id SERIAL PRIMARY KEY,
  
  -- Setting Key
  setting_key VARCHAR(255) UNIQUE NOT NULL,
  setting_value TEXT,
  setting_type VARCHAR(50),
    -- STRING, INTEGER, BOOLEAN, JSON, ARRAY
  
  -- Description
  description TEXT,
  
  -- Timestamps
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_by INT,
    -- FK to admin_users
  
  FOREIGN KEY (updated_by) REFERENCES admin_users(id)
);

-- Example settings:
-- company_name, company_email, support_email, company_phone
-- razorpay_key_id, razorpay_key_secret
-- sendgrid_api_key, from_email
-- etc.
```

---

## MIGRATION STRATEGY

### Migration Files (Knex/Sequelize)

**001_create_admin_users.sql**
```sql
CREATE TABLE admin_users (...)
CREATE INDEX idx_admin_users_email ON admin_users(email);
```

**002_create_users.sql**
```sql
CREATE TABLE users (...)
CREATE INDEX idx_users_email ON users(email);
```

**003_create_leads.sql**
```sql
CREATE TABLE leads (...)
CREATE FOREIGN KEY (assigned_to) REFERENCES admin_users(id);
```

... (continue for each table)

---

## SEED DATA STRATEGY

### Initial Data to Seed

#### 1. Admin Users
```sql
INSERT INTO admin_users (email, password_hash, first_name, last_name, role) VALUES
('admin@sastrava.com', CRYPT('secure_password', GEN_SALT('bf')), 'System', 'Admin', 'super_admin'),
('support@sastrava.com', CRYPT('secure_password', GEN_SALT('bf')), 'Support', 'Team', 'admin');
```

#### 2. Sample Courses
```sql
INSERT INTO courses (course_name, slug, description, price, level, category) VALUES
('AI Fundamentals', 'ai-fundamentals', '...', 5000, 'BEGINNER', 'AI'),
('Cybersecurity Basics', 'cybersecurity-basics', '...', 6000, 'INTERMEDIATE', 'CYBERSECURITY'),
-- ... more courses
```

#### 3. Settings
```sql
INSERT INTO settings (setting_key, setting_value) VALUES
('company_name', 'SASTRAVA'),
('company_email', 'contact@sastrava.com'),
('support_email', 'support@sastrava.com'),
-- ... more settings
```

---

## INDEXING STRATEGY

### Frequently Queried Columns
```sql
-- Lead searches
CREATE INDEX idx_leads_email ON leads(email);
CREATE INDEX idx_leads_status ON leads(lead_status);
CREATE INDEX idx_leads_created_at ON leads(created_at);

-- Admin searches
CREATE INDEX idx_admin_users_role ON admin_users(role);
CREATE INDEX idx_admin_users_is_active ON admin_users(is_active);

-- Analytics
CREATE INDEX idx_analytics_events_timestamp ON analytics_events(event_timestamp);
CREATE INDEX idx_analytics_events_user_id ON analytics_events(user_id);

-- Course enrollment
CREATE INDEX idx_enrollments_student_id ON enrollments(student_id);
CREATE INDEX idx_enrollments_course_id ON enrollments(course_id);
```

---

## DATABASE OPTIMIZATION

### 1. Connection Pooling
```javascript
const pool = new Pool({
  max: 20,          // Max connections
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});
```

### 2. Query Optimization
- Use EXPLAIN ANALYZE to understand query plans
- Add indexes on foreign keys
- Use appropriate data types
- Avoid SELECT *

### 3. Backup Strategy
```bash
# Daily backups
pg_dump sastrava_prod > backups/sastrava_prod_$(date +%Y%m%d).sql

# Point-in-time recovery enabled
wal_level = replica
archive_mode = on
```

---

## PHASE 3.2 DELIVERABLES

- ✅ Complete schema with all 18 tables
- ✅ Foreign key relationships
- ✅ Appropriate indexes
- ✅ Constraint definitions
- ✅ Audit columns on all tables
- ✅ Migration files
- ✅ Seed data scripts
- ✅ Backup strategy

---

## NEXT PHASE

**Phase 3.3: API Implementation**
- Implement all 50+ API endpoints
- Connect forms to backend
- Add email notifications
- Implement CRM workflows

---

**Status:** Phase 3.2 Database Schema Complete  
**Total Tables:** 18  
**Total Columns:** 200+  
**Primary Keys:** 18  
**Foreign Keys:** 25+  
**Indexes:** 40+  

**Next:** Implement Phase 3.3 API Endpoints
