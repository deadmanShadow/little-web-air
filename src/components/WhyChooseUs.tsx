"use client";

import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const reasons = [
  "Affordable Pricing Plan",
  "Professional & Dedicated Team",
  "Dedicated Account Manager",
  "Available 24/7 For Your Support",
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-pink-50/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            className="flex-1 space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-extrabold text-gray-900 leading-tight">
              Few Reasons Why<br />
              <span className="text-primary">Choose us?</span>
            </h2>
            <p className="text-lg text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </p>
            <div className="space-y-4">
              {reasons.map((reason, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="h-6 w-6 rounded-full bg-primary flex items-center justify-center">
                    <CheckCircle2 className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-lg font-semibold text-gray-800">{reason}</span>
                </div>
              ))}
            </div>
 <div className="flex items-center gap-4">
          <button className="rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary/90 transition-all">
            <div className="flex items-center gap-2">
              Schedule a Meeting <FaArrowRight />
            </div>
          </button>
        </div>
          </motion.div>

          <motion.div 
            className="flex-1 relative w-full mt-12 lg:mt-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative z-10 rounded-3xl shadow-2xl overflow-hidden">
              <div className="relative h-[300px] sm:h-[500px] w-full bg-white">
                <Image
                  src="/proffessional.png"
                  alt="Professional Manager"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
            {/* Calendar card mockup - Hidden on very small mobile, shown on sm+ */}
            <div className="absolute -bottom-6 -left-4 sm:-bottom-10 sm:-left-10 z-20 bg-white p-4 sm:p-6 rounded-2xl shadow-2xl w-48 sm:w-64 animate-bounce-slow">
              <div className="flex items-center justify-between mb-4 border-b pb-2">
                <span className="font-bold text-gray-900 text-xs sm:text-sm">April 2026</span>
                <div className="flex gap-1">
                  <div className="h-2 w-2 rounded-full bg-gray-200" />
                  <div className="h-2 w-2 rounded-full bg-gray-200" />
                </div>
              </div>
              <div className="grid grid-cols-7 gap-1 sm:gap-2">
                {[...Array(28)].map((_, i) => (
                  <div key={i} className={`h-4 w-4 sm:h-6 sm:w-6 rounded-full flex items-center justify-center text-[8px] sm:text-[10px] font-bold ${i === 12 ? "bg-primary text-white" : "text-gray-400"}`}>
                    {i + 1}
                  </div>
                ))}
              </div>
            </div>
            {/* Airbnb/Booking cards */}
            <div className="absolute top-4 -right-4 sm:top-10 sm:-right-10 z-20 flex flex-col gap-2 sm:gap-4">
              <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-lg sm:rounded-xl bg-white shadow-lg flex items-center justify-center text-red-500 font-bold text-sm sm:text-base">A</div>
              <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-lg sm:rounded-xl bg-white shadow-lg flex items-center justify-center text-blue-500 font-bold text-sm sm:text-base">B</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
