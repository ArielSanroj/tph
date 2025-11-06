export default function Button({ children, onClick, as='button', href, className='', type }) {
  const base = 'inline-flex items-center justify-center rounded-2xl px-6 py-3 font-semibold shadow-sm bg-primary text-white transition hover:bg-accent';
  if (as === 'a') return <a href={href} className={`${base} ${className}`}>{children}</a>;
  return <button type={type} onClick={onClick} className={`${base} ${className}`}>{children}</button>;
}


