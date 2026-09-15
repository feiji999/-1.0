export default function Home() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'system-ui, sans-serif' }}>
      <h1>TG-FileStreamBot</h1>
      <p>Telegram File Stream Bot - Web Interface</p>
      <p>This application is now configured with Vercel Speed Insights to monitor performance metrics.</p>
      
      <section style={{ marginTop: '2rem' }}>
        <h2>Features</h2>
        <ul>
          <li>File streaming support</li>
          <li>Parallel transfer optimization</li>
          <li>File property recognition</li>
          <li>Async processing</li>
        </ul>
      </section>
      
      <section style={{ marginTop: '2rem' }}>
        <h2>Speed Insights</h2>
        <p>
          Vercel Speed Insights is now active and will track:
        </p>
        <ul>
          <li>Real User Monitoring (RUM) data</li>
          <li>Core Web Vitals (LCP, FID, CLS)</li>
          <li>Time to First Byte (TTFB)</li>
          <li>First Contentful Paint (FCP)</li>
        </ul>
      </section>
    </main>
  );
}
