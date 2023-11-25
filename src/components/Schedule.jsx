import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background.jpg'

const schedule = [
  {
    date: 'November 25',
    dateTime: '2023-11-25',
    summary:
      'After 1 year, we finally meet again in person at SCB NEXT TECH at Siam Paragon Fl.4 for the .NET Conf Thailand 2023 to celebrate the launch of .NET 8.',
      timeSlots: [
        {
          name: 'Registration and social time',
          description: 'If you are an early bird',
          start: '10:00 AM',
          end: '10:30 AM',
        },
        {
          name: 'Welcome to .NET Conf Thailand 2023',
          description: '.NET 8 is here!',
          start: '10:30 AM',
          end: '10:45 AM',
        },
        {
          name: "Modernize .NET Framework to .NET Core with the .NET Upgrade Assistant",
          description: 'Veeravat Jeensuksang',
          start: '10:45 AM',
          end: '11:15 AM',
        },
        {
          name: "Concurrent Hosted Service in .NET 8",
          description: 'Saeed Esmaeelinejad',
          start: '11:15 AM',
          end: '11:45 AM',
        },
        {
          name: "Introducing Foundational C#",
          description: 'Phantip Kokilanon',
          start: '11:45 AM',
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
          end: '13:15 PM',
        },
        {
          name: 'Lightning Talk',
          description: 'Giorgio Desideri',
          start: '13:15 PM',
          end: '13:30 PM',
        },
        {
          name: 'Event-driven .NET apps with Apache Kafka',
          description: 'Vorapat Nicklamai',
          start: '13:30 PM',
          end: '14:00 PM',
        },
        {
          name: '.NET Observability for Cloud-Native Application',
          description: 'Chatchai Kongmanee',
          start: '14:00 PM',
          end: '14:30 PM',
        },
        {
          name: 'Build your AI plugins for AI era with Semantic Kernel',
          description: 'Teerasej Jiraphatchandej',
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
          name: 'Clean Architecture with .NET and Microsoft Azuress',
          description: 'Wittawat Karpkrikaew',
          start: '15:15 PM',
          end: '15:45 PM',
        },
        {
          name: 'Game Development with Generative AI (Unity + DALL-E)',
          description: 'Gittitat Ekchantawut',
          start: '15:45 PM',
          end: '16:15 PM',
        },
        {
          name: "What's new in Entity Framework Core 8",
          description: 'Theeranit Pongtongmuang',
          start: '16:15 PM',
          end: '16:45 PM',
        },
        {
          name: "Auth and Identity in ASP.NET Core 8",
          description: 'Nattapong Nunpan',
          start: '16:45 PM',
          end: '17:15 PM',
        },
        {
          name: 'Closing + group photo',
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
                    <Tab className="[&:not(:focus-visible)]:focus:outline-none">
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
      <h3 className="text-2xl font-semibold tracking-tight text-blue-900">
        <time dateTime={day.dateTime}>{day.date}</time>
      </h3>
      <p className="mt-1.5 text-base tracking-tight text-blue-900">
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
        'space-y-8 bg-white/60 py-14 px-10 text-center shadow-xl shadow-blue-900/5 backdrop-blur'
      )}
    >
      {day.timeSlots.map((timeSlot, timeSlotIndex) => (
        <li
          key={timeSlot.start}
          aria-label={`${timeSlot.name} talking about ${timeSlot.description} at ${timeSlot.start} - ${timeSlot.end} PST`}
        >
          {timeSlotIndex > 0 && (
            <div className="mx-auto mb-8 h-px w-48 bg-indigo-500/10" />
          )}
          <h4 className="text-lg font-semibold tracking-tight text-blue-900">
            {timeSlot.name}
          </h4>
          {timeSlot.description && (
            <p className="mt-1 tracking-tight text-blue-900">
              {timeSlot.description}
            </p>
          )}
          <p className="mt-1 font-mono text-sm text-slate-500">
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
    <section id="schedule" aria-label="Schedule" className="py-20 sm:py-32">
      <Container className="relative z-10">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-4xl lg:pr-24">
          <h2 className="font-display text-4xl font-medium tracking-tighter text-blue-600 sm:text-5xl">
            Our schedule is packed with brilliant talks, creative environment and a lot of networking
          </h2>
          <p className="mt-4 font-display text-2xl tracking-tight text-blue-900">
            .NET Conf Thailand is a free and non-profit conference, the event is possible because of our sponsors, so a big thank you to all sponsors.
          </p>
        </div>
      </Container>
      <div className="relative mt-14 sm:mt-24">
        <div className="absolute inset-x-0 -top-40 -bottom-32 overflow-hidden bg-indigo-50">
          <Image
            className="absolute left-full top-0 -translate-x-1/2 sm:left-1/2 sm:translate-y-[-15%] sm:translate-x-[-20%] md:translate-x-0 lg:translate-x-[5%] lg:translate-y-[4%] xl:translate-y-[-8%] xl:translate-x-[27%]"
            src={backgroundImage}
            alt=""
            width={918}
            height={1495}
            unoptimized
          />
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white" />
        </div>
        <Container className="relative">
          <ScheduleTabbed />
          <ScheduleStatic />
        </Container>
      </div>
    </section>
  )
}
