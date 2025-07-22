import { useState } from "react";

export default function Page() {
  const [toggle, setToggle] = useState("middle");

  const getClass = (name: string) => {
    return `px-6 py-3 cursor-pointer rounded-full text-sm md:text-base font-semibold transition-all duration-300 whitespace-nowrap transform scale-105 ${
      toggle === name
        ? "bg-blue-600 text-white shadow-lg"
        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
    }`;
  };

  return (
    <div id="tariffs" className="bg-gray-50 w-full pb-10   ">
      <div className="text-3xl md:text-5xl pt-16  gap-2 flex md:flex-row flex-col justify-center px-5 md:px-[100px]">
        {" "}
        <span className="font-bold text-center text-blue-500">
          Yuk mashinalarimiz
        </span>{" "}
        <span className="font-bold text-center"> Eurofura </span>
      </div>
      <p className="text-center px-[40px] text-[18px] mb-5 md:text-[20px] mt-10">
        21 tonnagacha, hajmi 90m³gacha
      </p>
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        <button
          className={getClass("eurofura")}
          onClick={() => setToggle("eurofura")}
        >
          Eurofura
        </button>
        <button
          className={getClass("tonar")}
          onClick={() => setToggle("tonar")}
        >
          Tonar
        </button>
        <button
          className={getClass("middle")}
          onClick={() => setToggle("middle")}
        >
          O'rta hajmli
        </button>
      </div>

      <div className="bg-white  shadow-xl p-4 md:p-8 max-w-7xl mx-auto ">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-gray-100">
            <img
              src={
                toggle === "eurofura"
                  ? "https://www.wtlogistic.uz/assets/eurofura-InAm4YcL.png"
                  : toggle === "tonar"
                  ? "https://www.wtlogistic.uz/assets/tonar-DksJfh37.png"
                  : toggle === "middle"
                  ? "https://www.wtlogistic.uz/assets/bigtonna-xZG42uLJ.png"
                  : ""
              }
              alt="Eurofura"
              className="w-full h-full object-contain p-4 transition-transform duration-500 hover:scale-105"
            />
          </div>

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

            <div>
              <h4 className="text-lg font-semibold mb-3 text-gray-900">
                Hajmni tanlang:
              </h4>
              <div className="flex flex-wrap gap-3">
                <button className="px-4 py-2 cursor-pointer rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 transition-all duration-300">
                  82 m³ (EURO)
                </button>
                <button className="px-4 py-2 cursor-pointer rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 transition-all duration-300">
                  86 m³ (EURO)
                </button>
                <button className="px-4 py-2 cursor-pointer rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 transition-all duration-300">
                  90 m³ (EURO)
                </button>
                <button className="px-4 py-2 cursor-pointer rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 transition-all duration-300">
                  92 m³ (EURO)
                </button>
                <button className="px-4 py-2 cursor-pointer rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-all duration-300">
                  96 m³ (JUMBO)
                </button>
              </div>
              <p className="mt-3 text-gray-600 text-sm italic">
                «Siniq» ramali yarim tirkama, G-shaklidagi pol asosi, yarim
                tirkamaning kichraytirilgan g'ildirak diametri
              </p>
            </div>

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
