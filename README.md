# Ahmad Hashmi — Portfolio

A single-page portfolio site built with Next.js (App Router), TypeScript, and Tailwind CSS. Deployed on Vercel at [work.ahmadhash.com](https://work.ahmadhash.com).

## Develop

```bash
npm install
npm run dev
```

## Contact form

The contact form sends mail via [Resend](https://resend.com). Copy `.env.example` to `.env.local` and set:

- `RESEND_API_KEY` — from the Resend dashboard.
- `CONTACT_TO_EMAIL` — where submissions get delivered.

Set the same two variables in Vercel → Project Settings → Environment Variables for production.

## Updating content

- **Resume**: replace `public/resume/AhmadHashmi.pdf` and redeploy — the résumé link on the site always points to this path.
- **Culture photos**: `public/images/culture/`, referenced from `content/culture.ts`.
- **Experience / projects / awards / DTE initiatives**: edit the files in `content/`.
- To reprocess new source images from `Images/` (resize + compress), run `node scripts/process-images.mjs`.
