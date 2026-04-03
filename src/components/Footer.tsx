import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, Globe } from "lucide-react";
import { FaFacebookF, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  const columns = [
    {
      title: "Company",
      links: [
        { name: "About", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Brand Center", href: "#" },
        { name: "Blog", href: "#" },
      ],
    },
    {
      title: "Help",
      links: [
        { name: "Customer Support", href: "#" },
        { name: "Default Tickets", href: "#" },
        { name: "Terms & Conditions", href: "#" },
        { name: "Privacy Policy", href: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Free eBook", href: "#" },
        { name: "Development Tutorial", href: "#" },
        { name: "How-to - Blog", href: "#" },
        { name: "Youtube Playlist", href: "#" },
      ],
    },
  ];

  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Logo column */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative h-10 w-32">
                <Image
                  src="/google.png"
                  alt="Google"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
            <p className="text-gray-500 max-w-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="flex items-center gap-6">
              <Link href="#" className="text-gray-400 hover:text-primary transition-colors"><FaTwitter className="h-5 w-5" /></Link>
              <Link href="#" className="text-gray-400 hover:text-primary transition-colors"><FaFacebookF className="h-5 w-5" /></Link>
              <Link href="#" className="text-gray-400 hover:text-primary transition-colors"><FaInstagram className="h-5 w-5" /></Link>
              
              <Link href="#" className="text-gray-400 hover:text-primary transition-colors"><FaGithub className="h-5 w-5" /></Link>
            </div>
          </div>

          {/* Link columns */}
          {columns.map((column, index) => (
            <div key={index} className="space-y-6">
              <h3 className="font-bold text-gray-900 text-lg">{column.title}</h3>
              <ul className="space-y-4">
                {column.links.map((link, lIndex) => (
                  <li key={lIndex}>
                    <Link href={link.href} className="text-gray-500 hover:text-primary transition-colors">{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#230B41] py-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-300 font-medium">
            © Copyright 2024, All Rights Reserved by XYz
          </p>
          <div className="flex items-center gap-8">
            <Link href="#" className="text-sm text-gray-300 hover:text-white font-medium">Terms of Service</Link>
            <Link href="#" className="text-sm text-gray-300 hover:text-white font-medium">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
