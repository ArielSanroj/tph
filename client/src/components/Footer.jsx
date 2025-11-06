import Section from './Section';

export default function Footer() {
  return (
    <footer id="contacto" className="bg-bgLight">
      <Section title="Contacto">
        <div className="grid gap-6 md:grid-cols-3">
          <div>
            <h3 className="font-bold">Contacto</h3>
            <p>gerencia@carmanfe.com.co</p>
            <p>@thepeacockhouse</p>
          </div>
          <div>
            <h3 className="font-bold">Ubicación</h3>
            <p>Km 12 Vía Nilo, Cundinamarca, Colombia</p>
          </div>
          <div>
            <h3 className="font-bold">The Peacock House</h3>
            <p>Un refugio eco-colonial donde la naturaleza, la paz y las aventuras familiares se encuentran en armonía.</p>
          </div>
        </div>
        <div className="mt-8 text-sm text-gray-500">
          © 2025 The Peacock House by Hacienda La Estancia. Todos los derechos reservados.
        </div>
      </Section>
    </footer>
  );
}


