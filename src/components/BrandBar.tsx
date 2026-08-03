import React from 'react';

interface TechBrand {
  name: string;
  logoUrl: string;
}

export const BrandBar: React.FC = () => {
  const brands: TechBrand[] = [
    {
      name: 'OpenAI',
      logoUrl: 'https://api.iconify.design/simple-icons:openai.svg?color=%2310A37F'
    },
    {
      name: 'Anthropic',
      logoUrl: 'https://cdn.simpleicons.org/anthropic/D97757'
    },
    {
      name: 'make.com',
      logoUrl: 'https://cdn.simpleicons.org/make/A855F7'
    },
    {
      name: 'n8n',
      logoUrl: 'https://cdn.simpleicons.org/n8n/FF6D5A'
    },
    {
      name: 'Gemini',
      logoUrl: 'https://cdn.simpleicons.org/googlegemini/8E54E9'
    },
    {
      name: 'DeepSeek',
      logoUrl: 'https://cdn.simpleicons.org/deepseek/4D6BFE'
    },
    {
      name: 'Gmail',
      logoUrl: 'https://cdn.simpleicons.org/gmail/EA4335'
    },
    {
      name: 'Mailchimp',
      logoUrl: 'https://cdn.simpleicons.org/mailchimp/FFE01B'
    },
    {
      name: 'Stripe',
      logoUrl: 'https://cdn.simpleicons.org/stripe/635BFF'
    },
    {
      name: 'WordPress',
      logoUrl: 'https://cdn.simpleicons.org/wordpress/21759B'
    },
    {
      name: 'Zapier',
      logoUrl: 'https://cdn.simpleicons.org/zapier/FF4F00'
    },
    {
      name: 'HubSpot',
      logoUrl: 'https://cdn.simpleicons.org/hubspot/FF7A59'
    },
    {
      name: 'Shopify',
      logoUrl: 'https://cdn.simpleicons.org/shopify/95BF47'
    }
  ];

  // Double array for continuous seamless right-to-left marquee ticker
  const tickerItems = [...brands, ...brands];

  return (
    <section className="bg-[#0A0E1A] border-y border-slate-800/80 py-8 relative overflow-hidden">
      {/* Gradient fade overlays on left and right edges */}
      <div className="absolute top-0 bottom-0 left-0 w-20 bg-gradient-to-r from-[#0A0E1A] to-transparent z-20 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-20 bg-gradient-to-l from-[#0A0E1A] to-transparent z-20 pointer-events-none" />

      {/* Title Badge */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-6">
        <div className="flex items-center justify-center">
          <div className="inline-flex items-center space-x-2 bg-slate-900/90 border border-slate-800 rounded-full px-4 py-1 text-xs font-mono font-bold text-orange-400 shadow-inner">
            <span className="text-[#FF7300]">//</span>
            <span>Built on</span>
          </div>
        </div>
      </div>

      {/* Infinite Right-to-Left Ticker */}
      <div className="relative w-full overflow-hidden">
        <div className="animate-marquee flex items-center space-x-6 sm:space-x-8">
          {tickerItems.map((brand, idx) => (
            <div
              key={`${brand.name}-${idx}`}
              className="flex-shrink-0 flex items-center space-x-3 px-5 py-3 rounded-xl bg-slate-900/80 border border-slate-800/90 hover:border-orange-500/50 hover:bg-slate-900 transition-all cursor-pointer group shadow-sm"
            >
              <img
                src={brand.logoUrl}
                alt={`${brand.name} logo`}
                className="w-5 h-5 object-contain group-hover:scale-110 transition-transform duration-200"
                loading="lazy"
              />
              <span className="text-sm font-bold tracking-tight text-slate-200 group-hover:text-white transition-colors whitespace-nowrap">
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
