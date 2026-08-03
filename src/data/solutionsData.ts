export interface AIService {
  id: string;
  iconName: string;
  title: string;
  tagline: string;
  description: string;
  benefits: string[];
  popularUseCases: string[];
  deploymentTime: string;
}

export interface AgentTemplate {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  badge: string;
  features: string[];
  integrations: string[];
  roiMetric: string;
  demoInput: string;
  demoOutput: string;
  image: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  badge?: string;
  price: string;
  billingPeriod: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  ctaText: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export const AI_SERVICES: AIService[] = [
  {
    id: 'support-agents',
    iconName: 'Headphones',
    title: '24/7 Autonomous Customer Support Agents',
    tagline: 'Instant 0.2s multi-channel resolution across Web, WhatsApp & Email',
    description: 'Transform customer support with custom RAG-powered agents trained directly on your product docs, help center, and past ticket history. Resolves up to 82% of inquiries without human intervention.',
    benefits: [
      'Reduces ticket backlog by over 80%',
      'Seamless human handoff when escalation is needed',
      'Multi-lingual support across 50+ languages',
      'Real-time sentiment detection & customer routing'
    ],
    popularUseCases: ['WhatsApp Order Tracking', 'SaaS Technical Support', 'E-commerce Refunds & Exchanges'],
    deploymentTime: '3 - 5 Days'
  },
  {
    id: 'workflow-automation',
    iconName: 'Cpu',
    title: 'Workflow & Process Automation Agents',
    tagline: 'End-to-end multi-agent orchestration for back-office operations',
    description: 'Eliminate repetitive manual data entry, PDF invoice processing, and cross-platform syncs. Our autonomous agents connect directly with your CRM, ERP, and internal databases.',
    benefits: [
      'Automated PDF & invoice parsing into accounting tools',
      'Instant CRM deal stage updates & team alerts',
      'Zero human error in structured data entry',
      'Runs continuously 24 hours a day, 365 days a year'
    ],
    popularUseCases: ['Invoice Processing', 'Lead Qualification & Enrichment', 'Cross-System Data Sync'],
    deploymentTime: '5 - 7 Days'
  },
  {
    id: 'sales-lead-gen',
    iconName: 'TrendingUp',
    title: 'Sales & Lead Generation AI Agents',
    tagline: 'Autonomous outbound & inbound sales funnel qualification',
    description: 'Deploy AI agents that engage inbound leads within 3 seconds, ask BANT qualification questions, answer objections, and automatically book meetings directly onto your sales team calendar.',
    benefits: [
      '3x increase in qualified lead conversion speed',
      'Direct sync with Google Calendar, Calendly & HubSpot',
      'Personalized multi-touch follow-up emails & WhatsApp messages',
      'Automated lead scoring based on custom parameters'
    ],
    popularUseCases: ['Inbound Lead Instant Response', 'Outbound Prospect Research', 'Automated Meeting Booking'],
    deploymentTime: '3 - 5 Days'
  },
  {
    id: 'ecommerce-agents',
    iconName: 'ShoppingCart',
    title: 'E-Commerce & Inventory AI Agents',
    tagline: 'Smart shopping concierges & real-time inventory management',
    description: 'Guide shoppers through personalized product recommendations, answer catalog questions, check real-time stock levels, and send cart abandonment recovery messages.',
    benefits: [
      'Boosts average order value (AOV) by up to 28%',
      'Instant stock query resolution via Shopify / WooCommerce API',
      'Automated personalized discount offerings',
      'Post-purchase tracking and review collection'
    ],
    popularUseCases: ['Shopify Sales Assistant', 'Stock Availability Alerts', 'Personalized Product Matcher'],
    deploymentTime: '4 - 6 Days'
  },
  {
    id: 'voice-agents',
    iconName: 'Mic',
    title: 'Conversational Voice & Phone AI Agents',
    tagline: 'Ultra-realistic human-sounding inbound & outbound telephony',
    description: 'Provide natural, latency-free voice AI for inbound customer inquiries, appointment confirmations, and phone order takers with natural tone, pitch, and accent adaptation.',
    benefits: [
      'Sub-500ms voice response latency for natural conversation',
      'Connects with Twilio, Plivo, or custom PBX phone systems',
      'Automatic call transcription & summary logging into CRM',
      'Handles hundreds of concurrent phone calls effortlessly'
    ],
    popularUseCases: ['Inbound Receptionist AI', 'Outbound Appointment Confirmations', 'Restaurant Order Taking'],
    deploymentTime: '5 - 8 Days'
  },
  {
    id: 'executive-assistants',
    iconName: 'Bot',
    title: 'Internal Knowledge & Executive AI Assistants',
    tagline: 'Private AI search engine for your company Slack, Teams & Drive',
    description: 'Empower your internal team with a enterprise-grade private assistant that securely searches company Google Drive, Notion, Slack, and internal wikis while preserving strict role-based permissions.',
    benefits: [
      'Saves 10+ hours per employee per week searching for info',
      '100% private & SOC2 compliant data handling',
      'Synthesizes complex PDF reports and contracts in seconds',
      'Native Slack, MS Teams, or web portal interface'
    ],
    popularUseCases: ['HR & Policy Search Bot', 'Executive Briefing Generator', 'Internal SOP Query Assistant'],
    deploymentTime: '3 - 5 Days'
  }
];

export const AGENT_TEMPLATES: AgentTemplate[] = [
  {
    id: 'tpl-support-whatsapp',
    title: 'Omnichannel Support Agent',
    category: 'Customer Support',
    tagline: '24/7 AI agent for WhatsApp, Web Chat & Email',
    description: 'Ready-to-deploy support agent equipped with RAG knowledge search, ticket escalation, and order tracking integrations.',
    badge: 'Most Popular',
    features: ['RAG Knowledge Base', 'Human Agent Escalation', 'Order Status Tracking', 'Multi-language'],
    integrations: ['WhatsApp API', 'Zendesk', 'Shopify', 'Intercom'],
    roiMetric: '85% Deflection Rate',
    demoInput: '"Where is my order #49210?"',
    demoOutput: '"Hi Sarah! Order #49210 is currently with DHL Express and is scheduled for delivery tomorrow by 2:00 PM. Track live: dhl.com/track/49210"',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'tpl-sales-qualifier',
    title: 'Sales & Lead Qualifier Agent',
    category: 'Sales & Marketing',
    tagline: 'Instant inbound lead qualification & calendar scheduler',
    description: 'Engages inbound leads in real-time, qualifies budget and timeline, and schedules meetings directly onto Google Calendar.',
    badge: 'High Conversion',
    features: ['BANT Qualification', 'Calendly Integration', 'HubSpot / Salesforce Sync', 'Objection Handling'],
    integrations: ['HubSpot', 'Google Calendar', 'Slack', 'Twilio'],
    roiMetric: '3.4x More Bookings',
    demoInput: '"We need a custom AI solution for a team of 40 within 3 weeks."',
    demoOutput: '"Great! Based on your timeline and team size, our Growth Business Plan is ideal. I have open slots with our Lead Architect tomorrow at 10 AM or 2 PM EST. Which works for you?"',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'tpl-voice-receptionist',
    title: 'Conversational Voice AI Agent',
    category: 'Voice Telephony',
    tagline: 'Human-like phone agent for inbound inquiries & bookings',
    description: 'Conversational phone agent that answers calls 24/7, answers questions, takes caller info, and transfers calls smoothly.',
    badge: 'Low Latency',
    features: ['Natural Voice Synthesis', 'Sub-400ms Response', 'CRM Call Log Sync', 'Call Transfer Logic'],
    integrations: ['Twilio', 'Plivo', 'Salesforce', 'Make.com'],
    roiMetric: '70% Phone Cost Cut',
    demoInput: '[Caller Phone Ringing] "Hi, I would like to book a consultation for Friday."',
    demoOutput: '"Hello! I would be glad to help you book that. We have openings at 11:00 AM and 3:30 PM this Friday. Which time do you prefer?"',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'tpl-invoice-processor',
    title: 'Document & Invoice Extractor Agent',
    category: 'Operations',
    tagline: 'Autonomous PDF & receipt parser for financial accounting',
    description: 'Extracts line items, tax IDs, invoice totals, and vendor names from unstructured PDFs and syncs them with QuickBooks / Xero.',
    badge: 'Automated Ops',
    features: ['Multi-page PDF Parsing', 'Line Item Extraction', 'Fraud & Duplicate Check', 'Accounting Sync'],
    integrations: ['QuickBooks', 'Xero', 'Google Drive', 'Zapier'],
    roiMetric: '99.4% Extraction Accuracy',
    demoInput: '[PDF Upload: Invoice_88291.pdf]',
    demoOutput: 'Extracted: Vendor "Apex Cloud Ltd", Amount "$2,450.00", Due Date "15 Aug 2026". Categorized under "IT Software Infrastructure". Synced to QuickBooks.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'tpl-ecommerce-concierge',
    title: 'Shopify E-Commerce Shopping Concierge',
    tagline: 'AI shopper assistant for catalog guidance & recommendations',
    category: 'E-Commerce',
    description: 'Helps customers find the right products, check inventory, apply active discount codes, and complete checkouts faster.',
    badge: 'Revenue Driver',
    features: ['Dynamic Product Search', 'Real-time Stock Lookup', 'Cart Abandonment Nudge', 'Size Guide AI'],
    integrations: ['Shopify', 'WooCommerce', 'Klaviyo', 'Stripe'],
    roiMetric: '+24% Cart Checkout',
    demoInput: '"I am looking for a water-resistant laptop backpack under $120."',
    demoOutput: '"I recommend the CyberTrail 25L Backpack ($98.00). It is fully waterproof with a padded 16" laptop sleeve and in stock in Charcoal Black!"',
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'tpl-internal-knowledge',
    title: 'Enterprise Internal Knowledge Assistant',
    category: 'Executive & HR',
    tagline: 'Secure AI search engine for internal policies, Slack & Drive',
    description: 'Allows team members to ask questions in plain English and receive accurate answers sourced from company SOPs and files.',
    badge: 'SOC2 Compliant',
    features: ['Role-based Access Control', 'Vector Document Indexing', 'Slack & Teams Bots', 'Citation Links'],
    integrations: ['Slack', 'Microsoft Teams', 'Notion', 'Google Workspace'],
    roiMetric: '12 hrs/week saved per dev',
    demoInput: '"What is our travel reimbursement policy for domestic flights?"',
    demoOutput: '"According to SOP-2025 (Section 4.2), domestic flights booked at least 14 days in advance up to $450 are auto-approved. Submit receipts via expense portal within 7 days."',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop'
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'starter-solution',
    name: 'Starter AI Agent',
    price: '$199',
    billingPeriod: 'one-time setup',
    description: 'Ideal for small businesses needing a single high-impact custom AI agent for customer support or lead capture.',
    features: [
      '1 Custom AI Agent (Support or Lead Qualification)',
      'Trained on your business docs & website (RAG)',
      '1 Core Integration (WhatsApp, Web Chat, or Email)',
      'Human takeover inbox & escalation workflow',
      '30 Days of monitoring & prompt tuning',
      '7-day turnaround deployment'
    ],
    ctaText: 'Deploy Starter Agent'
  },
  {
    id: 'growth-solution',
    name: 'Growth Multi-Agent Suite',
    badge: 'Recommended',
    price: '$500',
    billingPeriod: 'one-time setup',
    highlighted: true,
    description: 'Complete multi-agent automation ecosystem designed to streamline sales, customer support, and back-office ops.',
    features: [
      'Up to 3 Orchestrated Custom AI Agents',
      'Multi-channel setup (WhatsApp, Web, Email & CRM)',
      'Custom API Webhooks (Shopify, HubSpot, Salesforce, etc.)',
      'Automated database sync & PDF/document parsing',
      'Custom tone of voice & brand guardrails',
      '60 Days priority support & optimization',
      'Full source code & IP ownership transfer'
    ],
    ctaText: 'Build Custom Suite'
  },
  {
    id: 'enterprise-custom',
    name: 'Enterprise Dedicated AI',
    price: 'Custom / Retainer',
    billingPeriod: 'tailored build & SLA',
    description: 'For organizations requiring bespoke fine-tuned LLMs, voice telephony agents, private cloud infrastructure, and continuous AI management.',
    features: [
      'Unlimited AI Agents & Voice Telephony Workflows',
      'Private cloud / On-Premise LLM deployment (SOC2 compliant)',
      'Fine-tuned domain-specific AI models',
      'Dedicated AI Systems Architect & Support Engineer',
      'Guaranteed 99.9% uptime SLA & emergency response',
      'Continuous monthly performance optimization & training'
    ],
    ctaText: 'Book Enterprise Consultation'
  }
];

export const FAQS: FaqItem[] = [
  {
    category: 'General',
    question: 'What is a custom AI agent and how does it benefit my business?',
    answer: 'An AI agent is an autonomous software system powered by advanced Large Language Models (LLMs) that can perform complex business tasks — such as answering customer inquiries, qualifying leads, processing documents, or syncing software tools — with zero manual supervision. Unlike basic chatbots, custom AI agents understand context, remember conversation history, execute real actions through APIs, and deliver up to 80% operational efficiency gains.'
  },
  {
    category: 'Deployment & Setup',
    question: 'How long does it take to build and deploy a custom AI agent?',
    answer: 'For standard solutions (like support or lead qualification agents), initial deployment takes just 3 to 5 business days. Complex multi-agent systems with custom CRM/ERP integrations or voice telephony workflows typically take 7 to 12 business days. We handle everything from prompt engineering and database training to security testing and go-live.'
  },
  {
    category: 'Integrations',
    question: 'Can your AI agents integrate with our existing software tools?',
    answer: 'Yes! Our AI solutions seamlessly integrate with over 2,000+ business applications including WhatsApp, Shopify, HubSpot, Salesforce, Zendesk, QuickBooks, Google Workspace, Slack, Twilio, and custom REST APIs / Postgres databases.'
  },
  {
    category: 'Data & Security',
    question: 'Is our company data kept secure and private during training?',
    answer: 'Absolutely. Security and privacy are paramount. We use private, enterprise-encrypted vector stores and API endpoints. Your internal business documents, customer logs, and proprietary data are NEVER used to train public LLMs. We adhere strictly to GDPR standards and enterprise security protocols.'
  },
  {
    category: 'Maintenance & Accuracy',
    question: 'How do you ensure the AI agent gives accurate information without hallucinating?',
    answer: 'We implement rigorous Retrieval-Augmented Generation (RAG) architecture with strict confidence thresholds and guardrails. If a customer question falls outside the trained knowledge base, the agent smoothly escalates the conversation to a human team member rather than guessing.'
  },
  {
    category: 'Ownership & Billing',
    question: 'Do we own the AI agent code and custom workflows?',
    answer: 'Yes! Upon deployment and project completion, your business receives full IP ownership of all prompt templates, custom orchestration scripts, and vector knowledge indexes. We also offer optional managed AI maintenance retainers to keep your agents updated as your business expands.'
  }
];
