

import { Target, Linkedin, Instagram } from "lucide-react";
// Se eliminan las importaciones de motion, useScroll, useTransform, Award, Briefcase, GraduationCap
import { useRef } from "react";
import { motion } from "motion/react";

// Datos de LinkedIn del equipo
const linkedinLinks = [
  {
    href: "https://www.linkedin.com/in/pazcamino/",
    label: "Paz Camino"
  },
  {
    href: "https://www.linkedin.com/in/fernanda-armagno-18512151/",
    label: "Fernanda Armagno"
  },
  {
    href: "https://www.linkedin.com/in/agustina-tauro-84726232/",
    label: "Agustina Tauro"
  },
];

// Datos de redes sociales de la empresa
const socialLinks = [
  {
    icon: Instagram,
    href: "https://www.instagram.com/dreieck.consultora?igsh=aGVxOWRwMGhvbzE=",
    label: "Instagram"
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/company/dreieck-consultora/",
    label: "LinkedIn"
  },
];

export function AboutSection() {
  const sectionRef = useRef(null);

  // Se elimina toda la lógica de useScroll y useTransform ya que los efectos parallax han sido eliminados.

  return (
    <section
      id="sobre-mi"
      ref={sectionRef}
      // Se añade text-center para centrar todo el contenido
      className="py-20 bg-white relative overflow-hidden text-center"
    >
      {/* Se elimina: AnimatedDataGrid, FloatingMetrics y los elementos de fondo parallax */}

      {/* Contenedor principal centrado, se reduce el max-width para que el texto se vea bien centrado */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Contenido centrado: Eliminada la estructura de grid 1x2 */}
        <div className="space-y-8">
          
          {/* Bloque principal de texto */}
          <div>
            {/* Logo/Icono - Ahora centrado y más visible */}
            <div
              className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-lg mb-6 mx-auto"
            >
              <Target className="text-yellow-600" size={32} /> {/* Tamaño aumentado para "verse más el logo" */}
            </div>
            
            <h2 className="mb-6 uppercase tracking-[0.15em] text-3xl font-light">
              Quiénes somos
            </h2>
            
            {/* Botones de LinkedIn del equipo */}
            <div className="mb-8">
              <p className="text-sm text-gray-600 mb-4">Conoce a nuestro equipo:</p>
              <div className="flex flex-wrap gap-3 justify-center">
                {linkedinLinks.map((link, i) => (
                  <motion.a
                    key={i}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-yellow-100 rounded-lg hover:bg-yellow-500 hover:text-gray-900 transition-colors text-sm text-yellow-600 font-medium border-2 border-yellow-600"
                    aria-label={`LinkedIn de ${link.label}`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * i }}
                  >
                    <Linkedin size={16} className="text-yellow-600" />
                    <span>{link.label.split(' ')[0]}</span>
                  </motion.a>
                ))}
              </div>
            </div>
            
            {/* Texto Plano Centrado */}
            <p className="text-gray-600 mb-6 tracking-wide leading-relaxed max-w-2xl mx-auto">
              En Dreieck Consultora somos un equipo de profesionales con sólida formación académica y 
              amplia experiencia en el ámbito empresarial, académico y público.
            </p>
            <p className="text-gray-600 mb-6 tracking-wide leading-relaxed max-w-2xl mx-auto">
             Nos une una misma
                 visión: acompañar a organizaciones públicas y privadas, así como a emprendedores,
                  en la mejora de su gestión, impulsando decisiones basadas en datos y estrategias sostenibles.
            </p>
            <p className="text-gray-600 mb-6 tracking-wide leading-relaxed max-w-2xl mx-auto">
                Nuestro equipo combina perspectivas complementarias -administración, finanzas, 
                ciencia de datos y gestión pública- que nos permiten ofrecer soluciones integrales
                 adaptadas a las necesidades de cada cliente.
            </p>
            <p className="text-gray-600 mb-6 tracking-wide leading-relaxed max-w-2xl mx-auto">
                Creemos en el valor de la información, la eficiencia de los procesos y el aprendizaje continuo como
                 pilares para el crecimiento empresarial.
            </p>

            {/* Logo/Icono inferior */}
            <div
              className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-lg mt-6 mx-auto"
            >
              <Target className="text-yellow-600" size={32} />
            </div>

            {/* Redes Sociales de la empresa */}
            <motion.div
              className="mt-12 pt-8 border-t border-gray-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              <p className="text-sm text-gray-600 mb-4">Síguenos:</p>
              <div className="flex flex-wrap gap-3 justify-center">
                {socialLinks.map((social, i) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-yellow-100 rounded-lg hover:bg-yellow-500 hover:text-gray-900 transition-colors text-sm text-yellow-600 font-medium border-2 border-yellow-600"
                      aria-label={social.label}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * i }}
                      viewport={{ once: true }}
                    >
                      <Icon size={16} />
                      <span>{social.label}</span>
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* ELIMINADO: La sección de las cuatro tarjetas de características (Formación Especializada, etc.) */}

        </div>
      </div>
    </section>
  );
}
