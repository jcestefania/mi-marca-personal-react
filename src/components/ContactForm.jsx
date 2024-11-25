import React from 'react';
import './styles/ContactForm.css';

function ContactForm() {
  return (
    <section id="contacta-conmigo">
      <h2>Contacta conmigo</h2>
      <form id="contact-form">
        <label htmlFor="name">Nombre y Apellido:</label>
        <input type="text" id="name" name="name" placeholder="Tu nombre" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Tu email" required />

        <label htmlFor="message">Mensaje:</label>
        <textarea id="message" name="message" placeholder="Escribe tu mensaje aquí..." required></textarea>

        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}

export default ContactForm;
