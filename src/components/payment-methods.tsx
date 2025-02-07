'use client';

import { motion } from 'framer-motion';
import { BsBank2 } from 'react-icons/bs';
import { FaPaypal } from 'react-icons/fa';
import { SiTether } from 'react-icons/si';

export default function PaymentMethods() {
  const methods = [
    {
      name: 'Transferencia Bancaria',
      icon: BsBank2,
      description: 'Transferencia directa a cuenta bancaria',
      color: 'from-blue-500 to-cyan-400'
    },
    {
      name: 'PayPal',
      icon: FaPaypal,
      description: 'Pago seguro internacional',
      color: 'from-blue-600 to-blue-800'
    },
    {
      name: 'USDT',
      icon: SiTether,
      description: 'Pago con criptomonedas',
      color: 'from-green-500 to-emerald-600'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900/50 to-black" />
      
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display">
            Métodos de Pago
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Múltiples opciones para tu comodidad
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {methods.map((method) => (
            <motion.div
              key={method.name}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className={`relative group rounded-2xl p-8 overflow-hidden`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${method.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`} />
              <div className="relative z-10">
                <div className="bg-white/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors duration-300">
                  <method.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {method.name}
                </h3>
                <p className="text-gray-400">
                  {method.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}