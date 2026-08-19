"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X, ArrowUpRight, ExternalLink, Sun, Moon } from "lucide-react";

/* ============================================================
   BRAND MARK — 8-dot cluster (3x3 grid, center removed)
   Reused as: nav logo, section bullets, card watermark pattern
============================================================ */

function DotCluster({ size = 18, className = "" }) {
  const positions = [
    [0, 0], [1, 0], [2, 0],
    [0, 1],         [2, 1],
    [0, 2], [1, 2], [2, 2],
  ];
  const unit = size / 3;
  const r = unit * 0.16;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className={className} fill="currentColor">
      {positions.map(([x, y], i) => (
        <circle key={i} cx={x * unit + unit / 2} cy={y * unit + unit / 2} r={r} />
      ))}
    </svg>
  );
}

/* ============================================================
   TECH LOGO MARKS — simplified, single-color wordmarks/glyphs
   so the whole showcase stays inside the monochrome UI rule
============================================================ */

function NextIcon(p) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...p}>
      <circle cx="12" cy="12" r="10.25" stroke="currentColor" strokeWidth="1.3" />
      <path d="M8.3 7.6v8.8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M8.3 7.6L16.2 16.9" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M15.4 10.2v6.2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function ReactIcon(p) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...p}>
      <ellipse cx="12" cy="12" rx="9.5" ry="3.7" stroke="currentColor" strokeWidth="1.2" />
      <ellipse cx="12" cy="12" rx="9.5" ry="3.7" stroke="currentColor" strokeWidth="1.2" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="9.5" ry="3.7" stroke="currentColor" strokeWidth="1.2" transform="rotate(120 12 12)" />
      <circle cx="12" cy="12" r="1.6" fill="currentColor" />
    </svg>
  );
}

function TypeScriptIcon(p) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...p}>
      <rect x="2.5" y="2.5" width="19" height="19" rx="4" stroke="currentColor" strokeWidth="1.3" />
      <path d="M7 9.2h5.4M9.7 9.2v6.4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M14.6 15.1c.4.5 1 .8 1.8.8 1 0 1.7-.5 1.7-1.2 0-.8-.7-1.1-1.7-1.4-1.1-.3-1.9-.7-1.9-1.7 0-.8.7-1.4 1.8-1.4.8 0 1.4.3 1.8.8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function NodeIcon(p) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...p}>
      <path d="M12 2.4 20.5 7.2v9.6L12 21.6 3.5 16.8V7.2Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
      <path d="M9.3 12.4c0-1.6 1.2-2.9 2.7-2.9s2.7 1.3 2.7 2.9-1.2 2.9-2.7 2.9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

function AwsIcon(p) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...p}>
      <path d="M7.2 14.4a4.1 4.1 0 1 1 .7-8.1 5 5 0 0 1 9.5 1.6 3.4 3.4 0 0 1-.6 6.5H7.2Z" stroke="currentColor" strokeWidth="1.25" strokeLinejoin="round" />
      <path d="M5 18.4c3.3 1.6 10.7 1.6 14 0" stroke="currentColor" strokeWidth="1.15" strokeLinecap="round" />
      <path d="M17.4 17.4l1.7.4-.2 1.7" stroke="currentColor" strokeWidth="1.15" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function DynamoIcon(p) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...p}>
      <ellipse cx="12" cy="6" rx="8" ry="2.6" stroke="currentColor" strokeWidth="1.25" />
      <path d="M4 6v5.3c0 1.4 3.6 2.6 8 2.6s8-1.2 8-2.6V6" stroke="currentColor" strokeWidth="1.25" />
      <path d="M4 11.3v5.4c0 1.4 3.6 2.6 8 2.6s8-1.2 8-2.6v-5.4" stroke="currentColor" strokeWidth="1.25" />
    </svg>
  );
}

function MongoIcon(p) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...p}>
      <path d="M12 2.6c2.6 3 4.1 6 4.1 9.1 0 4-2 6.6-4.1 8.2-2.1-1.6-4.1-4.2-4.1-8.2 0-3.1 1.5-6.1 4.1-9.1Z" stroke="currentColor" strokeWidth="1.25" strokeLinejoin="round" />
      <path d="M12 13.6V21" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
    </svg>
  );
}

function MySqlIcon(p) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...p}>
      <ellipse cx="12" cy="6" rx="7.5" ry="2.4" stroke="currentColor" strokeWidth="1.2" />
      <path d="M4.5 6v12c0 1.3 3.4 2.4 7.5 2.4s7.5-1.1 7.5-2.4V6" stroke="currentColor" strokeWidth="1.2" />
      <path d="M4.5 12c0 1.3 3.4 2.4 7.5 2.4s7.5-1.1 7.5-2.4" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

