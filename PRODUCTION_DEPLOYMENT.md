# 🚀 GRIND Gym - Production Deployment Guide

This guide will help you deploy your GRIND Gym website to production!

---

## 📋 Prerequisites
Before you start, make sure you have:
1. A **MongoDB Atlas** account (free tier works great)
2. A hosting platform for your backend (e.g., Render, Azure App Service, Heroku)
3. A hosting platform for your frontend (e.g., Vercel, Netlify, Azure Static Web Apps)
4. A **custom domain name** (optional but recommended, e.g., `yourgymwebsite.com`)

---

## 🔧 Step 1: Set Up Production MongoDB Atlas
1. Log into [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a new **Production Cluster** (M0 free tier is fine to start)
3. Create a new **Database User** (save the username and password!)
4. Go to **Network Access** and add your production server's IP address (or use `0.0.0.0/0` temporarily, but restrict it later!)
5. Get your **Connection String**:
   - Click **Connect** → **Connect your application**
   - Copy the connection string, it should look like:
     ```
     mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/grindGymDB?retryWrites=true&w=majority&appName=Cluster0
     ```
   - Replace `<username>` and `<password>` with your database user credentials

---

## 📦 Step 2: Prepare Production Environment Variables

### Backend (`server/.env`)
Create a production version of your server `.env` file (do NOT commit this to Git!):
```env
# Server Configuration
PORT=10000
NODE_ENV=production

# Database
MONGODB_URI=mongodb+srv://yourDbUser:yourDbPassword@cluster0.xxxxx.mongodb.net/grindGymDB?retryWrites=true&w=majority&appName=Cluster0

# Security
JWT_SECRET=yourVeryLongAndSecureRandomSecretKeyHereMakeItAtLeast32CharactersLong!

# Frontend URL (for CORS)
FRONTEND_URL=https://yourgymwebsite.com
```

### Frontend (`client/.env.production`)
Create a production frontend environment file:
```env
VITE_API_URL=https://your-api-domain.com/api
```

---

## 🚀 Step 3: Deploy Backend (Example: Render)
1. Go to [Render.com](https://render.com) and sign up
2. Connect your GitHub repository
3. Create a new **Web Service** for your backend
4. Configure your new web service:
   - **Name**: grind-gym-api
   - **Environment**: Node
   - **Build Command**: `cd server && npm install`
   - **Start Command**: `cd server && npm start`
5. Add the environment variables from your `server/.env` file in the Render dashboard
6. Click **Create Web Service** and wait for it to deploy!

---

## 🌐 Step 4: Deploy Frontend (Example: Vercel)
1. Go to [Vercel.com](https://vercel.com) and sign up
2. Connect your GitHub repository
3. Configure your project:
   - **Root Directory**: `client`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Add your production environment variable:
   - `VITE_API_URL`: `https://your-render-backend-url.com/api`
5. Click **Deploy**!

---

## 🎯 Step 5: Configure Custom Domain (Optional)
1. Buy a domain from a registrar like GoDaddy, Namecheap, etc.
2. In your frontend hosting (Vercel/Netlify):
   - Add your custom domain and follow the instructions to update DNS records
3. In your backend hosting (Render):
   - Add your custom domain (e.g., `api.yourgymwebsite.com`)

---

## 🔒 Production Security Checklist
Make sure you've completed all these steps before launching:
- [ ] Use a **strong, unique** `JWT_SECRET` (generate one using `openssl rand -hex 32`)
- [ ] Restrict MongoDB Atlas Network Access to only your backend server IP
- [ ] Enable HTTPS (SSL/TLS) for both frontend and backend (all hosting platforms do this automatically!)
- [ ] Never commit `.env` files to Git
- [ ] Use environment variables for all secrets
- [ ] Disable debug mode in production (`NODE_ENV=production`)
- [ ] Set up monitoring and logging for your backend
- [ ] Regularly update dependencies (`npm audit fix`)

---

## 📝 Other Hosting Options
- **Frontend**: Netlify, Azure Static Web Apps
- **Backend**: Azure App Service, Heroku, AWS EC2
- **Database**: MongoDB Atlas, Azure Cosmos DB

---

## 🎉 You're Live!
Once deployed, test your production website thoroughly!

If you run into issues, check the logs in your hosting platform's dashboard!
