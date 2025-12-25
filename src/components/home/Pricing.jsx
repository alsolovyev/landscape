import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import GlassCard from '../GlassCard';

const pricingData = {
  consultation: {
    title: "Initial Consultation",
    items: [
      { service: "Site Visit & Assessment", price: "$500" },
      { service: "Design Consultation (2 hours)", price: "$750" },
      { service: "Comprehensive Site Analysis", price: "$1,200" }
    ]
  },
  design: {
    title: "Design Services",
    items: [
      { service: "Conceptual Design Package", price: "From $3,500" },
      { service: "Master Plan Development", price: "From $8,000" },
      { service: "3D Renderings & Visualizations", price: "From $2,500" },
      { service: "Construction Documents", price: "From $5,000" }
    ]
  },
  implementation: {
    title: "Implementation",
    items: [
      { service: "Project Management", price: "15% of project cost" },
      { service: "Small Garden (Under 1,000 sq ft)", price: "$15,000 - $35,000" },
      { service: "Medium Garden (1,000 - 5,000 sq ft)", price: "$35,000 - $100,000" },
      { service: "Large Estate (5,000+ sq ft)", price: "$100,000+" }
    ]
  },
  maintenance: {
    title: "Maintenance Plans",
    items: [
      { service: "Basic Monthly Maintenance", price: "From $500/month" },
      { service: "Premium Care Package", price: "From $1,200/month" },
      { service: "Seasonal Refresh Service", price: "From $2,000/season" }
    ]
  }
};

export default function Pricing() {
  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#2d5a47] text-sm font-medium tracking-widest uppercase mb-4 block">
            Investment
          </span>
          <h2 className="text-3xl md:text-5xl font-light text-[#1a3a2f] mb-6">
            Transparent <span className="font-medium">Pricing</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg font-light">
            Every project is unique. Our pricing reflects the craftsmanship, 
            expertise, and lasting value we deliver.
          </p>
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
              All prices are estimates and may vary based on project complexity, site conditions, 
              and material selections. Contact us for a detailed proposal.
            </p>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}