"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const testimonials = [
  {
    name: "James Wilson",
    role: "Property Manager",
    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    rating: 5,
    avatar: "/client1.png",
  },
  {
    name: "Sarah Howard",
    role: "Host",
    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    rating: 5,
    avatar: "/client2.png",
  },
  {
    name: "Robert Fox",
    role: "Property Owner",
    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    rating: 4,
    avatar: "/client3.png",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-6">Check Our Clients <span className="text-primary">Review</span></h2>
          <p className="text-lg text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>

      <Marquee speed={30} pauseOnHover={true} gradient={true} gradientColor="white" gradientWidth={100}>
        <div className="flex gap-8 py-10 px-4">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="w-[400px] p-8 rounded-3xl border border-gray-100 bg-white shadow-sm hover:shadow-xl transition-all"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="relative h-14 w-14 rounded-full overflow-hidden border-2 border-primary/20">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500 font-medium">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`h-4 w-4 ${i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300 fill-gray-300"}`} />
                ))}
              </div>
              <p className="text-gray-600 italic leading-relaxed">
                {testimonial.comment}
              </p>
            </div>
          ))}
          {/* Duplicate for smoother marquee loop if list is short */}
          {testimonials.map((testimonial, index) => (
            <div
              key={`dup-${index}`}
              className="w-[400px] p-8 rounded-3xl border border-gray-100 bg-white shadow-sm hover:shadow-xl transition-all"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="relative h-14 w-14 rounded-full overflow-hidden border-2 border-primary/20">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500 font-medium">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`h-4 w-4 ${i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300 fill-gray-300"}`} />
                ))}
              </div>
              <p className="text-gray-600 italic leading-relaxed">
                {testimonial.comment}
              </p>
            </div>
          ))}
        </div>
      </Marquee>
    </section>
  );
}
