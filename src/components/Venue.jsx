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
        <div className="mx-auto max-w-2xl lg:mx-0 text-blue-900">
          <h2
            id="speakers-title"
            className="font-display text-4xl font-medium tracking-tighter text-blue-600 sm:text-5xl"
          >
            Venue
          </h2>
          <p className="text-blue-900 mt-3">
            This year the conference will be hosted at:
          </p>
          <p className="mt-3 font-display text-2xl tracking-tight text-blue-900">
            SCBX NEXT TECH at Siam Paragon 4th floor.
          </p>
          <p className="mt-3">
            SCB NEXT TECH is located at 4th floor at Siam Paragon you can get there🚆 Via BTS Siam.
            </p>
          <address className="mt-3">
            <a href="https://maps.app.goo.gl/Wp3EYnYbuv7s3qB26" target="_blank" rel="noreferrer">Address: Siam Paragon - 991/1 Rama I Rd, Rong Muang, Pathum Wan, Bangkok 10330</a>
          </address>
          <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.546947646624!2d100.53505179999999!3d13.745856999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29f885fd54cc7%3A0xf9dacc671fef10b5!2sSCB%20NEXT%20TECH!5e0!3m2!1sen!2sth!4v1699886024790!5m2!1sen!2sth" height="450" width="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </Container>
    </section>
  )
}
