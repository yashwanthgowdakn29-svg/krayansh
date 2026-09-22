import { services } from './services';

/* ──────────────────────────────────────────────────────────────
   Single source of truth for chrome, navigation and page content.
   Only verifiable Krayansh facts live here — no invented metrics,
   client logos, dates or headcounts.
   ────────────────────────────────────────────────────────────── */

export const brand = {
  name: 'KRAYANSH',
  // The orb alone, trimmed out of tab-logo.png: that file stacks the orb over
  // a baked-in KRAYANSH wordmark on a mostly empty 512x512 canvas, so it both
  // rendered tiny and duplicated the wordmark the chrome sets in type. The
  // src/assets logos are opaque RGB and would show a white plate on the navy.
  logo: '/krayansh-orb.png',
  // Swap to 'GLOBAL PVT LTD' here if you want the registered-entity lockup.
  subtitle: 'TECHNOLOGY & INNOVATION',
  tagline: 'Engineering tomorrow\u2019s solutions, from software to circuits.',
  description:
    'We empower businesses with technology solutions that drive efficiency, agility and growth \u2014 across software, cloud, AI, IoT and embedded hardware.',
};

export const contact = {
  email: 'info@krayansh.com',
  phone: '+91 9886581294',
  phoneHref: 'tel:+919886581294',
  emailHref: 'mailto:info@krayansh.com',
  addressLines: [
    'Krayansh',
    'No 34, 6E Main Road, 2nd Phase, Bovipalya,',
    'Nagapura, Mahalakshmipuram Layout,',
    'Bengaluru, Karnataka 560086, India',
  ],
  city: 'Bengaluru, Karnataka, India',
  response: 'We typically respond within 24 hours',
  instagram: 'https://www.instagram.com/krayansh.global',
};

export const navigation = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  {
    href: '/services',
    label: 'Services',
    children: services.slice(0, 8).map((service) => ({
      href: `/services/${service.slug}`,
      label: service.shortTitle,
    })),
  },
  {
    href: '/solutions',
    label: 'Solutions',
    children: [
      { href: '/solutions#digital-platforms', label: 'Digital Platforms' },
      { href: '/solutions#intelligent-systems', label: 'Intelligent Systems' },
      { href: '/solutions#connected-technology', label: 'Connected Technology' },
      { href: '/solutions#product-engineering', label: 'Product Engineering' },
    ],
  },
  {
    href: '/industries',
    label: 'Industries',
    children: [
      { href: '/industries#healthcare', label: 'Healthcare' },
      { href: '/industries#manufacturing', label: 'Manufacturing' },
      { href: '/industries#retail', label: 'Retail & E-Commerce' },
      { href: '/industries#logistics', label: 'Logistics & Mobility' },
      { href: '/industries#technologies', label: 'Technologies We Use' },
    ],
  },
  { href: '/insights', label: 'Insights' },
  { href: '/careers', label: 'Careers' },
  { href: '/contact', label: 'Contact Us' },
];

/* Fact strip — every figure below is derived from this site's own content
   or from stated company facts. Nothing here is aspirational. */
export const factStrip = [
  { icon: 'layers', value: `${services.length}`, label: 'Engineering services' },
  { icon: 'chip', value: '2', label: 'Practices: software & hardware' },
  { icon: 'globe', value: 'Silicon \u2192 Cloud', label: 'End-to-end coverage' },
  { icon: 'pin', value: 'Bengaluru', label: 'India engineering base' },
];

export const values = [
  { icon: 'bulb', title: 'Innovation Driven', text: 'We adopt emerging technology and creative thinking to build future-ready solutions that keep you ahead of the curve.' },
  { icon: 'shield', title: 'Reliable & Secure', text: 'Security and reliability sit at the core of everything we do, so your data, operations and business stay protected.' },
  { icon: 'chart', title: 'Scalable Solutions', text: 'Our solutions grow with your business, whether you are starting small or scaling fast across regions and teams.' },
  { icon: 'users', title: 'Client Focused', text: 'We listen, collaborate and align with your goals to deliver solutions that create real value for your business.' },
  { icon: 'globe', title: 'Domain Expertise', text: 'Cross-discipline experience from silicon to cloud lets us solve complex challenges with confidence and clarity.' },
  { icon: 'handshake', title: 'Long-Term Partnership', text: 'We build lasting relationships based on trust, transparency and consistent delivery, not one-off projects.' },
];

