import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const routes = [
  { from: "O'zbekiston", to: "BAA" },
  { from: "BAA", to: "O'zbekiston" },
  { from: "O'zbekiston", to: "Rossiya" },
  { from: "O'zbekiston", to: "Turkiya" },
  { from: "O'zbekiston", to: "Qozog'iston" },
  { from: "O'zbekiston", to: "Yevropa" },
  { from: "Rossiya", to: "O'zbekiston" },
  { from: "Turkiya", to: "O'zbekiston" },
  { from: "Qozog'iston", to: "O'zbekiston" },
  { from: "Yevropa", to: "O'zbekiston" },
  { from: "O'zbekiston", to: "Xitoy" },
  { from: "Xitoy", to: "O'zbekiston" },
];

export default function Swiper2() {
  return (
    <section className="py-10 w-full px-4 bg-white">
      <div className="container1 mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-gray-800">
          Bizning yo'nalishlar
        </h2>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="routes-swiper"
        >
          {routes.map((route, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="text-lg font-semibold mb-2 text-gray-900">
                  {route.from} → {route.to}
                </div>
                <div className="text-sm text-gray-600">
                  Ishonchli va tezkor yetkazib berish
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
