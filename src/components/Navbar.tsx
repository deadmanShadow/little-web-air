"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, Menu, X } from "lucide-react";
import { FaArrowRight } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative h-10 w-32">
            <Image
              src="/google.png"
              alt="Google"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">Home</Link>
          <Link href="#services" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">Services</Link>
          <Link href="#pricing" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">Pricing</Link>
          <Link href="#tools" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">Tools</Link>
          <Link href="#faq" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">FAQ</Link>
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <button className="rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary/90 transition-all">
              <div className="flex items-center gap-2">
                Schedule a Meeting <FaArrowRight />
              </div>
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-gray-600 hover:text-primary"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden border-t bg-white p-4 space-y-4 absolute top-20 left-0 w-full shadow-lg animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col space-y-4">
            <Link href="/" className="text-sm font-medium text-gray-600 hover:text-primary" onClick={() => setIsOpen(false)}>Home</Link>
            <Link href="#services" className="text-sm font-medium text-gray-600 hover:text-primary" onClick={() => setIsOpen(false)}>Services</Link>
            <Link href="#pricing" className="text-sm font-medium text-gray-600 hover:text-primary" onClick={() => setIsOpen(false)}>Pricing</Link>
            <Link href="#tools" className="text-sm font-medium text-gray-600 hover:text-primary" onClick={() => setIsOpen(false)}>Tools</Link>
            <Link href="#faq" className="text-sm font-medium text-gray-600 hover:text-primary" onClick={() => setIsOpen(false)}>FAQ</Link>
          </nav>
          <div className="pt-4 border-t">
            <button className="w-full rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary/90 transition-all">
              <div className="flex items-center justify-center gap-2">
                Schedule a Meeting <FaArrowRight />
              </div>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
