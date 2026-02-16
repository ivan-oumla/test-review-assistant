import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <main className="text-center space-y-6 p-8">
        <h1 className="text-5xl font-bold text-gray-900">
          Test Review Assistant
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl">
          Welcome to the test application for Oumla Review Assistant.
          This Next.js app is used to test PR analysis and Slack notifications.
          Built with Next.js 15.
        </p>
        <div className="flex flex-wrap gap-4 justify-center pt-4">
          <a
            href="https://github.com/ivan-oumla/test-review-assistant"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            View on GitHub
          </a>
          <a
            href="/about"
            className="px-6 py-3 bg-white text-gray-900 rounded-lg border-2 border-gray-900 hover:bg-gray-50 transition-colors"
          >
            Learn More
          </a>
          <a
            href="/users"
            className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            View Users
          </a>
          <a
            href="/contact"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Contact Us
          </a>
          <a
            href="/settings"
            className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          >
            Settings
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}
