import Link from 'next/link';
import FeatureCard from '../../../components/FeatureCard';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="py-20 md:py-32 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
          Portfolio Builder AI
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
          Quickly generate a production-ready Next.js portfolio to attract local clients. Focus on your code, we'll handle your presence.
        </p>
        <Link href="/mvp" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg shadow-md transition-all duration-300 ease-in-out text-lg">
          Get Started
        </Link>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-white px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
            Features Designed for You
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              heading="AI-Powered Generation"
              description="Simply describe your vision, and our AI crafts a complete Next.js portfolio website tailored to your needs."
            />
            <FeatureCard
              heading="Production-Ready Code"
              description="Receive clean, optimized Next.js App Router source code, ready for immediate deployment to your preferred hosting."
            />
            <FeatureCard
              heading="Targeted for Freelancers"
              description="Designed specifically for freelance developers, helping you quickly establish a professional online presence to attract local clients."
            />
            <FeatureCard
              heading="Save Valuable Time"
              description="Eliminate the hours spent on boilerplate and setup. Focus on your projects and clients, not building your own portfolio from scratch."
            />
            <FeatureCard
              heading="Clean & Modern Design"
              description="Get a minimalist, professional design that showcases your work effectively without distractions, ensuring clarity and trust."
            />
            <FeatureCard
              heading="Instant Results"
              description="Our synchronous system delivers your complete portfolio code immediately, allowing you to move from idea to live site in minutes."
            />
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-20 md:py-28 bg-gray-50 text-center px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 leading-tight">
            Ready to Build Your Instant Portfolio?
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-10">
            Start attracting more clients today with a professional online presence generated in seconds.
          </p>
          <Link href="/mvp" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-10 rounded-lg shadow-lg transition-all duration-300 ease-in-out text-xl">
            Generate My Portfolio Now
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-800 text-white text-center px-4">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Portfolio Builder AI. All rights reserved.
          </p>
          <nav className="mt-4">
            <ul className="flex justify-center space-x-6 text-sm">
              <li><Link href="#" className="hover:text-blue-300 transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-blue-300 transition-colors">Terms of Service</Link></li>
            </ul>
          </nav>
        </div>
      </footer>
    </div>
  );
}