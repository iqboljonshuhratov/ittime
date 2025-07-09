export const About = () => {
  return (
    <div id="about" className="about-page bg-white">
      <div className="container1 px-5">
        <div className="about-content">
          <div className="about-text ">
            <h1 className="text-4xl pt-[100px] md:text-5xl font-bold mb-8 flex flex-col md:flex-row items-center justify-center gap-2">
              Biz haqimizda
            </h1>
            <p className="p-6">
              Yuk tashish bozorida 5 yildan ortiq faoliyat yuritayotgan dinamik
              rivojlanayotgan kompaniya. Bizning yo'nalishimiz - Yevropa,
              Rossiya, Turkiya va MDH mamlakatlarida avtomobil transportida yuk
              tashish.
            </p>

            <div className="advantages-section mt-6 p-6">
              <h2 className="text-xl font-semibold my-4">
                Bizning afzalliklarimiz
              </h2>
              <ul className="pl-6 space-y-2 text-gray-700">
                <li>✅ 1 tonnadan 22 tonnagacha yuk mashinalari.</li>
                <li>
                  ✅ Haqiqatan ham dolzarb tariflar. Har qanday murakkablikdagi
                  yuklarni tashish va ekspeditsiya qilish.
                </li>
                <li>✅ Yuklash/tushirish paytida maslahat yordami.</li>
                <li>✅ Bojxona brokeri yordami.</li>
                <li>
                  ✅ Yuridik shaxslar va yakka tartibdagi tadbirkorlar bilan
                  ishlaymiz.
                </li>
                <li>✅ Har qanday to'lov shakli.</li>
              </ul>
            </div>

            <div className="my-8 p-6 bg-[#f8fafc] rounded-[12px] box-border border border-[#e5e7eb]">
              <p>
                Tranzit yetkazib berish (konsolidatsiyalangan tashish) har doim
                tejamkorlikdir. Mijoz butun mashinaning yurishi uchun emas,
                balki faqat bir tomonga yetkazib berish uchun to'laydi. Yetkazib
                berish narxining -30%.
              </p>
              <p>
                Shu bilan birga, yirik transport kompaniyasining afzalliklari
                saqlanib qoladi: ishonchli transport, tajribali haydovchilar,
                sinovdan o'tgan yo'nalishlar va mulkingizning kafolatlangan
                xavfsizligi.
              </p>
              <p>
                Shoshilinch buyurtmalar bo'lsa ham, doimo bo'sh joyi bo'lgan
                transport mavjud.
              </p>
            </div>

            <div className="my-8 p-6 bg-[#f8fafc] rounded-[12px] box-border border border-[#e5e7eb]">
              <p>
                Yetkazib berishning barcha bosqichlarini nazorat qilib, biz
                yukning qayerda ekanligini, uning muddati va yakuniy nuqtaga
                yetib kelish sanasini aniq bilamiz.
              </p>
              <p>Biz bozorda ishonchli hamkor sifatida obro' qozondik.</p>
              <p>Bizga ishonishingiz mumkin.</p>
            </div>

            <div className="bg-[#eaf3ff] rounded-2xl border-l-4 border-blue-500 p-6 mt-6">
              <p className="text-gray-700 text-lg leading-relaxed">
                Aniq narxni bilish, ma'lum bir sanada yetkazib berish
                imkoniyatini aniqlash yoki paydo bo'lgan har qanday savollar
                bo'yicha maslahat olish uchun veb-saytda so'rov qoldiring yoki
                shunchaki qo'ng'iroq qiling.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
