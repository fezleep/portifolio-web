// src/app/page.tsx
import React from 'react';

export default function HomePage() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center p-6">
      <h1 className="text-5xl font-extrabold text-blue-700 mb-6">Olá!</h1>

      <p className="text-gray-800 text-lg mb-8 max-w-xl">
        Este é meu primeiro projeto Next.js! Apenas testando e me divertindo com isso.
        Obrigado por visitar! 🚀
      </p>

      <a
        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-3 text-blue-600 hover:text-blue-800 transition duration-300"
      >
        <svg
          className="w-8 h-8 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M21.598 6.012c.162-.666.271-1.442.271-2.292 0-2.238-1.762-4.049-3.939-4.049-1.218 0-2.28.535-2.973 1.396-.704-.86-1.764-1.396-2.981-1.396-2.177 0-3.939 1.811-3.939 4.049 0 .851.109 1.627.271 2.292-.224 1.258-.881 2.378-1.841 3.238v7.45c.002.585.474 1.057 1.059 1.057h14.006c.585 0 1.057-.472 1.059-1.057v-7.45c-.96-1.026-1.617-2.146-1.841-3.238zm-6.598 8.988v-7l5 3.5-5 3.5z"/>
        </svg>
        <span className="text-lg font-medium">Never Gonna Give You Up</span>
      </a>
    </section>
  );
}
