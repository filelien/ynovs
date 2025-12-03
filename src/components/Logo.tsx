import logoImage from '../logo/Ynov.png';

type LogoProps = {
  className?: string;
};

export default function Logo({ className = '' }: LogoProps) {
  const baseClasses = 'h-16 w-16 object-contain';

  return (
    <img
      src={logoImage}
      alt="YNOV-AFRIK Logo"
      className={`${baseClasses} ${className}`.trim()}
      loading="eager"
    />
  );
}
