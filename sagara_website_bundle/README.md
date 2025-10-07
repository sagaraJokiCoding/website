
# Sagara Joki Website - Bundle

Files:
- index.html (static ready site)
- react/ (Vite React app files: src/App.jsx, src/index.css)
- README (this file)

## How to use

### Static version
- Open `index.html` in a browser. Replace Formspree ID in the contact form action to receive emails.

### React (Vite)
- Move `src` contents into a Vite React project.
- Install dependencies: `npm install`
- Run dev: `npm run dev`
- Deploy to Vercel or Netlify (recommended).

## Form (Email)
This bundle uses Formspree for email:
- Create a form endpoint on https://formspree.io/
- Replace `{your_form_id}` in `index.html` and React form action with your Formspree form id.

## Deploying / Hosting
### Vercel
- Create account -> Import Git repo -> Deploy (Vercel will detect React/Vite).
### Netlify
- Drag & drop the static `index.html` or connect Git repo for React.

## WhatsApp orders
- Buttons open WhatsApp chat to: +62 852-1108-0404

If you want, I can:
- Build and deploy to Vercel for you (you need to give GitHub repo access), or
- Create serverless function to send email directly (requires SMTP/API keys).
