"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function TrustedBy() {
  const partners = [
    { name: "Airbnb", logo: "/airbnb.png" },
    { name: "Booking.com", logo: "/bookingcom.svg" },
    { name: "Expedia", logo: "/expedia.svg" },
    { name: "Tripadvisor", logo: "/tipadvisor.svg" },
    { name: "Agoda", logo: "/agada.svg" },
    { name: "Vrbo", logo: "/vrbo.svg" },
    { name: "HomeToGo", logo: "/home_to_go.svg" },
  ];

  return (
    <section className="bg-gray-50 py-16 border-y overflow-hidden">
      <div className="container mx-auto px-4 mb-10">
        <p className="text-center text-sm font-bold uppercase tracking-widest text-gray-500">
          Trusted by leaders in 20+ industries
        </p>
      </div>
      
      <Marquee speed={40} gradient={true} gradientColor="white" gradientWidth={100} pauseOnHover={true}>
        <div className="flex items-center gap-12 md:gap-24 lg:gap-32 px-12">
          {partners.map((partner) => (
            <div key={partner.name} className="flex items-center justify-center transition-all cursor-default">
              <div className="relative h-12 w-32 md:h-14 md:w-40">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </Marquee>
    </section>
  );
}
