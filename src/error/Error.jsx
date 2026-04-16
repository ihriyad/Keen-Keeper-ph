import React from "react";

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-6">
      <div className="flex items-center justify-center w-18 h-18 rounded-full bg-base-200 border border-base-300 mb-7">
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-base-content/50"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
      </div>

      <p className="text-8xl font-medium tracking-tighter leading-none mb-2">
        4<span className="text-base-content/30">0</span>4
      </p>

      <h1 className="text-2xl font-medium mb-3">Page not found</h1>
      <p className="text-base-content/60 text-sm max-w-sm mb-8 leading-relaxed">
        The page you're looking for doesn't exist or has been moved.
        Double-check the URL or head back home.
      </p>

      <div className="flex flex-wrap gap-3 justify-center">
        <button
          className="btn btn-neutral"
          onClick={() => (window.location.href = "/")}
        >
          Go home
        </button>
        <button className="btn btn-ghost" onClick={() => window.history.back()}>
          Go back
        </button>
      </div>

      <div className="divider w-12 mx-auto my-6" />

      <div className="flex gap-5 flex-wrap justify-center">
        {["Get help", "Report issue", "Sitemap"].map((label) => (
          <a
            key={label}
            href="#"
            className="text-xs text-base-content/40 border-b border-base-300 pb-px hover:text-base-content transition-colors"
          >
            {label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Error;
