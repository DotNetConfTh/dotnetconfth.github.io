import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background.jpg'
import joseImage from '@/images/speakers/jose.png'
import giorgioImage from '@/images/speakers/giorgio.jpg'
import vasuponImage from '@/images/speakers/vasupon.jpg'
import surasukImage from '@/images/speakers/surasuk.jpg'
import charunthonImage from '@/images/speakers/charunthon.png'
import tjImage from '@/images/speakers/teerasej.jpg'
import joelImage from '@/images/speakers/joel.jpg'
import ratchapolImage from '@/images/speakers/ratchapol.jpg'
import gittitatImage from '@/images/speakers/gittitat.jpg'
import rafeeImage from '@/images/speakers/rafee.jpg'

const schedule = [
  {
    date: 'November 29',
    dateTime: '2025-11-29',
    summary:
      'Celebrate and learn about what you can do with .NET 10 at the Thailand biggest .NET event',
      timeSlots: [
        {
          name: 'Registration',
          description: null,
          start: '09:00 AM',
          end: '10:00 AM',
        },
        {
          name: 'Welcome to .NET Conf Thailand 2025',
          description: 'Jose Barbosa',
          speaker: {
            name: 'Jose Barbosa',
            image: joseImage,
          },
          start: '09:30 AM',
          end: '10:00 AM',
        },
        {
          name: 'Keynote Session',
          description: 'Vasupon Thankakan',
          speaker: {
            name: 'Vasupon Thankakan',
            image: vasuponImage,
          },
          start: '10:00 AM',
          end: '10:30 AM',
        },
        {
          name: 'Microsoft Agent Framework',
          description: 'Surasuk Oakkharaamonphong',
          speaker: {
            name: 'Surasuk Oakkharaamonphong',
            image: surasukImage,
          },
          start: '10:30 AM',
          end: '11:00 AM',
        },
        {
          name: '.NET Ecosystem For Sustainable SLMs with Foundry Local: Tools, Techniques, and Tomorrow',
          description: 'Charunthon Limseelo',
          speaker: {
            name: 'Charunthon Limseelo',
            image: charunthonImage,
          },
          start: '11:00 AM',
          end: '11:30 AM',
        },
        {
          name: 'Exploring Microsoft Foundry for Developer',
          description: 'Teerasej Jiraphatchandej',
          speaker: {
            name: 'Teerasej Jiraphatchandej',
            image: tjImage,
          },
          start: '11:30 AM',
          end: '12:00 PM',
        },
        {
          name: 'Lunch Break',
          description: null,
          start: '12:00 PM',
          end: '01:00 PM',
        },
        {
          name: 'Lightning Talks',
          description: null,
          start: '01:00 PM',
          end: '01:30 PM',
        },
        {
          name: 'Pushing for Black Box Testing when everyone Love\'s Unit tests',
          description: 'Joel Dickson',
          speaker: {
            name: 'Joel Dickson',
            image: joelImage,
          },
          start: '01:30 PM',
          end: '02:00 PM',
        },
        {
          name: 'Beyond Swagger UI: Practical Uses of OpenAPI in .NET 10',
          description: 'Ratchapol Anantawat',
          speaker: {
            name: 'Ratchapol Anantawat',
            image: ratchapolImage,
          },
          start: '02:00 PM',
          end: '02:30 PM',
        },
        {
          name: 'Running AI Models Inside Unity: The Power of the Inference Engine',
          description: 'Gittitat Ekchantawut',
          speaker: {
            name: 'Gittitat Ekchantawut',
            image: gittitatImage,
          },
          start: '02:30 PM',
          end: '03:00 PM',
        },
        {
          name: 'Break',
          description: null,
          start: '03:00 PM',
          end: '03:30 PM',
        },
        {
          name: 'Aspire: The Unified Toolchain for Building Cloud-Native Distributed Apps',
          description: 'Md Rafee',
          speaker: {
            name: 'Md Rafee',
            image: rafeeImage,
          },
          start: '03:30 PM',
          end: '04:00 PM',
        },
        {
          name: 'ASP.NET Core 10 & C#14 "in action"',
          description: 'Giorgio Desideri',
          speaker: {
            name: 'Giorgio Desideri',
            image: giorgioImage,
          },
          start: '04:00 PM',
          end: '04:30 PM',
        },
        {
          name: 'Closing Ceremony',
          description: 'Giorgio Desideri',
          speaker: {
            name: 'Giorgio Desideri',
            image: giorgioImage,
          },
          start: '04:30 PM',
          end: '05:00 PM',
        },
    ],
  },
]

