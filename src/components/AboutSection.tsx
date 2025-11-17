

import { Target } from "lucide-react";
// Se eliminan las importaciones de motion, useScroll, useTransform, Award, Briefcase, GraduationCap
import { useRef } from "react";

// Función de simulación para reemplazar las etiquetas de motion (si se dejaron algunas)
const motion = {
  div: (props: React.HTMLAttributes<HTMLDivElement>) => <div {...props} />,
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => <h2 {...props} />,
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => <p {...props} />,
};

// Se eliminan las funciones AnimatedDataGrid y FloatingMetrics, ya no son necesarias.

export function AboutSection() {
  const sectionRef = useRef(null);

  // Se elimina toda la lógica de useScroll y useTransform ya que los efectos parallax han sido eliminados.

  return (
    <section
      id="sobre-mi"
      ref={sectionRef}
      // Se añade text-center para centrar todo el contenido
      className="py-32 bg-white relative overflow-hidden text-center"
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
          </div>

          {/* ELIMINADO: La sección de las cuatro tarjetas de características (Formación Especializada, etc.) */}
          
        </div>
      </div>
    </section>
  );
}
