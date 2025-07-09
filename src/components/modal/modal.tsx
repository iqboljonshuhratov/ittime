export default function Modal({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="bg-gray-900 p-8 rounded-3xl shadow-2xl w-full max-w-lg mx-4 relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl"
        >
          ✕
        </button>

        <h2 className="text-3xl md:text-4xl font-semibold text-white text-center mb-8">
          Biz bilan bog'laning
        </h2>

        <form className="space-y-6">
          <div className="flex flex-col">
            <label
              htmlFor="name"
              className="text-xl font-medium text-white mb-2"
            >
              Ismingiz
            </label>
            <input
              type="text"
              id="name"
              required
              className="p-3 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="phone"
              className="text-xl font-medium text-white mb-2"
            >
              Telefon raqamingiz
            </label>
            <input
              type="tel"
              id="phone"
              maxLength={25}
              required
              className="p-3 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="text-xl font-medium text-white mb-2"
            >
              Elektron pochtangiz
            </label>
            <input
              type="email"
              id="email"
              required
              className="p-3 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="region"
              className="text-xl font-medium text-white mb-2"
            >
              Yuk yo'nalishi
            </label>
            <input
              type="text"
              id="region"
              required
              className="p-3 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition duration-300 text-lg mt-6"
          >
            Yuborish
          </button>
        </form>
      </div>
    </div>
  );
}
