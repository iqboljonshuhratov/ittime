import {
  FaHome,
  FaInfoCircle,
  FaListAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaMapMarkerAlt,
  FaTelegramPlane,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#2e2e2e] text-white pt-30 pb-10 px-10">
      <div className="max-w-7xl mx-auto flex  flex-col md:flex-row  gap-10 justify-center">
        {/* Chap qism */}
        <div className="bg-[#3d3d3d] max-w-[550px] rounded-xl p-6  md:w-1/2 shadow-lg">
          <h4 className="text-blue-500 justify-center  text-3xl font-semibold flex items-center gap-2 mb-4">
            <FaHome />
            Bosh sahifa
          </h4>
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <FaInfoCircle className="text-blue-500" />
              <span>Biz haqimizda</span>
            </li>
            <li className="flex items-center gap-2">
              <FaListAlt className="text-blue-500" />
              <span>Bizning afzalliklarimiz</span>
            </li>
            <li className="flex items-center gap-2">
              <FaListAlt className="text-blue-500" />
              <span>Xizmatlar</span>
            </li>
            <li className="flex items-center gap-2">
              <FaListAlt className="text-blue-500" />
              <span>Tashishlar</span>
            </li>
            <li className="flex items-center gap-2">
              <FaPhone className="text-blue-500" />
              <span>Biz bilan bog'laning</span>
            </li>
          </ul>
        </div>

        {/* O'ng qism */}
        <div className="bg-[#3d3d3d] max-w-[550px] rounded-xl p-6 md:w-1/2 shadow-lg">
          <h4 className="text-blue-500 text-center  text-3xl justify-center font-semibold flex items-center gap-2 mb-4">
            <FaPhone />
            Kontaktlar
          </h4>
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <FaPhone className="text-blue-500" />
              <span>+998 95 340 19 50</span>
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-blue-500" />
              <span>waschmittelcompany@mail.ru</span>
            </li>
            <li className="flex items-center gap-2">
              <FaClock className="text-blue-500" />
              <span>Du-Sha 9:00 dan 18:00 gacha</span>
            </li>
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-blue-500" />
              <span>Toshkent, Sandiqli ko‘chasi, 52</span>
            </li>
          </ul>

          <div className="flex items-center justify-center gap-5 mt-6 text-xl text-white">
            <a href="https://t.me/waschmitteluz" target="_blank">
              <FaTelegramPlane />
            </a>
            <a href="https://wa.me/998911338543" target="_blank">
              <FaWhatsapp />
            </a>
            <a href="https://instagram.com" target="_blank">
              <FaInstagram />
            </a>
            <a href="https://wa.me/998909431950" target="_blank">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      {/* Pastki qism */}
      <div className="mt-8 text-center text-sm text-gray-400">
        © 2025 Barcha huquqlar himoyalangan
      </div>
    </footer>
  );
}
