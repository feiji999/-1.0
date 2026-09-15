# Next.js with Vercel Speed Insights

This is a [Next.js](https://nextjs.org/) project configured with [Vercel Speed Insights](https://vercel.com/docs/speed-insights) to monitor real-time performance metrics.

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Vercel Speed Insights

This project includes Vercel Speed Insights to track Core Web Vitals and performance metrics:

- **Largest Contentful Paint (LCP)**
- **First Input Delay (FID)**
- **Cumulative Layout Shift (CLS)**
- **First Contentful Paint (FCP)**
- **Time to First Byte (TTFB)**
- **Interaction to Next Paint (INP)**

### How It Works

The `SpeedInsights` component is integrated in the root layout (`app/layout.tsx`) and automatically collects performance data when the application is deployed to Vercel.

### Viewing Analytics

1. Deploy this project to Vercel
2. Navigate to your project dashboard on Vercel
3. Go to the "Speed Insights" tab to view performance metrics

## Build for Production

```bash
npm run build
```

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Speed Insights Documentation](https://vercel.com/docs/speed-insights)
- [Core Web Vitals](https://web.dev/vitals/)
