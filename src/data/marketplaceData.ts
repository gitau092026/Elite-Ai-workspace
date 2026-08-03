export interface Category {
  id: string;
  title: string;
  description: string;
  iconType: 'automation' | 'agent' | 'conversational' | 'generative' | 'support';
  count?: string;
}

export interface Project {
  id: string;
  type: 'Fixed price project' | 'Hourly price project';
  title: string;
  price: string;
  duration: string;
  location: string;
  tags: string[];
  description: string;
  clientName: string;
  postedDate: string;
  proposalsCount: number;
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  commentsCount: number;
  snippet: string;
  readTime: string;
  category: string;
}

export const CATEGORIES: Category[] = [
  {
    id: 'ai-automation',
    title: 'Ai Automation',
    description: 'Workflow optimization, task delegation, process acceleration, and intelligent business automation.',
    iconType: 'automation',
    count: '140+ Talents'
  },
  {
    id: 'ai-agents',
    title: 'Ai Agents',
    description: 'Virtual assistants, customer support, sales enablement, and intelligent conversational engagement.',
    iconType: 'agent',
    count: '210+ Talents'
  },
  {
    id: 'conversational-ai',
    title: 'Conversational Ai',
    description: 'Smart chatbots, voice assistants, customer service, and personalized real-time conversational experiences.',
    iconType: 'conversational',
    count: '95+ Talents'
  },
  {
    id: 'generative-ai',
    title: 'Generative Ai',
    description: 'Content creation, image generation, idea exploration, and innovative design through advanced AI models.',
    iconType: 'generative',
    count: '310+ Talents'
  },
  {
    id: 'customer-support',
    title: 'Customer Support',
    description: '24/7 assistance, ticket resolution, inquiry handling, and personalized support powered by intelligent AI agents.',
    iconType: 'support',
    count: '88+ Talents'
  }
];

export const INITIAL_PROJECTS: Project[] = [
  {
    id: 'proj-1',
    type: 'Fixed price project',
    title: 'Whatsapp to Website Automated Listing and Posting',
    price: '$ 500.00 - $ 1,000.00',
    duration: '1 to 3 months',
    location: 'Remote',
    tags: ['Research', 'WhatsApp API', 'Automation'],
    description: 'Looking for an experienced AI automation developer to build an automated bridge between WhatsApp messaging and our WordPress/Custom web portal for real-time inventory listing.',
    clientName: 'Kreative Tech Ltd',
    postedDate: '2 days ago',
    proposalsCount: 8
  },
  {
    id: 'proj-2',
    type: 'Hourly price project',
    title: 'AI Agent for Inventory Management and Demand Forecasting',
    price: '$ 2,400.00',
    duration: '1 to 3 months',
    location: 'Remote',
    tags: ['BrandBucket AI', 'Domain & Name Generators', 'Python', 'LLM Agents'],
    description: 'We require a specialized AI Agent capable of continuously analyzing sales velocity, predicting demand surges, and dynamically reordering stock across multi-channel marketplaces.',
    clientName: 'Global Logistics Hub',
    postedDate: '1 day ago',
    proposalsCount: 14
  },
  {
    id: 'proj-3',
    type: 'Hourly price project',
    title: 'AI Agent for Real-Time Language Translation',
    price: '$ 2,800.00',
    duration: '1 to 3 months',
    location: 'Remote',
    tags: ['App Builders', 'Lovable AI', 'Whisper API', 'Realtime Audio'],
    description: 'Seeking a developer to construct a low-latency bidirectional voice and text translation agent integrated with Twilio and WebRTC for international client support calls.',
    clientName: 'OmniTranslate Corp',
    postedDate: '3 days ago',
    proposalsCount: 21
  },
  {
    id: 'proj-4',
    type: 'Fixed price project',
    title: 'AI Agent for Personalized E-Learning Recommendations',
    price: '$ 40.00 - $ 50.00',
    duration: '1 to 3 months',
    location: 'Remote',
    tags: ['App Builders', 'Apsy AI', 'Vector DB', 'RAG'],
    description: 'Build an embedded AI learning mentor that evaluates student quiz scores, adapts learning pathways, and delivers personalized video and text recommendations.',
    clientName: 'EduSmart Platform',
    postedDate: 'Just now',
    proposalsCount: 3
  },
  {
    id: 'proj-5',
    type: 'Fixed price project',
    title: 'Autonomous Sales Prospecting AI Agent with CRM Sync',
    price: '$ 1,200.00 - $ 2,500.00',
    duration: 'Less than 1 month',
    location: 'Remote',
    tags: ['Sales AI', 'HubSpot API', 'LangChain'],
    description: 'Develop an AI outreach agent that researches prospects on LinkedIn, drafts tailored cold emails, handles initial objection handling, and schedules meetings into Google Calendar.',
    clientName: 'Apex Growth Labs',
    postedDate: '4 days ago',
    proposalsCount: 19
  },
  {
    id: 'proj-6',
    type: 'Hourly price project',
    title: 'Multimodal Customer Support & Visual Troubleshooting Agent',
    price: '$ 3,500.00',
    duration: '3 to 6 months',
    location: 'Remote',
    tags: ['Vision AI', 'Customer Support', 'Zendesk'],
    description: 'Build a customer care agent that can analyze uploaded photo/video error reports, diagnose hardware issues, and guide users through interactive repair steps.',
    clientName: 'Hardware Hero Inc',
    postedDate: '5 days ago',
    proposalsCount: 12
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'post-1',
    title: 'AI Agents: Transforming the Future of Business',
    date: 'May 31, 2022',
    commentsCount: 0,
    snippet: 'Discover how modern autonomous AI agents are replacing repetitive workflows and driving unprecedented operational agility in enterprise environments.',
    readTime: '5 min read',
    category: 'Industry Insights'
  },
  {
    id: 'post-2',
    title: 'Enhanced Operational Efficiency with AI Agents',
    date: 'May 31, 2022',
    commentsCount: 0,
    snippet: 'A step-by-step framework for deploying task-oriented AI agents in customer operations, logistics forecasting, and real-time inventory management.',
    readTime: '4 min read',
    category: 'Best Practices'
  },
  {
    id: 'post-3',
    title: 'Improving Workflow Integration with AI Agents',
    date: 'May 31, 2022',
    commentsCount: 0,
    snippet: 'Learn how to seamlessly connect LLM orchestration frameworks with existing CRMs, ERPs, and messaging webhooks for frictionless enterprise deployment.',
    readTime: '6 min read',
    category: 'Developer Guide'
  }
];

export const BRANDS = [
  { name: 'VISA', textStyle: 'tracking-widest font-extrabold text-2xl' },
  { name: 'PayPal', textStyle: 'italic font-bold text-2xl' },
  { name: 'TOYOTA', textStyle: 'tracking-wider font-bold text-2xl' },
  { name: 'Google', textStyle: 'font-medium text-2xl' },
  { name: 'adidas', textStyle: 'lowercase font-bold text-2xl' },
  { name: 'NETFLIX', textStyle: 'tracking-wider font-black text-2xl text-red-600/70' },
  { name: 'Abbott', textStyle: 'italic font-semibold text-2xl' }
];
