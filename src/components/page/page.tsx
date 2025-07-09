export default function Page() {
  return (
    <div className="bg-white w-full -mt-2 ">
      <div className="bg-white rounded-2xl shadow-xl p-4 md:p-8 max-w-7xl mx-auto my-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* LEFT SIDE: Image */}
          <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-gray-100">
            <img
              src="https://www.wtlogistic.uz/assets/eurofura-InAm4YcL.png"
              alt="Eurofura"
              className="w-full h-full object-contain p-4 transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* RIGHT SIDE: Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Eurofura
              </h3>
              <p className="text-gray-600 mb-4">
                Tekis pollik standart tentli yarim tirkama
              </p>
              <p className="text-gray-600 italic">
                O'ylangan logistika biznesga yangi hayot bag'ishlashi mumkin!
              </p>
            </div>

            {/* Size Selector */}
            <div>
              <h4 className="text-lg font-semibold mb-3 text-gray-900">
                Hajmni tanlang:
              </h4>
              <div className="flex flex-wrap gap-3">
                <button className="px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 transition-all duration-300">
                  82 m³ (EURO)
                </button>
                <button className="px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 transition-all duration-300">
                  86 m³ (EURO)
                </button>
                <button className="px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 transition-all duration-300">
                  90 m³ (EURO)
                </button>
                <button className="px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 transition-all duration-300">
                  92 m³ (EURO)
                </button>
                <button className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-all duration-300">
                  96 m³ (JUMBO)
                </button>
              </div>
              <p className="mt-3 text-gray-600 text-sm italic">
                «Siniq» ramali yarim tirkama, G-shaklidagi pol asosi, yarim
                tirkamaning kichraytirilgan g'ildirak diametri
              </p>
            </div>

            {/* Characteristics */}
            <div className="space-y-2 divide-y divide-gray-200">
              <div className="flex justify-between py-2">
                <span className="text-gray-600">Ichki uzunligi:</span>
                <span className="font-semibold text-gray-900">13.8 м</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-gray-600">Ichki kengligi:</span>
                <span className="font-semibold text-gray-900">2.45 м</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-gray-600">Ichki balandligi:</span>
                <span className="font-semibold text-gray-900">3.0 м</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-gray-600">Yuk ko'tarish quvvati:</span>
                <span className="font-semibold text-gray-900">20-24 тонн</span>
              </div>
            </div>

            {/* CTA Button */}
            <a
              href="#contactForm"
              className="block w-full text-center bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-8 rounded-lg font-semibold text-lg transition-all duration-300 hover:from-blue-600 hover:to-blue-700 hover:shadow-xl transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 mt-6"
            >
              Buyurtma berish
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
