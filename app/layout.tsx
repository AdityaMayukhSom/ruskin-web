import type { Metadata } from "next";
import "./globals.css";
import { circularStd } from "@/fonts";


export const metadata: Metadata = {
  title: "Ruskin - Devstream",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${circularStd.variable}`}>
      <body>{children}</body>
    </html>
  );
}
