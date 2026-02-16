export default function About() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-pink-100">
      <main className="max-w-3xl p-8 space-y-6">
        <h1 className="text-4xl font-bold text-gray-900">About</h1>
        <p className="text-lg text-gray-700">
          This is a test Next.js application created to demonstrate the Oumla Review Assistant.
        </p>
        <div className="bg-white rounded-lg p-6 shadow-lg space-y-4">
          <h2 className="text-2xl font-semibold">Features</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Next.js 15 with App Router</li>
            <li>TypeScript for type safety</li>
            <li>Tailwind CSS for styling</li>
            <li>Automatic PR analysis via GitHub webhooks</li>
            <li>Slack notifications for code reviews</li>
            <li>AI-powered code review with inline comments</li>
            <li>Interactive review buttons (Take Review, AI Review, Snooze)</li>
          </ul>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-lg space-y-4">
          <h2 className="text-2xl font-semibold">How It Works</h2>
          <p className="text-gray-600">
            When a PR is created, the Oumla Review Assistant automatically analyzes it and posts a summary to Slack with risk assessment, estimated review time, and suggested reviewers.
          </p>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-lg space-y-4">
          <h2 className="text-2xl font-semibold">Our Team</h2>
          <p className="text-gray-600 mb-4">
            Meet the team behind Oumla Review Assistant.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 border border-gray-200 rounded-lg">
              <h3 className="font-semibold text-gray-900">Sarah Chen</h3>
              <p className="text-sm text-gray-600">Lead Developer</p>
              <p className="text-xs text-gray-500 mt-2">Full-stack engineer specializing in Node.js and React</p>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg">
              <h3 className="font-semibold text-gray-900">Marcus Rodriguez</h3>
              <p className="text-sm text-gray-600">AI Engineer</p>
              <p className="text-xs text-gray-500 mt-2">Expert in LLM integration and prompt engineering</p>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg">
              <h3 className="font-semibold text-gray-900">Aisha Patel</h3>
              <p className="text-sm text-gray-600">Product Designer</p>
              <p className="text-xs text-gray-500 mt-2">UX/UI designer focused on developer tools</p>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg">
              <h3 className="font-semibold text-gray-900">James Kim</h3>
              <p className="text-sm text-gray-600">DevOps Engineer</p>
              <p className="text-xs text-gray-500 mt-2">Infrastructure and deployment automation specialist</p>
            </div>
          </div>
        </div>

        <a
          href="/"
          className="inline-block px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
        >
          ← Back to Home
        </a>
      </main>
    </div>
  );
}