function ScheduleTabbed() {
  let [tabOrientation, setTabOrientation] = useState('horizontal')

  useEffect(() => {
    let smMediaQuery = window.matchMedia('(min-width: 640px)')

    function onMediaQueryChange({ matches }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(smMediaQuery)
    smMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      smMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <Tab.Group
      as="div"
      className="mx-auto grid max-w-2xl grid-cols-1 gap-y-6 sm:grid-cols-2 lg:hidden"
      vertical={tabOrientation === 'vertical'}
    >
      <Tab.List className="-mx-4 flex gap-x-4 gap-y-10 overflow-x-auto pl-4 pb-4 sm:mx-0 sm:flex-col sm:pb-0 sm:pl-0 sm:pr-8">
        {({ selectedIndex }) =>
          schedule.map((day, dayIndex) => (
            <div
              key={day.dateTime}
              className={clsx(
                'relative w-3/4 flex-none pr-4 sm:w-auto sm:pr-0',
                dayIndex !== selectedIndex && 'opacity-70'
              )}
            >
              <DaySummary
                day={{
                  ...day,
                  date: (
                    <Tab className="[&:not(:focus-visible)]:focus:outline-none text-left">
                      <span className="absolute inset-0" />
                      {day.date}
                    </Tab>
                  ),
                }}
              />
            </div>
          ))
        }
      </Tab.List>
      <Tab.Panels>
        {schedule.map((day) => (
          <Tab.Panel
            key={day.dateTime}
            className="[&:not(:focus-visible)]:focus:outline-none"
          >
            <TimeSlots day={day} />
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  )
}

function DaySummary({ day }) {
  return (
    <>
      <h3 className="text-2xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
        <time dateTime={day.dateTime}>{day.date}</time>
      </h3>
      <p className="mt-1.5 text-base tracking-tight text-gray-300">
        {day.summary}
      </p>
    </>
  )
}

function TimeSlots({ day, className }) {
  return (
    <ol
      role="list"
      className={clsx(
        className,
        'space-y-8 bg-gray-800/60 py-14 px-10 text-center shadow-xl shadow-dotnet-purple/20 backdrop-blur border border-dotnet-purple/20 rounded-3xl'
      )}
    >
      {day.timeSlots.map((timeSlot, timeSlotIndex) => (
        <li
          key={timeSlot.start}
          aria-label={`${timeSlot.name} talking about ${timeSlot.description} at ${timeSlot.start} - ${timeSlot.end} PST`}
        >
          {timeSlotIndex > 0 && (
            <div className="mx-auto mb-8 h-px w-48 bg-dotnet-purple/30" />
          )}

          {/* Time Badge - More Prominent */}
          <div className="mb-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-400/30">
            <time dateTime={`${day.dateTime}T${timeSlot.start}-08:00`} className="font-mono text-base font-semibold text-purple-300">
              {timeSlot.start}
            </time>
            <span className="text-purple-400/60">—</span>
            <time dateTime={`${day.dateTime}T${timeSlot.end}-08:00`} className="font-mono text-base font-semibold text-purple-300">
              {timeSlot.end}
            </time>
            <span className="ml-1 text-xs text-gray-400 uppercase tracking-wider">GMT+7</span>
          </div>

          {/* Session Title */}
          <h4 className="text-xl font-semibold tracking-tight text-white mb-4 leading-snug">
            {timeSlot.name}
          </h4>

          {/* Speaker Info */}
          {timeSlot.speaker && (
            <div className="mt-4 flex items-center justify-center gap-4">
              <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-dotnet-blue shadow-lg ring-2 ring-dotnet-blue/20">
                <Image
                  src={timeSlot.speaker.image}
                  alt={timeSlot.speaker.name}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <p className="text-lg tracking-tight text-dotnet-blue-light font-medium">
                {timeSlot.speaker.name}
              </p>
            </div>
          )}
          {timeSlot.description && !timeSlot.speaker && (
            <p className="mt-2 tracking-tight text-dotnet-blue-light text-base">
              {timeSlot.description}
            </p>
          )}
        </li>
      ))}
    </ol>
  )
}

function ScheduleStatic() {
  return (
    <div className="hidden lg:grid lg:grid-cols-1 lg:gap-x-8">
      {schedule.map((day) => (
        <section key={day.dateTime}>
          <TimeSlots day={day} />
        </section>
      ))}
    </div>
  )
}

export function Schedule() {
  return (
    <section id="schedule" aria-label="Schedule" className="py-20 sm:py-32 bg-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900/95 to-gray-900 pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

      {/* Smooth transition gradient overlays */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-900 via-gray-900/70 to-transparent pointer-events-none z-10" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent pointer-events-none z-10" />

      <Container className="relative z-20">
        <div className="mx-auto max-w-5xl text-center mb-16 sm:mb-20">
          <h2 className="font-display text-5xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 sm:text-6xl lg:text-7xl mb-6">
            Schedule
          </h2>
          <p className="mt-6 text-xl sm:text-2xl tracking-tight text-gray-300 leading-relaxed max-w-3xl mx-auto">
            A full day packed with brilliant talks, hands-on learning, and networking opportunities. Join us for an exciting lineup of sessions covering .NET 10, AI, cloud technologies, and more!
          </p>

          {/* Date Badge */}
          <div className="mt-8 inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-purple-500/10 border border-purple-400/20 backdrop-blur-sm">
            <svg className="w-5 h-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-300">
              November 29
            </span>
          </div>

          <p className="mt-4 text-sm text-gray-400 tracking-wide">
            Celebrate and learn about what you can do with .NET 10 at Thailand&apos;s biggest .NET event
          </p>
        </div>

        <ScheduleTabbed />
        <ScheduleStatic />
      </Container>
    </section>
  )
}
