# TG-FileStreamBot - Web Interface

This is a Next.js web interface for the TG-FileStreamBot project with Vercel Speed Insights integrated.

## Features

- 📊 **Vercel Speed Insights** - Real-time performance monitoring
- ⚡ **Next.js 16** - Latest Next.js with App Router
- 🎯 **TypeScript** - Full type safety
- 🔥 **Turbopack** - Fast build and development

## Vercel Speed Insights

This project is configured with Vercel Speed Insights to track:

- **Core Web Vitals**: LCP, FID, CLS
- **Time to First Byte (TTFB)**
- **First Contentful Paint (FCP)**
- **Real User Monitoring (RUM)** data

The Speed Insights component is integrated in `app/layout.tsx` and will automatically collect performance metrics when deployed to Vercel.

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, pnpm, or bun

### Installation

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

Create a production build:

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

## Deployment

The easiest way to deploy this Next.js app is using the [Vercel Platform](https://vercel.com/new):

1. Push your code to GitHub
2. Import your repository in Vercel
3. Vercel will automatically detect Next.js and deploy
4. Speed Insights will start collecting data automatically

## Project Structure

```
.
├── app/
│   ├── layout.tsx        # Root layout with Speed Insights
│   └── page.tsx          # Home page
├── package.json          # Dependencies
├── next.config.js        # Next.js configuration
├── tsconfig.json         # TypeScript configuration
└── README.md             # This file
```

## Speed Insights Integration

The Speed Insights component is added to the root layout:

```typescript
import { SpeedInsights } from '@vercel/speed-insights/next';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
```

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Speed Insights Documentation](https://vercel.com/docs/speed-insights)
- [Next.js Deployment](https://nextjs.org/docs/app/building-your-application/deploying)

## License

ISC
