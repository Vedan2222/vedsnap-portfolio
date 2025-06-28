# 📸 This is my Professional Portfolio Website

Welcome to **VedSnaps – Portfolio**.  
This project is a sleek, modern, and mobile-responsive portfolio platform tailored for showcasing the creative work of my services.

---

## ✨ Features Implemented

### 🔹 1. **Hero Section**
- A bold landing screen introducing "VedSnaps" with name and a tagline.
- Smooth scroll navigation to other sections.

### 🔹 2. **About Section**
- Brief biography and introduction of the client.
- Responsive layout, dark theme.

### 🔹 3. **Services Section**
- Listed photography/editing services offered (e.g., Pre-wedding, Fashion, Cinematic reels).
- Icons and stylish hover effects.

### 🔹 4. **Portfolio Section**
- Grid of **images and videos** filtered by category (All, Travel, Weddings, Fashion).
- Stored in **localStorage** so it persists across reloads.
- Admin-uploaded content appears dynamically here.

### 🔹 5. **Contact Section**
- Contact form connected with **EmailJS** to receive client queries in email.
- Fields: name, email, message.

### 🔹 6. **Admin Panel**
- Login-protected route (`/login`) using **Firebase Authentication**.
- Upload images/videos with category.
- Upload progress UI and instant preview after upload.
- Permanently stores uploaded files in **localStorage** (not Firebase or Cloudinary).
- Delete functionality for media.

### 🔹 7. **Authentication**
- Firebase Authentication using `signInWithEmailAndPassword`.
- Authenticated users can access `/admin`.
- Unauthorized users are redirected to login.

### 🔹 8. **Fully Responsive Navbar**
- Hamburger menu on mobile.
- Clean navigation to all sections.
- Stays fixed at the top with transparency.

---

## ⚙️ Tech Stack Used

| Tool/Tech        | Purpose                                    |
|------------------|--------------------------------------------|
| **React.js**     | Component-based frontend library            |
| **Vite.js**      | Lightning fast development server           |
| **Tailwind CSS** | Utility-first CSS framework                 |
| **Firebase Auth**| User authentication (login for admin panel) |
| **Local Storage**| Persistent storage of uploaded media files |
| **EmailJS**      | Sending contact form data to email          |
| **Node.js + Express** | Future option for backend integration |

---

## 🔐 Firebase Usage

- ✅ Only **Authentication** is used.
- ❌ **No Firestore** or **Storage** used due to limitations of free tier.
- Admin login works securely using Firebase's Auth SDK.

---

## 💾 Local Storage for Media

All uploaded files are:
- Stored using `URL.createObjectURL(file)`
- Saved in `localStorage` under key `portfolioMedia`
- Persist even after page reload
- Dynamically rendered in Admin Panel & Portfolio section

⚠️ **Note:** Since Cloudinary/Firebase Storage aren't used, files will not persist after a browser cache clear. Use Node backend for permanent hosting.

---

## 🛠️ Setup & Installation Guide

### Step 1: Clone this Repository
```bash
git clone https://github.com/yourusername/vedsnaps-portfolio.git
cd vedsnaps-portfolio
```

### Step 2: Install Dependencies
Make sure Node.js is installed, then run:

```bash
npm install
```

### Step 3: Set Up Firebase
Create a Firebase project and enable **Email/Password** authentication.

Update `src/firebase.js`:

```js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-auth-domain",
  projectId: "your-project-id",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
```

### Step 4: Run the Development Server
```bash
npm run dev
```
Visit [http://localhost:5173](http://localhost:5173)

---

## ⚡ Dependencies Used

| Package             | Purpose                                |
|---------------------|----------------------------------------|
| react-router-dom    | Routing between pages                  |
| firebase            | Authentication                        |
| uuid                | Unique ID generation for files         |
| lucide-react        | Icons (menu, close, etc.)              |
| tailwindcss         | Styling framework                      |
| emailjs-com         | Contact form email integration         |

---

## ✅ Final Notes

- This website is designed to **run entirely client-side**.
- Ideal for photographers, editors, and creators to manage their portfolio.
- Feel free to extend this with **Node.js backend** for permanent file upload.

---

## 🌐 Live Demo (optional)
> Coming soon or hosted on Netlify/Vercel

---

## 📩 Contact

If you like this project, feel free to star ⭐ it, fork it, or reach out for collaborations.

---

🧡 Built with love for **VedSnaps**
## 🔧 Running the Backend (Node.js API)

This project includes a simple Node.js backend server for permanently saving uploaded media (currently only images and video metadata).

### 📁 Backend Setup

1. Make sure Node.js is installed (`node -v` should give a version).
2. Navigate to the root project directory.

```bash
cd vedsnap-portfolio
```

3. Create a `server.js` file if not present, or use the provided one.
4. Ensure your `package.json` contains the backend dependencies:
```json
{
  "type": "module",
  "scripts": {
    "dev": "vite",
    "server": "node server.js"
  },
  "dependencies": {
    "express": "^4.18.2",
    "cors": "^2.8.5",
    "multer": "^1.4.5"
  }
}
```
5. Install the dependencies:

```bash
npm install express cors multer
```

6. Start the backend server:

```bash
npm run server
```

The backend will run on `http://localhost:5000` (or as configured). It handles file uploads and stores them in a `/uploads` folder.

---
