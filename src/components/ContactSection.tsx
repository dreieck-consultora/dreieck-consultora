import { Mail, Linkedin, Instagram, Send, Loader2 } from "lucide-react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useState, useEffect } from "react";
import { motion } from "motion/react";

// Función para validar email
const validateEmail = (email: string) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
};

// Datos de las redes sociales de la empresa
const socialLinks = [
  {
    icon: Instagram,
    href: "https://www.instagram.com/dreieck.consultora?igsh=aGVxOWRwMGhvbzE=",
    label: "Instagram"
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/company/dreieck-consultora",
    label: "LinkedIn"
  },
];

// Datos de contacto (solo dejamos el Email)
const contactItems = [
    {
        icon: Mail,
        title: "Email",
        content: "dreieck.c@gmail.com",
        subtitle: "Respondemos en 24-48 horas",
        delay: 0.2,
    },
];

export function ContactSection() {
  const [isSent, setIsSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   const form = e.target as HTMLFormElement;
  //   form.submit();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://formspree.io/f/xrbwbppa", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setIsSent(true);
        form.reset();
        
        // Resetear el mensaje de éxito después de 5 segundos
        setTimeout(() => setIsSent(false), 5000);
      } else {
        throw new Error('Error al enviar el formulario');
      }
    } catch (error) {
      console.error("Error al enviar formulario:", error);
      alert("Error al enviar el formulario. Por favor, inténtalo de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="py-32 bg-gray-50 relative overflow-hidden">
      {/* Background Decoration */}
      <motion.div
        className="absolute top-20 left-10 w-40 h-40 bg-yellow-400/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-60 h-60 bg-blue-400/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -50, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center justify-center mb-6"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="w-12 h-1 bg-yellow-500 rounded-full" />
          </motion.div>
          <motion.h2
            className="mb-6 uppercase tracking-[0.2em] text-4xl"
            style={{ fontWeight: 300 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Contacto
          </motion.h2>
          <motion.p
            className="text-gray-600 max-w-2xl mx-auto tracking-wide text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            ¿Estás listo para transformar tus datos en decisiones estratégicas?
            Descubrí como podemos ayudarte.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            className="bg-white p-10 rounded-2xl shadow-lg border border-gray-100"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form
              action="https://formspree.io/f/xrbwbppa"
              method="POST"
              className="space-y-6"
              onSubmit={handleSubmit}
            >
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium">
                  Nombre Completo *
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium">
                  Correo Electrónico *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label htmlFor="company" className="block mb-2 text-sm font-medium">
                  Empresa
                </label>
                <Input
                  id="company"
                  name="company"
                  type="text"
                  className="w-full"
                  placeholder="Nombre de tu empresa (opcional)"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium">
                  Mensaje *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full"
                  placeholder="Cuéntanos cómo podemos ayudarte..."
                />
              </div>

              {/* <button
                type="submit"
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2"
              >
                {isSent ? '¡Mensaje enviado!' : 'Enviar mensaje'}
                {!isSent && <Send className="h-5 w-5" />}
              </button> */}


              {/* <button
                type="submit"
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2"
              >
                {isSent ? '¡Mensaje enviado!' : 'Enviar mensaje'}
                {!isSent && <Send className="h-5 w-5" />}
              </button> */}
              <button
  type="submit"
  disabled={isSubmitting}
  className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
>
  {isSubmitting ? (
    <>
      <Loader2 className="h-5 w-5 animate-spin" />
      Enviando...
    </>
  ) : isSent ? (
    <>
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
      ¡Mensaje enviado!
    </>
  ) : (
    <>
      Enviar mensaje
      <Send className="h-5 w-5" />
    </>
  )}
</button>
            </form>
          </motion.div>

          {/* Contact Info and Socials */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="mb-4 uppercase tracking-wider">
                Trabajemos Juntos
              </h3>
            </div>

            <div className="space-y-4">
              {contactItems.map((item, i) => { 
                const Icon = item.icon;
                return (
                  <motion.div
                    key={i}
                    className="flex items-start gap-4 p-6 bg-white rounded-lg border border-gray-100 hover:border-yellow-400 transition-all group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: item.delay }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02, y: -2 }}
                  >
                    <motion.div
                      className="flex-shrink-0 p-3 bg-gray-100 rounded-lg group-hover:bg-yellow-400 transition-colors"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="text-gray-900" size={24} />
                    </motion.div>
                    <div>
                      <h4 className="mb-1 uppercase tracking-wide text-sm">
                        {item.title}
                      </h4>
                      <p className="text-gray-900 mb-1">{item.content}</p>
                      <p className="text-sm text-gray-500">{item.subtitle}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Why Choose DREIECK - Moved inside right column */}
            <motion.div
              className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-8 rounded-xl border border-yellow-200"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
            >
              <h4 className="mb-4 uppercase tracking-wide">
                ¿Por qué elegir DREIECK?
              </h4>
              <ul className="space-y-3 text-sm text-gray-700">
                {[
                  "Experiencia comprobada en proyectos reales",
                  "Enfoque personalizado según tus necesidades",
                  "Comunicación clara y constante",
                  "Resultados medibles y accionables",
                ].map((text, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start gap-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-yellow-600 mt-0.5">▲</span>
                    <span className="tracking-wide">{text}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Redes Sociales */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              viewport={{ once: true }}
            >
              <h4 className="mb-4 uppercase tracking-wide text-sm text-gray-600">
                Síguenos
              </h4>
              <div className="flex gap-3">
                {socialLinks.map((social, i) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg hover:bg-yellow-500 hover:text-gray-900 transition-colors text-sm text-gray-700 font-medium border border-gray-200 hover:border-yellow-500"
                      aria-label={social.label}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.9 + i * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Icon size={18} />
                      <span>{social.label}</span>
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}