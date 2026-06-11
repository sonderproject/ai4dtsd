import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AI for Downtown Business — Networking, Innovation & Growth",
  description:
    "A free event for Downtown San Diego business owners. Practical AI, live demos, a vendor showcase, and the people building it in San Diego. Hosted by Downtown San Diego Partnership, Won of Us, and Sonder Project. Seats are limited — reserve your spot.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="font-body bg-surface text-slate-700 antialiased">
        {children}
      </body>
    </html>
  );
}
