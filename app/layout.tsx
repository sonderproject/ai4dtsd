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
    "Practical AI for your business — plus the people building it in San Diego. A collaboration between Downtown San Diego Partnership, Won of Us, and Sonder Project.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="font-body bg-navy text-[#e6edf3] antialiased">
        {children}
      </body>
    </html>
  );
}
