"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const steps = [
  {
    number: "/one.png",
    title: "Add requirements & sign up today",
    image: "/Add_requirements.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    number: "/two.png",
    title: "Connect with your CSR & onboarding team",
    image: "/Connect_with_your_CS.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    number: "/three.png",
    title: "Meet your virtual assistant",
    image: "/meet_your_str.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

export default function GettingStarted() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-6">Getting Started is <span className="text-primary">Easy</span></h2>
        <p className="text-lg text-gray-600 mb-20 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative max-w-5xl mx-auto">
          {/* Connecting lines for desktop */}
          <div className="hidden md:block absolute top-1/2 left-[20%] right-[20%] h-0.5 border-t border-dashed border-gray-300 -translate-y-1/2 -z-10" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative flex flex-col items-center group"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="relative w-full max-w-[280px] sm:max-w-full aspect-square mb-8">
                {/* Step number in top left corner */}
                <div className="absolute -top-6 -left-6 z-20 w-18 h-18">
                  <Image
                    src={step.number}
                    alt={`Step ${index + 1}`}
                    fill
                    className="object-contain"
                  />
                </div>
                
                {/* Main step image */}
                <div className="relative w-full h-[70%] rounded-1xl border-2 border-dashed border-gray-200 flex items-center justify-center p-14 group-hover:border-primary transition-all bg-white shadow-sm overflow-hidden">
                  <div className="relative w-full h-full">
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      className="object-contain p-4"
                    />
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