function PythonIcon(p) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...p}>
      <path d="M12 2.7c-3 0-3.5 1.3-3.5 2.9v2h7v.9H6.4c-1.7 0-3.1 1-3.1 3.9 0 2.9 1.2 3.9 3.1 3.9h1.7v-2.2c0-1.9 1.6-3.4 3.5-3.4h4.6c1.6 0 2.9-1.3 2.9-2.9V5.6c0-1.6-1.3-2.9-3-2.9H12Z" stroke="currentColor" strokeWidth="1.1" strokeLinejoin="round" />
      <path d="M12 21.3c3 0 3.5-1.3 3.5-2.9v-2h-7v-.9h9.1c1.7 0 3.1-1 3.1-3.9 0-2.9-1.2-3.9-3.1-3.9h-1.7v2.2c0 1.9-1.6 3.4-3.5 3.4H7.2c-1.6 0-2.9 1.3-2.9 2.9v2.2c0 1.6 1.3 2.9 3 2.9H12Z" stroke="currentColor" strokeWidth="1.1" strokeLinejoin="round" />
      <circle cx="9" cy="5.4" r="0.55" fill="currentColor" />
      <circle cx="15" cy="18.6" r="0.55" fill="currentColor" />
    </svg>
  );
}

function JavaScriptIcon(p) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...p}>
      <rect x="2.5" y="2.5" width="19" height="19" rx="4" stroke="currentColor" strokeWidth="1.3" />
      <path d="M9.6 8.4v6.4c0 1.4-.6 2-1.6 2-.8 0-1.3-.4-1.7-.9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M12.6 15.1c.4.5 1 .8 1.8.8 1 0 1.7-.5 1.7-1.2 0-.8-.7-1.1-1.7-1.4-1.1-.3-1.9-.7-1.9-1.7 0-.8.7-1.4 1.8-1.4.8 0 1.4.3 1.8.8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PhpIcon(p) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...p}>
      <ellipse cx="12" cy="12" rx="9.5" ry="5.2" stroke="currentColor" strokeWidth="1.2" />
      <path d="M6.4 10h1.5c1 0 1.6.6 1.4 1.6-.2 1-1 1.6-2 1.6H6.1L6.4 10Zm-1 6.2 1-6.2" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12.7 10h1.5c1 0 1.6.6 1.4 1.6-.2 1-1 1.6-2 1.6h-1.3L12.7 10Zm-1 6.2 1-6.2" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M18.6 11.3h1.1c.8 0 1.3.5 1.1 1.3-.2.8-.8 1.3-1.6 1.3h-1Z" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function TailwindIcon(p) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...p}>
      <path d="M6.5 12.6c.6-2.4 2-3.6 4.2-3.6 3.3 0 3.7 2.4 5.3 2.8 1.1.3 2-.1 2.8-1.2-.6 2.4-2 3.6-4.2 3.6-3.3 0-3.7-2.4-5.3-2.8-1.1-.3-2 .1-2.8 1.2Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" strokeLinecap="round" />
      <path d="M2 16.9c.6-2.4 2-3.6 4.2-3.6 3.3 0 3.7 2.4 5.3 2.8 1.1.3 2-.1 2.8-1.2-.6 2.4-2 3.6-4.2 3.6-3.3 0-3.7-2.4-5.3-2.8-1.1-.3-2 .1-2.8 1.2Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}

function WordPressIcon(p) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...p}>
      <circle cx="12" cy="12" r="9.5" stroke="currentColor" strokeWidth="1.25" />
      <path d="M4.3 9.4 8.6 18l1.9-5.2M9.7 9.4h1.6l3.1 8.4M15.1 9.4h1.4c1.6 3-.3 6.3-1.8 8.2M13.4 9.4c.7 0-.9-.1-1.7 0" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ExpressIcon(p) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...p}>
      <path d="M2.3 15.7c2 1 5.6 1 6.9-1.6.9-1.8-.1-3.5-1.8-3.5-1.5 0-2.2 1-2.2 2 0 1.7 1.8 2.7 3.4 2.1M11.7 8.6l8.4 8.8M20.1 8.6l-8.4 8.8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const TECH_STACK = [
  { name: "Next.js", Icon: NextIcon },
  { name: "React", Icon: ReactIcon },
  { name: "TypeScript", Icon: TypeScriptIcon },
  { name: "Node.js", Icon: NodeIcon },
  { name: "AWS", Icon: AwsIcon },
  { name: "DynamoDB", Icon: DynamoIcon },
  { name: "MongoDB", Icon: MongoIcon },
  { name: "MySQL", Icon: MySqlIcon },
  { name: "Python", Icon: PythonIcon },
  { name: "JavaScript", Icon: JavaScriptIcon },
  { name: "PHP", Icon: PhpIcon },
  { name: "Tailwind CSS", Icon: TailwindIcon },
  { name: "WordPress", Icon: WordPressIcon },
  { name: "Express", Icon: ExpressIcon },
];

