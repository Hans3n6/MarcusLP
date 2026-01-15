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
  title: "Marcus Hansen | Landing Pages for Rural Businesses | Waseca, MN",
  description: "Full-stack developer from Waseca, MN creating professional landing pages for small businesses in rural communities. Increase brand awareness, traffic, and profits with modern web solutions.",
  keywords: ["landing pages", "rural businesses", "small business websites", "Waseca Minnesota", "web development", "brand awareness", "Next.js", "React", "TypeScript"],
  authors: [{ name: "Marcus Hansen" }],
  openGraph: {
    title: "Marcus Hansen | Landing Pages for Rural Businesses",
    description: "Helping small businesses in rural communities grow online with professional landing pages.",
    type: "website",
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
