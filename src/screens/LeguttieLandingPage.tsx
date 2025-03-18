import './LeguttieLandingPage.css';

const LeguttieLandingPage = () => {
  return (
    <div className="leguttie-page">
      <div className="banner">
        <span className="year">1977</span>
        <h1>Leguttie</h1>
        <p>Diseño en Accesorios</p>
        <span className="dots">...</span>
      </div>
      
      <div className="container">
        <div className="decorative-flags">
          {[...Array(7)].map((_, index) => (
            <div key={index} className="flag"></div>
          ))}
        </div>
        
        <section className="announcement">
          <h2>Aviso Importante: Cierre de Tienda Física</h2>
          <p>Debido a circunstancias imprevistas, nuestra ubicación física cerrará permanentemente en Marzo 20 de 2025.</p>
          <p>Queremos agradecer sinceramente a cada uno de nuestros valiosos clientes por su lealtad y apoyo a lo largo de los años.</p>
          <p>Aunque este capítulo está terminando, seguimos comprometidos a honrar todas las garantías y atender los pedidos existentes.</p>
          <p>Para cualquier consulta sobre compras, reparaciones o diseños personalizados, no dude en contactarnos directamente.</p>
        </section>
        
        <section className="contact-section">
          <h2>Mantengámonos en Contacto</h2>
          <div className="contact-grid">
            <ContactItem 
              icon="📱" 
              title="Teléfono" 
              content={[
                <p key="1"><a href="tel:+573103296273">(310) 329-6273</a></p>,
                <p key="2">Lunes-Viernes: 9am-5pm</p>
              ]}
            />
            
            <ContactItem 
              icon="✉️" 
              title="Correo Electrónico" 
              content={[
                <p key="1"><a href="mailto:info@leguttie.com">info@leguttie.com</a></p>,
                <p key="2">Respondemos en 24 horas</p>
              ]}
            />
            
            <ContactItem 
              icon="📍" 
              title="Ubicación de la Tienda" 
              content={[
                <p key="1">Autopista norte #146-48 local 113</p>,
                <p key="2">c.c. Granada Hills</p>,
                <p key="3">(Hasta el Marzo 20 de 2025)</p>
              ]}
            />
            
            <ContactItem 
              icon="💎" 
              title="Pedidos Especiales" 
              content={[
                <p key="1">Para diseños personalizados:</p>,
                <p key="2"><a href="mailto:pedidos@leguttie.com">pedidos@leguttie.com</a></p>
              ]}
            />
          </div>
        </section>
        
        <footer>
          <p>&copy; 2025 Leguttie - Diseño en Accesorios. Todos los derechos reservados.</p>
          {/* <div className="social-links">
            {['f', 'in', 'ig'].map((icon, index) => (
              <a key={index} href="#" className="social-icon">{icon}</a>
            ))}
          </div> */}
        </footer>
      </div>
    </div>
  );
};

// Contact Item Component
const ContactItem = ({ icon, title, content }: { icon: string, title: string, content: React.ReactNode[] }) => {
  return (
    <div className="contact-item">
      <div className="contact-icon">{icon}</div>
      <div className="contact-text">
        <h3>{title}</h3>
        {content}
      </div>
    </div>
  );
};

export default LeguttieLandingPage;