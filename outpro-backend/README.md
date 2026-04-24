# Outpro.India — Backend API

Node.js + Express + MongoDB (Mongoose) backend for the Outpro.India React Vite project.

---

## 📁 Project Structure

```
outpro-backend/
├── config/
│   └── db.js                 # MongoDB connection
├── controllers/
│   ├── authController.js     # Admin login, me, change-password
│   ├── enquiryController.js  # Contact/plan-event form + CRM
│   ├── eventController.js    # Portfolio / events
│   ├── testimonialController.js
│   └── serviceController.js  # Services + Stats
├── middleware/
│   ├── auth.js               # JWT protect middleware
│   └── errorHandler.js       # Global error handler
├── models/
│   ├── Admin.js              # Admin user (bcrypt hashed)
│   ├── Enquiry.js            # Event enquiry / contact form
│   ├── Event.js              # Portfolio events
│   ├── Testimonial.js
│   ├── Service.js
│   └── Stats.js              # Homepage counters
├── routes/
│   ├── auth.js
│   ├── enquiries.js
│   ├── events.js
│   ├── testimonials.js
│   ├── services.js
│   └── stats.js
├── utils/
│   ├── email.js              # Nodemailer (confirmation + admin alert)
│   ├── seed.js               # DB seed script
│   └── api.frontend.js       # Drop into your React Vite src/services/
├── server.js                 # App entry point
├── .env.example
└── package.json
```

---

## 🚀 Quick Start

### 1. Install dependencies
```bash
cd outpro-backend
npm install
```

### 2. Set up environment variables
```bash
cp .env.example .env
# Edit .env with your MongoDB URI, JWT secret, and email credentials
```

### 3. Seed the database
```bash
npm run seed
# Creates admin, services, testimonials, sample events, stats
```

### 4. Start the server
```bash
# Development (with nodemon)
npm run dev

# Production
npm start
```

Server runs on `http://localhost:5000`

---

## 🌐 API Reference

### Public Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/enquiries` | Submit event enquiry (contact form) |
| GET | `/api/events` | Get published events/portfolio |
| GET | `/api/events/:slug` | Get single event by slug |
| GET | `/api/testimonials` | Get testimonials |
| GET | `/api/services` | Get all services |
| GET | `/api/stats` | Get homepage stats |
| GET | `/api/health` | Health check |

### Protected Endpoints (Admin — Bearer Token)

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/login` | Admin login → returns JWT |
| GET | `/api/auth/me` | Get logged-in admin info |
| PUT | `/api/auth/change-password` | Change admin password |
| GET | `/api/enquiries` | List all enquiries (filterable) |
| GET | `/api/enquiries/stats/summary` | Enquiry CRM stats |
| GET | `/api/enquiries/:id` | Get single enquiry |
| PUT | `/api/enquiries/:id` | Update status / add notes |
| DELETE | `/api/enquiries/:id` | Delete enquiry |
| POST | `/api/events` | Create portfolio event |
| PUT | `/api/events/:id` | Update event |
| DELETE | `/api/events/:id` | Delete event |
| POST | `/api/testimonials` | Add testimonial |
| PUT | `/api/testimonials/:id` | Update testimonial |
| DELETE | `/api/testimonials/:id` | Delete testimonial |
| PUT | `/api/services/:key` | Update a service |
| PUT | `/api/stats` | Update homepage counters |

---

## 📬 Enquiry Form Fields (POST /api/enquiries)

```json
{
  "name": "Rajat Sharma",
  "email": "rajat@example.com",
  "phone": "9876543210",
  "organization": "TechCorp",
  "eventType": "corporate_league",
  "sport": "Football",
  "expectedParticipants": "50-100",
  "eventDate": "2026-06-15",
  "eventLocation": "Jaipur",
  "budget": "5000-15000",
  "servicesNeeded": ["event_management", "logistics"],
  "message": "Looking for a full-day corporate sports league."
}
```

---

## 🔗 Connect to React Vite Frontend

1. Copy `utils/api.frontend.js` → `src/services/api.js` in your Vite project
2. Add to your Vite `.env`:
```
VITE_API_URL=http://localhost:5000/api
```
3. Use in your components:
```jsx
import { enquiryAPI, eventsAPI, testimonialsAPI, statsAPI } from './services/api'

// Submit the Plan Your Event form
const handleSubmit = async (formData) => {
  const res = await enquiryAPI.submit(formData)
  alert(res.message)
}

// Fetch portfolio events
const events = await eventsAPI.getAll({ featured: true })

// Fetch homepage stats
const { data } = await statsAPI.get()
```

---

## 🛡️ Security Features

- **Helmet** — sets security HTTP headers
- **CORS** — locked to your frontend URL
- **Rate limiting** — 100 req/15min globally, 5 enquiries/hour
- **JWT auth** — all admin routes protected
- **bcrypt** — passwords hashed with salt rounds 12
- **Mongoose validation** — schema-level data validation

---

## 🗄️ MongoDB Models

| Model | Purpose |
|-------|---------|
| Admin | Admin login credentials |
| Enquiry | Contact/plan-event form submissions + CRM status tracking |
| Event | Portfolio events shown on the website |
| Testimonial | Client testimonials |
| Service | The 6 service offerings with descriptions & pricing |
| Stats | Homepage counters (events, athletes, etc.) |
