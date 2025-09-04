'use client'

import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import Logo from './Logo'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false)
      }
    }

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isMenuOpen])

  return (
    <header className="bg-white border-b border-gray-100 relative z-50" role="banner" ref={menuRef}>
      <div className="max-w-[1120px] mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            href="/" 
            className="hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2 rounded-md"
            aria-label="Sidiqi Global Group homepage"
          >
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8" role="navigation" aria-label="Main navigation">
            <Link 
              href="/"
              className="text-brand-grey hover:text-brand-blue transition-colors text-sm font-medium focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2 rounded px-2 py-1"
            >
              Home
            </Link>
            <Link 
              href="#about"
              className="text-brand-grey hover:text-brand-blue transition-colors text-sm font-medium focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2 rounded px-2 py-1"
              onClick={(e) => {
                e.preventDefault()
                const aboutSection = document.getElementById('about')
                if (aboutSection) {
                  aboutSection.scrollIntoView({ behavior: 'smooth' })
                }
              }}
            >
              About
            </Link>
            <Link 
              href="#businesses"
              className="text-brand-grey hover:text-brand-blue transition-colors text-sm font-medium focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2 rounded px-2 py-1"
              onClick={(e) => {
                e.preventDefault()
                const businessSection = document.getElementById('businesses')
                if (businessSection) {
                  businessSection.scrollIntoView({ behavior: 'smooth' })
                }
              }}
            >
              Businesses
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-brand-grey hover:text-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2 rounded transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div 
            id="mobile-menu"
            className="sm:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-lg z-40"
          >
            <nav className="py-4 px-6" role="navigation" aria-label="Mobile navigation">
              <div className="flex flex-col space-y-4">
                <Link 
                  href="/"
                  className="text-brand-grey hover:text-brand-blue transition-colors text-sm font-medium py-2 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2 rounded"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  href="#about"
                  className="text-brand-grey hover:text-brand-blue transition-colors text-sm font-medium py-2 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2 rounded"
                  onClick={(e) => {
                    e.preventDefault()
                    setIsMenuOpen(false)
                    const aboutSection = document.getElementById('about')
                    if (aboutSection) {
                      aboutSection.scrollIntoView({ behavior: 'smooth' })
                    }
                  }}
                >
                  About
                </Link>
                <Link 
                  href="#businesses"
                  className="text-brand-grey hover:text-brand-blue transition-colors text-sm font-medium py-2 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2 rounded"
                  onClick={(e) => {
                    e.preventDefault()
                    setIsMenuOpen(false)
                    const businessSection = document.getElementById('businesses')
                    if (businessSection) {
                      businessSection.scrollIntoView({ behavior: 'smooth' })
                    }
                  }}
                >
                  Businesses
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
