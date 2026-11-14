import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import WebAnalytics from "./WebAnalytics";
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
  title: "SRVN — Find your next great meal",
  description:
    "Explore nearby restaurants, discover dishes, and share what’s worth trying. Coming soon.",
  openGraph: {
    title: "SRVN — Find your next great meal",
    description:
      "Explore nearby restaurants, discover dishes, and share what’s worth trying. Coming soon.",
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
      <body>
        {children}
        <WebAnalytics />
      </body>
    </html>
  );
}
