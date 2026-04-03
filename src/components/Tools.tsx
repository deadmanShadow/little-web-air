import Image from "next/image";

export default function Tools() {
  const tools = [
    { name: "PriceLabs", logo: "/pricelabs.png" },
    { name: "Wheelhouse", logo: "/wheelhouse.png" },
    { name: "Beyond Pricing", logo: "/beyondpricing.png" },
    { name: "Hostfully", logo: "/hostfully.png" },
    { name: "Guesty", logo: "/guestforhome.png" },
    { name: "Lodgify", logo: "/lodgify.png" },
    { name: "Hostfully 2", logo: "/hostfully2.png" },
    { name: "Guesty 2", logo: "/guestforhome.png" },
    { name: "Lodgify 2", logo: "/lodgify2.png" },
  ];

  return (
    <section className="py-24 bg-white border-y">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-6">Our <span className="text-primary">Tools</span></h2>
        <p className="text-lg text-gray-600 mb-16 max-w-2xl mx-auto">
          We integrate with the industrys leading tools to provide you with the best experience.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {tools.map((tool, index) => (
            <div key={index} className="flex items-center justify-center p-8 border border-gray-100 rounded-2xl hover:shadow-lg transition-all cursor-pointer">
              <div className="relative h-12 w-full max-w-[160px]">
                <Image
                  src={tool.logo}
                  alt={tool.name}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
