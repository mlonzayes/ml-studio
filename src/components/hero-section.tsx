'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import Spline from '@splinetool/react-spline';

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-black">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <div className="w-full h-full scale-150 -translate-y-24">
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
              href="#projects"
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
}