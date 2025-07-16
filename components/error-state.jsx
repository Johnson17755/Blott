"use client";

export default function ErrorState({ error, onRetry }) {
  return (
    <div className="min-h-screen bg-black text-white">
      <main className="px-4 md:px-6">
        <div className="flex flex-col items-start gap-6 pt-4">
          <p className="text-white text-base md:text-lg font-medium">
            Something went wrong. Please try again later.
          </p>

          {/* Optional: Show detailed error message for debugging */}
          {error && (
            <p className="text-gray-400 text-sm max-w-full break-words">
              {error}
            </p>
          )}

          {/* Retry button */}
          <button
            onClick={onRetry}
            className="mt-4 px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
          >
            Try Again
          </button>
        </div>
      </main>
    </div>
  );
}
