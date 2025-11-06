import Button from './Button';

export default function Navbar({ onReserveClick, onLeadClick }) {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur" role="banner">
      <a href="#inicio" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-white rounded px-2 py-1">Saltar al contenido</a>
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3" aria-label="Principal">
        <a href="#inicio" className="text-xl font-bold logo-text" aria-label="The Peacock House inicio">The Peacock House</a>
        <div className="hidden gap-6 md:flex text-sm" role="menubar">
          <a href="#inicio" role="menuitem">Inicio</a>
          <a href="#servicios" role="menuitem">Servicios</a>
          <a href="#historia" role="menuitem">Nuestra Historia</a>
          <a href="#galeria" role="menuitem">Galería</a>
          <a href="#reservas" role="menuitem">Reservas</a>
          <a href="#contacto" role="menuitem">Contacto</a>
        </div>
        <div className="flex gap-2">
          <Button onClick={onLeadClick} className="bg-accent">Déjanos tus datos</Button>
          <Button onClick={onReserveClick}>¡Reservar ahora!</Button>
        </div>
      </nav>
    </header>
  );
}


