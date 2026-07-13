export const POSTS = [
  {
    slug: 'why-performance-is-primary-conversion-factor',
    title: 'Why Website Speed is the Primary Factor Determining Your Conversion Rate',
    category: 'Conversion',
    date: 'July 8, 2026',
    readTime: '6 min read',
    excerpt: 'A 1-second delay in page load time can reduce conversions by up to 20%. We dissect the relationship between network latency, Core Web Vitals, and real business revenue.',
    author: 'Leila Reza',
    content: `
      <h2>The direct link between load times and buyer decisions</h2>
      <p>In modern web architectures, speed is no longer just a technical metric for developers to chase. It is a core determinant of whether a user decides to complete a transaction, book a strategy call, or click away in frustration.</p>
      <p>Research consistently shows that conversion rates drop by roughly 4.42% for every additional second of load time between 0 and 5 seconds. If your site takes 4.5 seconds to render on a standard mobile connection, you are effectively paying double for your customer acquisition compared to a competitor whose site loads in under 1.5 seconds.</p>

      <h2>Core Web Vitals explained plain and simple</h2>
      <p>Google evaluates user experience based on three metrics known as Core Web Vitals:</p>
      <ul>
        <li><strong>Largest Contentful Paint (LCP):</strong> Measures loading performance. For a premium user experience, LCP should occur within 2.5 seconds of when the page first starts loading.</li>
        <li><strong>Interaction to Next Paint (INP):</strong> Measures page responsiveness. It assesses how quickly a site responds to clicks or keyboard entries. Under 200ms is ideal.</li>
        <li><strong>Cumulative Layout Shift (CLS):</strong> Measures visual stability. A score under 0.1 ensures elements do not jump around as assets load in.</li>
      </ul>

      <h2>Action steps to audit your site today</h2>
      <p>You can verify your current performance metrics using Google PageSpeed Insights. If your mobile performance score is below 90, start by optimizing your asset pipeline: convert all static images to AVIF or WebP formats, eliminate unused CSS declarations, and avoid loading heavy JavaScript bundles prior to initial DOM paint.</p>
    `,
  },
  {
    slug: 'technical-seo-checklist-for-modern-frameworks',
    title: 'The Technical SEO Checklist for Modern JS Frameworks (Next.js & React)',
    category: 'SEO',
    date: 'June 24, 2026',
    readTime: '8 min read',
    excerpt: 'Frameworks like React can present crawlability challenges for search engines. Learn how to configure Server-Side Rendering (SSR) and Schema markups to protect your search rankings.',
    author: 'Nia Osei',
    content: `
      <h2>The crawlability challenge in modern web frameworks</h2>
      <p>Client-side rendered React applications often present challenges for search engine spiders. Because search indexers prefer fully rendered HTML packages to discover page content, reliance on client-side JavaScript execution can delay indexation or lead to incorrect layout categorization.</p>
      <p>By implementing server-side rendering (SSR) or static generation (SSG), you present indexers with final markup immediately. This results in faster indexing, more accurate keyword association, and improved organic query performance.</p>

      <h2>Essential structured data markup (JSON-LD)</h2>
      <p>Structured schema markup helps search engines interpret the context of your page content. You should implement JSON-LD payloads for organization, services, and FAQ blocks directly in the head of your document. This improves the likelihood of rich snippet results in search listings, boosting click-through rates by up to 30%.</p>
    `,
  },
  {
    slug: 'designing-high-converting-b2b-landing-page',
    title: 'Designing the Perfect High-Converting B2B Landing Page',
    category: 'Web Design',
    date: 'May 12, 2026',
    readTime: '5 min read',
    excerpt: 'B2B buyers do not purchase on impulse. We detail the structured hierarchy of benefit-driven hero sections, quantitative proof grids, and clear call-to-actions that work.',
    author: 'Tom Nakamura',
    content: `
      <h2>Speak in outcomes, not features</h2>
      <p>When B2B buyers land on your website, they want to know how you can help their business grow. Avoid generic headers like "We build custom systems" and lead with the outcome, such as "Generate more qualified leads through modern web development."</p>
      <p>Quantify your assertions. If you claim to improve site speed, state by how much (e.g. "2.1s LCP improvement"). If you claim to increase retention, include the client retention rate. Proof builds credibility faster than aesthetic styling alone.</p>
    `,
  },
];
export const CATEGORIES = ['All', 'Web Design', 'SEO', 'Development', 'Conversion'];
