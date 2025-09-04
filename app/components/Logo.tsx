import Image from 'next/image'

interface LogoProps {
  className?: string
}

export default function Logo({ className = "" }: LogoProps) {
  return (
    <div className={`flex items-center ${className}`}>
      {/* SG Group Logo */}
      <Image
        src="/logo.png"
        alt="Sidiqi Global Group"
        width={32}
        height={32}
        className="mr-3"
        priority
      />
      {/* Company name */}
      <span className="text-brand-ink font-medium text-lg">
        Sidiqi Global Group
      </span>
    </div>
  )
}
