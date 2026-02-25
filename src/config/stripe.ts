/**
 * Stripe Payment and Subscription Links Configuration
 * GEO (Generative Engine Optimization) Pricing Model
 *
 * SETUP INSTRUCTIONS:
 * 1. Log into your Stripe Dashboard at https://dashboard.stripe.com
 * 2. Create Products for each service:
 *    - GEO Audit & Strategy (one-time payment)
 *    - Starter GEO Plan (monthly subscription)
 *    - Professional GEO Plan (monthly subscription)
 *    - Premium GEO Plan (monthly subscription)
 *    - Website Add-on (optional, one-time or subscription)
 * 3. Generate Payment Links for each product
 * 4. Replace placeholder URLs below with your actual Stripe links
 * 5. Configure redirect URLs in Stripe:
 *    - Success: https://hansenwebservices.com/payment/success
 *    - Cancel: https://hansenwebservices.com/payment/cancel
 *
 * NOTE: Start with TEST MODE links, then replace with LIVE MODE links
 * when ready to accept real payments.
 */

export const stripeLinks = {
  /**
   * GEO One-Time Services
   */
  services: {
    geoAudit: 'https://buy.stripe.com/placeholder_geo_audit_link',  // $500-1,500 one-time
  },

  /**
   * GEO Monthly Subscription Plans
   */
  geoPlans: {
    starter: 'https://buy.stripe.com/placeholder_starter_geo_link',      // $300/month - Starter GEO Plan
    professional: 'https://buy.stripe.com/placeholder_professional_geo_link', // $1,000/month - Professional GEO Plan
    premium: 'https://buy.stripe.com/placeholder_premium_geo_link'        // $2,500+/month - Premium GEO Plan
  },

  /**
   * Website Services (Optional Add-on)
   */
  website: {
    // Can be a one-time payment or monthly retainer
    // Link to be added when website services are set up
    addon: 'https://buy.stripe.com/placeholder_website_addon_link'
  }
};

/**
 * GEO Service Details - For reference and validation
 */
export const geoServiceDetails = {
  audit: {
    name: 'GEO Audit & Strategy',
    priceRange: '500-1500',
    description: 'Comprehensive analysis of your online presence across AI models with actionable roadmap',
    isOneTime: true
  }
};

/**
 * GEO Plan Details - For reference and validation
 */
export const geoPlanDetails = {
  starter: {
    name: 'Starter GEO Plan',
    price: 300,
    billingPeriod: 'monthly',
    description: 'Monthly content audit & optimization, Structured data/schema setup, E-E-A-T signals monitoring (3-5 AI models), Basic AI model feature optimization, Monthly performance report'
  },
  professional: {
    name: 'Professional GEO Plan',
    price: 1000,
    billingPeriod: 'monthly',
    description: 'All Starter features + Advanced content strategy for AI models, E-E-A-T building & authority strategy, Optimization across 8+ AI platforms, Content calendar management, Quarterly strategy consultation, Priority support'
  },
  premium: {
    name: 'Premium GEO Plan',
    price: 2500,
    billingPeriod: 'monthly',
    description: 'All Professional features + Custom AI positioning strategy, Multi-format content optimization, Featured snippet/AI overview targeting, Competitor GEO tracking & analysis, Monthly AI trend analysis, Direct access to Marcus'
  }
};

/**
 * Legacy Web Development Packages (if still offering as add-on)
 */
export const websitePackageDetails = {
  starter: {
    name: 'Starter Website',
    priceRange: '150-300',
    description: 'Simple 1-3 page website'
  },
  professional: {
    name: 'Professional Website',
    priceRange: '400-700',
    description: 'Larger website (5-7 pages) with advanced features'
  },
  premium: {
    name: 'Premium Website',
    priceRange: '800-1200',
    description: 'Full custom website (8+ pages) with all features'
  }
};
