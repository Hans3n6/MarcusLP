import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hansen Web Services | Generative Engine Optimization (GEO) Agency",
  description: "Get found by AI models like ChatGPT, Claude, and Perplexity. Hansen Web Services helps businesses optimize for AI-powered search through proven GEO strategies and E-E-A-T building.",
  keywords: ["GEO", "Generative Engine Optimization", "AI search optimization", "ChatGPT visibility", "Claude optimization", "Perplexity ranking", "AI SEO", "E-E-A-T", "AI models", "AI search"],
  authors: [{ name: "Marcus Hansen" }],
  metadataBase: new URL("https://hansenwebservices.com"),
  openGraph: {
    title: "Hansen Web Services | Generative Engine Optimization (GEO) Agency",
    description: "Get found by AI models like ChatGPT, Claude, and Perplexity. Expert GEO consulting for the AI search era.",
    type: "website",
    url: "https://hansenwebservices.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hansen Web Services | GEO Agency",
    description: "Get found by AI models. Expert Generative Engine Optimization.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
