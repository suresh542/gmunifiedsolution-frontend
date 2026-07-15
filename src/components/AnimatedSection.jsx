import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function AnimatedSection({ children, className = '', delay = 0 }) {
  const ref = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={className}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
