'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

export default function ProjectsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      title: "South Conga",
      description: "Plataforma de venta de entradas, Next.js y Mercado Pago",
      image: "/projects/south_conga.png", // Nota el "/" al inicio
      tags: ["Next.js", "Mercado Pago", "TailwindCSS", "Vercel", "Django Rest Framework"],
      link: "https://southconga.com.ar/"
    },
    {
      title: "Fiesta Nacional de la Frutilla",
      description: "Plataforma de venta de entradas, Next.js y Mercado Pago",
      image: "/projects/fiesta_nacional_frutilla.png", // Nota el "/" al inicio
      tags: ["Next.js", "MODO", "TailwindCSS", "Vercel", "Node.js"],
      link: "https://fiestanacionaldelafrutilla.com.ar/"
    }
  ];

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="proyectos" className="py-16 md:py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900/50 to-black" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 md:mb-4 font-display">
            Proyectos Destacados
          </h2>
          <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto">
            Una selección de mis trabajos más recientes
          </p>
        </motion.div>

        <div className="relative">
          <div className="overflow-hidden">
            <motion.div
              animate={{ x: `-${currentIndex * 100}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="flex"
            >
              {projects.map((project, idx) => (
                <div
                  key={idx}
                  className="w-full flex-shrink-0 px-2 md:px-4"
                >
                  <div className="bg-zinc-900/50 border border-white/5 rounded-xl md:rounded-2xl overflow-hidden">
                  <div className="aspect-[16/9] relative">
  <Image
    src={project.image}
    alt={project.title}
    width={1920}
    height={1080}
    className="object-cover w-full h-full"
    priority={idx === 0}
  />
</div>
                    <div className="p-4 md:p-6">
                      <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3 font-display">
                        {project.title}
                      </h3>
                      <p className="text-sm md:text-base text-gray-400 mb-3 md:mb-4">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5 md:gap-2 mb-3 md:mb-4">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 md:px-3 py-0.5 md:py-1 bg-white/5 rounded-full text-xs md:text-sm text-gray-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm md:text-base text-white hover:text-gray-300 transition-colors"
                      >
                        Ver proyecto
                        <ExternalLink className="w-3 h-3 md:w-4 md:h-4 ml-1.5 md:ml-2" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="flex justify-center mt-4 md:mt-6 space-x-3 md:space-x-4">
            <button
              onClick={prevProject}
              className="p-1.5 md:p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5 md:w-6 md:h-6" />
            </button>
            <button
              onClick={nextProject}
              className="p-1.5 md:p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors"
            >
              <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}