import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Instagram, Linkedin, Facebook, ArrowUpRight } from 'lucide-react';

const footerLinks = {
  services: [
    "Landscape Design",
    "Garden Architecture",
    "Water Features",
    "Master Planning"
  ],
  company: [
    "About Us",
    "Our Team",
    "Careers",
    "Press"
  ],
  resources: [
    "Portfolio",
    "Case Studies",
    "Blog",
    "FAQs"
  ]
};

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Facebook, href: "#", label: "Facebook" }
];

export default function Footer() {
  return (
    <footer className="bg-[#1a3a2f] text-white relative overflow-hidden">
      {/* Top Gradient Line */}
      <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      {/* Glass Orbs */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#2d5a47]/30 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20 relative">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-light tracking-tight">
                Terra<span className="font-medium">Verde</span>
              </span>
            </div>
            <p className="text-white/60 font-light leading-relaxed mb-6 max-w-sm">
              Award-winning landscape architecture studio creating timeless
              outdoor environments for discerning clients worldwide.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-medium tracking-wider uppercase mb-6">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-white/60 hover:text-white transition-colors font-light flex items-center gap-1 group"
                    >
                      {link}
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm font-light">
            © 2024 TerraVerde Studio. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-white/40 hover:text-white/60 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-white/40 hover:text-white/60 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
