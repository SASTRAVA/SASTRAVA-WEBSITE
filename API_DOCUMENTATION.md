# SASTRAVA Backend API Documentation

**Version**: 1.0  
**Last Updated**: June 10, 2026

## Overview

This document defines the API endpoints for the SASTRAVA lead management system. The backend is designed to handle lead submissions, track conversions, and provide admin analytics.

## Tech Stack

**Recommended**:
- Node.js + Express.js (or Python + FastAPI)
- MongoDB (or PostgreSQL)
- JWT for authentication
- Redis for rate limiting & caching
- SendGrid for email notifications

## Base URL

```
http://localhost:3001/api
# or
https://api.sastrava.com/api
```

## Authentication

All admin endpoints require JWT token in Authorization header:

```
Authorization: Bearer <token>
```

---

## Core Endpoints

### 1. Lead Management

#### Create Lead (Public)

**POST** `/leads`

Create a new lead from any form on the website.

**Request Body**:
```json
{
  "firstName": "Ravi",
  "lastName": "Kumar",
  "email": "ravi.kumar@gmail.com",
  "phone": "9876543210",
  "company": "Tech Corp",
  "jobTitle": "Manager",
  "city": "Bangalore",
  "country": "India",
  "leadType": "course_enrollment",
  "selectedService": "Cybersecurity Services",
  "selectedCourse": "Cybersecurity Essentials",
  "message": "Interested in the course",
  "qualification": "Bachelor's",
  "batchPreference": "Batch 3",
  "sourcePage": "/courses",
  "sourceButton": "Enroll Now",
  "campaign": "summer_2026",
  "ipAddress": "192.168.1.1",
  "userAgent": "Mozilla/5.0...",
  "referrer": "google.com"
}
```

**Response** (201):
```json
{
  "success": true,
  "leadId": "lead_507f1f77bcf86cd799439011",
  "message": "Lead created successfully",
  "data": {
    "_id": "lead_507f1f77bcf86cd799439011",
    "status": "new",
    "submittedAt": "2026-06-10T10:30:00Z"
  }
}
```

**Error Response** (400):
```json
{
  "success": false,
  "errors": {
    "email": "Invalid email format",
    "phone": "Invalid phone number"
  },
  "message": "Validation failed"
}
```

---

#### Get Lead by ID (Protected)

**GET** `/leads/:leadId`

Retrieve specific lead details.

**Response** (200):
```json
{
  "success": true,
  "data": {
    "_id": "lead_507f1f77bcf86cd799439011",
    "firstName": "Ravi",
    "lastName": "Kumar",
    "email": "ravi.kumar@gmail.com",
    "phone": "9876543210",
    "city": "Bangalore",
    "leadType": "course_enrollment",
    "status": "new",
    "selectedCourse": "Cybersecurity Essentials",
    "sourcePage": "/courses",
    "submittedAt": "2026-06-10T10:30:00Z",
    "updatedAt": "2026-06-10T10:30:00Z",
    "notes": []
  }
}
```

---

#### Update Lead Status (Protected)

**PATCH** `/leads/:leadId`

Update lead status and add notes.

**Request Body**:
```json
{
  "status": "contacted",
  "note": "Sent welcome email",
  "assignedTo": "sales_team_1"
}
```

**Response** (200):
```json
{
  "success": true,
  "message": "Lead updated",
  "data": {
    "_id": "lead_507f1f77bcf86cd799439011",
    "status": "contacted",
    "updatedAt": "2026-06-10T11:00:00Z"
  }
}
```

---

#### Search & Filter Leads (Protected)

**GET** `/leads`

**Query Parameters**:
```
?status=new
?leadType=course_enrollment
?city=Bangalore
?startDate=2026-06-01&endDate=2026-06-30
?searchTerm=ravi
?page=1&limit=50
?sortBy=submittedAt&order=desc
```

**Response** (200):
```json
{
  "success": true,
  "data": [
    {
      "_id": "lead_507f1f77bcf86cd799439011",
      "firstName": "Ravi",
      "lastName": "Kumar",
      "email": "ravi.kumar@gmail.com",
      "leadType": "course_enrollment",
      "status": "new",
      "submittedAt": "2026-06-10T10:30:00Z"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 50,
    "total": 247,
    "pages": 5
  }
}
```

---

#### Bulk Update Leads (Protected)

**PATCH** `/leads/bulk-update`

Update multiple leads at once.

**Request Body**:
```json
{
  "leadIds": ["lead_1", "lead_2", "lead_3"],
  "updates": {
    "status": "contacted",
    "assignedTo": "team_1"
  }
}
```

**Response** (200):
```json
{
  "success": true,
  "message": "Updated 3 leads",
  "count": 3
}
```

---

#### Export Leads to CSV (Protected)

**GET** `/leads/export/csv`

**Query Parameters**:
```
?status=new
?leadType=course_enrollment
?startDate=2026-06-01&endDate=2026-06-30
```

**Response**: CSV file download

---

### 2. Analytics

#### Get Lead Analytics (Protected)

**GET** `/analytics/leads`

**Query Parameters**:
```
?period=month
?startDate=2026-06-01&endDate=2026-06-30
```

