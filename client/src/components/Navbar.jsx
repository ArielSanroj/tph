import { useState } from 'react';
import Button from './Button';

export default function Navbar({ onReserveClick, onLeadClick }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
        <div className="hidden gap-2 md:flex">
          <Button onClick={onLeadClick} className="bg-accent">Déjanos tus datos</Button>
          <Button onClick={onReserveClick}>¡Reservar ahora!</Button>
        </div>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2"
          aria-label="Menú"
          aria-expanded={mobileMenuOpen}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>
      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-white">
          <div className="mx-auto max-w-6xl px-4 py-3 flex flex-col gap-3">
            <a href="#inicio" onClick={() => setMobileMenuOpen(false)} className="text-sm">Inicio</a>
            <a href="#servicios" onClick={() => setMobileMenuOpen(false)} className="text-sm">Servicios</a>
            <a href="#historia" onClick={() => setMobileMenuOpen(false)} className="text-sm">Nuestra Historia</a>
            <a href="#galeria" onClick={() => setMobileMenuOpen(false)} className="text-sm">Galería</a>
            <a href="#reservas" onClick={() => setMobileMenuOpen(false)} className="text-sm">Reservas</a>
            <a href="#contacto" onClick={() => setMobileMenuOpen(false)} className="text-sm">Contacto</a>
            <div className="flex gap-2 pt-2">
              <Button onClick={() => { onLeadClick(); setMobileMenuOpen(false); }} className="bg-accent flex-1 text-sm">Déjanos tus datos</Button>
              <Button onClick={() => { onReserveClick(); setMobileMenuOpen(false); }} className="flex-1 text-sm">¡Reservar ahora!</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}


