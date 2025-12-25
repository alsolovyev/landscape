import React from "react";
import { motion } from "framer-motion";
import {
  Palette,
  TreeDeciduous,
  Droplets,
  Sun,
  Compass,
  Flower2,
} from "lucide-react";
import GlassCard from "../GlassCard";

const services = [
  {
    icon: Palette,
    title: "Landscape Design",
    description:
      "Bespoke design concepts that blend aesthetics with functionality, creating outdoor spaces that inspire.",
  },
  {
    icon: TreeDeciduous,
    title: "Garden Architecture",
    description:
      "Structural elements and hardscaping that provide the foundation for stunning natural environments.",
  },
  {
    icon: Droplets,
    title: "Water Features",
    description:
      "Custom fountains, ponds, and water installations that bring tranquility and movement to your space.",
  },
  {
    icon: Sun,
    title: "Outdoor Lighting",
    description:
      "Sophisticated lighting design that transforms landscapes into magical evening experiences.",
  },
  {
    icon: Compass,
    title: "Master Planning",
    description:
      "Comprehensive site analysis and long-term planning for estates and commercial properties.",
  },
  {
    icon: Flower2,
    title: "Planting Design",
    description:
      "Curated plant palettes that ensure year-round beauty, sustainability, and ecological balance.",
  },
];

export default function Services() {
  return (
    <section
      className="py-24 md:py-32 bg-gradient-to-b from-[#f8f7f4] to-white relative overflow-hidden"
      id="services"
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#2d5a47]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#8b7355]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="text-[#2d5a47] text-sm font-medium tracking-widest uppercase mb-4 block">
            Our Expertise
          </span>
          <h2 className="text-3xl md:text-5xl font-light text-[#1a3a2f] mb-6">
            Ландшафтные <span className="font-medium">Услуги</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg font-light">
            From initial concept to final installation, we provide comprehensive
            landscape solutions tailored to your unique vision.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              key={service.title}
              className="p-8 relative overflow-hidden rounded-2xl bg-white/40 backdrop-blur-xl border border-white/50 shadow-[0_8px_32px_rgba(0,0,0,0.08)]"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#2d5a47] to-[#1a3a2f] flex items-center justify-center mb-6 shadow-lg shadow-[#2d5a47]/20">
                <service.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-medium text-[#1a3a2f] mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 font-light leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
