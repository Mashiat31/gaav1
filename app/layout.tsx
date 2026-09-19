import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hong Kong GAA | Gaelic Football, Hurling & Camogie",
  description: "Hong Kong's home for Gaelic football, hurling and camogie. Join a training session, meet the community and play across Asia.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
