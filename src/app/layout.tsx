import type { Metadata } from "next";
import { Geist, Geist_Mono, Lora } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Marcus Hansen | AI Engineer & Full-Stack Developer",
  description: "Self-taught AI engineer building production LLM systems — multi-agent architectures, RAG pipelines, and AWS cloud infrastructure. AWS Certified AI Practitioner. Open to full-time engineering roles.",
  keywords: ["Marcus Hansen", "AI Engineer", "Full-Stack Developer", "Claude API", "AWS Bedrock", "LLM", "multi-agent systems", "RAG", "Python", "TypeScript", "React", "Minnesota"],
  authors: [{ name: "Marcus Hansen" }],
  metadataBase: new URL("https://hansenwebservices.com"),
  openGraph: {
    title: "Marcus Hansen | AI Engineer & Full-Stack Developer",
    description: "Self-taught AI engineer building production LLM systems on AWS. Open to full-time engineering roles.",
    type: "website",
    url: "https://hansenwebservices.com",
    images: [
      {
        url: "/logo-concept-1-monogram-512.png",
        width: 512,
        height: 512,
        alt: "Marcus Hansen",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Marcus Hansen | AI Engineer & Full-Stack Developer",
    description: "Self-taught AI engineer building production LLM systems on AWS. Open to full-time engineering roles.",
    images: ["/logo-concept-1-monogram-512.png"],
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
        className={`${geistSans.variable} ${geistMono.variable} ${lora.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
