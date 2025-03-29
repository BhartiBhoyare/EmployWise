# Users Management React App

This is a simple CRUD application built with **React**, **Tailwind CSS**, and **Framer Motion**. It allows users to log in (with mock credentials), view a paginated and searchable list of users, delete users, and edit user information via a separate edit page. This project uses the [Reqres API](https://reqres.in/) as a mock backend.

## ✨ Features

- ✅ Login with hardcoded credentials
- ✅ View and paginate users
- ✅ Search/filter users by name or email
- ✅ Delete a user
- ✅ Edit a user on a separate page
- ✅ Responsive UI with Tailwind CSS
- ✅ Animation using Framer Motion
- ✅ Routing with React Router

---

## 📦 Tech Stack

- React.js
- JavaScript
- React Router DOM
- Tailwind CSS
- Framer Motion
- Axios
- Reqres API

---

## 🔧 Setup Instructions

### 1. Clone the repository
```bash
git clone https://github.com/bhartibhoyare/users-management-app.git
cd users-management-app
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the development server
```bash
npm start
```
The app will run on `http://localhost:5173`.

---

### 🔗 Project Links

- GitHub Repository: https://github.com/BhartiBhoyare/EmployWise
- Deployed Link: https://employwise-tau.vercel.app/

---

## 🔑 Login Credentials (Hardcoded)

```bash
Email: user@example.com
Password: password
```

> On successful login, you will be redirected to the Users page.

---

## 🔄 Assumptions & Considerations

- ✅ This app uses a mock API (Reqres), which **does not persist data**. Any changes (PUT/DELETE) are handled on the **client-side only**.
- ✅ User data updates are manually applied to local state after a successful mock response.
- ✅ The app assumes exactly **12 users** are returned from the API for pagination (6 users per page).
- ✅ No backend/database is used in this project.
- ❌ No actual authentication system (e.g., JWT) is implemented.

---

## 📁 Project Structure

```
src/
├── components/
│   ├── LoginPage.jsx
│   ├── UsersPage.jsx
│   └── EditUserPage.jsx
├── App.jsx
└── index.js
```


## 🙇‍♀️ Author

**Bharti Bhoyare**  
Frontend Developer | React Enthusiast  
[https://www.linkedin.com/in/bharti-bhoyare]

---
