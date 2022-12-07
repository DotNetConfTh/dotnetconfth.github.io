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
          Auditorium and Open Space - True Digital Park
          </p>
          <address>
            <a href="https://goo.gl/maps/pDbYcjDr8mm2ezYr8" target="_blank" rel="noreferrer">Address 101 Sukhumvit Road, Bangkok 10260 Thailand</a>
          </address>
          <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7753.176418078778!2d100.60927709231265!3d13.682785583493644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29ed269181bb1%3A0x60c3178ba983c76!2sTrue%20Digital%20Park!5e0!3m2!1sen!2shk!4v1670423449830!5m2!1sen!2shk" height="450" width="100%" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </Container>
    </section>
  )
}
