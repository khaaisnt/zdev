import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "../../public/logo-zdev.png";

interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

const navItems: NavItem[] = [
  { label: "Beranda", href: "/" },
  { label: "Tentang Kami", href: "/tentang-kami" },
  {
    label: "Program",
    href: "/program",
    children: [
      { label: "Program 1", href: "/program/1" },
      { label: "Program 2", href: "/program/2" },
    ],
  },
  {
    label: "Komunitas",
    href: "/komunitas",
    children: [
      { label: "Komunitas 1", href: "/komunitas/1" },
      { label: "Komunitas 2", href: "/komunitas/2" },
    ],
  },
  { label: "Kontak", href: "/kontak" },
];

export default function Navbar() {
  return (
    <header className="sticky px-5 top-0 z-50 w-full flex justify-between items-center bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src={Logo}
            alt="ZDev Logo"
            width={200}
            height={200}
            className="h-8 w-full"
          />
        </Link>
      </div>
      <div>
        <nav className="mx-6 flex items-center space-x-4 lg:space-x-6">
          {navItems.map((item) => (
            <div key={item.href} className="relative group">
              <Link
                href={item.href}
                className="flex items-center text-sm font-medium transition-colors hover:text-primary"
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
                        className="block px-4 py-2 text-sm hover:bg-gray-100"
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
      <div>
        <div className="ml-auto flex items-center space-x-4">
          <Button className="bg-primary" asChild>
            <Link href="/daftar">Daftar</Link>
          </Button>
          <Button asChild>
            <Link href="/masuk">Masuk</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
