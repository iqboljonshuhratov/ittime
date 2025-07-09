export default function Karta() {
  return (
    <section
      id="contact"
      className="relative pt-10 overflow-hidden p-6 sm:p-8 md:p-12 bg-gradient-to-r from-blue-900 via-blue-700 to-black text-white"
    >
      {/* Gradient overlays */}
      <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black to-transparent z-0" />
      <div
        className="absolute inset-0 bg-fixed bg-cover bg-center z-0 opacity-50 blur-md"
        style={{
          backgroundImage: "url('/assets/container-rPi3bGEU.png')",
        }}
      />
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black to-transparent z-0" />

      {/* Content container */}
      <div className="container mx-auto relative z-10 max-w-6xl">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          {/* LEFT SIDE - INFO */}
          <div className="w-full lg:w-1/2 space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide">
              Ishonchli logistika kerakmi?
            </h2>
            <p className="text-base md:text-lg opacity-90 max-w-prose">
              Bizning zamonaviy avtoparkimiz va logistikadagi tajribamiz sizning
              biznesingizni qanday rivojlantirishi mumkinligini bilish uchun
              bugun biz bilan bog'laning.
            </p>

            <div className="flex flex-col space-y-4">
              <a
                href="https://www.google.com/maps?q=41.310020,69.330806"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-x-3 group hover:text-blue-300 transition"
              >
                <svg
                  className="w-6 h-6 text-blue-300 group-hover:text-blue-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-base md:text-lg">
                  Toshkent, Sandiqli ko'chasi, 52
                </span>
              </a>

              <a
                href="tel:+998953401950"
                className="flex items-center gap-x-3 group hover:text-blue-300 transition"
              >
                <svg
                  className="w-6 h-6 text-blue-300 group-hover:text-blue-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span className="text-base md:text-lg">+998 95 340 19 50</span>
              </a>

              <a
                href="mailto:waschmittelcompany@mail.ru"
                className="flex items-center gap-x-3 group hover:text-blue-300 transition"
              >
                <svg
                  className="w-6 h-6 text-blue-300 group-hover:text-blue-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span className="text-base md:text-lg">
                  waschmittelcompany@mail.ru
                </span>
              </a>

              <div className="flex items-center gap-x-3">
                <svg
                  className="w-6 h-6 text-blue-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-base md:text-lg">
                  Du-Sha 9:00 dan 18:00 gacha
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - MAP */}
          <div className="w-full lg:w-1/2 h-[400px] rounded-xl overflow-hidden shadow-2xl relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.956087250765!2d69.32843547496232!3d41.30981890080476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef5048ac0b04d%3A0x51bc6082ae194254!2sLLC%20WASCHMITTEL!5e0!3m2!1sru!2s!4v1737661213007!5m2!1sru!2s"
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ border: 0 }}
              title="LLC WASCHMITTEL Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
