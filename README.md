# SMO Foundation

The website of the Sustainable Market Outreach Foundation (SMO Foundation), a non-profit based in Abuja that gives grants, bank accounts and money skills to market women and petty traders across Nigeria through its 12-State Empowerment Programme.

## Built with

- [Next.js 16](https://nextjs.org) (App Router) and React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion for animation
- Lucide for icons
- React Hook Form and Zod for the contact form

## Getting started

You need Node.js 20 or later.

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

| Command | What it does |
| --- | --- |
| `npm run dev` | Starts the development server |
| `npm run build` | Builds the site for production |
| `npm run start` | Serves the production build |
| `npm run lint` | Checks the code with ESLint |

If the dev server ever gets stuck reloading a page, stop it, delete the `.next` folder and run `npm run dev` again.

## Pages

| Route | Page |
| --- | --- |
| `/` | Home |
| `/our-work` | The 12-State Programme and how a grant works |
| `/core-team` | The Executive Director, management team and advisory council |
| `/core-team/[slug]` | A profile page for each management team member |
| `/partners` | Partners, starting with FogPay |
| `/where-we-work` | Programme states by geopolitical zone |
| `/about` | Vision, mission and Board of Trustees |
| `/support` | Ways to fund, partner or volunteer |
| `/contact` | Contact details and enquiry form |
| `/privacy`, `/terms` | Legal pages |

## Project structure

```
public/images/        Photos used across the site (team photos in public/images/team)
src/app/              Pages and routes
src/components/       Page sections and shared UI
src/data/             Site content: text, figures, team, partners and photo paths
src/types/            Shared TypeScript types
src/lib/              Small helpers
```

## Updating content

Most text and photos live in `src/data`, so content can be changed without touching the page code.

| To change | Edit |
| --- | --- |
| Contact details, social links, board members | `src/data/site.ts` |
| Management team and advisory council | `src/data/team.ts` |
| Management team profile pages | `src/data/profiles.ts` |
| Executive Director's profile | `src/data/leadership.ts` |
| Programme states, figures and grant breakdown | `src/data/programme.ts` |
| Partners | `src/data/partners.ts` |
| Hero slides and page banner photos | `src/data/photos.ts` |
| Navigation links | `src/data/navigation.ts` |

### Adding a photo

1. Put the image in `public/images` (or `public/images/team` for team photos).
2. Set its path in the matching data file, starting from `/images`, for example `src: "/images/team/fd.jpeg"`.
3. Write a short `alt` description of what the photo shows.

A photo slot with no `src` shows a labelled placeholder until the image is added.

## Colours

The palette is defined once in `src/app/globals.css`: deep green `#12572E` and white `#FFFFFF`.

## Deployment

The site is a standard Next.js app and deploys to [Vercel](https://vercel.com) with no extra settings: import the GitHub repository and Vercel detects Next.js automatically.
