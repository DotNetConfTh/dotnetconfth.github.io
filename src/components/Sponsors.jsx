import Image from 'next/image'

import { Container } from '@/components/Container'
import logoLaravel from '@/images/logos/laravel.svg'
import logoMirage from '@/images/logos/mirage.svg'
import logoStatamic from '@/images/logos/statamic.svg'
import logoGummyBear from '@/images/logos/gummybear.png'
import logoMicrosoft from '@/images/logos/microsoft.png'
import logoTtSoftware from '@/images/logos/ttsoftware.png'
import logoSevenPeaks from '@/images/logos/sevenpeaks.png'

const sponsors = [
  // { name: 'Seven Peaks', logo: sevenPeaks },
  { name: 'Microsoft', logo: logoMicrosoft },
  { name: 'Gummy Bear', logo: logoGummyBear },
  { name: 'TT Software', logo: logoTtSoftware },
  { name: 'Seven Peaks Software', logo: logoSevenPeaks },
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
          Current sponsorships for our conference.
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
            <a className='text-blue-600' href='https://drive.google.com/file/d/1JQNHAgSWmWdiM29HMMeMJhrLJqxTlvv9/view?usp=share_link' target="_blank" rel="noreferrer"> Click to view our Sponsorship Proposal.</a>
          </p>
        </div>
      </Container>
    </section>
  )
}
