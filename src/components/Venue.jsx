import Image from 'next/image'

import { Container } from '@/components/Container'
import logoLaravel from '@/images/logos/laravel.svg'
import logoMirage from '@/images/logos/mirage.svg'
import logoStatamic from '@/images/logos/statamic.svg'
import logoStaticKit from '@/images/logos/statickit.svg'
import sevenPeaks from '@/images/logos/sevenpeaks.png'
import logoTuple from '@/images/logos/microsoft.png'

const sponsors = [
  // { name: 'Seven Peaks', logo: sevenPeaks },
  { name: 'Tuple', logo: logoTuple },
  // { name: 'StaticKit', logo: logoStaticKit },
  // { name: 'Mirage', logo: logoMirage },
  // { name: 'Laravel', logo: logoLaravel },
  // { name: 'Statamic', logo: logoStatamic },
]

export function Venue() {
  return (
    <section id="sponsors" aria-label="Sponsors" className="py-20 sm:py-32">
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="speakers-title"
            className="font-display text-4xl font-medium tracking-tighter text-blue-600 sm:text-5xl"
          >
            Venue
          </h2>
          <p className="mt-4 font-display text-2xl tracking-tight text-blue-900">
            True Digital Park
          </p>
        </div>
      </Container>
    </section>
  )
}
