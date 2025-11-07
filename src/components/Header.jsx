import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { DiamondIcon } from '@/components/DiamondIcon'
import { Logo } from '@/components/Logo'

export function Header() {
  return (
    <header className="relative z-50 pb-11 lg:pt-11 bg-gray-900">
      <Container className="flex flex-wrap items-center justify-center sm:justify-between lg:flex-nowrap">
        <div className="mt-10 lg:mt-0 lg:grow lg:basis-0">
          <Logo className="h-12 w-auto" />
        </div>
        <div className="order-first -mx-4 flex flex-auto basis-full overflow-x-auto whitespace-nowrap border-b border-dotnet-purple/30 py-4 font-mono text-sm text-gray-200 sm:-mx-6 lg:order-none lg:mx-0 lg:basis-auto lg:border-0 lg:py-0">
          <div className="mx-auto flex items-center gap-4 px-4">
            <p>
              <time dateTime="2025-11-29">29 of November, 2025</time>
            </p>
            <DiamondIcon className="h-1.5 w-1.5 overflow-visible fill-current stroke-current" />
            <p>Location: <a href="https://maps.app.goo.gl/kkK1pH7kZ1mk3kY16" target="_blank" rel="noreferrer" className="hover:text-purple-300 transition-colors underline decoration-purple-400/60 hover:decoration-purple-300">Seven Peaks Software</a></p>
          </div>
        </div>
        <div className="hidden sm:mt-10 sm:flex lg:mt-0 lg:grow lg:basis-0 lg:justify-end">
          <Button href="https://luma.com/fwnl803w">Get Tickets</Button>
        </div>
      </Container>
    </header>
  )
}
