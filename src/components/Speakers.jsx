import { useEffect, useId, useState } from 'react'
import Image from 'next/image'
import { Tab } from '@headlessui/react'
import { Button } from '@/components/Button'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { DiamondIcon } from '@/components/DiamondIcon'

import joelImage from '@/images/speakers/joel.jpg'
import surasukImage from '@/images/speakers/surasuk.jpg'
import wittawatImage from '@/images/speakers/wittawat.jpg'
import giorgioImage from '@/images/speakers/giorgio.jpg'
import teerasej from '@/images/speakers/teerasej.jpg'
import gittitatImage from '@/images/speakers/gittitat.jpg'
import joseImage from '@/images/speakers/jose.png'
import nokImage from '@/images/speakers/nok.jpg'
import veeravatImage from '@/images/speakers/veeravat.jpg'
import akkaponImage from '@/images/speakers/akkapon.jpg'
import yanyongImage from '@/images/speakers/yanyong.jpg'
import vorapatImage from '@/images/speakers/vorapat.jpg'
import charunthonImage from '@/images/speakers/charunthon.png'
import pooonsiriImage from '@/images/speakers/pooonsiri.jpg'
import tbaImage from '@/images/speakers/tba.svg'

const days = [
  {
    name: 'Conference Day',
    date: 'November 29',
    dateTime: '2025-11-29',
    speakers: [
      {
        name: 'Surasuk Oakkharaamonphong',
        role: 'Director and Technical Coach at INFINITAS by Krungthai',
        image: surasukImage,
      },
      {
        name: 'Wittawat Karpkrikaew',
        role: 'CTO at T. T. Software Solution',
        image: wittawatImage,
      },
      {
        name: 'Gittitat Ekchantawut',
        role: 'Technical Specialist at MOHARA',
        image: gittitatImage,
      },
      {
        name: 'Charunthon (Boat) Limseelo',
        role: 'Microsoft Learn Student Ambassadors',
        image: charunthonImage,
      },
      {
        name: 'Giorgio Desideri',
        role: 'Principal Solutions Architect at Seven Peaks Software',
        image: giorgioImage,
      },
      {
        name: 'Jose Barbosa',
        role: 'Head of Engineering at Seven Peaks Software',
        image: joseImage,
      },
      {
        name: 'Joel Dickson',
        role: 'Director at Agoda',
        image: joelImage,
      },
      {
        name: 'To be announced',
        role: '',
        image: tbaImage,
      },
      {
        name: 'To be announced',
        role: '',
        image: tbaImage,
      },
    ],
  },
]

function ImageClipPaths({ id, ...props }) {
  return (
    <svg aria-hidden="true" width={0} height={0} {...props}>
      <defs>
        <clipPath id={`${id}-0`} clipPathUnits="objectBoundingBox">
          <path d="M0,0 h0.729 v0.129 h0.121 l-0.016,0.032 C0.815,0.198,0.843,0.243,0.885,0.243 H1 v0.757 H0.271 v-0.086 l-0.121,0.057 v-0.214 c0,-0.032,-0.026,-0.057,-0.057,-0.057 H0 V0" />
        </clipPath>
        <clipPath id={`${id}-1`} clipPathUnits="objectBoundingBox">
          <path d="M1,1 H0.271 v-0.129 H0.15 l0.016,-0.032 C0.185,0.802,0.157,0.757,0.115,0.757 H0 V0 h0.729 v0.086 l0.121,-0.057 v0.214 c0,0.032,0.026,0.057,0.057,0.057 h0.093 v0.7" />
        </clipPath>
        <clipPath id={`${id}-2`} clipPathUnits="objectBoundingBox">
          <path d="M1,0 H0.271 v0.129 H0.15 l0.016,0.032 C0.185,0.198,0.157,0.243,0.115,0.243 H0 v0.757 h0.729 v-0.086 l0.121,0.057 v-0.214 c0,-0.032,0.026,-0.057,0.057,-0.057 h0.093 V0" />
        </clipPath>
      </defs>
    </svg>
  )
}

