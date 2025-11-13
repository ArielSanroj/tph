import Section from './Section';

export default function Videos() {
  const videos = [
    {
      id: 'e6fMuKVZXHc',
      title: 'Casa Oreste'
    },
    {
      id: 'Ey7W4Mi3JKk',
      title: 'Casa Oreste con Oreste'
    }
  ];

  return (
    <Section id="videos" title="Videos" subtitle="Conoce más sobre The Peacock House">
      <div className="grid gap-6 md:grid-cols-2">
        {videos.map((video) => (
          <div key={video.id} className="w-full">
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-gray-100">
              <iframe
                src={`https://www.youtube.com/embed/${video.id}`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
                loading="lazy"
              />
            </div>
            <h3 className="mt-3 text-lg font-semibold text-gray-800">{video.title}</h3>
          </div>
        ))}
      </div>
    </Section>
  );
}

