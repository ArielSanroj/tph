import Section from './Section';

export default function Amenities() {
  const modules = import.meta.glob('/src/assets/photos/**/*.{jpg,jpeg,png,webp,gif}', { eager: true, import: 'default', query: '?url' });
  const images = Object.values(modules);
  const alts = Object.keys(modules).map(p => {
    const name = p.split('/').pop()?.split('.')[0] || 'Foto de la galería';
    return name.replace(/[-_]/g, ' ');
  });
  return (
    <Section id="galeria" title="Galería">
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {images.length === 0 && (
          [...Array(6)].map((_, i) => (
            <div key={i} className="aspect-[4/3] rounded-2xl bg-gray-100" />
          ))
        )}
        {images.map((src, i) => (
          <img key={i} src={src} alt={alts[i] || 'Galería TPH'} loading="lazy" decoding="async" sizes="(min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw" className="aspect-[4/3] w-full rounded-2xl object-cover" />
        ))}
      </div>
      <div className="mt-6">
        <a
          href="https://www.airbnb.com.co/hosting/listings/editor/24961722/details/photo-tour/photos"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-secondary"
        >
          Ver todas las fotos en Airbnb
        </a>
      </div>
    </Section>
  );
}


