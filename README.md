# ♻️ Smart Waste Collection System

A modern **MERN Stack** application built to streamline urban waste management using smart monitoring, geolocation-based validation, and secure role-based workflows. The platform simulates IoT-enabled waste bins, helping optimize collection operations and improve operational transparency.

---

## 🚀 Overview

The Smart Waste Collection System enables administrators and drivers to efficiently manage waste collection activities through an interactive dashboard, real-time bin status simulation, and location-aware collection verification.

Designed with scalability and modular architecture in mind, the project demonstrates full-stack engineering concepts including authentication, geospatial data handling, REST API development, and responsive frontend design.

---

# ✨ Key Features

✅ Smart bin fill-level simulation engine
✅ Geolocation-based waste pickup validation
✅ Secure JWT authentication & authorization
✅ Password reset workflow with hashed reset tokens
✅ Role-based access control (Admin / Driver)
✅ Responsive and dynamic React dashboard
✅ RESTful API architecture
✅ GeoJSON-based location management
✅ Waste collection tracking and status updates
✅ Modular MVC backend structure

---

# 🛠️ Tech Stack

## Frontend

* React.js
* JavaScript
* CSS

## Backend

* Node.js
* Express.js

## Database

* MongoDB
* Mongoose

## Security & Authentication

* JWT Authentication
* SHA-256 Token Hashing

---

# 🧠 System Architecture

```text
Frontend (React)
       │
       ▼
REST API Layer (Express.js)
       │
       ▼
Business Logic & Controllers
       │
       ▼
MongoDB Database (GeoJSON Models)
```

---

# 📂 Project Structure

```bash id="l8fr0r"
Smart-Waste-Collection-System/
│
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── App.js
│
└── README.md
```

---

# ⚙️ Installation & Setup

## 1️⃣ Clone Repository

```bash id="9z0h5t"
git clone <your-repository-url>
cd Smart-Waste-Collection-System
```

---

# 🔧 Backend Setup

## Navigate to backend directory

```bash id="e3nn5j"
cd backend
```

## Install dependencies

```bash id="ljwt3m"
npm install
```

## Configure environment variables

Create a `.env` file:

```env id="6lcg78"
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

## Start backend server

```bash id="x7d2v9"
npm start
```

---

# 💻 Frontend Setup

## Navigate to frontend directory

```bash id="slg5kr"
cd frontend
```

## Install dependencies

```bash id="b0d8p3"
npm install
```

## Start frontend application

```bash id="1p5ry0"
npm start
```

---

# 🔐 Authentication & Security

* Secure user registration and login system
* JWT-based authentication
* Protected API routes
* Password reset flow with SHA-256 hashed tokens
* Token expiry validation for enhanced security

---

# 📍 Geolocation-Based Validation

The system uses **GeoJSON coordinates** to validate waste collection activities.

✔️ Drivers can mark bins as collected only when physically within the allowed proximity range.
✔️ Prevents false updates and improves operational reliability.
✔️ Prepares the platform for future route optimization and geo-based analytics.

---

# ♻️ Smart Bin Simulation

Instead of relying on physical IoT devices, the platform includes a **software-based simulation engine** that dynamically updates waste levels to mimic real-world smart bins.

This allows:

* Real-time waste level monitoring
* Collection workflow testing
* Smart scheduling simulations

---

# 🚧 Future Enhancements

* Real-time updates with Socket.IO
* MongoDB 2dsphere indexing
* Route optimization algorithms
* Email integration for password recovery
* Dockerized deployment
* CI/CD pipeline integration
* Analytics dashboard
* Unit & integration testing
* Push notifications for drivers

---

# 📚 What I Learned

This project strengthened my understanding of:

* Full-stack MERN development
* REST API architecture
* Secure authentication workflows
* Geospatial data modeling
* Backend scalability concepts
* State-driven frontend UI
* Real-world workflow implementation

---

# 🤝 Contributing

Contributions, suggestions, and improvements are welcome.

```bash id="jlwmj7"
Fork the repository
Create a feature branch
Commit your changes
Open a Pull Request
```

---

# 👨‍💻 Author

**PaRK**
Full Stack Developer | MERN Stack Enthusiast

---

# ⭐ Support

If you found this project helpful, consider giving it a ⭐ on GitHub.
