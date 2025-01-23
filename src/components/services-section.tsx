import { Code, Palette, Smartphone } from 'lucide-react'
import { motion } from 'framer-motion'

export default function ServicesSection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="servicios" className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900/50 to-black" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display">
            Servicios Principales
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Soluciones digitales de alto impacto para tu negocio
          </p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          {[
            {
              icon: Code,
              title: "Desarrollo Web",
              description: "Aplicaciones web modernas y escalables construidas con Next.js",
              features: [
                "Arquitectura moderna y escalable",
                "Integración con APIs y servicios",
                "Rendimiento optimizado",
                "SEO y analíticas avanzadas"
              ]
            },
            {
              icon: Palette,
              title: "Diseño UI/UX",
              description: "Interfaces atractivas que convierten visitantes en clientes",
              features: [
                "Experiencia de usuario intuitiva",
                "Diseño responsivo y accesible",
                "Sistema de diseño coherente",
                "Optimización de conversión"
              ]
            },
            {
              icon: Smartphone,
              title: "Apps Modernas",
              description: "Aplicaciones web progresivas con rendimiento nativo",
              features: [
                "Experiencia tipo aplicación nativa",
                "Funcionamiento offline",
                "Instalable en dispositivos",
                "Notificaciones push"
              ]
            }
          ].map((service, i) => (
            <motion.div 
              key={i}
              variants={item}
              className="group p-6 rounded-xl bg-zinc-900/50 border border-white/5 
                         hover:border-white/10 hover:bg-zinc-800/50 backdrop-blur-sm
                         transition-all duration-500 flex flex-col h-full"
            >
              <div className="w-12 h-12 rounded-lg bg-zinc-800 text-white 
                            group-hover:bg-white group-hover:text-black
                            flex items-center justify-center mb-5 
                            transition-all duration-500">
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 font-display">
                {service.title}
              </h3>
              <p className="text-gray-400 mb-5 text-sm group-hover:text-gray-300 transition-colors">
                {service.description}
              </p>
              <ul className="space-y-2 mt-auto">
                {service.features.map((feature, j) => (
                  <li key={j} className="flex items-center text-sm text-gray-400 group-hover:text-gray-300">
                    <div className="w-1 h-1 rounded-full bg-white mr-2 opacity-50" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}