import logo from 'figma:asset/54b74b518b6fa0b9e3a0815956fc017f8e7e3500.png';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100 py-12">
      <div className="max-w-[1120px] mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
          {/* Logo and Copyright */}
          <div className="flex items-center space-x-4">
            <img 
              src={logo} 
              alt="Sidiqi Global Group" 
              className="h-6 w-auto opacity-60"
            />
            <span className="text-sm text-brand-neutral-grey">
              © {currentYear} Sidiqi Global Group
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center space-x-6">
            <a
              href="mailto:contact@sidiqiglobal.com"
              className="text-sm text-brand-neutral-grey hover:text-brand-blue-primary transition-colors duration-200 hover:underline underline-offset-2"
            >
              Contact
            </a>
            <a
              href="#"
              className="text-sm text-brand-neutral-grey hover:text-brand-blue-primary transition-colors duration-200 hover:underline underline-offset-2"
            >
              Privacy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}