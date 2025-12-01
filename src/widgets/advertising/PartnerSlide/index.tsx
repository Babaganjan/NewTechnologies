import type { FC } from 'react';
import { memo, useEffect, useRef, useState } from 'react';

export const PartnerSlide = memo<{ id: number; component: FC; name: string }>(
  ({ component: PartnerComponent, name }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        },
        {
          rootMargin: '100px',
          threshold: 0.01,
        }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => observer.disconnect();
    }, []);

    return (
      <div ref={ref} className="continuous-slide">
        {isVisible && <PartnerComponent aria-label={name} />}
      </div>
    );
  }
);

PartnerSlide.displayName = 'PartnerSlide';
