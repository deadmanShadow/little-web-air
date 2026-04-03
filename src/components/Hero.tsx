"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Play } from "lucide-react";
import { FaArrowRight } from "react-icons/fa";

const floatingIcons = [
  { icon: "/air.png", color: "bg-white", top: "20%", left: "15%" },
  { icon: "/boo.png", color: "bg-white", top: "15%", right: "20%" },
  { icon: "/T.png", color: "bg-white", bottom: "30%", left: "20%" },
  { icon: "/V.png", color: "bg-white", bottom: "25%", right: "15%" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-32">
      {/* Background patterns - enhanced pinkish vibe */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,theme(colors.pink.100),transparent_70%)] opacity-40" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,theme(colors.pink.50),transparent_50%)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,theme(colors.pink.50),transparent_50%)]" />
      
      {/* Floating Icons */}
      {floatingIcons.map((item, idx) => (
        <motion.div
          key={idx}
          className={`absolute hidden lg:flex h-16 w-16 items-center justify-center rounded-xl shadow-lg ${item.color} p-2`}
          initial={{ y: 0 }}
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 3 + idx, repeat: Infinity, ease: "easeInOut" }}
          style={{ 
            top: item.top, 
            left: item.left, 
            right: item.right, 
            bottom: item.bottom 
          }}
        >
          <div className="relative w-full h-full">
            <Image
              src={item.icon}
              alt="Floating Logo"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 64px"
            />
          </div>
        </motion.div>
      ))}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.h1 
          className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl md:text-7xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Airbnb Assistants For<br />
          <span className="text-gray-800">Property Management</span>
        </motion.h1>
        
        <motion.p 
          className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-gray-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Optimize your Airbnb business with our professional management services. 
          We handle everything from guest communication to cleaning and maintenance, 
          so you can focus on what matters most.
        </motion.p>

        <motion.div 
          className="mt-12 flex flex-col items-center justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="flex items-center gap-4">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-full bg-primary px-10 py-5 text-sm font-semibold text-white shadow-sm hover:bg-primary/90 transition-all"
            >
              <div className="flex items-center gap-2">
                Schedule a Meeting <FaArrowRight />
              </div>
            </motion.button>
          </div>
     
          <div className="flex items-center gap-4">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 text-lg font-bold text-gray-700 hover:text-primary transition-colors underline"
            >
              See pricing
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
