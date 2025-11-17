import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import logo from "figma:asset/998784cf69b6d8792a6a386cfe77446240c85250.png";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    // Cerrar el menú móvil primero
    setIsMenuOpen(false);
    
    // Pequeño retraso para permitir que el menú se cierre antes del scroll
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        // Usar scrollIntoView con opciones para mejor compatibilidad
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }, 300);
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-border"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <button
              onClick={() => scrollToSection("inicio")}
              className="flex items-center gap-3 group"
            >
              <motion.img
                src="/logo-transparente.png"
                alt="Dreieck Consultora"
                className="h-12 w-auto"
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ duration: 0.3 }}
              />
              <div className="flex flex-col">
                <motion.span
                  className="text-gray-400 text-xl uppercase tracking-[0.15em]"
                  style={{
                    fontWeight: 300,
                    textShadow: '0 4px 8px rgba(0,0,0,0.4)',
                    lineHeight: '1.2'
                  }}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  DREIECK
                  <span className="block text-yellow-400 mt-1 text-sm tracking-wider">
                    consultora
                  </span>
                </motion.span>
              </div>
            </button>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div
            className="hidden md:flex items-center gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {["servicios", "sobre-mi", "portfolio"].map((section, i) => (
              <motion.button
                key={section}
                onClick={() => scrollToSection(section)}
                className="relative tracking-wide hover:text-yellow-600 transition-colors uppercase text-sm"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                whileHover={{ y: -2 }}
              >
                {section === "servicios" && "Servicios"}
                {section === "sobre-mi" && "Nosotros"}
                {section === "portfolio" && "Portfolio"}
                <motion.span
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-500"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            ))}
            <motion.button
              onClick={() => scrollToSection("contacto")}
              className="px-6 py-2.5 bg-gray-900 text-white rounded-lg hover:bg-yellow-500 hover:text-gray-900 transition-all uppercase text-sm tracking-widest"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contacto
            </motion.button>
          </motion.div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <motion.div
              animate={{ rotate: isMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden bg-white border-t border-border"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 py-4 space-y-4">
              {["servicios", "sobre-mi", "portfolio", "contacto"].map(
                (section, i) => (
                  <motion.button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className="block w-full text-left py-2 hover:text-yellow-600 transition-colors uppercase text-sm tracking-wide"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    {section === "servicios" && "Servicios"}
                    {section === "sobre-mi" && "Nosotros"}
                    {section === "portfolio" && "Portfolio"}
                    {section === "contacto" && "Contacto"}
                  </motion.button>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
