/**
 * Stripe Payment and Subscription Links Configuration
 *
 * SETUP INSTRUCTIONS:
 * 1. Create a Stripe account at https://stripe.com
 * 2. Complete business verification (SSN, bank account)
 * 3. Create Products in Stripe Dashboard:
 *    - Website Packages (one-time payments)
 *    - Care Plans (monthly subscriptions)
 * 4. Generate Payment Links for each product
 * 5. Replace placeholder URLs below with your actual Stripe links
 * 6. Configure redirect URLs in Stripe:
 *    - Success: https://hansenwebservices.com/payment/success
 *    - Cancel: https://hansenwebservices.com/payment/cancel
 *
 * NOTE: Start with TEST MODE links, then replace with LIVE MODE links
 * when ready to accept real payments.
 */

export const stripeLinks = {
  /**
   * Website Package Down Payment Links (50% deposits)
   * These are shown on the pricing page for initial payment
   * Final payments (remaining 50%) are handled via Stripe Invoicing after project completion
   */
  packages: {
    starter: 'https://buy.stripe.com/dRm6oH8RufZE63GcV8d3i02',      // $50 down payment
    professional: 'https://buy.stripe.com/5kQ6oHaZCbJogIk08md3i03', // $100 down payment
    premium: 'https://buy.stripe.com/00waEXffS7t84ZC2gud3i04'       // $200 down payment
  },

  /**
   * Care Plan Subscription Links (Recurring monthly billing)
   * Replace these URLs with your Stripe Subscription Links
   */
  carePlans: {
    essential: 'https://buy.stripe.com/aFa28r2t6bJo1NqdZcd3i05',    // $25/month - Essential Plan
    standard: 'https://buy.stripe.com/bJecN51p2aFkbo0dZcd3i06',     // $45/month - Standard Plan
    growth: 'https://buy.stripe.com/dRmeVd2t6dRwajWf3gd3i07'        // $75/month - Growth Plan
  }
};

/**
 * Package Details - For reference and validation
 */
export const packageDetails = {
  starter: {
    name: 'Starter Package',
    priceRange: '150-300',
    downPayment: 50,
    description: 'Simple 1-3 page website with business info, hours, and contact'
  },
  professional: {
    name: 'Professional Package',
    priceRange: '400-700',
    downPayment: 100,
    description: 'Larger website (5-7 pages) with services, gallery, and better Google visibility'
  },
  premium: {
    name: 'Premium Package',
    priceRange: '800-1200',
    downPayment: 200,
    description: 'Full website (8+ pages) with custom look and advanced features'
  }
};

export const carePlanDetails = {
  essential: {
    name: 'Essential Plan',
    price: 25,
    billingPeriod: 'monthly',
    description: 'Domain renewal, hosting, security updates, and up to 15 min changes/month'
  },
  standard: {
    name: 'Standard Plan',
    price: 45,
    billingPeriod: 'monthly',
    description: 'Everything in Essential plus 30 min changes/month and monthly backups'
  },
  growth: {
    name: 'Growth Plan',
    price: 75,
    billingPeriod: 'monthly',
    description: 'Everything in Standard plus 1 hour changes/month and priority support'
  }
};