export function Speakers() {
  let id = useId()
  let [tabOrientation, setTabOrientation] = useState('horizontal')

  useEffect(() => {
    let lgMediaQuery = window.matchMedia('(min-width: 1024px)')

    function onMediaQueryChange({ matches }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(lgMediaQuery)
    lgMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <section
      id="speakers"
      aria-labelledby="speakers-title"
      className="py-16 sm:py-24 bg-gray-900 relative"
    >
      {/* Smooth transition gradient overlays */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-900 via-gray-900/70 to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent pointer-events-none" />
      <ImageClipPaths id={id} />
      <Container className="relative z-10">
        <div className="mx-auto max-w-5xl text-center">
          <h2
            id="speakers-title"
            className="font-display text-4xl font-medium tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 sm:text-5xl"
          >
            Speakers
          </h2>
          <p className="mt-6 text-xl sm:text-2xl tracking-tight text-gray-300 leading-relaxed">
            Learn from industry experts and community leaders as they share insights on the latest .NET technologies, best practices, and real-world experiences. We&apos;re excited to announce our amazing speaker lineup, with more announcements coming soon!
          </p>
        </div>
        <Tab.Group
          as="div"
          className="mt-14 grid grid-cols-1 items-start gap-y-8 gap-x-8 sm:mt-16 sm:gap-y-16 lg:mt-24 lg:grid-cols-4"
          vertical={tabOrientation === 'vertical'}
        >
          <div className="relative -mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:block sm:overflow-visible sm:pb-0">
            <div className="absolute bottom-0 top-2 left-0.5 hidden w-px bg-dotnet-purple/30 lg:block" />
            <Tab.List className="grid auto-cols-auto grid-flow-col justify-start gap-x-8 gap-y-10 whitespace-nowrap px-4 sm:mx-auto sm:max-w-2xl sm:grid-cols-3 sm:px-0 sm:text-center lg:grid-flow-row lg:grid-cols-1 lg:text-left">
              {({ selectedIndex }) =>
                days.map((day, dayIndex) => (
                  <div key={day.dateTime} className="relative lg:pl-8">
                    <DiamondIcon
                      className={clsx(
                        'absolute top-[0.5625rem] left-[-0.5px] hidden h-1.5 w-1.5 overflow-visible lg:block',
                        dayIndex === selectedIndex
                          ? 'fill-dotnet-purple stroke-dotnet-purple'
                          : 'fill-transparent stroke-gray-600'
                      )}
                    />
                    <div className="relative">
                      <div
                        className={clsx(
                          'font-mono text-sm',
                          dayIndex === selectedIndex
                            ? 'text-dotnet-blue-light'
                            : 'text-gray-500'
                        )}
                      >
                        <Tab className="[&:not(:focus-visible)]:focus:outline-none">
                          <span className="absolute inset-0" />
                          {day.name}
                        </Tab>
                      </div>
                      <time
                        dateTime={day.dateTime}
                        className="mt-1.5 block text-2xl font-semibold tracking-tight text-gray-200"
                      >
                        {day.date}
                      </time>
                    </div>
                  </div>
                ))
              }
            </Tab.List>
          </div>
          <Tab.Panels className="lg:col-span-3">
            {days.map((day) => (
              <Tab.Panel
                key={day.dateTime}
                className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 sm:gap-y-16 md:grid-cols-3 [&:not(:focus-visible)]:focus:outline-none"
                unmount={false}
              >
                {day.speakers.map((speaker, speakerIndex) => (
                  <div key={speakerIndex} className="flex flex-col items-center">
                    <div className="group relative w-[13rem] h-[13rem] transform overflow-hidden rounded-4xl">
                      <div
                        className={clsx(
                          'absolute top-0 left-0 right-4 bottom-6 rounded-4xl border transition duration-300 group-hover:scale-95 xl:right-6',
                          [
                            'border-dotnet-purple',
                            'border-dotnet-blue',
                            'border-purple-500',
                          ][speakerIndex % 3]
                        )}
                      />
                      <div
                        className="absolute inset-0 bg-gray-800"
                        style={{ clipPath: `url(#${id}-${speakerIndex % 3})` }}
                      >
                        <Image
                          className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-110"
                          src={speaker.image}
                          alt=""
                          priority
                          sizes="(min-width: 1280px) 17.5rem, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                        />
                      </div>
                    </div>
                    <h3 className="mt-4 font-display text-lg font-bold tracking-tight text-white text-center">
                      {speaker.name}
                    </h3>
                    <p className="mt-1 text-sm tracking-tight text-gray-400 text-center">
                      {speaker.role}
                    </p>
                  </div>
                ))}
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
        <div className="mx-auto max-w-5xl text-center mt-16">
          <h4
            className="font-display text-4xl font-medium tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 sm:text-5xl"
          >
            Want to be a speaker?
          </h4>
          <p className="mt-6 text-xl sm:text-2xl tracking-tight text-gray-300 leading-relaxed">
            Share your expertise with Thailand&apos;s .NET community! We&apos;re looking for passionate speakers to present innovative ideas, practical solutions, and inspiring stories about .NET technologies.
          </p>
          <div className="mt-10">
            <Button href="https://forms.gle/6gxbBGXP5aFZQUDe6">Submit Your Talk</Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
