import React from "react";

export default function Contact() {
  return (
    <section id="contactForm">
      <div className="absolute inset-0  bg-opacity-20"></div>

      <div className="relative backdrop-blur-lg bg-white/10 border border-white/20 rounded-lg p-12 max-w-2xl w-full text-white">
        <h2 className="text-3xl font-bold mb-8 text-center drop-shadow-lg">
          Tez va ishonchli xalqaro yuk tashish xizmati
        </h2>

        <form className="space-y-8">
          {/* Qayerdan */}
          <div className="flex items-center border-b border-white/50 pb-2">
            <span className="text-blue-500 mr-4 text-2xl">
              <svg
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                height="1em"
                width="1em"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </span>
            <input
              type="text"
              name="from"
              placeholder="Qayerdan"
              required
              className="w-full px-2 py-3 bg-transparent text-white placeholder-gray-300 text-lg focus:outline-none"
            />
          </div>

          {/* Qayerga */}
          <div className="flex items-center border-b border-white/50 pb-2">
            <span className="text-blue-500 mr-4 text-2xl">
              <svg
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                height="1em"
                width="1em"
              >
                <path d="M12 20h9" />
                <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
              </svg>
            </span>
            <input
              type="text"
              name="to"
              placeholder="Qayerga"
              required
              className="w-full px-2 py-3 bg-transparent text-white placeholder-gray-300 text-lg focus:outline-none"
            />
          </div>

          {/* Yuk nomi */}
          <div className="flex items-center border-b border-white/50 pb-2">
            <span className="text-blue-500 mr-4 text-2xl">
              <svg
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                height="1em"
                width="1em"
              >
                <line x1="16.5" y1="9.4" x2="7.5" y2="4.21" />
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                <line x1="12" y1="22.08" x2="12" y2="12" />
              </svg>
            </span>
            <input
              type="text"
              name="cargoName"
              placeholder="Yuk nomi"
              required
              className="w-full px-2 py-3 bg-transparent text-white placeholder-gray-300 text-lg focus:outline-none"
            />
          </div>

          {/* Telefon */}
          <div className="flex items-center border-b border-white/50 pb-2">
            <span className="text-blue-500 mr-4 text-2xl">
              <svg
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                height="1em"
                width="1em"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </span>
            <input
              type="tel"
              name="phone"
              placeholder="Telefon"
              required
              className="w-full px-2 py-3 bg-transparent text-white placeholder-gray-300 text-lg focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg rounded transition duration-300"
          >
            Yuborish
          </button>
        </form>
      </div>
    </section>
  );
}
