// IconCardon.jsx
export default function IconCardon({ size=48, className="", stroke=2 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" className={className}
      fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round">
      <path d="M32 56V38" />
      <path d="M32 38c-6 0-10-5-10-10 0-3 2-6 5-7M32 38c6 0 10-5 10-10 0-3-2-6-5-7" />
      <path d="M22 22c-4-2-7-6-7-10M42 22c4-2 7-6 7-10" />
      <path d="M28 56h8" />
    </svg>
  );
}

// IconDrago.jsx
export function IconDrago({ size=48, className="", stroke=2 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" className={className}
      fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round">
      <path d="M32 56V40" />
      <path d="M20 40c0-8 6-16 12-16s12 8 12 16" />
      <path d="M16 28c4-6 10-10 16-10s12 4 16 10" />
      <path d="M24 56h16" />
    </svg>
  );
}

// IconBird.jsx (pajarito)
export function IconBird({ size=40, className="", stroke=2 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" className={className}
      fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 40c10-2 16-10 22-20 6 12 10 18 18 20-6 2-12 4-20 4S18 42 12 40Z" />
      <circle cx="48" cy="28" r="1.8" fill="currentColor" />
    </svg>
  );
}

// IconStone.jsx (piedra)
export function IconStone({ size=36, className="", stroke=2 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" className={className}
      fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 44l8-14 18-6 14 10-6 14H18z" />
    </svg>
  );
}
