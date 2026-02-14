/**
 * This is a client component as it uses useState and handles user interaction.
 */
"use client";

import { useState } from 'react';

export default function MVPPage() {
  const [portfolioRequirements, setPortfolioRequirements] = useState('');
  const [generatedCode, setGeneratedCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setGeneratedCode('');

    if (!portfolioRequirements.trim()) {
      setError('Please enter some portfolio requirements to generate code.');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/mvp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ portfolioRequirements }),
      });

      if (!response.ok) {
        // Attempt to parse error message from response body
        const errorData = await response.json().catch(() => ({ error: 'Unknown server error.' }));
        throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setGeneratedCode(data.generatedCode);
    } catch (err) {
      setError(err.message || 'An unexpected error occurred.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col items-center py-10 px-4">
      <div className="w-full max-w-3xl bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
          Portfolio Builder AI
        </h1>
        <p className="text-gray-600 text-center mb-8">
          Describe your ideal Next.js portfolio website below to generate its source code.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
          <div>
            <label htmlFor="requirements" className="block text-sm font-medium text-gray-700 mb-2">
              Portfolio Requirements:
            </label>
            <textarea
              id="requirements"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 shadow-sm text-gray-800 resize-y min-h-[150px]"
              value={portfolioRequirements}
              onChange={(e) => setPortfolioRequirements(e.target.value)}
              placeholder="e.g., 'A simple portfolio for a freelance web developer. Needs Home, About, and Projects sections. Include contact info at the bottom. Minimalist design with a focus on quick loading. No complex animations.'"
              rows={8}
              disabled={loading}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-150 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={loading}
          >
            {loading ? 'Generating...' : 'Generate Portfolio Code'}
          </button>
        </form>

        {error && (
          <div className="mt-8 p-4 bg-red-100 border border-red-400 text-red-700 rounded-md">
            <p className="font-medium">Error:</p>
            <p>{error}</p>
          </div>
        )}

        {generatedCode && (
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Generated Next.js Code:
            </h2>
            <div className="bg-gray-800 p-6 rounded-md overflow-x-auto">
              <pre className="text-green-300 text-sm whitespace-pre-wrap font-mono">
                <code>{generatedCode}</code>
              </pre>
            </div>
            <p className="mt-4 text-sm text-gray-600">
              Copy the code above and integrate it into your Next.js project.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}