import Section from './Section';

export default function Reviews() {
  const reviews = [
    { text: '"Es un lugar hermoso perfecto para toda la familia 🤩"', author: 'Fanny, Diciembre 2024' },
    { text: '"Un lugar maravilloso para desconectarse y disfrutar de la naturaleza"', author: 'Huésped de Airbnb' },
    { text: '"La atención excepcional y el entorno espectacular. Volveremos sin duda"', author: 'Huésped de Airbnb' }
  ];
  return (
    <Section title="Lo que dicen nuestros huéspedes" subtitle="Experiencias reales de quienes nos han visitado">
      <div className="grid gap-6 md:grid-cols-3">
        {reviews.map((r, i) => (
          <figure key={i} className="rounded-2xl border p-6 shadow-sm">
            <div className="text-yellow-500">⭐⭐⭐⭐⭐</div>
            <blockquote className="mt-3 text-gray-700">{r.text}</blockquote>
            <figcaption className="mt-2 text-sm text-gray-500">— {r.author}</figcaption>
          </figure>
        ))}
      </div>
      <div className="mt-6">
        <a href="https://www.airbnb.com.co/rooms/24961722?source_impression_id=p3_1762335418_P3zWwkVsBcFL2i21" target="_blank" rel="noopener noreferrer" className="underline">Ver todas las reseñas en Airbnb</a>
      </div>
    </Section>
  );
}


