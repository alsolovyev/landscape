import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import GlassCard from "../GlassCard";

const contactInfo = [
  {
    icon: MapPin,
    title: "Посетите наш офис",
    lines: ["450 Design Boulevard", "San Francisco, CA 94102"],
  },
  {
    icon: Phone,
    title: "Позвоните нам",
    lines: ["+1 (415) 555-0123", "Mon-Fri 9am-6pm PST"],
  },
  {
    icon: Mail,
    title: "Напиште нам",
    lines: ["hello@terraverde.studio", "projects@terraverde.studio"],
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <section
      className="py-24 md:py-32 bg-[#f8f7f4] relative overflow-hidden"
      id="contact"
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#2d5a47]/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#2d5a47] text-sm font-medium tracking-widest uppercase mb-4 block">
            Свяжитесь с нами
          </span>
          <h2 className="text-3xl md:text-5xl font-light text-[#1a3a2f] mb-6">
            Начните свой <span className="font-medium">проект</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg font-light">
            Готовы преобразить свой участок? Расскажите нам о своей идее — и мы вместе
            создадим пространство, в которое захочется возвращаться снова.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <GlassCard className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2d5a47] to-[#1a3a2f] flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-medium text-[#1a3a2f] mb-1">
                        {item.title}
                      </h3>
                      {item.lines.map((line, i) => (
                        <p key={i} className="text-gray-600 text-sm">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="rounded-2xl overflow-hidden shadow-xl hidden lg:block"
            >
              <img
                src="map.png"
                alt="Our studio"
                className="w-full h-48 object-cover"
              />
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <GlassCard className="p-8 md:p-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-[#1a3a2f]">
                      Полное имя
                    </Label>
                    <Input
                      id="name"
                      placeholder="Иван Иванов"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="bg-white/50 border-white/60 focus:border-[#2d5a47] rounded-xl h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-[#1a3a2f]">
                      Email адрес
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="bg-white/50 border-white/60 focus:border-[#2d5a47] rounded-xl h-12"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-[#1a3a2f]">
                    Номер телефона
                  </Label>
                  <Input
                    id="phone"
                    placeholder="+7 (999) 123-45-67"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="bg-white/50 border-white/60 focus:border-[#2d5a47] rounded-xl h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-[#1a3a2f]">
                    Расскажите о вашем проекте
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Опишите ваше видение, размер участка и любые особые требования..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="bg-white/50 border-white/60 focus:border-[#2d5a47] rounded-xl min-h-[150px] resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-[#2d5a47] to-[#1a3a2f] hover:opacity-90 text-white rounded-xl h-14 text-base font-medium group"
                >
                  Отправить заявку
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
