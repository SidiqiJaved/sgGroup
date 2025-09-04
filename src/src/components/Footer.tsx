export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100 py-12">
      <div className="max-w-[1120px] mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
          {/* Logo and Copyright */}
          <div className="flex items-center space-x-4">
            <img 
              src="/logo.svg" 
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
              className="text-sm text-brand-neutral-grey hover:text-brand-blue-primary transition-colors duration-200 hover:underline underline-offset-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-sm"
            >
              Contact
            </a>
            <a
              href="#privacy"
              className="text-sm text-brand-neutral-grey hover:text-brand-blue-primary transition-colors duration-200 hover:underline underline-offset-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-sm"
              onClick={(e) => {
                e.preventDefault();
                // Add privacy policy modal or page logic here
                console.log('Privacy policy clicked');
              }}
            >
              Privacy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}