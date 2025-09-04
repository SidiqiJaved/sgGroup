'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Logo from './Logo'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMenuOpen && !(event.target as Element).closest('header')) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isMenuOpen])

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('keydown', handleEscapeKey)
    return () => document.removeEventListener('keydown', handleEscapeKey)
  }, [isMenuOpen])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100" role="banner">
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
            <button
              onClick={() => scrollToSection('about')}
              className="text-brand-grey hover:text-brand-blue transition-colors text-sm font-medium focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2 rounded px-2 py-1"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('businesses')}
              className="text-brand-grey hover:text-brand-blue transition-colors text-sm font-medium focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2 rounded px-2 py-1"
            >
              Businesses
            </button>
            <Link 
              href="/contact"
              className="text-brand-grey hover:text-brand-blue transition-colors text-sm font-medium focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2 rounded px-2 py-1"
            >
              Contact
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

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div 
            id="mobile-menu" 
            className="lg:hidden py-4 border-t border-gray-100 bg-white"
            role="navigation"
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col space-y-2">
              <Link 
                href="/"
                className="block px-4 py-2 text-brand-grey hover:text-brand-blue hover:bg-gray-50 transition-colors rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <button
                onClick={() => scrollToSection('about')}
                className="block text-left px-4 py-2 text-brand-grey hover:text-brand-blue hover:bg-gray-50 transition-colors rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2 w-full"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('businesses')}
                className="block text-left px-4 py-2 text-brand-grey hover:text-brand-blue hover:bg-gray-50 transition-colors rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2 w-full"
              >
                Businesses
              </button>
              <Link 
                href="/contact"
                className="block px-4 py-2 text-brand-grey hover:text-brand-blue hover:bg-gray-50 transition-colors rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
