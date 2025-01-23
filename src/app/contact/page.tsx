'use client';

import { useState, useEffect, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Calendar } from 'lucide-react';
import Footer from '@/components/footer';
import { useRouter } from 'next/navigation';

// Definir la interfaz para los datos del formulario
interface FormData {
  nombre: string;
  apellido: string;
  email: string;
  telefono: string;
  mensaje: string;
}

export default function ContactSection() {
  const [activeTab, setActiveTab] = useState<'message' | 'call'>('message');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'' | 'success' | 'error'>('');
  const router = useRouter();

  useEffect(() => {
    if (submitStatus === 'success') {
      const timer = setTimeout(() => {
        router.push('/');
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [submitStatus, router]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    const form = e.currentTarget;
    const formData: FormData = {
      nombre: (form.elements.namedItem('nombre') as HTMLInputElement).value,
      apellido: (form.elements.namedItem('apellido') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      telefono: (form.elements.namedItem('telefono') as HTMLInputElement).value,
      mensaje: (form.elements.namedItem('mensaje') as HTMLTextAreaElement).value
    };

    try {
      if (!process.env.NEXT_PUBLIC_APPS_SCRIPT_URL) {
        throw new Error('Apps Script URL not configured');
      }

      const response = await fetch(process.env.NEXT_PUBLIC_APPS_SCRIPT_URL, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'text/plain',
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        const data = await response.json();
        if (data.status === 'success') {
          setSubmitStatus('success');
          form.reset();
        } else {
          setSubmitStatus('error');
        }
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section id="contact" className="py-24 bg-black relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900/50 to-black" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display">
              Contacto
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Elige la opción que prefieras para comenzar tu proyecto
            </p>
          </motion.div>

          <div className="max-w-2xl mx-auto">
            {/* Tabs */}
            <div className="flex mb-8 bg-zinc-900/50 p-1 rounded-full">
              <button
                onClick={() => setActiveTab('message')}
                className={`flex-1 flex items-center justify-center py-3 px-6 rounded-full text-sm font-medium transition-colors ${
                  activeTab === 'message'
                    ? 'bg-white text-black'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <Mail className="w-4 h-4 mr-2" />
                Enviar Mensaje
              </button>
              <button
                onClick={() => setActiveTab('call')}
                className={`flex-1 flex items-center justify-center py-3 px-6 rounded-full text-sm font-medium transition-colors ${
                  activeTab === 'call'
                    ? 'bg-white text-black'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <Calendar className="w-4 h-4 mr-2" />
                Agendar Llamada
              </button>
            </div>

            {/* Message Form */}
            {activeTab === 'message' ? (
              <motion.form
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
                onSubmit={handleSubmit}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Nombre
                    </label>
                    <input
                      name="nombre"
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-zinc-900/50 border border-white/10 
                               text-white placeholder-gray-500 focus:outline-none focus:border-white/20"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Apellido
                    </label>
                    <input
                      name="apellido"
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-zinc-900/50 border border-white/10 
                               text-white placeholder-gray-500 focus:outline-none focus:border-white/20"
                      placeholder="Tu apellido"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-zinc-900/50 border border-white/10 
                             text-white placeholder-gray-500 focus:outline-none focus:border-white/20"
                    placeholder="tu@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Teléfono
                  </label>
                  <input
                    name="telefono"
                    type="tel"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-zinc-900/50 border border-white/10 
                             text-white placeholder-gray-500 focus:outline-none focus:border-white/20"
                    placeholder="+54 (123) 456-7890"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Mensaje
                  </label>
                  <textarea
                    name="mensaje"
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-zinc-900/50 border border-white/10 
                             text-white placeholder-gray-500 focus:outline-none focus:border-white/20
                             resize-none"
                    placeholder="Cuéntame sobre tu proyecto..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 rounded-lg bg-white text-black font-medium 
                           hover:bg-gray-100 transition-colors flex items-center justify-center
                           disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                  <ArrowRight className="ml-2" />
                </button>

                {submitStatus === 'success' && (
                  <p className="text-green-400 text-sm text-center">
                    ¡Mensaje enviado con éxito!
                  </p>
                )}
                {submitStatus === 'error' && (
                  <p className="text-red-400 text-sm text-center">
                    Error al enviar el mensaje. Por favor, intenta nuevamente.
                  </p>
                )}
              </motion.form>
            ) : (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-center p-8 rounded-lg bg-zinc-900/50 border border-white/10"
              >
                <Calendar className="w-12 h-12 text-white mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-4">
                  Agenda una Llamada
                </h3>
                <p className="text-gray-400 mb-6">
                  Elige el mejor momento para discutir tu proyecto
                </p>
                <a
                  href="https://calendly.com/mlonzayesperales/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full px-8 py-4 rounded-lg bg-white text-black font-medium 
                           hover:bg-gray-100 transition-colors flex items-center justify-center"
                >
                  Agendar ahora
                  <ArrowRight className="ml-2" />
                </a>
              </motion.div>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}