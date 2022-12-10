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
            This year the conference will be hosted at Glowfish Sathorn.
          </p>
          <p className="mt-3 font-display text-2xl tracking-tight text-blue-900">
            2ND FLOOR, SATHORN THANI 2 - Glowfish Sathorn
          </p>
          <p className="mt-3">
            Glowfish Sathorn right next to BTS Chong Nonsi and a walkable distance to MRT Saladaeng, 
            Sathorn Thani building is part of Bangkok’s bustling business district. 
            </p>
          <p className="mt-3 text-sm">
            TEL: +66 2 109 9600
            INFO@GLOWFISHOFFICES.COM
          </p>
          <address className="mt-3">
            <a href="https://goo.gl/maps/639mrsjVYUM6kUre8" target="_blank" rel="noreferrer">Address: 92/4, Floor 2, Sathorn Thani 2 Building, North Sathorn Road, Silom, Bang Rak, Bangkok 10500</a>
          </address>
          <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21536.146820953672!2d100.51858286303988!3d13.724749242601424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29f2d589b4cf7%3A0xdcb09e862cf3258a!2sGLOWFISH!5e0!3m2!1sen!2sth!4v1670598995637!5m2!1sen!2sth" height="450" width="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </Container>
    </section>
  )
}
