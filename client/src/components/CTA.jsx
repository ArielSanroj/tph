import Section from './Section';
import Button from './Button';

export default function CTA({ onReserveClick }) {
  return (
    <Section title="¿Listo para tu próxima aventura?" subtitle="Explora todos nuestros servicios y encuentra la experiencia perfecta para ti">
      <div className="flex flex-wrap items-center gap-4">
        <Button as="a" href="#servicios" className="bg-accent">Explorar Servicios</Button>
        <Button onClick={onReserveClick}>¡Reservar ahora!</Button>
      </div>
    </Section>
  );
}


