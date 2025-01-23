// components/navbar.tsx
'use client';

import { motion, useScroll } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = ['Inicio', 'Servicios', 'Proceso', 'Proyectos'];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 px-4 py-4"
    >
      <motion.div
        style={{
          opacity: scrollY,
        }}
        className="mx-auto max-w-full bg-black/70 backdrop-blur-lg border border-white/10 rounded-none sm:rounded-full"
      >
        <div className="flex items-center justify-between px-4 py-2">
          <Link href="/" className="text-white font-display text-lg">
            Mateo Lonzayes
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm text-gray-300 hover:text-white transition-colors"
              >
                {item}
              </Link>
            ))}
            <Link
              href="/contact"
              className="text-sm px-4 py-2 rounded-full bg-white text-black hover:bg-gray-100 
                       transition-colors flex items-center"
            >
              Contactar
              <ArrowUpRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden px-4 py-4 border-t border-white/10"
          >
            <div className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  {item}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="text-sm px-4 py-2 rounded-full bg-white text-black hover:bg-gray-100 
                         transition-colors flex items-center justify-center"
              >
                Contactar
                <ArrowUpRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </motion.div>
        )}
      </motion.div>
    </motion.nav>
  );
}