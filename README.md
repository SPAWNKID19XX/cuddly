# 🛍️ Full-Stack E-commerce Store (Django + React)

## 📦 Project Overview

This is a full-featured e-commerce platform built with **Django REST Framework (DRF)** on the backend and **React** on the frontend. It supports a product catalog, shopping cart, order management, authentication, multilingual support, and an admin dashboard for managing products and orders.

---

## 🧰 Tech Stack

### 🔙 Backend — Django REST Framework
- **Django 4.x** — web framework
- **Django REST Framework (DRF)** — for building RESTful APIs
- **PostgreSQL** — relational database
- **SimpleJWT** — token-based authentication
- **django-cors-headers** — CORS support for API access
- **Celery + Redis** — for asynchronous tasks (emails, order processing)
- **Stripe / PayPal API** — payment integration
- **Amazon S3 / Cloudinary** — media and image storage
- **Docker (optional)** — containerization and deployment

### 🔜 Frontend — React
- **React 18+** — frontend library
- **React Router DOM** — routing
- **Redux Toolkit / Zustand** — state management
- **Axios / Fetch API** — for API requests
- **TailwindCSS / Material UI** — UI styling
- **i18next** — internationalization (e.g., PT, EN, IT)
- **Formik + Yup** — form handling and validation

---

## 📁 Project Structure

```
project-root/
├── server/               # Django backend
│   ├── manage.py
│   ├── shop/              # Product app
│   ├── users/             # User auth and profiles
│   ├── orders/            # Orders and payments
│   └── media/             # Uploaded files
├── client/              # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── store/
│   │   └── i18n/
└── README.md
```

---

## ✅ Core Features

- 🔐 User registration and authentication (JWT)
- 🛒 Product catalog
- 🧺 Shopping cart
- 💳 Payment integration (Stripe or PayPal)
- 🌐 Multilingual support
- 👩‍💼 Admin dashboard for managing products & orders
- ✉️ Email notifications
- 📈 Sales analytics (optional)

---

## 🚀 Local Development Setup

```bash
# 1. Clone the repository
git clone https://github.com/your-username/your-repo.git
cd your-repo

# 2. Backend setup
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver

# 3. Frontend setup
cd ../frontend
npm install
npm run dev
```

---

## 🌍 Deployment (Optional)
