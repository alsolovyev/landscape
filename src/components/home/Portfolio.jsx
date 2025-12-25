import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, X } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Coastal Estate Gardens",
    category: "Residential",
    image: "3.jpg",
    description: "A seamless blend of native coastal plants with contemporary design elements."
  },
  {
    id: 2,
    title: "Urban Rooftop Oasis",
    category: "Commercial",
    image: "2.jpg",
    description: "Transforming city rooftops into lush, sustainable green spaces."
  },
  {
    id: 3,
    title: "Mediterranean Villa",
    category: "Residential",
    image: "5.jpg",
    description: "Classic Mediterranean landscaping with modern water conservation."
  },
  {
    id: 4,
    title: "Corporate Campus",
    category: "Commercial",
    image: "1.jpg",
    description: "Biophilic design principles creating inspiring work environments."
  },
  {
    id: 5,
    title: "Private Zen Garden",
    category: "Residential",
    image: "5.jpg",
    description: "Japanese-inspired meditation garden with traditional elements."
  },
  {
    id: 6,
    title: "Boutique Hotel Grounds",
    category: "Hospitality",
    image: "3.jpg",
    description: "Creating memorable arrival experiences for luxury hospitality."
  }
];

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="py-24 md:py-32 bg-[#1a3a2f] relative overflow-hidden">
      {/* Glass Orbs */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#2d5a47]/30 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#8b7355] text-sm font-medium tracking-widest uppercase mb-4 block">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-5xl font-light text-white mb-6">
            Featured <span className="font-medium">Projects</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg font-light">
            Explore our collection of award-winning landscapes that showcase
            our commitment to excellence and innovation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Glass Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a3a2f]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-[#8b7355] text-xs font-medium tracking-wider uppercase">
                    {project.category}
                  </span>
                  <h3 className="text-white text-xl font-medium mt-1 flex items-center gap-2">
                    {project.title}
                    <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl max-w-4xl w-full overflow-hidden"
            >
              <div className="relative aspect-video">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-8">
                <span className="text-[#8b7355] text-sm font-medium tracking-wider uppercase">
                  {selectedProject.category}
                </span>
                <h3 className="text-white text-3xl font-medium mt-2 mb-4">
                  {selectedProject.title}
                </h3>
                <p className="text-white/70 text-lg font-light">
                  {selectedProject.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
