# LMS Platform

A production-style **Learning Management System (LMS)** built with modern full-stack technologies.  
This project demonstrates scalable architecture, secure authentication, role-based access control, and a modern frontend experience.

The system is designed as a **real-world SaaS learning platform** where instructors can publish courses and learners can enroll and track progress.

---

# Tech Stack

## Frontend
- Next.js (App Router)
- TypeScript
- TailwindCSS
- Zustand (state management)
- Axios

## Backend
- Django
- Django REST Framework
- OAuth2 + PKCE Authentication
- Role Based Access Control (RBAC)

## Database
- PostgreSQL (Supabase)

## Infrastructure
- Docker & Docker Compose
- Redis (Caching & Background Jobs)
- Nginx
- Cloudflare CDN

---

# System Architecture


Frontend (Next.js)
↓
API Layer (Django REST Framework)
↓
Business Logic Layer
↓
PostgreSQL Database
↓
Redis Cache / Queue


This architecture ensures:

- scalability
- modular design
- maintainability
- security

---

# Core Features

## Authentication
- OAuth2 Authorization Code Flow
- PKCE security
- HttpOnly cookie tokens
- Secure token rotation

## User Roles (RBAC)

The system implements role-based permissions:

- Super Admin
- Admin
- Trainer
- Learner
- Subject Matter Expert (SME)

Each role has **restricted access to platform features**.

---

# LMS Functionalities

## Course Management

Trainers can:

- create courses
- add modules
- upload lessons
- publish content

---

## Learning System

Learners can:

- browse courses
- enroll in courses
- track lesson progress
- take quizzes
- submit assignments

---

## Admin Dashboard

Admins can:

- manage users
- manage courses
- review analytics

---

## SME Features

Subject Matter Experts can:

- review course quality
- approve or reject courses

---

# Performance Optimizations

- Redis caching
- Query optimization
- Pagination
- Lazy loading
- CDN for static assets

---

# Security

This LMS implements multiple security layers:

- OAuth2 + PKCE authentication
- HttpOnly cookie tokens
- CSRF protection
- XSS protection
- Role-based authorization
- Rate limiting

---

# Project Structure


lms-platform
│
├ backend
│ ├ apps
│ │ ├ users
│ │ ├ courses
│ │ ├ enrollments
│ │ ├ content
│ │ ├ assessments
│ │ ├ notifications
│ │ ├ analytics
│ │ └ authapi
│ │
│ ├ config
│ └ manage.py
│
├ frontend
│ ├ src
│ │ ├ app
│ │ ├ components
│ │ ├ features
│ │ ├ store
│ │ └ lib
│ │
│ └ package.json
│
└ README.md


---

# Running the Project

## Backend Setup


cd backend

python -m venv venv
venv\Scripts\activate

pip install -r requirements.txt

python manage.py migrate
python manage.py runserver


Backend runs on:


http://localhost:8000


---

## Frontend Setup


cd frontend

npm install
npm run dev


Frontend runs on:


http://localhost:3000


---

# Environment Variables

Frontend `.env.local`


NEXT_PUBLIC_API_URL=http://localhost:8000/api

NEXT_PUBLIC_BACKEND_URL=http://localhost:8000

NEXT_PUBLIC_OAUTH_AUTHORIZE_URL=http://localhost:8000/o/authorize/

NEXT_PUBLIC_OAUTH_TOKEN_URL=http://localhost:8000/o/token/

NEXT_PUBLIC_CLIENT_ID=<client_id>
NEXT_PUBLIC_REDIRECT_URI=http://localhost:3000/auth/callback


---

# Future Improvements

Planned improvements include:

- course reviews and ratings
- instructor profiles
- advanced analytics dashboard
- real-time notifications
- AI-powered course recommendations
- video streaming optimization

---

# Author

Built as a **production-style portfolio project** to demonstrate full-stack system design and scalable architecture by INDRA K N.
