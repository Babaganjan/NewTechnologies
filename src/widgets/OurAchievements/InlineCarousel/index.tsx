'use client';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';

type Props = { slides: string[] };

export const InlineCarousel = ({ slides }: Props) => {
  const [emblaRef] = useEmblaCarousel({
    align: 'center',
    active: slides.length > 2,

    breakpoints: { '(min-width: 1024px)': { active: false } },
  });

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {slides.map((src, i) => (
          <div className="embla__slide" key={i}>
            <div className="ourAchievements__image-wrapper">
              <Image src={src} alt="" width={400} height={400} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
