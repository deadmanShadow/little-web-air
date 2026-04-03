"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const services = [
  {
    title: "Manage Property Listings",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/manage_property_listing.png",
    color: "bg-blue-50",
  },
  {
    title: "Manage Customer Feedings",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/manage_customer_booking.png",
    color: "bg-green-50",
  },
  {
    title: "Schedule Room Cleaning",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/schedule_house_cleaning.png",
    color: "bg-purple-50",
  },
  {
    title: "Monitor Guest Reviews",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/monitor_guest_reviews.png",
    color: "bg-yellow-50",
  },
  {
    title: "Track & Report Expenses",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/track_and_report.png",
    color: "bg-red-50",
  },
  {
    title: "Guest Inquiry & Support",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/guest_inquery_support.png",
    color: "bg-indigo-50",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-6">Our <span className="text-primary">Service</span></h2>
          <p className="text-lg text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="p-8 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-xl transition-all group"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className={`h-16 w-16 rounded-xl ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform relative overflow-hidden p-3`}>
                <Image
                  src={service.image}
                  alt={service.title}
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <button className="px-6 py-2 rounded-full border border-primary text-primary text-sm font-semibold hover:bg-primary hover:text-white transition-all duration-300">
                Read More
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
