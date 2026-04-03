"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const faqs = [
  {
    question: "Is there a free trial available?",
    answer: "Yes, we offer a free trial for all new users. You can explore our services and features for 14 days without any credit card information required.",
  },
  {
    question: "Can I change my plan later?",
    answer: "Absolutely! You can upgrade or downgrade your plan at any time from your dashboard. The changes will take effect from the next billing cycle.",
  },
  {
    question: "What is your cancellation policy?",
    answer: "You can cancel your subscription at any time. We don't have any hidden fees or long-term contracts. Your service will continue until the end of the current billing period.",
  },
  {
    question: "Can other info be added later on?",
    answer: "Yes, our system is flexible. You can update your property details, preferences, and requirements at any time.",
  },
  {
    question: "How does billing work?",
    answer: "We bill monthly or yearly based on your choice. Payments are processed securely through our platform.",
  },
  {
    question: "How do I change my account email?",
    answer: "You can change your account email in the settings section of your profile. A verification email will be sent to the new address.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-gray-50 border-t scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-6">Frequently asked <span className="text-primary">questions</span></h2>
          <p className="text-lg text-gray-600">
            Everything you need to know about the product and billing.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`rounded-2xl border transition-all overflow-hidden ${openIndex === index ? "border-primary bg-white shadow-xl" : "border-gray-200 bg-white/50 hover:bg-white"}`}
            >
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left group"
              >
                <span className={`text-lg font-bold ${openIndex === index ? "text-primary" : "text-gray-900 group-hover:text-primary"}`}>
                  {faq.question}
                </span>
                <div className={`h-8 w-8 rounded-full flex items-center justify-center transition-all ${openIndex === index ? "bg-primary text-white" : "bg-gray-100 text-gray-500"}`}>
                  {openIndex === index ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                </div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-8 pb-8 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="flex flex-col items-center justify-center gap-6">
            <div className="flex -space-x-4">
              {["/q1.png", "/q2.png", "/q3.png"].map((src, i) => (
                <div key={i} className="relative h-12 w-12 rounded-full border-4 border-white bg-gray-200 overflow-hidden shadow-sm">
                  <Image
                    src={src}
                    alt={`User ${i + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
            <h3 className="text-xl font-bold text-gray-900">Still have questions?</h3>
            <p className="text-gray-500">Can&apos;t find the answer you&apos;re looking for? Please chat to our friendly team.</p>
            <button className="rounded-full bg-primary px-6 py-2 text-sm font-bold text-white shadow-xl hover:bg-primary/90 transition-all">
              Get in touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
