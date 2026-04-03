"use client";

import { useState } from "react";
import { Check, X } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const plans = [
  {
    name: "Freebie",
    price: 0,
    description: "Good for individual managers for personal and small projects.",
    features: [
      { name: "20,000+ of PNG & SVG graphics", included: true },
      { name: "Access to 100 million stock images", included: true },
      { name: "Upload custom icons and fonts", included: false },
      { name: "Upload graphics & video in up to 4k", included: false },
      { name: "Unlimited Projects", included: false },
      { name: "Instant Access to our design system", included: false },
      { name: "Create teams to collaborate on designs ", included: false },
    ],
    buttonText: "Get Started Now",
    popular: false,
  },
  {
    name: "Professional",
    price: 25,
    description: "Best for teams that need to collaborate and manage multiple projects.",
    features: [
      { name: "20,000+ of PNG & SVG graphics", included: true },
      { name: "Access to 100 million stock images", included: true },
      { name: "Upload custom icons and fonts", included: true },
      { name: "Upload graphics & video in up to 4k", included: true },
      { name: "Unlimited Projects", included: true },
      { name: "Instant Access to our design system", included: false },
      { name: "Create teams to collaborate on designs", included: false },
    ],
    buttonText: "Get Started Now",
    popular: true,
  },   
  {
    name: "Enterprise",
    price: 100,
    description: "Great for large teams and organizations that need full control.",
    features: [
      { name: "20,000+ of PNG & SVG graphics", included: true },
      { name: "Access to 100 million stock images", included: true },
      { name: "Upload custom icons and fonts", included: true },
      { name: "Unlimited Sharing", included: true },
      { name: "Upload graphics & video in up to 4k", included: true },
      { name: "Unlimited Projects", included: true },
      { name: "Instant Access to our design system", included: true },
      { name: "Create teams to collaborate on designs", included: true },
    ],
    buttonText: "Get Started Now",
    popular: false,
  },
];

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

  return (
    <section id="pricing" className="py-24 bg-gray-50 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-6">Airbnb Assistant <span className="text-primary">pricing</span></h2>
          <p className="text-lg text-gray-600 mb-10">
            Choose a plan thats right for you.
          </p>

          <div className="flex flex-col items-center mb-12">
            <div className="flex items-center justify-center gap-4 relative">
              <span className={`text-sm font-semibold ${billingCycle === "monthly" ? "text-gray-900" : "text-gray-500"}`}>Pay Monthly</span>
              <button 
                onClick={() => setBillingCycle(billingCycle === "monthly" ? "yearly" : "monthly")}
                className="relative w-14 h-7 bg-gray-200 rounded-full transition-colors"
              >
                <div className={`absolute top-1 left-1 w-5 h-5 bg-primary rounded-full transition-transform ${billingCycle === "yearly" ? "translate-x-7" : ""}`} />
              </button>
              <div className="flex items-center">
                <span className={`text-sm font-semibold ${billingCycle === "yearly" ? "text-gray-900" : "text-gray-500"}`}>Pay Yearly</span>
                <div className="relative w-12 h-8 ml-2 scale-x-[1] rotate-[15deg]">
                  <Image 
                    src="/arrow.png" 
                    alt="arrow" 
                    fill 
                    className="font-bold mt-2"
                  />
                </div>
              </div>
            </div>
            
            <div className="mt-1 ml-100">
              <span className="text-primary text-2xl font-bold">Save 25%</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  items-center justify-items-center">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`relative p-10 rounded-[40px] border flex flex-col max-w-[378px] w-full min-h-[721px] ${plan.popular ? "border-primary bg-primary text-white shadow-2xl scale-105 z-10" : "border-gray-200 bg-white text-gray-900 shadow-sm"}`}
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-widest shadow-lg">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <p className={`text-sm mb-8 ${plan.popular ? "text-pink-100" : "text-gray-500"}`}>{plan.description}</p>
              
              <div className="flex items-baseline mb-8">
                <span className="text-4xl font-extrabold tracking-tight">${plan.price}</span>
                <span className={`ml-1 text-sm ${plan.popular ? "text-pink-100" : "text-gray-500"}`}>/month</span>
              </div>

              <button className={`w-full py-4 rounded-xl font-bold mb-10 transition-all ${plan.popular ? "bg-white text-primary hover:bg-gray-50" : "bg-gray-100 text-gray-900 hover:bg-gray-200"}`}>
                {plan.buttonText}
              </button>

              <div className="space-y-6">
                {plan.features.map((feature, fIndex) => (
                  <div key={fIndex} className="flex items-start gap-3">
                    {feature.included ? (
                      <Check className={`h-5 w-5 ${plan.popular ? "text-white" : "text-green-500"}`} />
                    ) : (
                      <X className={`h-5 w-5 ${plan.popular ? "text-pink-300" : "text-red-400"}`} />
                    )}
                    <span className={`text-sm ${feature.included ? (plan.popular ? "text-white" : "text-gray-700") : (plan.popular ? "text-pink-200" : "text-gray-400")}`}>
                      {feature.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
