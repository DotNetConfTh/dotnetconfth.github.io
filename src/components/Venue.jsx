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
    <section id="sponsors" aria-label="Sponsors" className="py-16 sm:py-24 bg-gray-900 relative">
      {/* Smooth transition gradient overlays */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-900 via-gray-900/70 to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent pointer-events-none" />
      <Container>
        <div className="mx-auto max-w-5xl text-center">
          <h2
            id="speakers-title"
            className="font-display text-4xl font-medium tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 sm:text-5xl"
          >
            Venue
          </h2>
          <p className="mt-6 text-xl sm:text-2xl tracking-tight text-gray-300 leading-relaxed">
            The venue for this year's conference will be announced soon. Stay tuned for updates—we're working to secure an amazing location for the .NET Thailand community!
          </p>
          <p className="mt-10 font-display text-2xl tracking-tight text-white">
            To be Announced
          </p>
        </div>
      </Container>
    </section>
  )
}
