import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { Button } from '@/components/Button'

export function Footer() {
  return (
    <footer className="py-16 bg-gray-900 border-t border-dotnet-purple/20 relative">
      {/* Smooth transition gradient overlay */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-900 via-gray-900/70 to-transparent pointer-events-none" />
      <Container className="relative">
        <div className="flex flex-col items-center gap-8">
          {/* Logo */}
          <Logo className="h-12 w-auto" />

          {/* Social Media Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/company/net-thailand/"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-dotnet-blue transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a
              href="https://www.facebook.com/dotNETConfTH/"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-dotnet-blue transition-colors"
              aria-label="Facebook Page"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a
              href="https://www.facebook.com/groups/dotnetthailand/"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-dotnet-blue transition-colors"
              aria-label="Facebook Group"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 13.5h-2.62v7.5h-3.12v-7.5H9.75V10.5h2.404V8.625c0-2.393 1.07-3.75 3.75-3.75.563 0 1.185.094 1.781.187v2.719h-1.219c-.937 0-1.125.422-1.125 1.078V10.5h2.532l-.379 3z"/>
              </svg>
            </a>
          </div>

          {/* Button */}
          <Button className="text-sm px-6 py-2.5">Tickets - Coming Soon</Button>

          {/* Footer Text */}
          <p className="text-sm text-gray-400 text-center">
            .NET Conf Thailand is a free event from developers to developers. | Made with &#10084; in Bangkok
          </p>
        </div>
      </Container>
    </footer>
  )
}
