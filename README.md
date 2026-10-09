# Poornima R K — Developer Portfolio

A modern, high-performance personal portfolio website built with **React**, **Vite**, and **Modern CSS**. Designed specifically for 2027 campus placements, recruitment drives, and technical roles in Full-Stack Software Engineering, AI/ML, and Data Analytics.

---

## 🚀 Quick Start (Run Locally)

### 1. Install Dependencies
Open PowerShell or your terminal in this directory (`d:\FINAL PORTFOLIO`):
```bash
npm install
```

### 2. Start the Local Development Server
```bash
npm run dev
```
Open your browser at the local URL (usually `http://localhost:3000` or `http://localhost:5173`).

### 3. Production Build & Test
```bash
npm run build
npm run preview
```

---

## 📄 Adding Your Resume PDF

As requested, your portfolio is already pre-configured to download and view your resume from `/resume.pdf`.

1. Copy your actual PDF resume file.
2. Name it `resume.pdf`.
3. Paste it directly into the `public/` directory:
   ```
   d:\FINAL PORTFOLIO\public\resume.pdf
   ```
Once placed there, all **"Download Resume"** buttons in the Hero, Navbar, Contact, and Footer will immediately open/download your PDF.

---

## ⚙️ Configuration & Custom Links

All projects, personal details, social links, and contact channels are centralized in one single file:
👉 **`src/data/portfolioData.js`**

### Details You Can Fill In / Update:
1. **GitHub Repository Links**:
   - `TrustMedAI`: Replace placeholder with your repository link if available
   - `Internship Finder`: Update repository link
   - `Tournament Booking System`: Update repository link
   - `Placement Analytics Dashboard`: Update Power BI / GitHub repo link
   - `Sign Language Prediction`: Update repository link
   - `Contact List Application`: Update repository link
2. **Social & Coding Profiles**:
   - LinkedIn: `https://www.linkedin.com/in/poornima-r-k` *(Pre-configured)*
   - GitHub: `https://github.com/PoornimaRadhaKrishnanD` *(Pre-configured)*
   - LeetCode / Coding Profile: `https://leetcode.com/u/Poornima_R_K/` *(Pre-configured for handle Poornima_R_K)*
   - Email: `poornimark.23aim@kongu.edu` *(Pre-configured with direct mailto)*
   - Phone: `+91 9042533625` *(Pre-configured with direct tel)*

---

## 🌐 Deploy to Vercel in 5 Minutes

### Step 1: Push Project to GitHub
1. In your terminal, initialize Git (if not already initialized):
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Poornima RK developer portfolio"
   ```
2. Create a new repository on your GitHub account (`PoornimaRadhaKrishnanD`):
   - Name it `portfolio` or `poornima-portfolio`
   - Leave it empty (do NOT initialize with README)
3. Link your local project to GitHub and push:
   ```bash
   git remote add origin https://github.com/PoornimaRadhaKrishnanD/portfolio.git
   git branch -M main
   git push -u origin main
   ```

### Step 2: Deploy on Vercel
1. Go to [https://vercel.com](https://vercel.com) and log in with your GitHub account.
2. Click **"Add New..."** → **"Project"**.
3. Under *Import Git Repository*, select your newly created `portfolio` repository.
4. Vercel will automatically detect:
   - **Framework Preset**: `Vite`
   - **Root Directory**: `./`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **"Deploy"**.
6. Within 45 seconds, your live portfolio will be deployed with a free HTTPS `.vercel.app` URL (e.g. `https://poornima-portfolio.vercel.app`)!

---

## 📂 Project Architecture

```
d:\FINAL PORTFOLIO\
├── index.html              # HTML shell with Google Fonts & SEO metadata
├── vite.config.js          # Vite build tool configuration
├── vercel.json             # Vercel SPA routing configuration
├── package.json            # Scripts & dependencies
├── public/
│   ├── favicon.svg         # Modern gradient developer monogram icon
│   └── resume.pdf          # Place your actual resume PDF here
└── src/
    ├── main.jsx            # Application mount point
    ├── App.jsx             # Main layout combining all 9 sections
    ├── index.css           # Custom glassmorphic dark theme styling
    ├── data/
    │   └── portfolioData.js # Central data file for all projects & links
    └── components/
        ├── Navbar.jsx      # Sticky navigation with mobile drawer
        ├── Hero.jsx        # Hero section with interactive terminal & metrics
        ├── About.jsx       # Career objective & 4 areas of interest
        ├── Skills.jsx      # Categorized skill badges with filters
        ├── Projects.jsx    # Projects grid with category tabs & modal
        ├── ProjectCard.jsx # Feature-rich project card component
        ├── Education.jsx   # Kongu Engineering College academic timeline
        ├── Achievements.jsx# Academic excellence & paper presentation awards
        ├── Certifications.jsx# MongoDB & NPTEL credentials
        ├── Leadership.jsx  # Placement coordinator & campus roles
        ├── Contact.jsx     # Direct mailto, phone, copy buttons & socials
        ├── Footer.jsx      # Quick navigation & back-to-top button
        └── Icons.jsx       # Embedded Lucide SVG vector icon library
```
