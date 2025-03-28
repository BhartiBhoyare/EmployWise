h1# Users Management React App

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
- React Router DOM
- Tailwind CSS
- Framer Motion
- Axios
- Reqres API

---

## 🔧 Setup Instructions

### 1. Clone the repository
```bash
git clone https://github.com/your-username/users-management-app.git
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
The app will run on `http://localhost:3000`.

---

## 🌐 Deployment

This app is deployed using **Vercel**. You can deploy it by:

1. Pushing your code to GitHub.
2. Connecting your GitHub repo to [https://vercel.com](https://vercel.com).
3. Vercel automatically builds and deploys your React app.

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

---

## 📸 Screenshots

> _Add screenshots here if needed (optional)_

---

## 🙇‍♀️ Author

**Bharti Bhoyare**  
Frontend Developer | React Enthusiast  
[Portfolio](#) | [LinkedIn](#)

---
