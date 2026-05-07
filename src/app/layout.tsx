import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
  weight: ["700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://srvnapp.com"),
  title: "Srvn — Your AI Dining Agent",
  description:
    "Srvn learns your taste, understands your group, and helps you choose where to eat — in seconds, not hours. Join the waitlist.",
  openGraph: {
    title: "Srvn — Your AI Dining Agent",
    description:
      "Every dining app shows what's popular. Srvn learns what you'd actually like. Join the waitlist.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  );
}
