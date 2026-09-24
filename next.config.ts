import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pbs.twimg.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'x.com',
        port: '',
        pathname: '/**',
      },
    ],
  },

  async redirects() {
    return [
      // pricing
      {
        source: "/docs/sections/prime",
        destination: "/docs/blocks/pricing/prime",
        permanent: true,
      },
      {
        source: "/docs/sections/aurora-pricing",
        destination: "/docs/blocks/pricing/aurora-pricing",
        permanent: true,
      },
      {
        source: "/docs/sections/nova-pricing",
        destination: "/docs/blocks/pricing/nova-pricing",
        permanent: true,
      },
      {
        source: "/docs/sections/zenith",
        destination: "/docs/blocks/pricing/zenith",
        permanent: true,
      },

      // footer
      {
        source: "/docs/sections/signature",
        destination: "/docs/blocks/footer/signature",
        permanent: true,
      },
      {
        source: "/docs/sections/radiant-frame",
        destination: "/docs/blocks/footer/radiant-frame",
        permanent: true,
      },
      {
        source: "/docs/sections/aura-base",
        destination: "/docs/blocks/footer/aura-base",
        permanent: true,
      },

      // FAQ
      {
        source: "/docs/sections/resolve",
        destination: "/docs/blocks/faq/resolve",
        permanent: true,
      },
      {
        source: "/docs/sections/glide-accordion",
        destination: "/docs/blocks/faq/glide-accordion",
        permanent: true,
      },
      {
        source: "/docs/sections/stratus",
        destination: "/docs/blocks/faq/stratus",
        permanent: true,
      },

      // Testimonials
      {
        source: "/docs/sections/spotlight",
        destination: "/docs/blocks/testimonials/spotlight",
        permanent: true,
      },
      {
        source: "/docs/sections/testimonial-flow",
        destination: "/docs/blocks/testimonials/testimonial-flow",
        permanent: true,
      },
      {
        source: "/docs/sections/voice-flow",
        destination: "/docs/blocks/testimonials/voice-flow",
        permanent: true,
      },

      // cta
      {
        source: "/docs/sections/flux-cta",
        destination: "/docs/blocks/cta/flux-cta",
        permanent: true,
      },

      // hero
      {
        source: "/docs/hero-section/launch",
        destination: "/docs/blocks/hero/launch",
        permanent: true,
      },

      // Navigation
      {
        source: "/docs/hero-section/overlay-nav",
        destination: "/docs/blocks/navigation/overlay-nav",
        permanent: true,
      },
      {
        source: "/docs/hero-section/overlay-menu",
        destination: "/docs/blocks/navigation/overlay-menu",
        permanent: true,
      },

      // DashboardUi/list
      {
        source: "/docs/ui-blocks/progress-overview-list",
        destination: "/docs/dashboard-ui/list/progress-overview-list",
        permanent: true,
      },
      {
        source: "/docs/ui-blocks/scheduled-payments-list",
        destination: "/docs/dashboard-ui/list/scheduled-payments-list",
        permanent: true,
      },
      {
        source: "/docs/ui-blocks/scheduled-payments-list",
        destination: "/docs/dashboard-ui/list/progress-tracking-list",
        permanent: true,
      },
      {
        source: "/docs/ui-blocks/activity-timeline-list",
        destination: "/docs/dashboard-ui/list/activity-timeline-list",
        permanent: true,
      },
      {
        source: "/docs/ui-blocks/alert-notification-list",
        destination: "/docs/dashboard-ui/list/alert-notification-list",
        permanent: true,
      },
      {
        source: "/docs/ui-blocks/compact-activity-feed",
        destination: "/docs/dashboard-ui/list/compact-activity-feed",
        permanent: true,
      },

      // DashboardUi/Chart
      {
        source: "/docs/ui-blocks/comparative-bar-chart",
        destination: "/docs/dashboard-ui/chart/comparative-bar-chart",
        permanent: true,
      },
      {
        source: "/docs/ui-blocks/comparative-metrics-chart",
        destination: "/docs/dashboard-ui/chart/comparative-metrics-chart",
        permanent: true,
      },
      {
        source: "/docs/ui-blocks/distribution-breakdown-chart",
        destination: "/docs/dashboard-ui/chart/distribution-breakdown-chart",
        permanent: true,
      },
      {
        source: "/docs/ui-blocks/performance-trend-chart",
        destination: "/docs/dashboard-ui/chart/performance-trend-chart",
        permanent: true,
      },

      // DashboardUI/Table
      {
        source: "/docs/ui-blocks/transaction-table",
        destination: "/docs/dashboard-ui/table/transaction-table",
        permanent: true,
      },
      {
        source: "/docs/ui-blocks/structured-data-table",
        destination: "/docs/dashboard-ui/table/structured-data-table",
        permanent: true,
      },
      {
        source: "/docs/ui-blocks/entity-management-table",
        destination: "/docs/dashboard-ui/table/entity-management-table",
        permanent: true,
      },
      {
        source: "/docs/ui-blocks/advanced-transaction-log",
        destination: "/docs/dashboard-ui/table/advanced-transaction-log",
        permanent: true,
      },
      {
        source: "/docs/ui-blocks/asset-performance-table",
        destination: "/docs/dashboard-ui/table/asset-performance-table",
        permanent: true,
      },

      // dashboard/widget
      {
        source: "/docs/ui-blocks/insight-recommendation-card",
        destination: "/docs/dashboard-ui/widget/insight-recommendation-card",
        permanent: true,
      },

      // components
      {
        source: "/docs/components/waveform",
        destination: "/docs/motion/waveform ",
        permanent: true,
      },
      {
        source: "/docs/components/origin",
        destination: "/docs/motion/origin ",
        permanent: true,
      },
      {
        source: "/docs/components/nexus",
        destination: "/docs/motion/nexus ",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
