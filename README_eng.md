# 🧱 Blog Task API

A robust and scalable backend API template built with **Node.js**, **Express**, and **MongoDB**, featuring JWT authentication, logging, Swagger documentation, Docker support, and GitHub Actions CI/CD.

---

## 🚀 Features

- 🔐 **JWT Authentication**  
- 🧾 **Swagger / OpenAPI Integration**  
- 🛆 **MongoDB with Mongoose**  
- ⚙️ **Modular Project Structure**  
- 🩵 **Winston Logger**  
- 🐳 **Docker Ready**  
- 🔀 **GitHub Actions CI/CD Workflow**  
- ✅ **Basic Route Examples: `users`, `auth`, `tasks`, `posts`, `health`**

---

## 📁 Project Structure

```
blog-task-api/
│
├── .env
├── .gitignore
├── package.json
├── README.md
├── Dockerfile
├── docker-compose.yml
│
├── .github/
│   └── workflows/
│       └── ci.yml
│
└── src/
    ├── config/
    ├── controllers/
    ├── middleware/
    ├── models/
    ├── routes/
    └── utils/
```

---

## 📦 Installation

### Prerequisites

- [Node.js](https://nodejs.org/en/)
- [MongoDB](https://www.mongodb.com/try/download/community)
- (Optional) [Docker](https://www.docker.com/) if you want containerized usage.

### Setup

```bash
git clone https://github.com/dissidentone/Blog-task-Api.git
cd Blog-task-Api
npm install
```

### Configuration

Rename `.env.example` to `.env` and update environment variables as needed:

```env
PORT=3000
MONGO_URI=mongodb://127.0.0.1:27017/blog-task-api
JWT_SECRET=your_jwt_secret_key
```

---

## ▶️ Run Project

```bash
npm start
```

Server will run on:  
**http://localhost:3000**

---

## 🧪 Sample Endpoints

| Route        | Method | Description              |
|--------------|--------|--------------------------|
| /health      | GET    | API health check         |
| /auth/login  | POST   | User login               |
| /auth/signup | POST   | User registration        |
| /users       | GET    | Get all users (protected)|
| /tasks       | CRUD   | Task endpoints           |
| /posts       | CRUD   | Post endpoints           |

---

## 📄 Swagger Docs

Visit:  
**http://localhost:3000/api-docs**  
to view the automatically generated Swagger UI.

---

## 🐳 Docker Usage

To run with Docker:

```bash
docker-compose up --build
```

---

## 🔀 GitHub Actions CI/CD

On every push, this template runs:

- ✅ Lint Check
- ✅ Basic Build/Install
- ✅ Test Skeleton (for future integration)

---

## 👨‍💻 Author

- GitHub: [@dissidentone](https://github.com/dissidentone)

---

## 📜 License

This project is licensed under the MIT License.  
Feel free to use, modify, and share — but give credit where it's due! 😉

---

> **Template generated by [bgen2](https://github.com/dissidentone/bgen2)** — Build your backend in seconds!
