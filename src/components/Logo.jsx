import Link from "next/link";
import Image from "next/image";

export function Logo(props) {
  return (
    <Link href="/" className="flex items-center gap-3">
      <div className="relative w-14 h-14 flex-shrink-0">
        <Image
          src="/logo/bot.png"
          alt=".NET Thailand Bot"
          width={56}
          height={56}
          unoptimized
        />
        {/* Small .NET badge positioned at bottom right of bot */}
        <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded border-2 border-white shadow-sm overflow-hidden">
          <Image
            src="/logo.png"
            alt=".NET"
            width={24}
            height={24}
            unoptimized
          />
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 leading-none whitespace-nowrap">
          .NET Conf Thailand
        </span>
        <span className="text-sm font-semibold text-white leading-none">
          2025
        </span>
      </div>
    </Link>
  )
}