function Github(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.4 7.86 10.93.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.34-1.28-1.7-1.28-1.7-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.75 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18.91-.25 1.89-.38 2.86-.38.97 0 1.95.13 2.86.38 2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.76.11 3.05.73.8 1.18 1.83 1.18 3.08 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14 0 1.55-.01 2.79-.01 3.17 0 .31.21.67.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-11.5-11.5S12 .5 12 .5z" />
    </svg>
  );
}

/* ============================================================
   CONTENT
============================================================ */

const FEATURED = [
  {
    tagLabel: "Live",
    name: "SosyalGenius.com",
    role: "Back-end Developer",
    tech: "AWS Lambda · DynamoDB · S3 · CloudFront · Postman",
    url: "https://sosyalgenius.com",
    linkLabel: "Visit live site",
    description:
      "Built the intake-to-delivery pipeline for a bug reporting tool used inside the SosyalGenius CMS — capturing submissions, storing metadata, and serving uploaded screenshots through CloudFront.",
    items: [
      "Validated and stored bug reports with complete metadata in DynamoDB",
      "Uploaded screenshots to S3 and generated CloudFront delivery URLs",
      "Built query-based retrieval with pagination and status/date/category filtering",
      "Shipped update, delete, and a full Postman test collection for the API",
    ],
  },
  {
    tagLabel: "Inactive",
    name: "Virtual Events Platform",
    role: "Full-Stack Developer",
    tech: "Next.js · React · TypeScript · AWS (Lambda, DynamoDB, Cognito, Bedrock, EventBridge, SES) · Jest",
    url: null,
    description:
      "Core contributor on a large virtual events platform spanning attendee networking, live moderation, ticketing, and exhibitor tools. ~2.5 months, 100+ tracked tasks — not yet public.",
    items: [
      "Built AI-powered networking (AWS Bedrock) and an event-driven email notification system",
      "Developed moderation and Q&A dashboards with live polling and accessibility fixes",
      "Built ticketing (QR codes, countdown timers) and a modular profile identity hub",
      "Set up a pre-commit security pipeline and deployed AWS CDK infrastructure",
    ],
  },
  {
    tagLabel: "Live",
    name: "Network Guard",
    role: "Web Developer & Designer",
    tech: "WordPress · Elementor",
    url: "https://networkguard.co.uk",
    linkLabel: "Visit live site",
    description:
      "Worked alongside the dev team on a site for a Sophos-authorised reseller of enterprise firewalls, access points, switches, and MDR services across the UK.",
    items: [
      "Helped organize a large hardware catalogue into a browsable structure",
      "Assisted with individual product page layout — SKUs, specs, learn-more paths",
      "Contributed to trust sections: certifications, free UK delivery, 3-step quoting",
      "Q&A'd responsiveness and load speed across desktop and mobile",
    ],
  },
];

const REPOS = [
  {
    name: "Task System",
    stack: "Next.js 16 · TypeScript · MySQL · TanStack Query",
    description:
      "Full-stack task dashboard with server-side pagination, search, filtering, and a persisted light/dark theme.",
    url: "https://github.com/rgmmontemayor/Task-System",
  },
  {
    name: "Leave Management System",
    stack: "AWS CDK · Lambda · DynamoDB · Next.js",
    description:
      "Serverless leave-request app — create, approve, reject, cancel — with a Next.js frontend.",
    url: "https://github.com/rgmmontemayor/leave-management",
  },
  {
    name: "Inventory Management System",
    stack: "AWS CDK · API Gateway · DynamoDB",
    description:
      "Serverless inventory backend with a single-table DynamoDB design and warehouse-scoped REST API.",
    url: "https://github.com/rgmmontemayor/inventory-management",
  },
  {
    name: "Event Management System",
    stack: "Node.js · Express · MongoDB · Next.js",
    description:
      "Event platform with capacity-limited registrations and an authenticated Next.js client.",
    url: "https://github.com/rgmmontemayor/event-management",
  },
  {
    name: "Paws & Co.",
    stack: "HTML · CSS · JavaScript",
    description:
      "Front-end e-commerce concept for a pet supply brand — listings, checkout, about pages.",
    url: "https://github.com/rgmmontemayor/Paws-Co",
  },
  {
    name: "Eco-nnect",
    stack: "PHP · MySQL · Bootstrap",
    description:
      "Community/rewards platform with PHP-based sign-in, sign-up, and profile flows.",
    url: "https://github.com/rgmmontemayor/Eco-nnect",
  },
  {
    name: "Pomodoro Timer",
    stack: "Python · Tkinter",
    description:
      "Desktop productivity app pairing a Pomodoro countdown with an integrated to-do list.",
    url: "https://github.com/rgmmontemayor/Pomodoro-Timer",
  },
];

