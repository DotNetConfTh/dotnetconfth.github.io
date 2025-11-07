import Image from 'next/image'
import { Container } from '@/components/Container'
import { Button } from '@/components/Button'

import joseImage from '@/images/speakers/jose.png'
import giorgioImage from '@/images/speakers/giorgio.jpg'
import gittitatImage from '@/images/speakers/gittitat.jpg'
import charunthonImage from '@/images/speakers/charunthon.png'
import chandraImage from '@/images/speakers/chandra.jpeg'
import teemaImage from '@/images/speakers/teema.jpg'
import nattawatImage from '@/images/speakers/nattawat.jpg'
import tbaImage from '@/images/speakers/tba.svg'

const coChairs = [
  { name: 'Jose Barbosa', image: joseImage },
  { name: 'Giorgio Desideri', image: giorgioImage },
  { name: 'Chandra', image: chandraImage },
]

const teams = [
  {
    name: 'Communication',
    description: 'Manages conference announcements, social media campaigns, and content creation for .NET Conf Thailand 2025.',
    members: [
      { name: 'Chandra', image: chandraImage },
      { name: 'Boat', image: charunthonImage },
      { name: 'Teema', image: teemaImage },
    ],
  },
  {
    name: 'Partnership',
    description: 'Secures sponsors and partners to make .NET Conf Thailand 2025 free and accessible to all developers.',
    members: [
      { name: 'Jose', image: joseImage },
      { name: 'Gitti', image: gittitatImage },
    ],
  },
  {
    name: 'Event Organization',
    description: 'Plans and executes .NET Conf Thailand 2025, from venue coordination to speaker management and day-of operations.',
    members: [
      { name: 'Giorgio', image: giorgioImage },
      { name: 'Nattawat', image: nattawatImage },
    ],
  },
]

export function Team() {
  return (
    <section id="team" aria-label="Our Team" className="py-16 sm:py-24 bg-gray-900 relative">
      {/* Smooth transition gradient overlays */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-900 via-gray-900/70 to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent pointer-events-none" />
      <Container className="relative z-10">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="font-display text-4xl font-medium tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 sm:text-5xl">
            Our Team
          </h2>
          <p className="mt-6 text-xl sm:text-2xl tracking-tight text-gray-300 leading-relaxed">
            Meet the passionate volunteers making .NET Conf Thailand 2025 possible. Our lean team works together to create an amazing experience for the community.
          </p>
        </div>

        {/* Co-Chairs */}
        <div className="mt-16">
          <h3 className="text-center text-2xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
            Co-Chairs
          </h3>
          <div className="mt-8 flex flex-wrap justify-center gap-8">
            {coChairs.map((chair) => (
              <div
                key={chair.name}
                className="flex flex-col items-center"
              >
                <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-dotnet-purple shadow-lg shadow-dotnet-purple/30">
                  <Image
                    src={chair.image}
                    alt={chair.name}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <span className="mt-4 text-lg font-semibold text-white text-center">{chair.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Teams */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {teams.map((team) => (
            <div
              key={team.name}
              className="rounded-2xl bg-gray-800/60 p-8 border border-dotnet-purple/20 backdrop-blur text-center"
            >
              <h4 className="text-xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                {team.name}
              </h4>
              <p className="mt-3 text-sm text-gray-400 leading-relaxed">
                {team.description}
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-6">
                {team.members.map((member) => (
                  <div key={member.name} className="flex flex-col items-center">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-dotnet-blue shadow-md shadow-dotnet-blue/20">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    </div>
                    <p className="mt-3 text-base font-medium text-gray-300">
                      {member.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Call for Volunteers */}
        <div className="mx-auto max-w-5xl text-center mt-16">
          <h3 className="font-display text-4xl font-medium tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 sm:text-5xl">
            Join Our Team!
          </h3>
          <p className="mt-6 text-xl sm:text-2xl tracking-tight text-gray-300 leading-relaxed">
            Help us make .NET Conf Thailand 2025 amazing! Join our volunteer team and be part of Thailand&apos;s premier .NET community event.
          </p>
          <div className="mt-10">
            <Button href="https://forms.gle/anF2N95YFjB9jt3S7">Become a Volunteer</Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
