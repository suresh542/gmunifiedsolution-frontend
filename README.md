# GM HR Solutions — Full Stack Website

A pixel-perfect multi-page HR solutions website built with **React + Vite + Tailwind CSS v4** frontend and a **Node.js + Express** backend for contact form email delivery.

---

## 📁 Project Structure

```
GM-hr/
├── src/                        # Frontend React source
│   ├── components/
│   │   ├── Header.jsx          # Sticky navbar with mobile menu & dropdown
│   │   ├── Footer.jsx          # Full footer with links & social icons
│   │   └── AnimatedSection.jsx # Scroll-triggered fade-up animation wrapper
│   ├── hooks/
│   │   └── useScrollAnimation.js # IntersectionObserver animation hook
│   ├── pages/
│   │   ├── Home.jsx            # Full homepage (hero, services, case studies, etc.)
│   │   ├── Solutions.jsx       # Solutions page
│   │   ├── About.jsx           # About Us page with team section
│   │   ├── FAQs.jsx            # FAQ accordion + quote form
│   │   └── Contact.jsx         # Contact form with backend integration
│   ├── App.jsx                 # Router setup
│   ├── main.jsx                # Entry point
│   └── index.css               # Tailwind CSS v4 import + global styles
│
├── backend/                    # Node.js Express server
│   ├── server.js               # Express server setup with CORS & middleware
│   ├── route.js                # API routes (POST /api/contact, GET /api/health)
│   ├── .env                    # Environment variables (edit this!)
│   ├── .gitignore              # Excludes node_modules, .env
│   └── package.json            # Backend dependencies
│
├── .env                        # Frontend env (VITE_API_URL)
├── .gitignore                  # Frontend gitignore
├── vite.config.js              # Vite + Tailwind v4 plugin config
└── package.json                # Frontend dependencies
```

---

## 🚀 Quick Start

### 1. Frontend Setup

```bash
# From the GM-hr/ root directory
npm install
npm run dev
# Opens at http://localhost:5173
```

### 2. Backend Setup

```bash
cd backend
npm install

# Edit .env with your Gmail credentials (see below)
nano .env

# Start the server
npm start
# Or for development with auto-reload:
npm run dev
```

---

## 📧 Email Configuration (Gmail SMTP)

Edit `backend/.env`:

```env
PORT=5000
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=your_gmail@gmail.com
EMAIL_PASS=your_app_password_here    # NOT your Google account password!
EMAIL_TO=where_to_send@gmail.com
FRONTEND_URL=http://localhost:5173
```

### How to get a Gmail App Password:
1. Go to [myaccount.google.com](https://myaccount.google.com)
2. Security → 2-Step Verification → **App Passwords**
3. Select app: **Mail**, Select device: **Other** → name it "GM"
4. Copy the 16-character password → paste into `EMAIL_PASS`

---

## 🌐 Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Full landing page with hero, services, case studies, testimonial |
| About | `/about` | Company story, values, team members |
| Solutions | `/solutions` | All HR service offerings |
| FAQs | `/faqs` | Accordion FAQ + quote form |
| Contact | `/contact` | Contact form → sends email via backend |

---

## ✨ Features

- **Scroll animations** — Each section fades up smoothly once on scroll (resets on page refresh)
- **Mobile responsive** — Works on all screen sizes, hamburger menu on mobile
- **Sticky header** — Adds shadow on scroll
- **Useful Pages dropdown** — Desktop nav dropdown
- **React Router** — Client-side navigation between pages
- **Contact form** — Sends email to owner + auto-reply to visitor
- **Form validation** — Both frontend (HTML5) and backend (Node.js)
- **Error handling** — Shows clear error/success states

---

## 🏗️ Production Deployment

### Frontend (Vercel / Netlify)
```bash
npm run build
# Deploy the dist/ folder
# Set VITE_API_URL=https://your-backend-url.com in environment variables
```

### Backend (Railway / Render / VPS)
```bash
cd backend
npm install --production
npm start
# Set all .env variables in your hosting provider's dashboard
```

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 18, Vite, Tailwind CSS v4 |
| Routing | React Router DOM v6 |
| Icons | Lucide React |
| Backend | Node.js, Express |
| Email | Nodemailer (Gmail SMTP) |
| CORS | cors package |
| Env | dotenv |
