'use client';

import { motion } from 'framer-motion';
import { 
  SiDocker, 
  SiNextdotjs, 
  SiPython, 
  SiPostgresql 
} from 'react-icons/si';

export default function ProfilePage() {
  const technologies = [
    {
      name: 'Docker',
      icon: SiDocker,
      color: 'text-blue-400'
    },
    {
      name: 'Next.js',
      icon: SiNextdotjs,
      color: 'text-white'
    },
    {
      name: 'Python',
      icon: SiPython,
      color: 'text-yellow-400'
    },
    {
      name: 'PostgreSQL',
      icon: SiPostgresql,
      color: 'text-blue-500'
    }
  ];

  return (
    <section className="min-h-screen bg-black py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 font-display">
            Sobre Mí
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Desarrollador Full Stack especializado en crear soluciones web modernas y escalables.
            Con experiencia en el desarrollo de aplicaciones empresariales y startups,
            me enfoco en construir productos de alta calidad utilizando las últimas tecnologías.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-24"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Tecnologías
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {technologies.map((tech) => (
              <motion.div
                key={tech.name}
                whileHover={{ scale: 1.05 }}
                className="bg-zinc-900/50 rounded-xl p-8 text-center backdrop-blur-sm
                          border border-white/5 hover:border-white/10 transition-all duration-300"
              >
                <tech.icon className={`w-16 h-16 mx-auto mb-4 ${tech.color}`} />
                <h3 className="text-xl font-semibold text-white">{tech.name}</h3>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}