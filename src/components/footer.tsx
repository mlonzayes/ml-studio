import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
    return (
      <footer className="bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="py-12 border-t border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Brand */}
              <div>
                <h3 className="text-xl font-display font-bold text-white mb-4">
                  Mateo Lonzayes
                </h3>
                <p className="text-gray-400 mb-6">
                  Desarrollador web especializado en crear experiencias digitales únicas
                </p>
                <div className="flex space-x-4">
                  <a href="https://github.com/mlonzayes" 
                     className="text-gray-400 hover:text-white transition-colors">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href="https://www.linkedin.com/in/mateo-lonzayes-perales-03b01b178/" 
                     className="text-gray-400 hover:text-white transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="mailto:mlonzayesperales@gmail.com" 
                     className="text-gray-400 hover:text-white transition-colors">
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
  
              {/* Navigation */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Navegación</h3>
                <ul className="space-y-3">
                  {['Inicio', 'Servicios', 'Proceso', 'Proyectos', 'Contacto'].map((item) => (
                    <li key={item}>
                      <Link 
                        href={`#${item.toLowerCase()}`}
                        className="text-gray-400 hover:text-white transition-colors flex items-center group"
                      >
                        {item}
                        <ArrowUpRight className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
  
              {/* Contact */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Contacto</h3>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 rounded-full bg-white text-black
                           hover:bg-gray-100 transition-colors duration-300 font-medium"
                >
                  Iniciar Proyecto
                  <ArrowUpRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>
  
          {/* Copyright */}
          <div className="py-6 border-t border-white/10">
            <p className="text-center text-gray-400 text-sm">
              © {new Date().getFullYear()} Mateo Lonzayes. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    )
  }