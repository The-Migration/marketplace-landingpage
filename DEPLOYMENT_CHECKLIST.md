# Deployment Checklist - CourseApply Australia

## 1. Pre-Deployment Testing
- [ ] Verify all internal links (Navigation, Hero buttons, Footer).
- [ ] Check mobile responsiveness on at least 3 screen widths (Mobile, Tablet, Desktop).
- [ ] Test that the Google Analytics snippet is present in the `<head>`.
- [ ] Verify that the GHL Iframe placeholder is replaced with the real URL.

## 2. Platform Setup (GHL)
- [ ] Replace `YOUR_GHL_FORM_ID_HERE` in `index.html` with the actual form ID from GoHighLevel.
- [ ] Set up the GHL workflow to trigger on form submission (Email/WhatsApp notifications).

## 3. Analytics Setup
- [ ] Ensure GA4 `G-8SPEBPR8EH` is active in the Google Analytics console.
- [ ] Verify event tracking in Realtime report when clicking CTAs.

## 4. Hosting Execution
- [ ] **Vercel**: Import repository and deploy (use the provided `vercel.json`).
- [ ] **Netlify**: Drag and drop the folder or connect GitHub (use `netlify.toml`).
- [ ] Configure `courseapply.com.au` in the domain settings of the chosen host.
- [ ] Verify SSL certificate is active.

## 5. Post-Deployment Verification
- [ ] Run a live test submission on the production URL.
- [ ] Check Lighthouse scores (targeting 90+ across all metrics).
- [ ] Verify the "Success" state of the form.
