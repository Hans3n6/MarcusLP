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
  title: "Marcus Hansen",
  description: "I figure things out — on the field, in the ER, in code. Former All-American, ER-tested, self-taught builder based in Waseca, Minnesota.",
  keywords: ["Marcus Hansen", "Waseca", "Minnesota", "problem solver", "healthcare operations", "customer success", "software engineer"],
  authors: [{ name: "Marcus Hansen" }],
  metadataBase: new URL("https://hansenwebservices.com"),
  openGraph: {
    title: "Marcus Hansen",
    description: "I figure things out — on the field, in the ER, in code.",
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
    title: "Marcus Hansen",
    description: "I figure things out — on the field, in the ER, in code.",
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
