import logoImage from '../logo/Ynov.png';

export default function Logo({ className = "h-16 w-auto" }: { className?: string }) {
  return (
    <img
      src={logoImage}
      alt="YNOV-AFRIK Logo"
      className={className}
      style={{ objectFit: 'contain' }}
    />
  );
}