/* ============================================================
   MOTION HELPERS
============================================================ */

function Reveal({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function useCountUp(target, trigger, duration = 1100) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    let start;
    let raf;
    const step = (ts) => {
      if (start === undefined) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      setValue(Math.floor(progress * target));
      if (progress < 1) raf = requestAnimationFrame(step);
      else setValue(target);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [trigger, target, duration]);
  return value;
}

/* ============================================================
   DESIGN-SYSTEM PRIMITIVES (Cosmos tokens)
============================================================ */

function PrimaryButton({ children, href, className = "" }) {
  return (
    <a
      href={href}
      className={
        "inline-flex items-center gap-2 rounded-[16px] bg-[var(--color-ink-black)] px-6 py-4 text-[16px] font-medium text-[var(--color-paper-white)] transition-opacity duration-200 hover:opacity-85 " +
        className
      }
      style={{ fontFamily: "var(--font-cosmosoracle)" }}
    >
      {children}
    </a>
  );
}

function OutlinedButton({ children, href, className = "" }) {
  return (
    <a
      href={href}
      className={
        "inline-flex items-center gap-2 rounded-[16px] border px-6 py-4 text-[16px] font-medium transition-colors duration-200 hover:bg-[var(--color-ink-black)] hover:text-[var(--color-paper-white)] " +
        className
      }
      style={{
        fontFamily: "var(--font-cosmosoracle)",
        borderColor: "var(--color-border-med)",
        color: "var(--color-ink-black)",
        backgroundColor: "var(--color-paper-white)",
      }}
    >
      {children}
    </a>
  );
}

function GhostLink({ children, href, className = "" }) {
  return (
    <a
      href={href}
      className={"group inline-flex items-center gap-1.5 text-[18px] font-normal text-[var(--color-ink-black)] " + className}
      style={{ fontFamily: "var(--font-cosmosoracle)" }}
    >
      <span className="border-b border-transparent transition-colors duration-200 group-hover:border-[var(--color-ink-black)]">
        {children}
      </span>
      <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </a>
  );
}

function EyebrowLabel({ children }) {
  return (
    <div className="mb-4 flex items-center gap-2 text-[var(--color-ink-black)]">
      <DotCluster size={16} />
      <span
        className="text-[15px] font-medium uppercase"
        style={{ fontFamily: "var(--font-cosmosoracle)", letterSpacing: "0em" }}
      >
        {children}
      </span>
    </div>
  );
}

function TagPill({ children }) {
  return (
    <span
      className="rounded-[16px] border px-3 py-1.5 text-[14px] font-medium"
      style={{
        fontFamily: "var(--font-cosmosoracle)",
        borderColor: "var(--color-border-med)",
        color: "var(--color-stone)",
        backgroundColor: "var(--color-paper-white)",
      }}
    >
      {children}
    </span>
  );
}

function StatusTag({ label }) {
  return (
    <span
      className="rounded-[16px] px-3 py-1 text-[12px] font-medium uppercase"
      style={{
        fontFamily: "var(--font-cosmosoracle)",
        color: "var(--color-paper-white)",
        backgroundColor: "var(--color-ink-black)",
        letterSpacing: "0.02em",
      }}
    >
      {label}
    </span>
  );
}

function StatBlock({ value, label, delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const numeric = parseInt(value, 10) || 0;
  const suffix = value.replace(/^[0-9]+/, "");
  const count = useCountUp(numeric, visible);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal ${visible ? "is-visible" : ""}`} style={{ transitionDelay: `${delay}ms` }}>
      <div
        className="text-[33px] font-normal tabular-nums text-[var(--color-ink-black)]"
        style={{ fontFamily: "var(--font-cosmosoracle)", letterSpacing: "-1.32px", fontWeight: 350 }}
      >
        {count}
        {suffix}
      </div>
      <div
        className="mt-1 text-[14px] uppercase text-[var(--color-pebble)]"
        style={{ fontFamily: "var(--font-cosmosoracle)", letterSpacing: "0.02em" }}
      >
        {label}
      </div>
    </div>
  );
}

/* Dot-grid watermark used in place of photography on project / repo cards */
function PatternHeader({ seed = 0, height = 200 }) {
  const cols = 10;
  const rows = 5;
  const dots = [];
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      const idx = y * cols + x;
      if ((idx + seed) % 3 === 0) continue;
      dots.push({ x, y });
    }
  }
  return (
    <div
      className="relative w-full overflow-hidden rounded-[16px]"
      style={{ height, backgroundColor: "var(--color-linen-canvas)" }}
    >
      <svg viewBox={`0 0 ${cols * 24} ${rows * 24}`} className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid slice">
        {dots.map((d, i) => (
          <circle
            key={i}
            cx={d.x * 24 + 12}
            cy={d.y * 24 + 12}
            r={2.1}
            fill="var(--color-ink-black)"
            opacity={0.1}
          />
        ))}
      </svg>
      <div
        className="absolute rounded-full"
        style={{
          width: 120,
          height: 120,
          right: -30 + seed * 10,
          bottom: -30,
          border: "1px solid var(--color-border-med)",
        }}
      />
      <div
        className="absolute flex h-12 w-12 items-center justify-center rounded-[12px]"
        style={{ left: 20, top: 20, backgroundColor: "var(--color-paper-white)" }}
      >
        <DotCluster size={20} className="text-[var(--color-ink-black)]" />
      </div>
    </div>
  );
}

function ProjectCard({ project, index }) {
  return (
    <article
      className="rounded-[16px] transition-transform duration-300 hover:-translate-y-1"
      style={{ backgroundColor: "var(--color-paper-white)", padding: "16px" }}
    >
      <PatternHeader seed={index} height={180} />

      <div className="mt-5 flex flex-wrap items-start justify-between gap-3">
        <div>
          <h3
            className="text-[24px] font-normal text-[var(--color-ink-black)]"
            style={{ fontFamily: "var(--font-cosmosoracle)", letterSpacing: "-0.48px", fontWeight: 400 }}
          >
            {project.name}
          </h3>
          <p
            className="mt-1 text-[15px]"
            style={{ fontFamily: "var(--font-cosmosoracle)", color: "var(--color-stone)" }}
          >
            {project.role}
          </p>
        </div>
        <StatusTag label={project.tagLabel} />
      </div>

      <p
        className="mt-4 text-[16px] leading-[1.5]"
        style={{ fontFamily: "var(--font-cosmosoracle)", color: "var(--color-stone)", letterSpacing: "-0.18px" }}
      >
        {project.description}
      </p>

      <ul className="mt-4 flex flex-col gap-2">
        {project.items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-2 text-[14px] leading-[1.5]"
            style={{ fontFamily: "var(--font-cosmosoracle)", color: "var(--color-stone)" }}
          >
            <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full" style={{ backgroundColor: "var(--color-pebble)" }} />
            {item}
          </li>
        ))}
      </ul>

      <div className="mt-5 flex flex-wrap gap-1.5">
        {project.tech.split(" · ").map((t) => (
          <TagPill key={t}>{t}</TagPill>
        ))}
      </div>

      {project.url && (
        <div className="mt-5">
          <GhostLink href={project.url}>{project.linkLabel}</GhostLink>
        </div>
      )}
    </article>
  );
}

function RepoCard({ repo, index }) {
  return (
    <a
      href={repo.url}
      target="_blank"
      rel="noreferrer"
      className="group flex flex-col rounded-[16px] transition-transform duration-300 hover:-translate-y-1"
      style={{ backgroundColor: "var(--color-paper-white)", padding: "16px" }}
    >
      <PatternHeader seed={index + 1} height={120} />
      <div className="mt-4 flex items-start justify-between gap-2">
        <h3
          className="text-[18px] font-normal text-[var(--color-ink-black)]"
          style={{ fontFamily: "var(--font-cosmosoracle)", letterSpacing: "-0.2px" }}
        >
          {repo.name}
        </h3>
        <ExternalLink className="mt-1 h-4 w-4 flex-shrink-0 text-[var(--color-pebble)] transition-colors duration-200 group-hover:text-[var(--color-ink-black)]" />
      </div>
      <p
        className="mt-2 flex-1 text-[14px] leading-[1.5]"
        style={{ fontFamily: "var(--font-cosmosoracle)", color: "var(--color-stone)" }}
      >
        {repo.description}
      </p>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {repo.stack.split(" · ").map((t) => (
          <TagPill key={t}>{t}</TagPill>
        ))}
      </div>
    </a>
  );
}

/* ============================================================
   REMIX — horizontal, dual-direction tech-stack showcase
============================================================ */

function TechTile({ name, Icon }) {
  return (
    <div
      className="flex flex-shrink-0 items-center gap-3 rounded-[16px] border px-5 py-3.5"
      style={{
        borderColor: "var(--color-border-soft)",
        backgroundColor: "var(--color-paper-white)",
      }}
    >
      <Icon className="h-5 w-5 text-[var(--color-ink-black)]" />
      <span
        className="whitespace-nowrap text-[15px] font-normal text-[var(--color-ink-black)]"
        style={{ fontFamily: "var(--font-cosmosoracle)" }}
      >
        {name}
      </span>
    </div>
  );
}

function MarqueeRow({ items, direction = "left", speed = 32 }) {
  const doubled = [...items, ...items];
  return (
    <div className="marquee-row relative overflow-hidden">
      <div
        className="marquee-track flex w-max gap-3"
        style={{
          animationDuration: `${speed}s`,
          animationDirection: direction === "right" ? "reverse" : "normal",
        }}
      >
        {doubled.map((t, i) => (
          <TechTile key={`${t.name}-${i}`} name={t.name} Icon={t.Icon} />
        ))}
      </div>
    </div>
  );
}

/* ============================================================
   REMIX — floating logo collage for the hero (in place of photos)
============================================================ */

const HERO_TILES = [
  { Icon: NextIcon, top: "6%", left: "6%", size: 64, rotate: -8 },
  { Icon: ReactIcon, top: "12%", left: "82%", size: 56, rotate: 6 },
  { Icon: AwsIcon, top: "70%", left: "4%", size: 60, rotate: 5 },
  { Icon: TypeScriptIcon, top: "78%", left: "86%", size: 60, rotate: -6 },
  { Icon: NodeIcon, top: "4%", left: "42%", size: 48, rotate: 9 },
  { Icon: MongoIcon, top: "84%", left: "44%", size: 48, rotate: -4 },
  { Icon: DynamoIcon, top: "38%", left: "92%", size: 46, rotate: 4 },
  { Icon: PythonIcon, top: "42%", left: "2%", size: 46, rotate: -5 },
];

function FloatingCollage() {
  return (
    <div className="pointer-events-none absolute inset-0 hidden lg:block" aria-hidden="true">
      {HERO_TILES.map((t, i) => (
        <div
          key={i}
          className="float-tile absolute flex items-center justify-center rounded-[12px] border"
          style={{
            top: t.top,
            left: t.left,
            width: t.size,
            height: t.size,
            backgroundColor: "var(--color-paper-white)",
            borderColor: "var(--color-border-soft)",
            transform: `rotate(${t.rotate}deg)`,
            animationDelay: `${i * 0.4}s`,
          }}
        >
          <t.Icon style={{ width: t.size * 0.42, height: t.size * 0.42 }} className="text-[var(--color-ink-black)]" />
        </div>
      ))}
    </div>
  );
}

/* ============================================================
   PAGE
============================================================ */

function ThemeToggle({ theme, onToggle, className = "" }) {
  const isDark = theme === "dark";
  return (
    <button
      onClick={onToggle}
      aria-label="Toggle dark mode"
      className={
        "flex h-8 w-8 items-center justify-center rounded-[9999px] text-[var(--color-ink-black)] transition-colors duration-200 hover:bg-[var(--color-linen-canvas)] " +
        className
      }
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const stored = typeof window !== "undefined" ? window.localStorage.getItem("theme") : null;
    if (stored === "light" || stored === "dark") {
      setTheme(stored);
    } else if (typeof window !== "undefined" && window.matchMedia?.("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    }
  }, []);

  const toggleTheme = () => {
    setTheme((t) => {
      const next = t === "light" ? "dark" : "light";
      if (typeof window !== "undefined") window.localStorage.setItem("theme", next);
      return next;
    });
  };

  const navLinks = [
    { label: "Stack", href: "#stack" },
    { label: "Projects", href: "#projects" },
    { label: "Repos", href: "#repos" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <div
      data-theme={theme}
      className="theme-root min-h-screen antialiased"
      style={{
        backgroundColor: "var(--color-linen-canvas)",
        color: "var(--color-ink-black)",
        fontFamily: "var(--font-cosmosoracle)",
      }}
    >
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300..600&display=swap");

        :root,
        [data-theme="light"] {
          --color-linen-canvas: #f7f5f3;
          --color-ink-black: #0d0d0d;
          --color-paper-white: #ffffff;
          --color-stone: #6e6a69;
          --color-pebble: #9a9796;
          --color-border-soft: rgba(13, 13, 13, 0.08);
          --color-border-med: rgba(13, 13, 13, 0.15);
          --font-cosmosoracle: "Fraunces", ui-serif, Georgia, serif;
        }

        [data-theme="dark"] {
          --color-linen-canvas: #121110;
          --color-ink-black: #f5f2ee;
          --color-paper-white: #1c1a19;
          --color-stone: #a8a3a0;
          --color-pebble: #726d6a;
          --color-border-soft: rgba(245, 242, 238, 0.08);
          --color-border-med: rgba(245, 242, 238, 0.15);
        }

        * {
          box-sizing: border-box;
        }

        body {
          background-color: var(--color-linen-canvas);
        }

        .theme-root,
        .theme-root * {
          transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
        }

        .reveal {
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .reveal.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .marquee-track {
          animation-name: marquee;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
        .marquee-row:hover .marquee-track {
          animation-play-state: paused;
        }

        @keyframes floaty {
          0%, 100% {
            transform: translateY(0) rotate(var(--rot, 0deg));
          }
          50% {
            transform: translateY(-8px) rotate(var(--rot, 0deg));
          }
        }
        .float-tile {
          animation: floaty 6s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .reveal {
            opacity: 1 !important;
            transform: none !important;
            transition: none !important;
          }
          .marquee-track,
          .float-tile {
            animation: none !important;
          }
        }
      `}</style>

      {/* Announcement strip */}
      <div className="flex items-center justify-center gap-2 py-2.5 text-center text-[14px]" style={{ color: "var(--color-stone)" }}>
        <DotCluster size={13} />
        Available for full-stack & IT roles.
      </div>

      {/* Floating pill nav */}
      <header className="sticky top-4 z-30 mx-auto flex max-w-[1280px] justify-center px-6">
        <div
          className="flex w-full max-w-[860px] items-center justify-between rounded-[9999px] border px-3 py-2"
          style={{ backgroundColor: "var(--color-paper-white)", borderColor: "var(--color-border-soft)" }}
        >
          <a href="#" className="flex items-center gap-2 pl-2">
            <DotCluster size={18} />
            <span className="hidden text-[16px] font-medium sm:inline" style={{ fontFamily: "var(--font-cosmosoracle)" }}>
              Roberto Gabriel Montemayor
            </span>
          </a>

          <nav className="hidden items-center gap-6 sm:flex">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="group text-[15px] font-normal text-[var(--color-ink-black)]"
                style={{ fontFamily: "var(--font-cosmosoracle)" }}
              >
                <span className="border-b border-transparent transition-colors duration-200 group-hover:border-[var(--color-ink-black)]">
                  {l.label}
                </span>
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-2 sm:flex">
            <ThemeToggle theme={theme} onToggle={toggleTheme} />
            <a
              href="https://github.com/rgmmontemayor"
              className="flex items-center gap-2 rounded-[9999px] border px-4 py-2 text-[14px] font-medium transition-colors duration-200 hover:bg-[var(--color-ink-black)] hover:text-[var(--color-paper-white)]"
              style={{ fontFamily: "var(--font-cosmosoracle)", borderColor: "var(--color-border-med)" }}
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
            <a
              href="#contact"
              className="rounded-[9999px] px-4 py-2 text-[14px] font-medium text-[var(--color-paper-white)]"
              style={{ fontFamily: "var(--font-cosmosoracle)", backgroundColor: "var(--color-ink-black)" }}
            >
              Contact
            </a>
          </div>

          <div className="flex items-center gap-1 sm:hidden">
            <ThemeToggle theme={theme} onToggle={toggleTheme} />
            <button className="p-2 text-[var(--color-ink-black)]" onClick={() => setMenuOpen((v) => !v)} aria-label="Toggle menu">
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div className="mx-auto max-w-[1280px] px-6 sm:hidden">
          <div className="mt-2 flex flex-col gap-3 rounded-[16px] border bg-[var(--color-paper-white)] p-5" style={{ borderColor: "var(--color-border-soft)" }}>
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)} style={{ fontFamily: "var(--font-cosmosoracle)" }}>
                {l.label}
              </a>
            ))}
            <a href="https://github.com/rgmmontemayor" style={{ fontFamily: "var(--font-cosmosoracle)" }}>
              GitHub ↗
            </a>
          </div>
        </div>
      )}

      {/* Hero */}
      <section className="relative mx-auto max-w-[1280px] px-6 pb-16 pt-24 sm:pt-28">
        <FloatingCollage />

        <div className="relative mx-auto max-w-2xl text-center">
          <Reveal>
            <div className="flex justify-center">
              <EyebrowLabel>Portfolio</EyebrowLabel>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <h1
              className="text-[58px] sm:text-[74px]"
              style={{
                fontFamily: "var(--font-cosmosoracle)",
                fontWeight: 350,
                letterSpacing: "-0.05em",
                lineHeight: 0.95,
                color: "var(--color-ink-black)",
              }}
            >
              Roberto Gabriel Montemayor
            </h1>
          </Reveal>

          <Reveal delay={140}>
            <p className="mt-4 text-[18px]" style={{ fontFamily: "var(--font-cosmosoracle)", color: "var(--color-stone)" }}>
              Full-stack / Backend Developer
            </p>
          </Reveal>

          <Reveal delay={200}>
            <p
              className="mx-auto mt-3 max-w-lg text-[16px] leading-[1.5]"
              style={{ fontFamily: "var(--font-cosmosoracle)", color: "var(--color-stone)", letterSpacing: "-0.18px" }}
            >
              Building serverless AWS back-ends and production front-ends —
              from event-driven infrastructure to the interfaces on top of it.
            </p>
          </Reveal>

          <Reveal delay={260}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <PrimaryButton href="https://github.com/rgmmontemayor">
                <Github className="h-4 w-4" /> View GitHub
              </PrimaryButton>
              <OutlinedButton href="#projects">See projects</OutlinedButton>
            </div>
          </Reveal>
        </div>

        <div className="relative mt-16 grid grid-cols-2 gap-8 border-t pt-8 sm:grid-cols-4" style={{ borderColor: "var(--color-border-soft)" }}>
          <StatBlock value="2" label="Live Systems" delay={0} />
          <StatBlock value="7" label="Open Repos" delay={80} />
          <StatBlock value="9+" label="AWS Services" delay={160} />
          <StatBlock value="14" label="Technologies" delay={240} />
        </div>
      </section>

      {/* Tech stack — horizontal scrolling showcase */}
      <section id="stack" className="mx-auto max-w-[1280px] px-6 py-10">
        <Reveal>
          <EyebrowLabel>Tech stack</EyebrowLabel>
        </Reveal>
        <Reveal delay={60}>
          <p className="mb-8 max-w-md text-[16px] leading-[1.5]" style={{ fontFamily: "var(--font-cosmosoracle)", color: "var(--color-stone)" }}>
            Tools I reach for most, drifting past on their own — hover to pause.
          </p>
        </Reveal>
        <Reveal delay={100}>
          <div className="flex flex-col gap-3">
            <MarqueeRow items={TECH_STACK} direction="left" speed={34} />
            <MarqueeRow items={[...TECH_STACK].reverse()} direction="right" speed={40} />
          </div>
        </Reveal>
      </section>

      {/* Featured projects */}
      <section id="projects" className="mx-auto max-w-[1280px] px-6 py-16">
        <Reveal>
          <EyebrowLabel>Projects</EyebrowLabel>
        </Reveal>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {FEATURED.map((p, i) => (
            <Reveal key={p.name} delay={i * 100}>
              <ProjectCard project={p} index={i} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Repos */}
      <section id="repos" className="mx-auto max-w-[1280px] px-6 py-16">
        <Reveal>
          <EyebrowLabel>Repositories</EyebrowLabel>
        </Reveal>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {REPOS.map((r, i) => (
            <Reveal key={r.name} delay={i * 60}>
              <RepoCard repo={r} index={i} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Footer / contact */}
      <footer id="contact" className="border-t" style={{ borderColor: "var(--color-border-soft)" }}>
        <div className="mx-auto max-w-[1280px] px-6 py-16">
          <Reveal>
            <EyebrowLabel>Contact</EyebrowLabel>
            <h2
              className="max-w-lg text-[38px]"
              style={{ fontFamily: "var(--font-cosmosoracle)", fontWeight: 350, letterSpacing: "-1.52px", lineHeight: 1.08 }}
            >
              Let's build something.
            </h2>
            <p
              className="mt-4 max-w-xl text-[16px] leading-[1.5]"
              style={{ fontFamily: "var(--font-cosmosoracle)", color: "var(--color-stone)", letterSpacing: "-0.18px" }}
            >
              Open to full-stack and back-end roles — serverless AWS,
              Next.js, or general web development and support.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <GhostLink href="https://github.com/rgmmontemayor">github.com/rgmmontemayor</GhostLink>
              <span className="text-[14px]" style={{ fontFamily: "var(--font-cosmosoracle)", color: "var(--color-pebble)" }}>
                [montemayorrgm@gmail.com]
              </span>
            </div>
            <div className="mt-12 flex items-center gap-2">
              <DotCluster size={14} />
              <p className="text-[12px]" style={{ fontFamily: "var(--font-cosmosoracle)", color: "var(--color-pebble)" }}>
                built with Next.js &amp; Tailwind
              </p>
            </div>
          </Reveal>
        </div>
      </footer>
    </div>
  );
}
