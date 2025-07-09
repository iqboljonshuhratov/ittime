export default function Text() {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* LEFT TEXT BLOCK */}
          <div className="text-left max-w-xl mx-auto lg:mx-0">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
              Yuk tashish narxini bilish uchun so'rov qoldiring
            </h2>
            <p className="text-base text-gray-600 mb-3">
              Bizning mutaxassis siz bilan bog'lanib, narxga ta'sir qilishi
              mumkin bo'lgan tashish tafsilotlarini aniqlashtiradi
            </p>
            <p className="text-sm text-gray-500">
              Ushbu ma'lumotni taqdim etib, siz qo'shimcha to'lovlarsiz
              kafolatlangan narxni olasiz
            </p>
          </div>

          {/* ICONS GRID */}
          <div className="w-full pb-4">
            <div className="grid grid-cols-2 lg:flex lg:items-center lg:justify-center gap-4 lg:gap-2">
              <div className="flex flex-col items-center w-full lg:w-28">
                <img
                  src="https://www.wtlogistic.uz/assets/tarif1-BWBNfWj8.svg"
                  alt="Yuklash joyi"
                  className="w-24 h-24 md:w-20 md:h-20 object-contain mb-2"
                />
                <span className="text-xs md:text-sm text-gray-700 text-center">
                  Yuklash joyi
                </span>
              </div>

              <div className="flex flex-col items-center w-full lg:w-28">
                <img
                  src="https://www.wtlogistic.uz/assets/tarif1-BWBNfWj8.svg"
                  alt="Tushirish joyi"
                  className="w-24 h-24 md:w-20 md:h-20 object-contain mb-2"
                />
                <span className="text-xs md:text-sm text-gray-700 text-center">
                  Tushirish joyi
                </span>
              </div>

              <div className="flex flex-col items-center w-full lg:w-28">
                <img
                  src="https://www.wtlogistic.uz/assets/tarif3-Tk8rf8pH.svg"
                  alt="Yetkazib berish muddati"
                  className="w-24 h-24 md:w-20 md:h-20 object-contain mb-2"
                />
                <span className="text-xs md:text-sm text-gray-700 text-center">
                  Yetkazib berish muddati
                </span>
              </div>

              <div className="flex flex-col items-center w-full lg:w-28">
                <img
                  src="https://www.wtlogistic.uz/assets/tarif4-DRdlg-HS.svg"
                  alt="Yuk parametrlari"
                  className="w-24 h-24 md:w-20 md:h-20 object-contain mb-2"
                />
                <span className="text-xs md:text-sm text-gray-700 text-center">
                  Yuk parametrlari
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
