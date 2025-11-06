export default function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-4 py-16">
      {title && <h2 className="text-3xl md:text-4xl font-extrabold mb-2">{title}</h2>}
      {subtitle && <p className="text-gray-600 mb-8">{subtitle}</p>}
      {children}
    </section>
  );
}


