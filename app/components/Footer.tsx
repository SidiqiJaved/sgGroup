import Image from 'next/image'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-gray-100 bg-white mt-auto" role="contentinfo">
      <div className="max-w-[1120px] mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Left side - Logo and Copyright */}
          <div className="flex items-center gap-4">
            <Image
              src="/logo.png"
              alt="Sidiqi Global Group"
              width={24}
              height={24}
              className="opacity-60"
            />
            <p className="text-brand-grey text-sm">
              © {currentYear} Sidiqi Global Group
            </p>
          </div>
          
          {/* Right side - Links */}
          <nav className="flex items-center gap-6" aria-label="Footer navigation">
            <a
              href="/contact"
              className="text-brand-grey hover:text-brand-blue transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2 rounded px-2 py-1"
            >
              Contact
            </a>
            <a
              href="/privacy"
              className="text-brand-grey hover:text-brand-blue transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2 rounded px-2 py-1"
            >
              Privacy
            </a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
