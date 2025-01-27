import Image from "next/image"
import Link from "next/link"
import { Instagram, Linkedin, MapPin, Phone } from "lucide-react"

const footerLinks = {
    program: [
        { label: "Online Course", href: "/online-course" },
        { label: "Bootcamp", href: "/bootcamp" },
        { label: "Corporate Training", href: "/corporate-training" },
    ],
    company: [
        { label: "Tentang Kami", href: "/tentang-kami" },
        { label: "Komunitas", href: "/komunitas" },
        { label: "Karir", href: "/karir" },
    ],
    support: [
        { label: "Hubungi Kami", href: "/hubungi-kami" },
        { label: "Syarat dan Ketentuan", href: "/syarat-ketentuan" },
        { label: "Kebijakan Privasi", href: "/kebijakan-privasi" },
    ],
}

export default function Footer() {
    return (
        <footer className="bg-primary-dark rounded-2xl text-white">
            <div className="container mx-auto px-10 py-12">
                <div className="grid md:flex md:justify-between grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
                    {/* Company Info */}
                    <div className="lg:col-span-4">
                        <Link href="/" className="inline-block mb-6">
                            <Image src="/logo-zdev.png" alt="Z Developer Logo" width={150} height={50} className="h-12 w-auto" />
                        </Link>
                        <p className="text-white mb-6">
                            Z Developer adalah penyedia jasa pembuatan website yang berbasis di Malang, Indonesia.
                        </p>
                        <div className="space-y-2">
                            <div className="flex items-center gap-2 text-white">
                                <MapPin className="h-5 w-5" />
                                <span>Malang, Indonesia</span>
                            </div>
                            <div className="flex items-center gap-2 text-white">
                                <Phone className="h-5 w-5" />
                                <span>+62 851 9818 5903</span>
                            </div>
                        </div>
                    </div>

                    {/* Company Links */}
                    <div className="lg:col-span-2">
                        <h3 className="text-lg font-semibold mb-4">Company</h3>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className="text-white hover:text-white transition-colors">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support Links */}
                    <div className="lg:col-span-2">
                        <h3 className="text-lg font-semibold mb-4">Support</h3>
                        <ul className="space-y-3">
                            {footerLinks.support.map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className="text-white hover:text-white transition-colors">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-gray-200 mt-12 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-white text-sm">© {new Date().getFullYear()} Z Developer. All Rights Reserved.</p>
                        <div className="flex items-center gap-4">
                            <Link
                                href="https://instagram.com/zdevlopers"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-white transition-colors"
                            >
                                <Instagram className="h-5 w-5" />
                                <span className="sr-only">Instagram</span>
                            </Link>
                            <Link
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-white transition-colors"
                            >
                                <Linkedin className="h-5 w-5" />
                                <span className="sr-only">LinkedIn</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}