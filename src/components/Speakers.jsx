import { useEffect, useId, useState } from 'react'
import Image from 'next/image'
import { Tab } from '@headlessui/react'
import { Button } from '@/components/Button'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { DiamondIcon } from '@/components/DiamondIcon'

import joelImage from '@/images/speakers/joel.jpg'
import surasukImage from '@/images/speakers/surasuk.jpg'
import charunthonImage from '@/images/speakers/charunthon.png'
import giorgioImage from '@/images/speakers/giorgio.jpg'
import teerasejImage from '@/images/speakers/teerasej.jpg'
import gittitatImage from '@/images/speakers/gittitat.jpg'
import joseImage from '@/images/speakers/jose.png'
import vasuponImage from '@/images/speakers/vasupon.jpg'
import ratchapolImage from '@/images/speakers/ratchapol.jpg'
import rafeeImage from '@/images/speakers/rafee.jpg'
import tbaImage from '@/images/speakers/tba.svg'

const days = [
  {
    name: 'Conference Day',
    date: 'November 29',
    dateTime: '2025-11-29',
    speakers: [
      {
        name: 'Vasupon Thankakan',
        role: 'Chief Operating Officer @ Microsoft Thailand',
        image: vasuponImage,
      },
      {
        name: 'Surasuk Oakkharaamonphong',
        role: 'Microsoft MVP AI Platform & Developer Technologies',
        image: surasukImage,
      },
      {
        name: 'Charunthon Limseelo',
        role: 'Microsoft Learn Student Ambassador',
        image: charunthonImage,
      },
      {
        name: 'Teerasej Jiraphatchandej',
        role: 'Microsoft AI MVP',
        image: teerasejImage,
      },
      {
        name: 'Joel Dickson',
        role: 'Director @ Agoda',
        image: joelImage,
      },
      {
        name: 'Ratchapol Anantawat',
        role: 'Lead Software Engineer @ Agoda',
        image: ratchapolImage,
      },
      {
        name: 'Gittitat Ekchantawut',
        role: 'Technical Specialist @ MOHARA',
        image: gittitatImage,
      },
      {
        name: 'Md Rafee',
        role: 'Senior Software Engineer @ Seven Peaks Software',
        image: rafeeImage,
      },
      {
        name: 'Jose Barbosa',
        role: 'Head of Engineering @ Seven Peaks Software',
        image: joseImage,
      },
      {
        name: 'Giorgio Desideri',
        role: 'Principal Solutions Architect @ Seven Peaks Software',
        image: giorgioImage,
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
                  <div key={speakerIndex} className="flex flex-col items-center group/card">
                    <div className="group relative w-[13rem] h-[13rem] transform rounded-4xl transition-transform duration-300 hover:scale-105 will-change-transform">
                      <div
                        className={clsx(
                          'absolute top-0 left-0 right-4 bottom-6 rounded-4xl border-2 transition-all duration-300 group-hover:scale-95 group-hover:shadow-lg xl:right-6 will-change-transform',
                          [
                            'border-dotnet-purple group-hover:shadow-dotnet-purple/50',
                            'border-dotnet-blue group-hover:shadow-dotnet-blue/50',
                            'border-purple-500 group-hover:shadow-purple-500/50',
                          ][speakerIndex % 3]
                        )}
                      />
                      <div
                        className="absolute inset-0 bg-gray-800 rounded-4xl overflow-hidden"
                        style={{ clipPath: `url(#${id}-${speakerIndex % 3})` }}
                      >
                        <Image
                          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:brightness-110 will-change-transform"
                          src={speaker.image}
                          alt=""
                          priority
                          sizes="(min-width: 1280px) 17.5rem, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                        />
                      </div>
                    </div>
                    <h3 className="mt-5 font-display text-lg font-bold tracking-tight text-white text-center transition-colors duration-300 group-hover/card:text-transparent group-hover/card:bg-clip-text group-hover/card:bg-gradient-to-r group-hover/card:from-purple-400 group-hover/card:to-blue-400">
                      {speaker.name}
                    </h3>
                    <p className="mt-2 text-sm tracking-tight text-gray-400 text-center max-w-[13rem] leading-relaxed">
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
