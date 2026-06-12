# LearnOS - Learning Dashboard

This is my submission for the frontend intern challenge. I built a student dashboard using Next.js 14, Supabase, Tailwind and Framer Motion.

## What I built

A dark mode dashboard that shows your active courses (fetched from Supabase), a streak counter, activity graph, and some other pages like Achievements, Analytics and Settings.

## Tech used

- Next.js 14 with App Router
- Supabase for the database
- Tailwind CSS for styling
- Framer Motion for animations
- Lucide React for icons
- TypeScript

## How to run it

First clone the repo and install dependencies:

```bash
git clone <your-repo-url>
cd learning-dashboard
npm install
```

Then set up Supabase. Create a free project at supabase.com, run the SQL in `supabase-seed.sql` in their SQL editor, and grab your project URL + anon key from Settings > API.

Create a `.env.local` file (you can copy from `.env.example`):

```
NEXT_PUBLIC_SUPABASE_URL=your_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
```

Then run:

```bash
npm run dev
```

Go to http://localhost:3000

## Some decisions I made and why

### Server Components for data fetching

I fetched the courses data in a Server Component so the Supabase keys stay on the server and don't get exposed to the browser. Took me a while to figure out the difference between the server and client supabase clients but once it clicked it made sense.

I used Suspense + a skeleton loader so the page doesn't just show a blank screen while data loads.

### Animations

Tried to use transform and opacity only for animations so nothing causes layout shifts. The cards scale up slightly on hover using spring physics which feels nicer than a regular ease curve.

The bento tiles stagger in when the page loads instead of all appearing at once.

### Dynamic icons

The icon name is stored as a string in Supabase (like "Code2" or "Database"). I import all lucide icons and look up the right one by name at runtime. If the name doesn't match anything it falls back to BookOpen.

## What I struggled with

Honestly the Server vs Client component split in Next.js 14 was confusing at first. I kept getting errors about using hooks in server components and vice versa. Had to restructure a few things.

Also setting up Supabase RLS took some trial and error. Initially the courses weren't showing up because the read policy wasn't set correctly.

The Framer Motion layoutId for the sidebar was finicky - took a few tries to get the active indicator sliding properly without flickering.

## Deployment

Deployed on Vercel. Added the environment variables in the Vercel dashboard under Settings > Environment Variables.
