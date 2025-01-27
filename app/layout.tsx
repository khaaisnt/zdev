import type { Metadata } from "next"
import { Plus_Jakarta_Sans } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar/navbar"
import WhatsAppButton from "@/components/WhatsApp/whatsapp-button"


export const metadata: Metadata = {
  title: "ZDevloper",
  description: "ZDevloper is a blog about web development, programming, and technology.",
}

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-plus-jakarta-sans",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id">
      <body className={`${plusJakartaSans.variable} relative min-h-screen`}>
        <Navbar />
        <main className="container mx-auto px-4 pb-16">{children}</main>
        <WhatsAppButton />
      </body>
    </html>
  )
}