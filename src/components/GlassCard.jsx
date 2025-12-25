import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export default function GlassCard({
  children,
  className,
  hover = true,
  delay = 0
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={hover ? { y: -4, transition: { duration: 0.3 } } : {}}
      className={cn(
        "relative overflow-hidden rounded-2xl",
        "bg-white/40 backdrop-blur-xl",
        "border border-white/50",
        "shadow-[0_8px_32px_rgba(0,0,0,0.08)]",
        "before:absolute before:inset-0 before:rounded-2xl",
        "before:bg-gradient-to-br before:from-white/60 before:via-white/20 before:to-transparent",
        "before:pointer-events-none",
        hover && "transition-shadow duration-300 hover:shadow-[0_16px_48px_rgba(0,0,0,0.12)]",
        className
      )}
    >
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}
