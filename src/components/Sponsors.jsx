import Image from 'next/image'

import { Container } from '@/components/Container'
import logoMicrosoft from '@/images/logos/microsoft.png'
import logoJetBrains from '@/images/logos/jetbrains.png'
import { Button } from './Button'

const sponsors = [
  { name: 'Microsoft', logo: logoMicrosoft },
  { name: 'JetBrains', logo: logoJetBrains },
]

function Sponsor({sponsor}) {
  return (
    <div className="flex items-center justify-center h-32 w-64">
      <Image
        src={sponsor.logo}
        alt={sponsor.name}
        unoptimized
        className="max-h-full max-w-full object-contain"
      />
    </div>
  )
}

export function Sponsors() {
  return (
    <section id="sponsors" aria-label="Sponsors" className="py-16 sm:py-24 bg-gray-900 relative">
      {/* Smooth transition gradient overlays */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-900 via-gray-900/70 to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent pointer-events-none" />
      <Container>
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="font-display text-4xl font-medium tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 sm:text-5xl">
            Sponsors
          </h2>
          <p className="mt-6 text-xl sm:text-2xl tracking-tight text-gray-300 leading-relaxed">
            .NET Conf Thailand is a free, community-driven conference. Thank you to our sponsors for making this event accessible to all developers!
          </p>
        </div>
        <div className="mx-auto mt-20 grid max-w-max grid-cols-1 place-content-center gap-y-12 gap-x-32 sm:grid-cols-2 md:gap-x-16 lg:gap-x-32">
          {sponsors.map((sponsor) =>
            <Sponsor key={sponsor.name} sponsor={sponsor} />
          )}
        </div>
        <div className="mx-auto max-w-5xl text-center mt-16">
          <h4
            className="font-display text-4xl font-medium tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 sm:text-5xl"
          >
            Want to be a sponsor?
          </h4>
          <p className="mt-6 text-xl sm:text-2xl tracking-tight text-gray-300 leading-relaxed">
            Support Thailand&apos;s .NET community and connect with passionate developers. Help us keep this event free and accessible for everyone.
          </p>
          <div className="mt-10">
            <Button>Sponsorship Info - Coming Soon</Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
