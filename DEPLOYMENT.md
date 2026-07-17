# Deployment Guide

## 🚀 Deploying Your Portfolio

### Option 1: Deploy to Vercel (Recommended)

Vercel is the official deployment platform for Next.js and offers free hosting.

#### Steps:

1. **Create a Vercel Account**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub

2. **Import Your Repository**
   - Click "Import Project"
   - Select your GitHub repository
   - Vercel will auto-detect Next.js settings

3. **Environment Variables (Optional)**
   - Add `NEXT_PUBLIC_GA_ID` for Google Analytics
   - Leave blank if not using analytics

4. **Deploy**
   - Click "Deploy"
   - Your site goes live at `your-name.vercel.app`

#### Auto-Deploy
- Every push to `main` branch auto-deploys
- Preview URLs for each pull request

---

### Option 2: Deploy to GitHub Pages

1. **Update Configuration**
   ```javascript
   // next.config.js
   const nextConfig = {
     output: 'export',  // Add this
     reactStrictMode: true,
     // ... rest of config
   }
   ```

2. **Update package.json**
   ```json
   "scripts": {
     "build": "next build",
     "export": "next export"
   }
   ```

3. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Prepare for GitHub Pages"
   git push origin main
   ```

4. **Enable GitHub Pages**
   - Go to Settings > Pages
   - Source: Deploy from a branch
   - Branch: `main` / `(root)`
   - Save

5. **Your site is live at**
   ```
   https://siboniso123.github.io/siboniso-site
   ```

---

### Option 3: Deploy to Netlify

1. **Connect GitHub**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" > "Import an existing project"
   - Connect GitHub

2. **Configure Build**
   - Build command: `npm run build`
   - Publish directory: `.next`

3. **Set Environment Variables**
   - Add `NEXT_PUBLIC_GA_ID` if using analytics

4. **Deploy**
   - Site deploys automatically

---

## 🌐 Custom Domain Setup

### Using Vercel (Easiest)

1. **Purchase Domain**
   - Buy from [Namecheap](https://namecheap.com), [GoDaddy](https://godaddy.com), or [Vercel Domains](https://vercel.com/domains)

2. **Add to Vercel**
   - Project Settings > Domains
   - Enter your domain
   - Add DNS records if needed

3. **Wait for DNS**
   - Can take 24-48 hours
   - Vercel handles SSL certificate

### Using GitHub Pages

1. **Update DNS Records**
   - Go to domain registrar
   - Add CNAME record pointing to `siboniso123.github.io`

2. **Add to Repository**
   - Create `public/CNAME` file
   - Add your domain name

3. **Enable in Settings**
   - GitHub Settings > Pages
   - Add custom domain

---

## 📊 Setting Up Google Analytics

1. **Create Google Analytics Account**
   - Go to [analytics.google.com](https://analytics.google.com)
   - Sign in with Google account
   - Create new property
   - Copy measurement ID (format: `G-XXXXXXXXXX`)

2. **Add to Environment**
   - Create `.env.local` file
   - Add: `NEXT_PUBLIC_GA_ID=G-YOUR-ID`

3. **Restart Development Server**
   ```bash
   npm run dev
   ```

4. **Verify Analytics**
   - Open your site
   - Go to Google Analytics > Real Time
   - You should see yourself active

---

## 🔒 HTTPS & Security

- ✅ Vercel: Free SSL certificate
- ✅ Netlify: Free SSL certificate
- ✅ GitHub Pages: Free SSL with custom domain
- ⚠️ Always use HTTPS in production

---

## 📈 Performance Tips

1. **Optimize Images**
   - Use Next.js Image component
   - Keep images under 200KB
   - Use modern formats (WebP)

2. **Enable Caching**
   - Set cache headers
   - Use CDN (automatic with Vercel)

3. **Monitor Performance**
   - Use Google PageSpeed Insights
   - Check Core Web Vitals
   - Use Lighthouse in DevTools

---

## 🐛 Troubleshooting

### Deployment Fails
```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

### Domain Not Resolving
- Wait 24-48 hours for DNS
- Check DNS settings
- Verify CNAME record

### Analytics Not Tracking
- Check `NEXT_PUBLIC_GA_ID` is set
- Verify GA property exists
- Check Real Time in Google Analytics

---

## 📝 Deployment Checklist

- [ ] Test site locally: `npm run dev`
- [ ] Build successfully: `npm run build`
- [ ] Add CV to `public/cv.pdf`
- [ ] Update personal information
- [ ] Test all links and forms
- [ ] Test on mobile devices
- [ ] Set up analytics (optional)
- [ ] Purchase custom domain (optional)
- [ ] Deploy to Vercel/Netlify/GitHub Pages
- [ ] Configure custom domain
- [ ] Enable analytics tracking
- [ ] Share with employers/clients

---

## 🎉 You're Live!

Your portfolio is now live and ready to impress!

Next steps:
1. Share your portfolio link
2. Add it to your resume
3. Share on social media
4. Keep content updated
5. Monitor analytics