**Response** (200):
```json
{
  "success": true,
  "data": {
    "totalLeads": 247,
    "newLeads": 45,
    "contactedLeads": 120,
    "conversionRate": 0.28,
    "byType": {
      "course_enrollment": 95,
      "service_inquiry": 87,
      "contact_inquiry": 45,
      "consultation_request": 20
    },
    "byCity": {
      "Bangalore": 80,
      "Mumbai": 65,
      "Delhi": 52,
      "Pune": 30,
      "Other": 20
    },
    "bySource": {
      "/courses": 95,
      "/services": 87,
      "/contact": 45,
      "Direct": 20
    },
    "dailyTrend": [
      { "date": "2026-06-01", "count": 12 },
      { "date": "2026-06-02", "count": 18 }
    ]
  }
}
```

---

#### Get Conversion Funnel (Protected)

**GET** `/analytics/funnel`

**Response** (200):
```json
{
  "success": true,
  "data": {
    "new": 247,
    "contacted": 180,
    "interested": 95,
    "qualified": 45,
    "enrolled": 28,
    "conversionRates": {
      "newToContacted": 0.73,
      "contactedToInterested": 0.53,
      "interestedToQualified": 0.47,
      "qualifiedToEnrolled": 0.62
    }
  }
}
```

---

### 3. Email Notifications

#### Send Lead Notification (Protected)

**POST** `/leads/:leadId/notify`

Send confirmation or status update email to lead.

**Request Body**:
```json
{
  "notificationType": "confirmation",
  "templateId": "enrollment_confirmation_v1"
}
```

**Response** (200):
```json
{
  "success": true,
  "message": "Email sent to ravi.kumar@gmail.com"
}
```

---

#### Send Admin Notification (Protected)

**POST** `/notifications/admin`

Notify admin of new lead.

**Request Body**:
```json
{
  "leadId": "lead_507f1f77bcf86cd799439011",
  "recipients": ["team@sastrava.com"],
  "template": "new_lead_notification"
}
```

---

### 4. Lead Notes & Activity

#### Add Note to Lead (Protected)

**POST** `/leads/:leadId/notes`

Add internal notes/comments to a lead.

**Request Body**:
```json
{
  "note": "Customer called and expressed interest in batch 3",
  "type": "call"
}
```

---

#### Get Lead Activity (Protected)

**GET** `/leads/:leadId/activity`

Get all activities/timeline for a lead.

**Response** (200):
```json
{
  "success": true,
  "data": [
    {
      "id": "act_1",
      "type": "submission",
      "timestamp": "2026-06-10T10:30:00Z",
      "description": "Lead submitted via course enrollment form"
    },
    {
      "id": "act_2",
      "type": "email_sent",
      "timestamp": "2026-06-10T10:31:00Z",
      "description": "Confirmation email sent"
    },
    {
      "id": "act_3",
      "type": "note_added",
      "timestamp": "2026-06-10T15:00:00Z",
      "description": "Team member note: Customer called..."
    }
  ]
}
```

---

### 5. Admin Dashboard

#### Get Dashboard Summary (Protected)

**GET** `/admin/dashboard`

Get overview data for admin dashboard.

**Response** (200):
```json
{
  "success": true,
  "data": {
    "todayStats": {
      "newLeads": 12,
      "conversions": 3,
      "followUps": 8
    },
    "weekStats": {
      "totalLeads": 78,
      "conversionRate": 0.31
    },
    "topCourses": [
      { "name": "Cybersecurity Essentials", "count": 45 },
      { "name": "Penetration Testing Pro", "count": 32 }
    ],
    "topCities": [
      { "name": "Bangalore", "count": 80 },
      { "name": "Mumbai", "count": 65 }
    ]
  }
}
```

---

## Status Codes

| Code | Meaning |
|------|---------|
| 200 | Success |
| 201 | Created |
| 400 | Bad Request |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |
| 429 | Rate Limited |
| 500 | Server Error |

---

## Error Handling

All error responses follow this format:

```json
{
  "success": false,
  "error": "error_code",
  "message": "Human readable message",
  "details": { }
}
```

---

## Rate Limiting

**Public Endpoints**: 5 requests per minute per IP  
**Authenticated Endpoints**: 60 requests per minute per user

---

## Security

1. **Input Validation**: All inputs validated on backend
2. **SQL Injection Prevention**: Using parameterized queries
3. **XSS Protection**: HTML encoding all user inputs
4. **CORS**: Restricted to SASTRAVA domains
5. **JWT Expiry**: 24 hours
6. **Refresh Tokens**: 30 days

---

## Examples

### Complete Flow: Course Enrollment

1. **User submits enrollment form** (Frontend)
   ```
   POST /leads
   { leadType: "course_enrollment", selectedCourse: "Cybersecurity..." }
   ```

2. **Backend creates lead & sends confirmation email**
   ```
   Response: { leadId: "...", status: "new" }
   ```

3. **Admin views new lead in dashboard**
   ```
   GET /leads?status=new
   ```

4. **Admin contacts lead & updates status**
   ```
   PATCH /leads/{leadId}
   { status: "contacted", note: "Called customer..." }
   ```

5. **Lead converts to enrollment**
   ```
   PATCH /leads/{leadId}
   { status: "enrolled" }
   ```

---

## Integration Notes

- All timestamps in UTC/ISO-8601 format
- Email sending is async (fire-and-forget)
- Leads appear in admin dashboard within 2 seconds of submission
- Analytics data updates every 5 minutes
- Bulk operations limited to 100 items per request

---

**For questions or issues, contact**: dev-team@sastrava.com
