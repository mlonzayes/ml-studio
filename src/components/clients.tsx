'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { useEffect, useState, useCallback } from 'react';

export default function TestimonialsSection() {
  const [position, setPosition] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
 
  
  const testimonials = [
    {
      name: "Joaquin Marmol",
      role: "DIGI",
      rating: 5,
      comment: "Excelente trabajo en nuestro sitio web. El proceso fue muy profesional y los resultados superaron nuestras expectativas.",
      image: "/testimonials/avatar1.jpg"
    },
    {
      name: "Luis Marchant",
      role: "Flacso",
      rating: 5,
      comment: "Muy contenta con el trabajo de Mateo. Nos ayudó a mejorar la presencia online de nuestra empresa.",
      image: "/testimonials/avatar2.jpg"
    },
    {
      name: "Mariano Martinez",
      role: "Emprendedor",
      rating: 5,
      comment: "Mateo es un profesional muy dedicado y comprometido con su trabajo. Lo recomiendo.",
      image: "/testimonials/avatar3.jpg"
    },
    {
      name: "Martina Fux",
      role: "Sandia Graphic Desing",
      rating: 5,
      comment: "Excelente trabajo en nuestro sitio web. El proceso fue muy profesional y los resultados superaron nuestras expectativas.",
      image: "/testimonials/avatar4.jpg"
    },
    {
      name: "Bautista Bagnaschino",
      role: "Emprendedor",
      rating: 4,
      comment: "Muy buen laburo, un crack!",
      image: "/testimonials/avatar4.jpg"
    }	
  ];

  const duplicatedTestimonials = [...testimonials, ...testimonials];

  const resetPosition = useCallback(() => {
    setPosition(0);
  }, []);

  useEffect(() => {
    if (!isDragging) {
      const interval = setInterval(() => {
        setPosition((prev) => {
          const isMobile = window.innerWidth < 768;
          const newPosition = prev - (isMobile ? 0.3 : 0.15);
          
          if (newPosition <= -100) {
            resetPosition();
            return 0;
          }
          return newPosition;
        });
      }, 50);

      return () => clearInterval(interval);
    }
  }, [isDragging, resetPosition]);

  const handleDragStart = (event: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setStartX('touches' in event ? event.touches[0].clientX : event.clientX);
  };

  const handleDragMove = (event: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    
    const currentX = 'touches' in event ? event.touches[0].clientX : event.clientX;
    const diff = (currentX - startX) * 0.1;
    
    setPosition(prev => {
      const newPosition = prev + diff;
      if (newPosition > 0) return 0;
      if (newPosition < -100) return -100;
      return newPosition;
    });
    
    setStartX(currentX);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900/50 to-black" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display">
            Lo Que Dicen Mis Clientes
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Opiniones de quienes confiaron en mi trabajo
          </p>
        </motion.div>

        <div className="relative overflow-hidden">
          <motion.div
            animate={{ x: `${position}%` }}
            transition={{ type: "tween", duration: 0.5 }}
            className="flex gap-6 mb-8 touch-pan-x cursor-grab active:cursor-grabbing"
            onTouchStart={handleDragStart}
            onTouchMove={handleDragMove}
            onTouchEnd={handleDragEnd}
            onMouseDown={handleDragStart}
            onMouseMove={handleDragMove}
            onMouseUp={handleDragEnd}
            onMouseLeave={handleDragEnd}
          >
            {duplicatedTestimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="flex-none w-[300px] md:w-[400px] p-6 bg-zinc-900/50 border border-white/5 
                           rounded-xl backdrop-blur-sm hover:border-white/10 transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 line-clamp-4">
                  &ldquo;{testimonial.comment}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                    <span className="text-xl font-semibold text-white">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-400">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          <div className="absolute top-0 left-0 h-full w-32 bg-gradient-to-r from-black to-transparent z-10" />
          <div className="absolute top-0 right-0 h-full w-32 bg-gradient-to-l from-black to-transparent z-10" />
        </div>
      </div>
    </section>
  );
}