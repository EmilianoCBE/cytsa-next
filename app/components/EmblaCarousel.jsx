'use client'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'
import { sliderHomeContent } from '@/app/lib/data'

export default function EmblaCarousel({className = null}) {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({delay: 3000})])

  return (
    <div className={`embla border ${className}`} ref={emblaRef}>
      <div className="embla__container h-full">
        {
          sliderHomeContent.map((slide, index) => (
            <div className="embla__slide relative w-full h-full" key={index}>
              <Image
                src={slide.imageSlider}
                alt=''
                fill
                className="object-cover"
              />
            </div>
          ))
        }

      </div>
    </div>
  )
}
