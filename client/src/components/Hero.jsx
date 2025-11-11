import Button from './Button';

export default function Hero({ onReserveClick }) {
  return (
    <section id="inicio" className="relative isolate">
      <div className="mx-auto max-w-6xl px-4 py-24 text-center">
        <h1 className="text-4xl md:text-6xl font-black">Naturaleza & Paz</h1>
        <p className="mt-3 text-lg text-gray-600">Experiencias Ecológicas | Casa Estilo Colonial</p>
        <div className="mt-6 flex justify-center gap-4">
          <Button onClick={onReserveClick}>¡Reservar ahora!</Button>
          <a href="#servicios" className="underline font-medium">Explorar Servicios</a>
        </div>
      </div>
    </section>
  );
}


