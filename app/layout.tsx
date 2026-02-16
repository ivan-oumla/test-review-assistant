import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Test Review Assistant",
  description: "Testing Oumla Review Assistant",
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
