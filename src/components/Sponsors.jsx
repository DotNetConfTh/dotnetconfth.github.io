import Image from 'next/image'

import { Container } from '@/components/Container'
import logoRedHat from '@/images/logos/redhat1.png'
import logoGummyBear from '@/images/logos/gummybear.png'
import logoMicrosoft from '@/images/logos/microsoft.png'
import logoJetBrains from '@/images/logos/jetbrains.png'
import logoTtSoftware from '@/images/logos/ttsoftware.png'
import logoSevenPeaks from '@/images/logos/sevenpeaks.png'
import { Button } from './Button'

const sponsors = [
  // { name: 'Seven Peaks', logo: sevenPeaks },
  { name: 'Microsoft', logo: logoMicrosoft },
  { name: 'JetBrains', logo: logoJetBrains },
  // { name: 'Red Hat', logo: logoRedHat },
  { name: 'Seven Peaks Software', logo: logoSevenPeaks },
  { name: 'TT Software', logo: logoTtSoftware },
  // { name: 'Gummy Bear', logo: logoGummyBear },
  // { name: 'Mirage', logo: logoMirage },
  // { name: 'Laravel', logo: logoLaravel },
  // { name: 'Statamic', logo: logoStatamic },
]

function Sponsor({sponsor}) {
  let imageSize = "";
  if (sponsor.name === "Gummy Bear") {
    imageSize = "w-5/12"
  } 

  return (
    <div
      className={`flex items-center justify-center`}
    >
      <Image src={sponsor.logo} alt={sponsor.name} unoptimized className={imageSize} />
    </div>
  )
}

export function Sponsors() {
  return (
    <section id="sponsors" aria-label="Sponsors" className="py-20 sm:py-32">
      <Container>
        <h2 className="mx-auto max-w-2xl text-center font-display text-4xl font-medium tracking-tighter text-blue-900 sm:text-5xl">
          Current sponsors for our conference.
        </h2>
        <div className="mx-auto mt-20 grid max-w-max grid-cols-1 place-content-center gap-y-12 gap-x-32 sm:grid-cols-3 md:gap-x-16 lg:gap-x-32">
          {sponsors.map((sponsor) => 
            <Sponsor key={sponsor.name} sponsor={sponsor} />
          )}
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h4
            className="mt-20 mx-auto max-w-2xl text-center font-display text-4xl font-medium tracking-tighter text-blue-900 sm:text-5xl"
          >
            Want to be a sponsor?
          </h4>
          <p className="mt-4 font-display text-center text-xl tracking-tight text-blue-900">
            <Button href="https://docs.google.com/presentation/d/e/2PACX-1vRwBnErXI-WD-eypFHDVhZfZyEZt6f759mT72PBKJvCXNiCQcVE4aRImCW--T9kIZJzHo6UC09wGHJP/pub?start=false&loop=false&delayms=3000" target="_blank" rel="noreferrer">View our Sponsorship Proposal</Button>
          </p>
        </div>
      </Container>
    </section>
  )
}
