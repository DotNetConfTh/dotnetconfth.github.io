import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { DiamondIcon } from '@/components/DiamondIcon'
import { Logo } from '@/components/Logo'

export function Header() {
  return (
    <header className="relative z-50 pb-11 lg:pt-11">
      <Container className="flex flex-wrap items-center justify-center sm:justify-between lg:flex-nowrap">
        <div className="mt-10 lg:mt-0 lg:grow lg:basis-0">
          <Logo className="h-12 w-auto text-slate-900" />
        </div>
        <div className="order-first -mx-4 flex flex-auto basis-full overflow-x-auto whitespace-nowrap border-b border-blue-600/10 py-4 font-mono text-sm text-blue-600 sm:-mx-6 lg:order-none lg:mx-0 lg:basis-auto lg:border-0 lg:py-0">
          <div className="mx-auto flex items-center gap-4 px-4">
            <p>
              <time dateTime="2022-12-17">17 of December, 2022</time>
            </p>
            <DiamondIcon className="h-1.5 w-1.5 overflow-visible fill-current stroke-current" />
            <a href='https://goo.gl/maps/KCzvJzKEahJSVW4S6' target="_blank" rel="noreferrer">Glowfish Sathorn - Bangkok</a>
          </div>
        </div>
        <div className="hidden sm:mt-10 sm:flex lg:mt-0 lg:grow lg:basis-0 lg:justify-end">
          <Button href="https://dotnetconfth2022.eventbrite.com?ref=site" target="_blank" rel="noreferrer" >Get your tickets</Button>
        </div>
      </Container>
    </header>
  )
}
