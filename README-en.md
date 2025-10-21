# TsukiNeko Library

[![GitHub last commit](https://img.shields.io/github/last-commit/ozet1001/yorushika-app1_next)](https://github.com/ozet1001/yorushika-app1_next/commits/master)
[![GitHub repo size](https://img.shields.io/github/repo-size/ozet1001/yorushika-app1_next)](https://github.com/ozet1001/yorushika-app1_next)
[![ja](https://img.shields.io/badge/lang-ja-red.svg)](https://github.com/salamentic/yorushika-app1_next/README.md)

Yorushika song database and fan community site

---

## Branch TODO:
- Localize information/submission request blurbs
- Test with dummy firestore

## 📖 About This Project

Tsukineko Library is a comprehensive fan site covering Yorushika's music information, performance details, and sacred site information.

---

## 🛠 Tech Stack

### 💻 Frontend
- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **React Hooks**

### 🗄️ Backend & Database
- **Firebase Firestore** (NoSQL Database)
- **Firebase Authentication**
- **Firebase Admin SDK** (Server-side operations)

### DevOps / Infrastructure & DevOps
- **Vercel** (Deployment & Hosting)
- **AWS S3** (Image Storage & CDN)
- **GitHub** (Version Control & Collaboration)

---

## 🌍 Features

### Current Features
- 📚 Song Database
  - URL、MV、convert videos
  - Song information, lyrics URLs, music videos, live performances
- 📍 IRL Reference Location Guides
- 📖 Literary References
- 🛍️ Merchandise Information

### 開発中 / In Development
- 🔍 Advanced Search
- 💬 Community Features

---

## 📦 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

1. **Fork this repository**

2. **Clone your fork**
```bash
git clone https://github.com/YOUR_USERNAME/yorushika-app1_next.git
cd yorushika-app1_next
```

3. **Install dependencies**
```bash
npm install
```

4. **Run development server**
```bash
npm run dev
```

5. **Make your changes and submit a Pull Request!**

---

### For Administrators (Full Setup)

<details>
<summary>Click to expand Firebase setup instructions</summary>

1. Create `.env.local` file:
```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

2. Place `serviceAccountKey.json` in the project root (administrators only)

3. Configure Firestore Security Rules (already set up)

</details>
<br>
<div align="left">

**⭐ If you like this project, please give it a star! ⭐**

Made with ❤️  for Yorushika fans

</div>
