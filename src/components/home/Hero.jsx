import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, MapPin, ArrowUpRight, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const heroImages = ["hero-2.jpg", "hero-1.jpg", "hero-3.jpg"];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      contentEditable
    >
      {/* Background Images */}
      <div className="absolute inset-0">
        <AnimatePresence>
          {heroImages.map(
            (img, index) =>
              index === currentImageIndex && (
                <motion.div
                  key={img}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.5 }}
                  className="absolute inset-0"
                >
                  <motion.img
                    src={img}
                    alt="Garden landscape"
                    className="w-full h-full object-cover"
                    initial={{ scale: 1 }}
                    animate={{ scale: 1.05 }}
                    transition={{ duration: 5, ease: "linear" }}
                  />
                </motion.div>
              ),
          )}
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
      </div>

      {/* Stats Card - Top Right */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="absolute top-24 right-8 md:right-16 z-20 hidden md:block"
      >
        <div className="bg-white/10 backdrop-blur-xl border border-white/30 rounded-2xl p-6 min-w-[200px] shadow-[0_8px_32px_rgba(0,0,0,0.12)]">
          <div className="text-4xl font-bold text-white mb-1">500+</div>
          <div className="text-white/70 text-sm mb-4">Счастливых клиентов</div>
          <div className="flex gap-2">
            <div className="w-10 h-10 rounded-full border-2 border-white/30 flex items-center justify-center">
              <Users className="w-4 h-4 text-white/60" />
            </div>
            <div className="w-10 h-10 rounded-full border-2 border-white/30 flex items-center justify-center">
              <Users className="w-4 h-4 text-white/60" />
            </div>
            <div className="w-10 h-10 rounded-full border-2 border-white/30 flex items-center justify-center">
              <Users className="w-4 h-4 text-white/60" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full py-32">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-6"
          >
            <span className="inline-block bg-white/10 backdrop-blur-md border border-white/30 px-4 py-2 rounded-full text-white text-sm font-medium">
              Award-Winning Landscape Design
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-7xl lg:text-6xl font-light text-white leading-[1.1] tracking-tight mb-6"
          >
            Превращаем пространства в
            <br />
            <span className="font-medium">живое искусство</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg md:text-xl text-white/80 max-w-2xl mb-10 leading-relaxed font-light"
          >
            Мы создаём исключительные outdoor-пространства, где архитектура,
            природа и стиль жизни сливаются воедино. Каждый проект — уникальный
            шедевр.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap gap-4"
          >
            <Button
              size="lg"
              className="bg-white text-[#1a3a2f] hover:bg-white/90 rounded-full px-8 py-6 text-base font-medium"
            >
              Услуги
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white/20 hover:border-white/50 rounded-full px-8 py-6 text-base font-medium"
            >
              Проекты
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Featured Project Card - Bottom Right */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="absolute bottom-12 right-8 md:right-16 z-20 hidden md:block"
      >
        <div className="bg-white/10 backdrop-blur-xl border border-white/30 rounded-2xl p-6 min-w-[320px] shadow-[0_8px_32px_rgba(0,0,0,0.12)]">
          <div className="flex items-start justify-between mb-3">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
              <MapPin className="w-5 h-5 text-white" />
            </div>
            <button className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
              <ArrowUpRight className="w-5 h-5 text-white" />
            </button>
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">
            Hachioji Garden
          </h3>
          <p className="text-white/70 text-sm leading-relaxed">
            We design Hachioji Garden as a part of our new Landscape Design
            Commission in the country.
          </p>
        </div>
      </motion.div>

      {/* Progress Indicator - Bottom Left */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="absolute bottom-12 left-8 md:left-16 z-20 hidden md:block"
      >
        <div className="flex items-center gap-6">
          <div className="text-white text-2xl font-light">
            {String(currentImageIndex + 1).padStart(2, "0")}
          </div>
          <div className="w-48 h-px bg-white/20 relative">
            <motion.div
              animate={{
                width: `${((currentImageIndex + 1) / heroImages.length) * 100}%`,
              }}
              transition={{ duration: 0.5 }}
              className="absolute left-0 top-0 h-full bg-white"
            />
          </div>
          <div className="text-white/40 text-2xl font-light">
            {String(heroImages.length).padStart(2, "0")}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
