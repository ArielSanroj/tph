export default function MobileCTA({ onReserveClick, onLeadClick }) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 bg-white/95 backdrop-blur border-t p-3 md:hidden">
      <div className="mx-auto flex max-w-6xl gap-3">
        <button onClick={onLeadClick} className="flex-1 rounded-xl border px-4 py-3 font-semibold text-accent border-accent">Déjanos tus datos</button>
        <button onClick={onReserveClick} className="flex-1 rounded-xl bg-primary px-4 py-3 font-semibold text-white">¡Reservar ahora!</button>
      </div>
    </div>
  );
}
