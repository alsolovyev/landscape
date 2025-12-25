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
    title: "Формирование рельефа",
    description:
      "Работа с грунтом и высотами, создающая идеальную основу для архитектуры и будущего ландшафта.",
  },
  {
    icon: TreeDeciduous,
    title: "Подпорные конструкции",
    description:
      "Эстетичные и надёжные подпорные стены, подчёркивающие рельеф и обеспечивающие долговечность пространства.",
  },
  {
    icon: Droplets,
    title: "Дренажные системы",
    description:
      "Продуманные решения для отвода воды, защищающие участок и сохраняющие его функциональность в любую погоду.",
  },
  {
    icon: Sun,
    title: "Премиальное мощение",
    description:
      "Точные линии, натуральные материалы и безупрочная укладка, формирующие комфорт пространства.",
  },
  {
    icon: Compass,
    title: "Водоёмы и озеленение",
    description:
      "Декоративные водоёмы, автоматический полив и гармоничное озеленение, создающие живую и сбалансированную среду.",
  },
  {
    icon: Flower2,
    title: "Ландшафтные ограждения",
    description:
      "Современные заборы и ограждения, объединяющие приватность, безопасность и архитектурную выразительность.",
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
            От первого замысла до безупречной реализации мы создаём комплексные
            ландшафтные решения, отражающие ваше уникальное видение.
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
