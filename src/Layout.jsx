import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Leaf, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import ConsultationDrawer from "@/components/ConsultationDrawer";

const navLinks = [
  { label: "Home", page: "Home", href: "#top" },
  { label: "About", page: "Home", href: "#about" },
  { label: "Services", page: "Home", href: "#services" },
  { label: "Portfolio", page: "Home", href: "#portfolio" },
  { label: "Contact", page: "Home", href: "#contact" },
  { label: "Pricing", page: "Home", href: "#pricing" },
];

export default function Layout({ children, currentPageName }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/70 backdrop-blur-xl border-b border-black/5 shadow-sm"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div
              className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                scrolled
                  ? "bg-[#1a3a2f]"
                  : "bg-white/10 backdrop-blur-sm border border-white/20"
              }`}
            >
              <Leaf
                className={`w-5 h-5 transition-colors ${scrolled ? "text-white" : "text-white"}`}
              />
            </div>
            <span
              className={`text-xl font-light tracking-tight transition-colors ${
                scrolled ? "text-[#1a3a2f]" : "text-white"
              }`}
            >
              Terra<span className="font-medium">Verde</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  scrolled
                    ? "text-gray-600 hover:text-[#1a3a2f]"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              onClick={() => setDrawerOpen(true)}
              className={`rounded-full px-6 transition-all cursor-pointer ${
                scrolled
                  ? "bg-[#1a3a2f] text-white hover:bg-[#2d5a47]"
                  : "bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20"
              }`}
            >
              Book Consultation
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
              scrolled
                ? "bg-gray-100"
                : "bg-white/10 backdrop-blur-sm border border-white/20"
            }`}
          >
            {mobileMenuOpen ? (
              <X className={scrolled ? "text-[#1a3a2f]" : "text-white"} />
            ) : (
              <Menu className={scrolled ? "text-[#1a3a2f]" : "text-white"} />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white/95 backdrop-blur-xl border-t border-black/5"
            >
              <div className="px-6 py-6 space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    to="#"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-[#1a3a2f] text-lg font-medium"
                  >
                    {link.label}
                  </Link>
                ))}
                <Button className="w-full bg-[#1a3a2f] text-white rounded-full mt-4">
                  Book Consultation
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Main Content */}
      <main>{children}</main>

      <ConsultationDrawer
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      />
    </div>
  );
}
