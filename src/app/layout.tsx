import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JZ's Junk Removal Services | Atlanta, GA",
  description:
    "Professional junk removal, lawn care, moving, and cleaning services in Atlanta. Fast, affordable, and reliable. Call today for a free quote!",
  keywords:
    "junk removal Atlanta, lawn care Atlanta, moving services ATL, cleaning services Atlanta, JZ junk removal",
  openGraph: {
    title: "JZ's Junk Removal Services | Atlanta, GA",
    description:
      "Professional junk removal, lawn care, moving, and cleaning services in Atlanta. Fast, affordable, and reliable.",
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
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
