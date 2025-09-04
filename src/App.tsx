import { Header } from './components/Header';
import { LinkTile } from './components/LinkTile';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section id="home" className="pt-32 pb-24 bg-gradient-to-b from-white to-gray-50/30">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-brand-neutral-dark mb-6">
              Sidiqi Global Group
            </h1>
            
            <p className="text-lg md:text-xl text-brand-neutral-grey mb-12 max-w-2xl mx-auto leading-relaxed">
              A holding company focused on building and backing modern, resilient ventures.
            </p>
            
            {/* CTA Links */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
              <a
                href="https://sg2tech.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-blue-primary hover:text-brand-blue-light transition-colors duration-200 hover:underline underline-offset-4 font-medium"
              >
                SG2 Technologies →
              </a>
              <a
                href="https://sidiqi.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-blue-primary hover:text-brand-blue-light transition-colors duration-200 hover:underline underline-offset-4 font-medium"
              >
                Sidiqi.ai (AI Venture) →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold text-brand-neutral-dark mb-8">
              About Sidiqi Global Group
            </h2>
            
            <p className="text-lg text-brand-neutral-grey leading-relaxed mb-4">
              We are a strategic holding company that identifies, develops, and invests in forward-thinking 
              ventures across technology and innovation sectors. Our approach combines deep industry expertise 
              with patient capital to build sustainable, market-leading businesses.
            </p>
            
            <p className="text-brand-neutral-grey">
              Led by Javed Sidiqi, Founder & CEO — learn more at{' '}
              <a
                href="https://sidiqi.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-blue-primary hover:underline underline-offset-2 transition-all duration-200"
              >
                Sidiqi.ai
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Our Businesses Section */}
      <section id="businesses" className="py-24 bg-gray-50/50">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-semibold text-brand-neutral-dark mb-4">
              Our Businesses
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <LinkTile
              title="SG2 Technologies"
              description="Digital modernization & data-driven solutions."
              url="https://sg2tech.com"
            />
            <LinkTile
              title="Sidiqi.ai"
              description="AI venture & innovation lab."
              url="https://sidiqi.ai"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}