export const approach = [
  { step: '01', title: 'Discover', text: 'Frame the opportunity, the users and the constraints before a line of code is written.' },
  { step: '02', title: 'Design', text: 'Shape the experience, the system architecture and a realistic plan for delivery.' },
  { step: '03', title: 'Deliver', text: 'Build with visible milestones, rigorous testing and a clean, documented handover.' },
  { step: '04', title: 'Evolve', text: 'Support the platform and turn operational insight into its next advantage.' },
];

export const solutionAreas = [
  {
    id: 'digital-platforms',
    icon: 'code',
    title: 'Digital Platforms',
    summary: 'Web applications, enterprise systems and customer experiences designed around the workflows your teams actually run.',
    points: ['Responsive, accessible product interfaces', 'Scalable application architecture', 'API and third-party integration', 'Reporting and operational visibility'],
    services: ['web-application-development', 'mobile-application-development', 'enterprise-solutions'],
  },
  {
    id: 'intelligent-systems',
    icon: 'brain',
    title: 'Intelligent Systems',
    summary: 'Data-led automation and AI capability that turns everyday operations into a measurable advantage.',
    points: ['Predictive analytics and decision support', 'Intelligent workflow automation', 'Cloud-native delivery pipelines', 'Security-conscious architecture'],
    services: ['ai-machine-learning', 'cloud-devops', 'cybersecurity-services'],
  },
  {
    id: 'connected-technology',
    icon: 'network',
    title: 'Connected Technology',
    summary: 'IoT ecosystems that link devices, data and decision-making in real-world environments.',
    points: ['Sensor and device integration', 'Edge data processing', 'Reliable cloud connectivity', 'Fleet monitoring and management'],
    services: ['iot-edge-computing', 'system-integration', 'network-infrastructure'],
  },
  {
    id: 'product-engineering',
    icon: 'chip',
    title: 'Product Engineering',
    summary: 'Electronics, embedded systems and prototyping for technology products built to endure in the field.',
    points: ['Schematic capture and PCB layout', 'Microcontroller firmware', 'Design-for-manufacture review', 'Lifecycle and sustaining support'],
    services: ['pcb-design-prototyping', 'embedded-systems', 'sustaining-engineering'],
  },
];

export const industries = [
  { id: 'healthcare', icon: 'heart', title: 'Healthcare', text: 'Secure, data-driven platforms and connected devices that support patient care and clinical operations.' },
  { id: 'manufacturing', icon: 'factory', title: 'Manufacturing', text: 'Industrial IoT, monitoring and automation that bring visibility to the plant floor and the supply chain.' },
  { id: 'finance', icon: 'bank', title: 'Finance', text: 'Compliant, resilient software for financial workflows, reporting and customer-facing services.' },
  { id: 'retail', icon: 'cart', title: 'Retail & E-Commerce', text: 'Customer experiences and back-office systems that hold up under real transaction volume.' },
  { id: 'education', icon: 'cap', title: 'Education', text: 'Learning platforms and administrative systems built for large, varied and distributed user bases.' },
  { id: 'logistics', icon: 'truck', title: 'Logistics & Mobility', text: 'Tracking, telemetry and edge devices that keep goods, fleets and field assets accounted for.' },
];

export const techStacks = [
  { icon: 'code', title: 'Web Technologies', items: ['React', 'Next.js', 'Angular', 'Vue.js', 'TypeScript'] },
  { icon: 'mobile', title: 'Mobile Technologies', items: ['React Native', 'Flutter', 'Swift', 'Kotlin'] },
  { icon: 'cloud', title: 'Cloud Platforms', items: ['AWS', 'Microsoft Azure', 'Google Cloud', 'Docker', 'Kubernetes'] },
  { icon: 'brain', title: 'AI & Data', items: ['Python', 'TensorFlow', 'PyTorch', 'Data Engineering'] },
  { icon: 'server', title: 'Backend', items: ['Node.js', 'Python', 'Java', '.NET', 'PostgreSQL'] },
  { icon: 'chip', title: 'Hardware & Embedded', items: ['C / C++', 'RTOS', 'STM32', 'ESP32', 'KiCad / Altium'] },
];

