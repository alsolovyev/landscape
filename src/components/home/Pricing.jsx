import React from 'react';
import { motion } from 'framer-motion';
import { Check, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import GlassCard from '../GlassCard';

const pricingData = {
  consultation: {
    title: "Предпроектные работы",
    items: [
      { service: "Консультация с выездом на объект", price: "от 1 000 ₽" },
      { service: "Топографическая съемка участка М 1:200", price: "от 15 000 ₽" },
      { service: "Инженерно-геологические изыскания", price: "от 10 000 ₽" }
    ]
  },
  design: {
    title: "Проектирование",
    items: [
      { service: "Дизайн-проект (за сотку)", price: "от 5 500 ₽" },
      { service: "Эскизное проектирование", price: "включено" },
      { service: "Генеральный план участка", price: "включено" },
      { service: "Дендроплан и схемы коммуникаций", price: "включено" }
    ]
  },
  implementation: {
    title: "Работы по благоустройству",
    items: [
      { service: "Разбивка территории", price: "от 10 ₽/м²" },
      { service: "Вертикальная планировка", price: "от 50 ₽/м²" },
      { service: "Расчистка участка от мелколесья", price: "от 110 ₽/м²" },
      { service: "Корчевка пней", price: "от 5 000 ₽/сотка" },
      { service: "Уборка мусора с вывозом", price: "от 950 ₽/м³" }
    ]
  },
  landscaping: {
    title: "Дренаж, мощение и озеленение",
    items: [
      { service: "Устройство закрытого дренажа", price: "от 850 ₽/м.п." },
      { service: "Мощение плиткой", price: "от 1 350 ₽/м²" },
      { service: "Мощение натуральным камнем", price: "от 1 700 ₽/м²" },
      { service: "Устройство посевного газона", price: "от 220 ₽/м²" },
      { service: "Устройство рулонного газона", price: "от 350 ₽/м²" },
      { service: "Посадка растений", price: "от 10 000 ₽" }
    ]
  }
};

export default function Pricing() {
  return (
    <section
      className="py-24 md:py-32 bg-white relative overflow-hidden"
      id="pricing"
    >
      <div className="max-w-6xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#2d5a47] text-sm font-medium tracking-widest uppercase mb-4 block">
            Прайс-лист
          </span>
          <h2 className="text-3xl md:text-5xl font-light text-[#1a3a2f] mb-6">
            Прозрачные <span className="font-medium">цены</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg font-light">
            Каждый проект уникален. Наши цены отражают мастерство,
            экспертизу и долговечную ценность, которую мы создаём.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6"
          >
            <a
              href="/pricing-guide.pdf"
              download="TerraVerde-Pricing-Guide.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                className="bg-white border-2 border-[#2d5a47] text-[#2d5a47] hover:bg-[#2d5a47] hover:text-white transition-all"
              >
                <Download className="w-4 h-4 mr-2" />
                Скачать полный прайс-лист (PDF)
              </Button>
            </a>
          </motion.div>
        </motion.div>

        <GlassCard className="overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <tbody>
                {Object.entries(pricingData).map(([key, section], sectionIndex) => (
                  <React.Fragment key={key}>
                    {/* Section Header */}
                    <motion.tr
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: sectionIndex * 0.1 }}
                    >
                      <td
                        colSpan="2"
                        className="bg-gradient-to-r from-[#2d5a47] to-[#1a3a2f] px-6 py-4"
                      >
                        <h3 className="text-white text-lg font-medium">
                          {section.title}
                        </h3>
                      </td>
                    </motion.tr>

                    {/* Section Items */}
                    {section.items.map((item, itemIndex) => (
                      <motion.tr
                        key={itemIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: (sectionIndex * 0.1) + (itemIndex * 0.05) }}
                        className="border-b border-gray-100 hover:bg-[#f8f7f4] transition-colors"
                      >
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <Check className="w-4 h-4 text-[#2d5a47] flex-shrink-0" />
                            <span className="text-gray-700">{item.service}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <span className="text-[#1a3a2f] font-semibold">
                            {item.price}
                          </span>
                        </td>
                      </motion.tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>

          {/* Footer Note */}
          <div className="bg-[#f8f7f4] px-6 py-4 border-t border-gray-100">
            <p className="text-sm text-gray-600 text-center">
              Все цены являются ориентировочными и могут варьироваться в зависимости от сложности проекта,
              условий участка и выбора материалов. Свяжитесь с нами для получения детального предложения.
            </p>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
