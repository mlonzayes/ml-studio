import React from 'react';
import Link from 'next/link';
import { ArrowRight, Star, Users, Code, Laptop, LucideIcon } from 'lucide-react';
import { motion, Variants } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import Spline from '@splinetool/react-spline';

interface StatCardProps {
  icon: LucideIcon;
  value: string;
  label: string;
}

const StatCard: React.FC<StatCardProps> = ({ icon: Icon, value, label }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="flex flex-col items-center p-4 rounded-xl bg-zinc-800/30 backdrop-blur-md border border-white/10"
  >
    <Icon className="w-6 h-6 text-white/80 mb-2" />
    <span className="text-2xl font-bold text-white">{value}</span>
    <span className="text-sm text-gray-400">{label}</span>
  </motion.div>
);

const starVariants: Variants = {
  initial: () => ({
    opacity: Math.random(),
    x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
    y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
  }),
  animate: () => ({
    opacity: [Math.random() * 0.5, Math.random()],
    scale: [1, Math.random() * 0.3 + 1],
    transition: {
      duration: Math.random() * 3 + 2,
      repeat: Infinity,
      repeatType: "reverse",
    },
  }),
};

const StarBackground: React.FC = () => (
  <div className="absolute inset-0 overflow-hidden">
    {[...Array(50)].map((_, i) => (
      <motion.div
        key={i}
        custom={i}
        variants={starVariants}
        initial="initial"
        animate="animate"
        className="absolute w-1 h-1 bg-white rounded-full"
      />
    ))}
  </div>
);

const HeroSection: React.FC = () => {
  const stats: StatCardProps[] = [
    { icon: Star, value: "50+", label: "Proyectos Completados" },
    { icon: Users, value: "30+", label: "Clientes Satisfechos" },
    { icon: Code, value: "5+", label: "Años de Experiencia" },
    { icon: Laptop, value: "100%", label: "Compromiso" }
  ];

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-black">
      <StarBackground />
      
      {/* 3D Background */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <div className="w-full h-full scale-125 -translate-y-16 -translate-x-8 rotate-12">
          <Spline
            scene="https://prod.spline.design/GAJji654eUULLk4e/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 py-24">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-6 py-2.5 mb-8 rounded-full bg-zinc-800/50 backdrop-blur-md border border-white/10"
          >
            <span className="text-sm font-medium text-white">Diseño y Desarrollo Web de Alto Impacto</span>
          </motion.div>
          
          <div className="text-5xl sm:text-7xl md:text-8xl font-bold text-white mb-8 tracking-tight font-display">
            <TypeAnimation
              sequence={[
                'Desarrollo Web',
                1000,
                'Diseño UI/UX',
                1000,
                'Apps Modernas',
                1000,
                '',
              ]}
              speed={50}
              repeat={Infinity}
              className="font-display"
            />
          </div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg sm:text-xl text-gray-300 mb-12 max-w-2xl mx-auto"
          >
            Desarrollador web especializado en crear experiencias digitales únicas y personalizadas para cada cliente.
          </motion.p>

          {/* Stats Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12"
          >
            {stats.map((stat, index) => (
              <StatCard 
                key={index}
                icon={stat.icon}
                value={stat.value}
                label={stat.label}
              />
            ))}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link 
              href="/contact"
              className="group bg-white hover:bg-gray-50 text-gray-900 px-8 py-4 rounded-full 
                       inline-flex items-center justify-center transition-all duration-300
                       text-lg font-medium"
            >
              Inicia tu Proyecto
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link 
              href="#proyectos"
              className="border border-white/10 hover:border-white/20 bg-zinc-800/50 hover:bg-white/10 
                       text-white px-8 py-4 rounded-full text-lg font-medium
                       backdrop-blur-sm transition-all duration-300"
            >
              Ver Proyectos
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;