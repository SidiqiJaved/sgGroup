import Header from './components/Header'
import Footer from './components/Footer'
import LinkTile from './components/LinkTile'

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main id="main-content" className="flex-1" role="main">
        {/* Hero Section */}
        <section className="py-16 md:py-24" aria-labelledby="hero-heading">
          <div className="max-w-[1120px] mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto">
              <h1 
                id="hero-heading"
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-ink mb-6 leading-tight"
              >
                Sidiqi Global Group
              </h1>
              <p className="text-lg md:text-xl text-brand-grey mb-10 leading-relaxed">
                A holding company focused on building and backing modern, resilient ventures.
              </p>
              <nav aria-label="Company portfolio links" className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <a
                  href="https://sg2tech.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-blue hover:text-brand-blueLight transition-colors focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2 rounded px-2 py-1"
                  aria-label="Visit SG2 Technologies (opens in new tab)"
                >
                  SG2 Technologies →
                </a>
                <a
                  href="https://sidiqi.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-blue hover:text-brand-blueLight transition-colors focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2 rounded px-2 py-1"
                  aria-label="Visit Sidiqi.ai AI Venture (opens in new tab)"
                >
                  Sidiqi.ai (AI Venture) →
                </a>
              </nav>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 md:py-20" aria-labelledby="about-heading">
          <div className="max-w-[1120px] mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 
                id="about-heading"
                className="text-3xl md:text-4xl font-bold text-brand-ink mb-8"
              >
                About Sidiqi Global Group
              </h2>
              <div className="text-lg text-brand-grey space-y-6 leading-relaxed">
                <p>
                  We are a strategic holding company that identifies, develops, and invests in forward-thinking 
                  ventures across technology and innovation sectors. Our approach combines deep industry 
                  expertise with patient capital to build sustainable, market-leading businesses.
                </p>
                <p>
                  Led by Javed Sidiqi, Founder & CEO — learn more at{' '}
                  <a
                    href="https://sidiqi.ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-blue hover:text-brand-blueLight transition-colors focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2 rounded"
                    aria-label="Learn more about Javed Sidiqi on Sidiqi.ai (opens in new tab)"
                  >
                    Sidiqi.ai
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Businesses Section */}
        <section id="businesses" className="py-16 md:py-20" aria-labelledby="businesses-heading">
          <div className="max-w-[1120px] mx-auto px-6">
            <h2 
              id="businesses-heading"
              className="text-3xl md:text-4xl font-bold text-brand-ink text-center mb-12"
            >
              Our Businesses
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <LinkTile
                title="SG2 Technologies"
                description="Digital modernization & data-driven solutions."
                href="https://sg2tech.com"
              />
              <LinkTile
                title="Sidiqi.ai"
                description="AI venture & innovation lab."
                href="https://sidiqi.ai"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
