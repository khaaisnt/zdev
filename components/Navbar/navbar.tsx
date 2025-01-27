"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import Logo from "../../public/logo-zdev.png"
import { ChevronDown, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

interface NavItem {
  label: string
  href: string
  children?: NavItem[]
}

const navItems: NavItem[] = [
  { label: "Beranda", href: "/" },
  { label: "Tentang Kami", href: "/tentang-kami" },
  { label: "Portofolio", href: "/portofolio" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header className={`sticky px-5 top-0 z-50 w-full flex justify-between items-center bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-shadow ${scrolled ? 'shadow-md' : ''}`}>
      <div className="flex h-16 items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Image src={Logo || "/placeholder.svg"} alt="ZDev Logo" width={200} height={200} className="h-8 w-full" />
        </Link>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:block">
        <nav className="mx-6 flex items-center space-x-4 lg:space-x-6">
          {navItems.map((item) => (
            <div key={item.href} className="relative group">
              <Link
                href={item.href}
                className="flex items-center text-base text-gray-700 font-medium transition-colors hover:text-primary"
              >
                {item.label}
                {item.children && <ChevronDown className="ml-1 h-4 w-4" />}
              </Link>
              {item.children && (
                <div className="absolute left-0 top-full hidden group-hover:block">
                  <div className="mt-2 rounded-md bg-white p-2 shadow-md">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2 text-base text-gray-700 hover:bg-gray-100"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>

      {/* Contact Button - Desktop */}
      <div className="hidden md:block">
        <div className="ml-auto flex items-center space-x-4">
          <Button size="lg" className="px-10 rounded-xl bg-primary" asChild>
            <Link href="/masuk" className="text-base">
              Kontak Kami
            </Link>
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col space-y-4 mt-6">
              {navItems.map((item) => (
                <div key={item.href}>
                  {item.children ? (
                    <Collapsible>
                      <CollapsibleTrigger className="flex w-full items-center justify-between py-2 text-base text-gray-700 font-medium hover:text-primary">
                        {item.label}
                        <ChevronDown className="h-4 w-4" />
                      </CollapsibleTrigger>
                      <CollapsibleContent className="ml-4 space-y-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setOpen(false)}
                            className="block py-2 text-base text-gray-700 hover:text-primary"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </CollapsibleContent>
                    </Collapsible>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block py-2 text-base text-gray-700 font-medium hover:text-primary"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              <Button size="lg" className="w-full rounded-xl bg-primary mt-4" asChild>
                <Link href="/masuk" onClick={() => setOpen(false)} className="text-base">
                  Kontak Kami
                </Link>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}