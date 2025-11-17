import { Linkedin, Mail, Github } from "lucide-react";
import { motion } from "motion/react";
import logo from "figma:asset/998784cf69b6d8792a6a386cfe77446240c85250.png";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute top-10 right-20 w-40 h-40 border-2 border-yellow-500"
          style={{
            clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <img src={logo} alt="Dreieck Consultora" className="h-16 w-auto" />
            </div>
            <p className="text-sm text-gray-400 tracking-wide leading-relaxed">
              Consultoría en Análisis de Datos y Business Intelligence para
              empresas que buscan crecer basándose en información estratégica.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white mb-6 uppercase tracking-widest text-sm">
              Enlaces Rápidos
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { id: "servicios", name: "Servicios" },
                { id: "sobre-mi", name: "Nosotros" },
                { id: "portfolio", name: "Portfolio" },
                { id: "contacto", name: "Contacto" },
              ].map((link, i) => (
                <motion.li
                  key={link.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <button
                    onClick={() =>
                      document
                        .getElementById(link.id)
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="hover:text-yellow-400 transition-colors tracking-wide hover:translate-x-2 inline-block transition-transform"
                  >
                    {link.name}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white mb-6 uppercase tracking-widest text-sm">
              Conectemos
            </h4>
            <div className="space-y-4">
              <a
                href="mailto:contacto@dreieck.com"
                className="flex items-center gap-3 text-sm hover:text-yellow-400 transition-colors tracking-wide"
              >
                <Mail size={18} />
                dreieck.c@gmail.com
              </a>
              <div className="space-y-4 pt-4">
                <p className="text-sm text-gray-400">Conecta con nuestro equipo:</p>
                <div className="flex flex-wrap gap-3">
                  {[
                    { 
                      icon: Linkedin, 
                      label: "Paz Camino",
                      url: "https://www.linkedin.com/in/pazcamino/"
                    },
                    { 
                      icon: Linkedin, 
                      label: "Fernanda Armagno",
                      url: "https://www.linkedin.com/in/fernanda-armagno-18512151/"
                    },
                    { 
                      icon: Linkedin, 
                      label: "Agustina Tauro",
                      url: "https://www.linkedin.com/in/agustina-tauro-84726232/"
                    }
                  ].map((social, i) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={social.label}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg hover:bg-yellow-500 hover:text-gray-900 transition-colors text-sm"
                        aria-label={`LinkedIn de ${social.label}`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + i * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <Icon size={16} />
                        <span>{social.label.split(' ')[0]}</span>
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="pt-8 border-t border-gray-800 flex flex-col gap-4 text-sm text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="tracking-wide">
              &copy; {currentYear} DREIECK Consultora. Todos los derechos reservados.
            </p>
            <p className="tracking-wide">
              Transformando datos en valor estratégico.
            </p>
          </div>
          <div className="flex items-center justify-center gap-1">
            <span>Diseño y desarrollo web por</span>
            <a 
              href="https://www.linkedin.com/in/ruslan-komarytskiy-1665011ba" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-yellow-400 hover:underline flex items-center gap-1"
              aria-label="Perfil de LinkedIn de Ruslan Komarytskiy"
            >
              <Linkedin className="w-3 h-3" />
              Ruslan
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
