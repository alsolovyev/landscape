import React from "react";
import { motion } from "framer-motion";
import { Award, Users, Calendar, TreePine } from "lucide-react";
import GlassCard from "../GlassCard";

const stats = [
  { icon: Calendar, value: "25+", label: "Лет опыта" },
  { icon: TreePine, value: "500+", label: "Проектов" },
  { icon: Users, value: "50+", label: "Команда" },
  { icon: Award, value: "30+", label: "Наград" },
];

export default function About() {
  return (
    <section
      className="py-24 md:py-32 bg-white relative overflow-hidden"
      id="about"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              <img
                src="about.jpg"
                alt="Landscape design process"
                className="rounded-3xl shadow-2xl"
              />

              {/* Floating Glass Card */}
              <GlassCard
                hover={false}
                className="absolute -bottom-8 -right-8 md:right-8 p-6 max-w-xs"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#2d5a47] to-[#1a3a2f] flex items-center justify-center">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-semibold text-[#1a3a2f]">
                      2024
                    </p>
                    <p className="text-sm text-gray-600">
                      Design Excellence Award
                    </p>
                  </div>
                </div>
              </GlassCard>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#2d5a47] text-sm font-medium tracking-widest uppercase mb-4 block">
              история
            </span>
            <h2 className="text-3xl md:text-5xl font-light text-[#1a3a2f] mb-6 leading-tight">
              Гармония
              <br />
              <span className="font-medium">идеи и природы</span>
            </h2>
            <p className="text-gray-600 text-lg font-light leading-relaxed mb-6">
              Основанная в 1998 году, наша студия выросла из небольшого сервиса в
              признанную компанию в области ландшафтной архитектуры. Мы убеждены,
              что по-настоящему выдающиеся пространства рождаются из глубокого
              понимания природы, архитектуры и человеческого опыта.
            </p>
            <p className="text-gray-600 text-lg font-light leading-relaxed mb-10">
              Наша команда дизайнеров, специалистов по озеленению и мастеров-практиков
              работает сообща, создавая ландшафты, которые не только эстетичны,
              но и устойчивы, функциональны и долговечны.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#f8f7f4] flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="w-5 h-5 text-[#2d5a47]" />
                  </div>
                  <p className="text-2xl md:text-3xl font-semibold text-[#1a3a2f]">
                    {stat.value}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
