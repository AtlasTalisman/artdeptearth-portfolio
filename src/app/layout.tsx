import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Atlas Talisman — Interactive Systems Designer",
  description:
    "Creative Director specialising in interactive systems that drive audience participation across digital platforms, physical activations, and immersive environments.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
