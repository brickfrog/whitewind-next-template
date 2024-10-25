// src/app/layout.tsx

import type { Metadata } from "next";
import { config } from "#/config";
import { Inter, Libre_Baskerville } from "next/font/google";
import localFont from "next/font/local";
import { cx } from "#/lib/cx";
import "./globals.css";

const sans = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const serif = Libre_Baskerville({
  variable: "--font-libre-baskerville",
  subsets: ["latin"],
  weight: "400",
  style: "italic",
});

const mono = localFont({
  src: "./fonts/BerkeleyMono-Regular.woff2",
  variable: "--font-berkeley-mono",
  weight: "400",
});

export const metadata: Metadata = {
  title: config.metadata.title,
  description: config.metadata.description,
  alternates: {
    canonical: config.metadata.canonical,
    types: {
      "application/rss+xml": config.metadata.rss,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={cx(
          sans.variable,
          serif.variable,
          mono.variable,
          "antialiased font-sans",
        )}
      >
        {children}
      </body>
    </html>
  );
}
