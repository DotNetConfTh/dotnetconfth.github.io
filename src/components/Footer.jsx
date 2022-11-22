import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { Button } from '@/components/Button'

export function Footer() {
  return (
    <footer className="py-16">
      <Container className="flex flex-col items-center justify-between md:flex-row">
        <Logo className="h-12 w-auto text-slate-900" />
        <Button href="https://dotnetconfth2022.eventbrite.com?ref=site" target="_blank" rel="noreferrer" >Get your tickets</Button>
        <p className="mt-6 text-base text-slate-500 md:mt-0">
          .NET Conf Thailand is a free event from developers to developers. | Made with &#10084; in Bangkok
        </p>
      </Container>
    </footer>
  )
}
