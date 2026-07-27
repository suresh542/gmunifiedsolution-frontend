import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function AnimatedSection({ children, className = '', delay = 0, duration = 3000 }) {
  const ref = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={className}
      style={{ transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`,
        transitionTimingFunction: 'ease-out' }}
    >
      {children}
    </div>
  );
}