export const journey = [
  { phase: 'Now', icon: 'rocket', title: 'Technology partner', text: 'Solving urgent digital and engineering challenges for teams that need software and hardware depth together.' },
  { phase: 'Building', icon: 'layers', title: 'Two joined practices', text: 'A software practice and a hardware practice under one accountable delivery team.' },
  { phase: 'Next', icon: 'brain', title: 'Reusable intelligence', text: 'Turning proven client capability into robust, repeatable technology foundations.' },
  { phase: 'Future', icon: 'chip', title: 'Krayansh products', text: 'Launching proprietary products in AI, connected systems and automation where we can create distinct value.' },
];

export const mission = {
  mission: 'To deliver innovative, reliable and scalable technology that helps businesses optimise operations, accelerate growth and create lasting value.',
  vision: 'To be a trusted engineering partner recognised for connecting software and hardware into products that genuinely work in the real world.',
  values: [
    { icon: 'shield', title: 'Integrity', text: 'We do the right thing, always.' },
    { icon: 'bulb', title: 'Innovation', text: 'We embrace change and create impact.' },
    { icon: 'star', title: 'Excellence', text: 'We pursue the highest standards.' },
    { icon: 'users', title: 'Collaboration', text: 'We succeed together with our clients.' },
  ],
};

/* Editorial perspectives, capability-led. No invented publication dates or
   bylines, so nothing here can go stale or misrepresent a publishing record. */
export const insights = [
  { id: 'silicon-to-cloud', tag: 'Engineering', title: 'Why silicon-to-cloud thinking beats stitched-together vendors', text: 'When firmware, connectivity and the application layer are designed by one team, the seams that usually cause field failures simply do not exist.' },
  { id: 'iot-reliability', tag: 'IoT', title: 'Designing IoT deployments that survive the real world', text: 'Power loss, patchy connectivity and physical tampering are the norm, not the exception. Reliable deployments plan for all three from day one.' },
  { id: 'ai-in-operations', tag: 'AI & Data', title: 'Putting AI where it actually pays back', text: 'The highest-return AI work is rarely the most visible. It is usually the quiet automation of a process someone repeats a hundred times a week.' },
  { id: 'cloud-cost', tag: 'Cloud', title: 'Cloud architecture decisions that show up on the invoice', text: 'Most cloud overspend is architectural, not operational. A few early decisions determine the shape of the bill for years.' },
  { id: 'pcb-dfm', tag: 'Hardware', title: 'Design-for-manufacture is a schedule decision', text: 'A board that cannot be assembled at volume is not a finished design. DFM review belongs before the prototype, not after it.' },
  { id: 'security-baseline', tag: 'Security', title: 'A practical security baseline for growing product teams', text: 'Identity, secrets handling, dependency hygiene and logging. Get these four right before buying anything with a dashboard.' },
];

/* Disciplines we hire into, framed as areas of interest rather than confirmed
   vacancies, so the page cannot go stale or overstate current openings. */
export const careerAreas = [
  { icon: 'code', title: 'Software Engineering', text: 'Web and mobile application engineers who care about architecture, performance and the details users feel.' },
  { icon: 'chip', title: 'Embedded & Firmware', text: 'Engineers comfortable close to the metal: microcontrollers, peripherals, real-time behaviour and debugging.' },
  { icon: 'cloud', title: 'Cloud & DevOps', text: 'Practitioners who make delivery boring in the best way: automated, observable and reliably repeatable.' },
  { icon: 'brain', title: 'AI & Data', text: 'People who can move from messy operational data to a model that survives contact with production.' },
  { icon: 'pen', title: 'Design & Experience', text: 'Designers who can hold both the interface and the underlying system in their head at the same time.' },
  { icon: 'network', title: 'Hardware & PCB', text: 'Schematic capture, layout and prototyping engineers who think about manufacture from the first sketch.' },
];

export const cultureNotes = [
  { icon: 'layers', title: 'Whole-system work', text: 'Engineers here see a problem from silicon to cloud, not one narrow slice of it.' },
  { icon: 'users', title: 'Small, senior teams', text: 'Direct client contact, real ownership and short paths between decision and delivery.' },
  { icon: 'bulb', title: 'Room to build', text: 'Client work funds the insight; our own product ideas are where that insight compounds.' },
  { icon: 'pin', title: 'Based in Bengaluru', text: 'An India engineering base serving clients wherever the work takes us.' },
];
