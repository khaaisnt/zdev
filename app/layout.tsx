import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google"
import "./globals.css";
import Navbar from "@/components/Navbar/navbar";

export const metadata: Metadata = {
  title: "ZDev",
  description: "Generated by create next app",
};

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  // Enable all available weights
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  // Enable italic styles
  style: ["normal", "italic"],
  // Enable variable font
  variable: "--font-plus-jakarta-sans",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${plusJakartaSans.variable} font-sans`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
