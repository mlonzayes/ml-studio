import { Brain, Users, Zap, BarChart } from 'lucide-react'
import { motion } from 'framer-motion'

export default function ProcessSection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="proceso" className="py-24 bg-black relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900/50 to-black" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display">
            Mi Proceso de Trabajo
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Un enfoque metódico para convertir ideas en realidades digitales
          </p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {[
            {
              icon: Brain,
              title: "Análisis",
              description: "Comprendo tus objetivos y necesidades específicas"
            },
            {
              icon: Users,
              title: "Diseño",
              description: "Creo interfaces intuitivas y atractivas"
            },
            {
              icon: Zap,
              title: "Desarrollo",
              description: "Codifico con tecnologías de vanguardia"
            },
            {
              icon: BarChart,
              title: "Entrega",
              description: "Optimización y despliegue profesional"
            }
          ].map((feature, i) => (
            <motion.div
              key={i}
              variants={item}
              className="group p-8 rounded-2xl bg-zinc-900/50 border border-white/5 
                         hover:border-white/10 hover:bg-zinc-800/50 backdrop-blur-sm
                         transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-xl bg-zinc-800 text-white 
                            group-hover:bg-white group-hover:text-black
                            flex items-center justify-center mb-6 
                            transition-all duration-500">
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 font-display">
                {feature.title}
              </h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}