import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Fondo con gradiente unificado */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900/50 to-black" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <div className="relative rounded-3xl bg-zinc-900/50 border border-white/10 p-12 md:p-20 overflow-hidden backdrop-blur-sm">
          {/* Efecto de resplandor sutil en el fondo */}
          <div className="absolute inset-0 bg-gradient-radial from-white/5 via-transparent to-transparent opacity-50" />
          
          <div className="relative text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display">
              ¿Listo para Empezar tu Proyecto?
            </h2>
            <p className="text-xl text-gray-400 mb-12">
              Transformemos tu visión en una experiencia digital extraordinaria.
            </p>
            <a 
              href="https://calendly.com/mlonzayesperales/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center px-8 py-4 rounded-full bg-white text-black 
                       text-lg font-medium hover:bg-gray-100 transition-all duration-300
                       transform hover:scale-105"
            >
              Agenda una llamada
              <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}