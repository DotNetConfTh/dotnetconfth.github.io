import { Container } from '@/components/Container'
import { Button } from '@/components/Button'

export function Venue() {
  return (
    <section id="venue" aria-label="Venue" className="py-16 sm:py-24 bg-gray-900 relative">
      {/* Smooth transition gradient overlays */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-900 via-gray-900/70 to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent pointer-events-none" />
      <Container className="relative z-10">
        <div className="mx-auto max-w-5xl text-center">
          <h2
            className="font-display text-4xl font-medium tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 sm:text-5xl"
          >
            Venue
          </h2>
          <p className="mt-6 text-xl sm:text-2xl tracking-tight text-gray-300 leading-relaxed">
            Join us at Seven Peaks Software for .NET Conf Thailand 2025! Located in the heart of Bangkok, our venue offers a modern, comfortable space perfect for learning, networking, and celebrating .NET technologies.
          </p>
          <p className="mt-10 font-display text-2xl tracking-tight text-white">
            Seven Peaks Software <span className="text-gray-400">•</span> <span className="text-gray-400">Bangkok, Thailand</span>
          </p>
          <div className="mt-8">
            <Button href="https://maps.app.goo.gl/VRWbpCtET22HPJYm7">View on Google Maps</Button>
          </div>
          <div className="mt-12 mx-auto max-w-4xl">
            <div className="relative w-full h-[450px] rounded-2xl overflow-hidden shadow-2xl border border-dotnet-purple/20">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4713.725942592849!2d100.5588518!3d13.7212032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29edcf8a9dcf5%3A0xcf0d1a437c55d078!2sSeven%20Peaks%20Software%20(Thailand)!5e1!3m2!1sen!2sth!4v1762530453136!5m2!1sen!2sth"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Seven Peaks Software (Thailand) Location"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
