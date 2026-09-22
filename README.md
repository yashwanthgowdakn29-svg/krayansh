# Krayansh Website

SEO-focused company website built with Next.js App Router.

## Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production

```bash
npm run build
npm start
```

## Environment

The contact form uses EmailJS. Configure these values in `.env.local`:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=
```

## SEO

The site includes:

- Static metadata and canonical URLs
- Open Graph image generation
- Organization, website, and service structured data
- Static service pages
- `sitemap.xml`
- `robots.txt`
- Web app manifest
- Indexable privacy and terms pages
