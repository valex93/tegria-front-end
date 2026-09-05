export interface PageSection {
  anchorId?: string;
  heading: string;
  blocks: PageBlock[];
}

export interface PageBlock {
  type: "paragraph" | "labeled" | "list" | "quote";
  label?: string;
  text: string;
}

export interface PageData {
  id: string;
  title: string;
  emoji: string;
  subtitle: string;
  breadcrumb: string[];
  sections: PageSection[];
}

export const pages: Record<string, PageData> = {
  "1": {
    id: "1",
    title: "Checkout",
    emoji: "\u{1F6D2}",
    subtitle: "Flow Overview",
    breadcrumb: ["Company Name", "...", "Checkout"],
    sections: [
      {
        anchorId: "2",
        heading: "brief.md",
        blocks: [
          {
            type: "paragraph",
            text: "SmartReads is a mobile and web application designed to revolutionize how people read and engage with books. Our goal is to increase reading enjoyment and comprehension through personalized recommendations, interactive features, and a vibrant online community.",
          },
        ],
      },
      {
        anchorId: "3",
        heading: "prd.md",
        blocks: [
          { type: "paragraph", text: "This document outlines the detailed product requirements for the Checkout flow, including functional and non-functional requirements." },
          { type: "list", text: "Users can review their cart items before checkout" },
          { type: "list", text: "Users can enter and validate shipping addresses" },
          { type: "list", text: "Users can select from saved payment methods or add new ones" },
          { type: "list", text: "System calculates taxes and shipping costs in real-time" },
        ],
      },
      {
        anchorId: "4",
        heading: "architecture.md",
        blocks: [
          { type: "paragraph", text: "The Checkout service follows a microservice architecture with event-driven communication between payment, inventory, and notification services." },
          { type: "list", text: "Frontend: React + TypeScript" },
          { type: "list", text: "API Gateway: GraphQL with Apollo" },
          { type: "list", text: "Payment Processing: Stripe SDK" },
          { type: "list", text: "State Management: Zustand" },
        ],
      },
    ],
  },
  "5": {
    id: "5",
    title: "Apply discount code",
    emoji: "\u{1F3F7}\u{FE0F}",
    subtitle: "Feature Spec",
    breadcrumb: ["Company Name", "...", "Checkout", "Apply discount code"],
    sections: [
      {
        heading: "Overview",
        blocks: [
          { type: "paragraph", text: "Allow users to apply promotional and discount codes during the checkout process. Codes can be percentage-based, fixed amount, or free shipping." },
        ],
      },
      {
        anchorId: "6",
        heading: "story.md",
        blocks: [
          { type: "quote", text: "As a shopper, I want to apply a discount code at checkout so that I can save money on my purchase." },
          { type: "paragraph", text: "The discount code input should be prominently placed near the order summary. Auto-apply codes from marketing links should also be supported." },
        ],
      },
      {
        anchorId: "7",
        heading: "criteria.md",
        blocks: [
          { type: "list", text: "Given a valid code, when applied, then the discount is reflected in the total" },
          { type: "list", text: "Given an invalid code, when applied, then an error message is shown" },
          { type: "list", text: "Given an expired code, when applied, then the expiration is communicated" },
          { type: "list", text: "Given a code is applied, when the user removes it, then the original total is restored" },
        ],
      },
    ],
  },
  "8": {
    id: "8",
    title: "Save payment method",
    emoji: "\u{1F4B3}",
    subtitle: "Feature Spec",
    breadcrumb: ["Company Name", "...", "Checkout", "Save payment method"],
    sections: [
      {
        heading: "Overview",
        blocks: [
          { type: "paragraph", text: "Enable users to securely save their payment methods for faster future checkouts. Supports credit/debit cards and digital wallets." },
        ],
      },
      {
        heading: "Requirements",
        blocks: [
          { type: "list", text: "PCI-DSS compliant tokenized card storage" },
          { type: "list", text: "Users can save multiple payment methods" },
          { type: "list", text: "Users can set a default payment method" },
          { type: "list", text: "Users can remove saved methods at any time" },
        ],
      },
    ],
  },
  "9": {
    id: "9",
    title: "Accounts",
    emoji: "\u{1F464}",
    subtitle: "Feature Area",
    breadcrumb: ["Company Name", "...", "Accounts"],
    sections: [
      {
        heading: "Overview",
        blocks: [
          { type: "paragraph", text: "The Accounts area covers user registration, authentication, profile management, and account settings." },
        ],
      },
    ],
  },
  "10": {
    id: "10",
    title: "Billing",
    emoji: "\u{1F4B0}",
    subtitle: "Feature Area",
    breadcrumb: ["Company Name", "...", "Billing"],
    sections: [
      {
        heading: "Overview",
        blocks: [
          { type: "paragraph", text: "The Billing area manages invoices, subscription plans, payment history, and billing contact information." },
        ],
      },
    ],
  },
};
