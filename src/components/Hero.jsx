import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background.jpg'

export function Hero() {
  return (
    <div className="relative pt-24 pb-32 sm:pt-32 sm:pb-40 lg:pt-40 lg:pb-48 bg-gradient-to-b from-gray-900 via-dotnet-purple-dark to-gray-900 overflow-hidden min-h-[90vh] flex items-center">
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated gradient ellipse overlays for depth */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-dotnet-purple opacity-25 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-dotnet-blue opacity-25 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 bg-purple-600 opacity-15 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
        {/* Smooth transition from header with taller gradient */}
        <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-gray-900 via-gray-900/70 via-gray-900/40 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-gray-900/95" />
        {/* Submarine decoration with improved visibility */}
        <div className="absolute right-0 top-[55%] -translate-y-1/2 w-1/2 max-w-2xl hidden lg:block opacity-75 animate-float">
          <Image
            src="/assets/dark-submarine.png"
            alt=""
            width={800}
            height={400}
            unoptimized
            className="w-full h-auto"
          />
        </div>
      </div>
      <Container className="relative w-full">
        <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
          <h1 className="font-display text-5xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-300 to-blue-400 sm:text-7xl">
            <span className="sr-only">.NET Conf 2025 - Thailand</span>.NET Conf 2025 Thailand
          </h1>
          <div className="mt-8 space-y-6 font-display">
            <p className="text-2xl sm:text-3xl font-semibold text-white leading-relaxed">
              Join Thailand's premier <a className='text-white hover:text-blue-200 transition-colors underline decoration-blue-200/60 hover:decoration-blue-200 font-bold' target='_blank' href='https://www.dotnetconf.net/' rel="noreferrer">.NET</a> community event
            </p>
            <p className="text-lg sm:text-xl text-gray-200 leading-relaxed max-w-3xl">
              Discover the latest in .NET 10, explore cutting-edge technologies from Microsoft, and connect with fellow developers. From AI and cloud to mobile and IoT—experience it all in one day.
            </p>
          </div>
          <div className="mt-12 flex flex-col sm:flex-row gap-4 items-start">
            <Button className="group relative overflow-hidden">
              <span className="relative z-10">Tickets - Coming Soon</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>
          </div>
          {/* Scroll down indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2">
            <span className="text-sm text-gray-400 font-mono">Scroll to explore</span>
            <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
          {/* <dl className="mt-10 grid grid-cols-2 gap-y-6 gap-x-10 sm:mt-16 sm:gap-y-10 sm:gap-x-16 sm:text-center lg:auto-cols-auto lg:grid-flow-col lg:grid-cols-none lg:justify-start lg:text-left">
            {[
              ['Speakers', '11'],
              ['People Attending', '150+'],
              ['Date', '29/11/2025 10:30 AM'],
              ['Venue', 'SCBX NEXT TECH'],
              ['Location', 'Siam Paragon - Bangkok'],
            ].map(([name, value]) => (
              <div key={name}>
                <dt className="font-mono text-sm text-blue-600">{name}</dt>
                <dd className="mt-0.5 text-xl font-semibold tracking-tight text-blue-900">
                  {value}
                </dd>
              </div>
            ))}
          </dl> */}
        </div>
      </Container>
    </div>
  )
}
