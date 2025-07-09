import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const orders = [
  {
    title: "Rossiyadan yuk tashish",
    text: "Rossiyadan O'zbekistonga barcha turdagi yuklarni tez va ishonchli yetkazib berish.",
    image: "https://www.wtlogistic.uz/assets/regional-truck-Ccc1ZLwb.png",
  },
  {
    title: "Qozog'istondan yuk tashish",
    text: "Qozog'istondan O'zbekistonga yuklarni tez va qulay narxlarda yetkazib berish.",
    image: "https://www.wtlogistic.uz/assets/turkey-truck-BAXxRWCJ.jpg",
  },
  {
    title: "Hududiy yetkazib berish",
    text: "Hududiy yuklarni tez va arzon yetkazib berish xizmatlari.",
    image: "https://www.wtlogistic.uz/assets/europa-truck-DSyMklPq.webp",
  },
  {
    title: "Turkiyadan yuk tashish",
    text: "Turkiyadan O'zbekistonga sifatli va ishonchli yuk tashish xizmatlari.",
    image: "https://www.wtlogistic.uz/assets/russia-truck-Dy4GX_At.webp",
  },
  {
    title: "Yevropadan yetkazib berish",
    text: "Yevropadan tez va xavfsiz yuklarni yetkazib berish uchun ishonchli logistika xizmatlari.",
    image: "https://www.wtlogistic.uz/assets/kazakhstan-truck-DIwjfxVn.jpeg",
  },
];

export default function ShippingSlider() {
  return (
    <div className="bg-white w-full -mb-4  ">
      <div className="container1 mx-auto px-4 lg:px-1 bg-white py-12">
        <h2 className="text-3xl md:text-5xl font-extrabold text-center text-gray-900 mb-8">
          Xizmatlarimiz
        </h2>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1280: { slidesPerView: 3 },
          }}
          autoplay={{ delay: 3000 }}
          loop
          pagination={{
            clickable: true,
            el: ".custom-pagination",
          }}
          className="pb-16"
        >
          {orders.map((order, index) => (
            <SwiperSlide key={index}>
              <div className="relative p-2 md:p-6 rounded-3xl shadow-xl overflow-hidden bg-gradient-to-t from-gray-800 via-gray-600 to-gray-400 text-white">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700"></div>

                <div className="relative z-10">
                  <h3 className="text-2xl text-center mt-2 md:text-4xl xl:h-[100px] font-extrabold mb-4 leading-tight">
                    {order.title}
                  </h3>

                  <div className="relative w-full h-40 md:h-64 mb-6 overflow-hidden rounded-xl">
                    <img
                      src={order.image}
                      alt={order.title}
                      className="w-full h-full object-cover rounded-xl transform hover:scale-110 transition-all duration-500 ease-in-out"
                    />
                  </div>

                  <p className="text-lg mb-6 text-center md:text-left xl:h-[110px] text-opacity-90">
                    {order.text}
                  </p>

                  <div className="mt-4 flex items-center">
                    <button className="cursor-pointer relative mx-auto md:mx-0 px-8 py-3 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 rounded-lg shadow-inner shadow-blue-700/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2">
                      <span className="relative">Buyurtma qiling</span>
                    </button>
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black opacity-30 hover:opacity-50 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-20 hover:opacity-50 transition-opacity duration-300"></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="custom-pagination mt-8 flex justify-center"></div>
      </div>
    </div>
  );
}
