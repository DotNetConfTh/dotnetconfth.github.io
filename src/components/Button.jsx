import Link from 'next/link'
import clsx from 'clsx'

export function Button({ href, className, ...props }) {
  className = clsx(
    'inline-flex justify-center rounded-2xl bg-gradient-to-r from-dotnet-purple to-dotnet-purple-light p-4 px-8 text-base font-semibold text-white hover:from-dotnet-purple-light hover:to-dotnet-blue transition-all duration-300 shadow-lg shadow-dotnet-purple/30 hover:shadow-xl hover:shadow-dotnet-purple/50 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dotnet-purple active:scale-95 hover:scale-105',
    className
  )

  return href ? (
    <Link href={href} className={className} {...props} />
  ) : (
    <button className={className} {...props} />
  )
}
