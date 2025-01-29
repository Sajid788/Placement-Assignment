# Express Authentication API

A simple authentication system using **Express.js**, **MongoDB**, and **JWT (JSON Web Tokens)**, implementing **user registration, login, logout, refresh tokens, and JWT blacklisting**.

## 🚀 Features
- **User Registration & Login** (with password hashing using bcrypt)
- **JWT Authentication** (access tokens + refresh tokens)
- **Token Blacklisting** (prevents usage of revoked tokens)
- **MongoDB Storage** (for users and blacklisted tokens)
- **Secure Token Handling** (HTTP-only refresh token cookies)

## 📌 Installation

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/Sajid788/express-auth-api.git
cd express-auth-api
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Setup Environment Variables
Create a `.env` file in the root directory and add the following:
```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/authDB
JWT_SECRET=your_secret_key
JWT_EXPIRES_IN=15m
REFRESH_TOKEN_SECRET=your_refresh_secret
REFRESH_TOKEN_EXPIRES_IN=7d
```

### 4️⃣ Start the Server
```sh
npm start
```
or with **nodemon** (for development):
```sh
npx nodemon server.js
```

## 🔥 API Endpoints

### **1️⃣ Register a New User**
```http
POST /api/auth/register
```
#### Request Body (JSON):
```json
{
  "username": "testuser",
  "password": "password123"
}
```
#### Response:
```json
{
  "message": "User registered successfully"
}
```

---

### **2️⃣ Login (Get Access & Refresh Tokens)**
```http
POST /api/auth/login
```
#### Request Body (JSON):
```json
{
  "username": "testuser",
  "password": "password123"
}
```
#### Response:
```json
{
  "accessToken": "your_jwt_access_token"
}
```
📌 **Save `accessToken` for accessing protected routes.**

---

### **4️⃣ Logout (Blacklist Token)**
```http
POST /api/auth/logout
```
#### Headers:
```http
Authorization: Bearer your_jwt_access_token
```
#### Response:
```json
{
  "message": "Logged out successfully"
}
```
📌 **This revokes the token, preventing further use.**

---

### **5️⃣ Refresh Token (Get a New Access Token)**
```http
POST /api/auth/refresh
```
#### Headers:
```http
Cookie: refreshToken=your_refresh_token
```
#### Response:
```json
{
  "accessToken": "new_jwt_access_token"
}
```

## 🛠 Tech Stack
- **Express.js** (Node.js framework)
- **MongoDB** (Database for user storage)
- **JWT (jsonwebtoken)** (For authentication)
- **bcrypt** (Password hashing)
- **dotenv** (Environment variables)
- **cookie-parser** (Handling HTTP-only cookies)
- **nodemon** (Development server)

## 🚀 Running in Production
- Use **HTTPS** for secure API communication.
- Store **JWT secrets** securely (e.g., environment variables, AWS Secrets Manager).
- Set `secure: true` for cookies when deploying to **production**.

## 🎯 Next Steps
- Add **email verification**.
- Implement **role-based access control**.
- Rate limit login attempts to prevent **brute-force attacks**.

---
💬 **Need Help?** Open an issue or reach out to [Sajid788](https://github.com/Sajid788) on GitHub!

