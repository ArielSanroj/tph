import Section from './Section';
import Button from './Button';

export default function Services() {
  return (
    <Section id="servicios" title="Nuestros Servicios" subtitle="Experiencias únicas en armonía con la naturaleza">
      <p className="text-gray-700">Disfruta una experiencia donde la paz de la naturaleza se combina con el encanto de una casa colonial, creando el escenario perfecto para tus aventuras y momentos de descanso.</p>
      <div className="mt-4"><Button as="a" href="#reservas" className="bg-accent">¡Reservar ahora!</Button></div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border p-6">
          <h3 className="text-xl font-bold">Encanto Colonial</h3>
          <p className="mt-2 text-gray-700">Nuestra casa colonial cuenta con 7 habitaciones acogedoras, cocina equipada para 18 personas, amplias áreas comunes y WiFi en toda la propiedad.</p>
          <ul className="mt-4 grid gap-2 text-gray-700">
            <li>• Sonidos de la naturaleza</li>
            <li>• Espacios para grupos grandes</li>
            <li>• Juegos y recreación familiar</li>
            <li>• WiFi en todas las áreas</li>
          </ul>
        </div>

        <div className="rounded-2xl border p-6">
          <h3 className="text-xl font-bold">Experiencias Ecológicas</h3>
          <p className="mt-2 text-gray-700">Actividades adicionales que complementan tu estadía (costo adicional)</p>
          <div className="mt-4 grid gap-4">
            <div>
              <h4 className="font-semibold">Aventura Agro</h4>
              <p className="text-gray-700">Paseos en carreta, interacción con animales de granja y conexión con la tierra.</p>
            </div>
            <div>
              <h4 className="font-semibold">Ruta a la Cumbre</h4>
              <p className="text-gray-700">Senderismo y escalada hasta la cima con vistas espectaculares de la región.</p>
            </div>
            <div>
              <h4 className="font-semibold">Deportiva</h4>
              <p className="text-gray-700">Tenis de mesa, wakeboard y actividades deportivas al aire libre.</p>
            </div>
            <div>
              <h4 className="font-semibold">Experiencia Equina</h4>
              <p className="text-gray-700">Paseos a caballo por los senderos naturales de la hacienda.</p>
            </div>
            <p className="text-sm text-gray-600">* Las experiencias ecológicas tienen un costo adicional. Consulta disponibilidad y precios.</p>
          </div>
        </div>
      </div>

      <div className="mt-10 rounded-2xl border p-6">
        <h3 className="text-xl font-bold">Conoce la Casa de Oreste Sindici</h3>
        <p className="mt-2 text-gray-700">Visita una casa del siglo XIX vinculada al compositor del Himno Nacional de Colombia. Un recorrido histórico y cultural para conectar con nuestras raíces y el legado musical.</p>
      </div>

      <div className="mt-10 rounded-2xl border p-6">
        <h3 className="text-xl font-bold">Retiros & Eventos</h3>
        <div className="mt-4 grid gap-6 md:grid-cols-2">
          <div>
            <h4 className="font-semibold">Retiros Espirituales</h4>
            <p className="text-gray-700">Un ambiente de paz y conexión ideal para retiros de yoga, meditación y crecimiento personal. La naturaleza como aliada en tu transformación.</p>
          </div>
          <div>
            <h4 className="font-semibold">Eventos Privados</h4>
            <p className="text-gray-700">Celebraciones familiares, eventos corporativos o reuniones privadas. Ofrecemos espacios versátiles y un entorno único para tu ocasión especial.</p>
          </div>
        </div>
      </div>

      <div className="mt-8"><Button as="a" href="#reservas">Hacer mi Reserva</Button></div>
    </Section>
  );
}


