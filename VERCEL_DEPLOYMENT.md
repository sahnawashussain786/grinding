# 🚀 Deploy GRIND Gym on Vercel

This guide will walk you through deploying your GRIND Gym app on Vercel!

---

## 📦 What You Need First
1. Your **MongoDB Atlas Connection String** (with database name at the end)
2. A **Vercel account** (free tier works great!)
3. Your code on **GitHub/GitLab/Bitbucket** (optional but recommended)

---

## 🎯 Step 1: Deploy Backend First

### 1.1 Go to Vercel and Create New Project
1. Log into [Vercel.com](https://vercel.com)
2. Click **Add New…** → **Project**
3. If your code is on GitHub/GitLab, import your repository; otherwise, you can upload your files
4. For **Root Directory**, select `server` (important!)
5. Click **Continue**

### 1.2 Configure Backend Project Settings
- **Project Name**: `grind-gym-api` (or whatever you want)
- **Framework Preset**: `Other`
- **Build Command**: leave empty
- **Output Directory**: leave empty
- **Install Command**: `npm install`

### 1.3 Add Environment Variables
Under **Environment Variables**, add these (make sure to click the lock icon to keep them secret!):
```
MONGODB_URI=mongodb+srv://yourDbUser:yourDbPassword@cluster0.ntv70j1.mongodb.net/grindGymDB?retryWrites=true&w=majority&appName=Cluster0
JWT_SECRET=yourSuperSecretJWTKeyHereMakeItLongAndRandom123456!
NODE_ENV=production
FRONTEND_URL=your-frontend-vercel-url (we'll update this later!)
```

### 1.4 Deploy!
Click **Deploy** and wait for it to finish!
- Once deployed, copy your backend URL (it will look like `https://grind-gym-api.vercel.app`)

---

## 🎨 Step 2: Deploy Frontend

### 2.1 Update Frontend API URL
First, update your frontend `.env` file (or create a `.env.production` file):
```env
VITE_API_URL=https://your-backend-vercel-url.app/api
```
Replace `your-backend-vercel-url.app` with the URL from Step 1.4!

### 2.2 Go Back to Vercel and Create Another New Project
1. Click **Add New…** → **Project**
2. Import your repository again
3. For **Root Directory**, select `client` (important!)
4. Click **Continue**

### 2.3 Configure Frontend Project Settings
- **Project Name**: `grind-gym` (or whatever you want)
- **Framework Preset**: Vite (should auto-detect)
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

### 2.4 Add Frontend Environment Variable
Under **Environment Variables**, add:
```
VITE_API_URL=https://your-backend-vercel-url.app/api
```
(Again, replace with your actual backend URL)

### 2.5 Deploy Frontend!
Click **Deploy**!

---

## 🔄 Step 3: Update Backend CORS Settings
Once your frontend is deployed and you have its URL:
1. Go back to your **backend Vercel project**
2. Go to **Settings** → **Environment Variables**
3. Update `FRONTEND_URL` to your frontend's Vercel URL (e.g., `https://grind-gym.vercel.app`)
4. Redeploy your backend (go to **Deployments**, click the three dots, select **Redeploy**)

---

## 🌱 Step 4: Seed Your Production Database
To add the sample trainers and admin user to your production database:
1. On your local machine, update `server/.env` to use your **production MongoDB URI**
2. Open a terminal in the `server` directory
3. Run:
   ```bash
   npm run seed
   ```
4. Now you can log in with:
   - Email: `admin@grindgym.com`
   - Password: `admin123`

---

## 🎉 You're Done!
Your GRIND Gym app is now live on Vercel!
