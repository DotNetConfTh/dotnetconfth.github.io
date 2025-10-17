import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background.jpg'

const schedule = [
  {
    date: 'November 29',
    dateTime: '2025-11-29',
    summary:
      'Celebrate and learn about what you can do with .NET 10 at the Thailand biggest .NET event',
      timeSlots: [
        {
          name: 'Registration and social time',
          description: null,
          start: '09:30 AM',
          end: '10:00 AM',
        },
        {
          name: 'Welcome to .NET Conf Thailand 2025',
          description: null,
          start: '10:00 AM',
          end: '10:15 AM',
        },
        {
          name: 'Your Tests Should Be Readable: AI Meets Roslyn to Transform Test Assertions',
          description: 'Joel Dickson',
          start: '10:15 AM',
          end: '11:00 AM',
        },
        {
          name: "The Official OpenAI Library for .NET",
          description: 'Surasuk Oakkharaamonphong',
          start: '11:00 AM',
          end: '11:30 AM',
        },
        {
          name: "Develop a .NET AI Application - Scenarios from a Solution Architect",
          description: 'Giorgio Desideri',
          start: '11:30 AM',
          end: '12:00 PM',
        },
        {
          name: 'Lunch',
          description: null,
          start: '12:00 PM',
          end: '13:00 PM',
        },
        {
          name: 'Social Time',
          description: null,
          start: '13:00 PM',
          end: '13:30 PM',
        },
        {
          name: 'Building Resilient .NET Applications',
          description: 'Nattapong Nunpan',
          start: '13:30 PM',
          end: '14:00 PM',
        },
        {
          name: 'Unity 6: Unlocking New Possibilities for Creators',
          description: 'Gittitat Ekchantawut',
          start: '14:00 PM',
          end: '14:30 PM',
        },
        {
          name: 'Build Your First Augmented Reality Mobile App with Unity',
          description: 'Akkapon Somjai',
          start: '14:30 PM',
          end: '15:00 PM',
        },
        {
          name: "Break",
          description: null,
          start: '15:00 PM',
          end: '15:15 PM',
        },
        {
          name: 'Developing Local AI Models with .NET and AutoGen',
          description: 'Charunthon Limseelo',
          start: '15:15 PM',
          end: '15:45 PM',
        },
        {
          name: 'Tracking usage in Gen AI application with Azure OpenAI Service',
          description: 'Teerasej Jiraphatchandej',
          start: '15:45 PM',
          end: '16:15 PM',
        },
        {
          name: "Building and deploying an Azure Functions app with .NET Aspire",
          description: 'Veeravat Jeensuksang',
          start: '16:15 PM',
          end: '16:45 PM',
        },
        {
          name: ".NET Performance Considerations on Linux",
          description: 'Vorapat Nicklamai',
          start: '16:45 PM',
          end: '17:00 PM',
        },
        {
          name: "Revolutionizing Industry with .NET and Unity: A Beginner’s Guide to Digital Twins and Mixed Reality",
          description: 'Poonsiri Jailungka',
          start: '17:00 PM',
          end: '17:15 PM',
        },
        {
          name: 'Closing + Group Photo',
          description: "Jose Barbosa and Giorgio Desideri",
          start: '17:15 PM',
          end: '17:30 PM',
        },
        {
          name: 'Social Time',
          description: null,
          start: '17:30 PM',
          end: '18:00 PM',
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
          <h4 className="text-lg font-semibold tracking-tight text-white">
            {timeSlot.name}
          </h4>
          {timeSlot.description && (
            <p className="mt-1 tracking-tight text-dotnet-blue-light">
              {timeSlot.description}
            </p>
          )}
          <p className="mt-1 font-mono text-sm text-gray-400">
            <time dateTime={`${day.dateTime}T${timeSlot.start}-08:00`}>
              {timeSlot.start}
            </time>{' '}
            -{' '}
            <time dateTime={`${day.dateTime}T${timeSlot.end}-08:00`}>
              {timeSlot.end}
            </time>{' '}
            GMT+7
          </p>
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
          <DaySummary day={day} />
          <TimeSlots day={day} className="mt-10" />
        </section>
      ))}
    </div>
  )
}

export function Schedule() {
  return (
    <section id="schedule" aria-label="Schedule" className="py-16 sm:py-24 bg-gray-900 relative">
      {/* Smooth transition gradient overlays */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-900 via-gray-900/70 to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent pointer-events-none" />
      <Container className="relative z-10">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="font-display text-4xl font-medium tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 sm:text-5xl">
            Schedule
          </h2>
          <p className="mt-6 text-xl sm:text-2xl tracking-tight text-gray-300 leading-relaxed">
            A full day packed with brilliant talks, hands-on learning, and networking opportunities. The detailed schedule will be announced soon—stay tuned for an exciting lineup of sessions!
          </p>
          <p className="mt-10 font-display text-2xl tracking-tight text-white">
            To be Announced
          </p>
        </div>
      </Container>
    </section>
  )
}
