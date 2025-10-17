import Image from 'next/image'

import { Container } from '@/components/Container'
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
            Seven Peaks Software
          </p>
          <p className="mt-3">
          </p>
          <address className="mt-3">
            <a href="https://maps.app.goo.gl/so6HqiA4S9ujQJuj6" target="_blank" rel="noreferrer">Address: The PARQ - 5th floor, East Wing, The PARQ, 88 Ratchadaphisek Rd, Bangkok 10110</a>
          </address>
          <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15503.818089555924!2d100.5588518!3d13.7212032!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29edcf8a9dcf5%3A0xcf0d1a437c55d078!2sSeven%20Peaks%20Software%20(Thailand)!5e0!3m2!1sen!2sth!4v1729773779216!5m2!1sen!2sth" height="450" width="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </Container>
    </section>
  )
}
