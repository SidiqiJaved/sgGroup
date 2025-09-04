import { useState, useEffect } from 'react';
import logo from 'figma:asset/54b74b518b6fa0b9e3a0815956fc017f8e7e3500.png';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-sm border-b border-gray-100' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1120px] mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src={logo} 
              alt="Sidiqi Global Group" 
              className="h-8 w-auto"
            />
            <span className="ml-3 font-medium text-brand-neutral-dark hidden sm:block">
              Sidiqi Global Group
            </span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-brand-neutral-grey hover:text-brand-blue-primary transition-colors duration-200 hover:underline underline-offset-4"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-brand-neutral-grey hover:text-brand-blue-primary transition-colors duration-200 hover:underline underline-offset-4"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('businesses')}
              className="text-brand-neutral-grey hover:text-brand-blue-primary transition-colors duration-200 hover:underline underline-offset-4"
            >
              Businesses
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}