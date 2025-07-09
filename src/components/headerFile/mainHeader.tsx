import { useState } from "react";
import { arr } from "./arr";
import Modal from "../modal/modal";

export default function MainHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="w-[100%] h-[90px] "></div>
      <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between gap-[20px] px-4 py-4">
          <a href="#" className="flex items-center space-x-5 mr-[60px]">
            <div className="text-[24px] font-bold  px-3 border-gray-300 border-r">
              WTL
            </div>
            <span className=" text-sm text-gray-900">
              Transport-ekspedit­siya <br /> kompaniyasi
            </span>
          </a>

          <nav className="hidden lg:flex items-center justify-between flex-1 ">
            {arr.map((item) => (
              <a
                key={item.title}
                href={item.link}
                className="text-[16px] text-gray-700 font-medium relative inline-block group hover:text-blue-600 transition duration-300 hover:scale-105 hover:translate-y-1"
              >
                {item.title}
                <span className="absolute left-0 -bottom-2 h-[2px] w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-blue-500 hvr-grow hover:bg-blue-600 cursor-pointer text-white px-7 py-3 rounded-md"
              >
                Biz bilan bog'laning
              </button>
              <div className="flex items-center space-x-2 ml-2 pr-5">
                <img
                  src="https://www.wtlogistic.uz/assets/flag-uzb-CHvUW7cG.jpg"
                  alt="UZ"
                  className="w-8 h-8 rounded-full object-cover border-blue-400 border-2"
                />
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABLAAAAMgBAMAAADBzoYxAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAD1BMVEX///+qveEAOaaOMEvVKx7/j+iDAAAAAWJLR0QAiAUdSAAAAAd0SU1FB+gGDQYOFMs9m3MAAARUSURBVHja7dJBDQAgEAPBWsACFrCAf02YuD5IZiRsNgEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPrCgIBsKjIWxMBbGAmNhLIwFxsJYGAuMhbEwFhgLY2EsMBbGwlhgLIyFscBYGAtjgbEwFsYCY2EsjAXGwlgYC4yFsTAWGAtjYSwwFsbCWGAsjIWxwFgYC2OBsTAWxgJjYSyMBcbCWBgLjIWxMBYYC2NhLDAWxsJYYCyMhbHAWBgLY4GxMBbGAmNhLIwFxsJYGAuMhbEwFhgLY2EsjAXGwlgYC4yFsTAWGAtjYSwwFsbCWGAsjIWxwFgYC2OBsTAWxgJjYSyMBcbCWBgLjIWxMBYYC2NhLDAWxsJYYCyMhbHAWBgLY4GxMBbGAmNhLIwFxsJYGAuMhbEwFhgLY2EsMBbGwlhgLIyFscBYGAtjgbEwFsYCY2EsjAXGwlgYC4yFsTAWGAtjYSwwFsbCWBhLAoyFsTAWGAtjYSwwFsbCWGAsjIWxwFgYC2OBsTAWxgJjYSyMBcbCWBgLjIWxMBYYC2NhLDAWxsJYYCyMhbHAWBgLY4GxMBbGAmNhLIwFxsJYGAuMhbEwFhgLY2EsMBbGwlhgLIyFscBYGAtjgbEwFsYCY2EsjAXGwlgYC4yFsTAWGAtjYSwwFsbCWGAsjIWxwFgYC2NhLDAWxsJYMD3WgYJcKDAWxsJYGAuMhbEwFhgLY2EsMBbGwlhgLIyFscBYGAtjgbEwFsYCY2EsjAXGwlgYC4yFsTAWGAtjYSwwFsbCWGAsjIWxwFgYC2OBsTAWxgJjYSyMBcbCWBgLjIWxMBYYC2NhLDAWxsJYYCyMhbHAWBgLY4GxMBbGAmNhLIwFxsJYGAuMhbEwFhgLY2EsMBbGwlhgLIyFsTAWGAtjYSwwFsbCWGAsjIWxwFgYC2OBsTAWxgJjYSyMBcbCWBgLjIWxMBYYC2NhLDAWxsJYYCyMhbHAWBgLY4GxMBbGAmNhLIwFxsJYGAuMhbEwFhgLY2EsMBbGwlhgLIyFscBYGAtjgbEwFsYCY2EsjAXGwlgYC4yFsTAWGAtjYSwwFsbCWGAsjIWxwFgYC2NhLAkwFsbCWGAsjIWxwFgYC2OBsTAWxgJjYSyMBcbCWBgLjIWxMBYYC2NhLDAWxsJYYCyMhbHAWBgLY4GxMBbGAmNhLIwFxsJYGAuMhbEwFhgLY2EsMBbGwlhgLIyFscBYGAtjgbEwFsYCY2EsjAXGwlgYC4yFsTAWGAtjYSwwFsbCWGAsjIWxwFgYC2OBsTAWxgJjYSyMhbHAWBgLY8GwB2DTFJhG2Cf4AAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDI0LTA2LTEzVDA2OjE0OjIwKzAwOjAwSSomSgAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyNC0wNi0xM1QwNjoxNDoyMCswMDowMDh3nvYAAAAASUVORK5CYII="
                  alt="RU"
                  className="w-8 h-8 rounded-full object-cover"
                />
                <img
                  src="https://www.wtlogistic.uz/assets/flag-usa-BS9dwa41.jpeg"
                  alt="EN"
                  className="w-8 h-8 rounded-full object-cover"
                />
              </div>
            </div>
          </nav>

          <div className="hidden md:flex lg:hidden items-center space-x-2">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-blue-500 hvr-grow hover:bg-blue-600 cursor-pointer text-white px-7 py-3 rounded-md"
            >
              Biz bilan bog'laning
            </button>
            <div className="flex items-center space-x-2 ml-2 pr-5">
              <img
                src="https://www.wtlogistic.uz/assets/flag-uzb-CHvUW7cG.jpg"
                alt="UZ"
                className="w-8 h-8 rounded-full object-cover border-blue-400 border-2"
              />
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABLAAAAMgBAMAAADBzoYxAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAD1BMVEX///+qveEAOaaOMEvVKx7/j+iDAAAAAWJLR0QAiAUdSAAAAAd0SU1FB+gGDQYOFMs9m3MAAARUSURBVHja7dJBDQAgEAPBWsACFrCAf02YuD5IZiRsNgEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPrCgIBsKjIWxMBbGAmNhLIwFxsJYGAuMhbEwFhgLY2EsMBbGwlhgLIyFscBYGAtjgbEwFsYCY2EsjAXGwlgYC4yFsTAWGAtjYSwwFsbCWGAsjIWxwFgYC2OBsTAWxgJjYSyMBcbCWBgLjIWxMBYYC2NhLDAWxsJYYCyMhbHAWBgLY4GxMBbGAmNhLIwFxsJYGAuMhbEwFhgLY2EsjAXGwlgYC4yFsTAWGAtjYSwwFsbCWGAsjIWxwFgYC2OBsTAWxgJjYSyMBcbCWBgLjIWxMBYYC2NhLDAWxsJYYCyMhbHAWBgLY4GxMBbGAmNhLIwFxsJYGAuMhbEwFhgLY2EsMBbGwlhgLIyFscBYGAtjgbEwFsYCY2EsjAXGwlgYC4yFsTAWGAtjYSwwFsbCWBhLAoyFsTAWGAtjYSwwFsbCWGAsjIWxwFgYC2OBsTAWxgJjYSyMBcbCWBgLjIWxMBYYC2NhLDAWxsJYYCyMhbHAWBgLY4GxMBbGAmNhLIwFxsJYGAuMhbEwFhgLY2EsMBbGwlhgLIyFscBYGAtjgbEwFsYCY2EsjAXGwlgYC4yFsTAWGAtjYSwwFsbCWGAsjIWxwFgYC2NhLDAWxsJYMD3WgYJcKDAWxsJYGAuMhbEwFhgLY2EsMBbGwlhgLIyFscBYGAtjgbEwFsYCY2EsjAXGwlgYC4yFsTAWGAtjYSwwFsbCWGAsjIWxwFgYC2OBsTAWxgJjYSyMBcbCWBgLjIWxMBYYC2NhLDAWxsJYYCyMhbHAWBgLY4GxMBbGAmNhLIwFxsJYGAuMhbEwFhgLY2EsMBbGwlhgLIyFsTAWGAtjYSwwFsbCWGAsjIWxwFgYC2OBsTAWxgJjYSyMBcbCWBgLjIWxMBYYC2NhLDAWxsJYYCyMhbHAWBgLY4GxMBbGAmNhLIwFxsJYGAuMhbEwFhgLY2EsMBbGwlhgLIyFscBYGAtjgbEwFsYCY2EsjAXGwlgYC4yFsTAWGAtjYSwwFsbCWGAsjIWxwFgYC2NhLAkwFsbCWGAsjIWxwFgYC2OBsTAWxgJjYSyMBcbCWBgLjIWxMBYYC2NhLDAWxsJYYCyMhbHAWBgLY4GxMBbGAmNhLIwFxsJYGAuMhbEwFhgLY2EsMBbGwlhgLIyFscBYGAtjgbEwFsYCY2EsjAXGwlgYC4yFsTAWGAtjYSwwFsbCWGAsjIWxwFgYC2OBsTAWxgJjYSyMhbHAWBgLY8GwB2DTFJhG2Cf4AAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDI0LTA2LTEzVDA2OjE0OjIwKzAwOjAwSSomSgAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyNC0wNi0xM1QwNjoxNDoyMCswMDowMDh3nvYAAAAASUVORK5CYII="
                alt="RU"
                className="w-8 h-8 rounded-full object-cover"
              />
              <img
                src="https://www.wtlogistic.uz/assets/flag-usa-BS9dwa41.jpeg"
                alt="EN"
                className="w-8 h-8 rounded-full object-cover"
              />
            </div>
            <button
              onClick={() => setIsOpen(true)}
              className="hidden lg:hidden md:block focus:outline-none"
              aria-label="Toggle Menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          <button
            onClick={() => setIsOpen(true)}
            className="md:hidden focus:outline-none"
            aria-label="Toggle Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {isOpen && (
          <div
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          ></div>
        )}

        <div
          className={`
            fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform
            transition-transform duration-300 ease-in-out
            ${isOpen ? "translate-x-0" : "translate-x-full"}
          `}
        >
          <div className="flex flex-col space-y-4">
            <div className="flex items-center justify-between p-4 border-b-[0.5px] border-gray-300">
              <div className="md:hidden flex items-center space-x-3">
                <img
                  src="https://www.wtlogistic.uz/assets/flag-uzb-CHvUW7cG.jpg"
                  alt="UZ"
                  className="w-8 h-8 rounded-full object-cover border-blue-400 border-2"
                />
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABLAAAAMgBAMAAADBzoYxAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAD1BMVEX///+qveEAOaaOMEvVKx7/j+iDAAAAAWJLR0QAiAUdSAAAAAd0SU1FB+gGDQYOFMs9m3MAAARUSURBVHja7dJBDQAgEAPBWsACFrCAf02YuD5IZiRsNgEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPrCgIBsKjIWxMBbGAmNhLIwFxsJYGAuMhbEwFhgLY2EsMBbGwlhgLIyFscBYGAtjgbEwFsYCY2EsjAXGwlgYC4yFsTAWGAtjYSwwFsbCWGAsjIWxwFgYC2OBsTAWxgJjYSyMBcbCWBgLjIWxMBYYC2NhLDAWxsJYYCyMhbHAWBgLY4GxMBbGAmNhLIwFxsJYGAuMhbEwFhgLY2EsjAXGwlgYC4yFsTAWGAtjYSwwFsbCWGAsjIWxwFgYC2OBsTAWxgJjYSyMBcbCWBgLjIWxMBYYC2NhLDAWxsJYYCyMhbHAWBgLY4GxMBbGAmNhLIwFxsJYGAuMhbEwFhgLY2EsMBbGwlhgLIyFscBYGAtjgbEwFsYCY2EsjAXGwlgYC4yFsTAWGAtjYSwwFsbCWBhLAoyFsTAWGAtjYSwwFsbCWGAsjIWxwFgYC2OBsTAWxgJjYSyMBcbCWBgLjIWxMBYYC2NhLDAWxsJYYCyMhbHAWBgLY4GxMBbGAmNhLIwFxsJYGAuMhbEwFhgLY2EsMBbGwlhgLIyFscBYGAtjgbEwFsYCY2EsjAXGwlgYC4yFsTAWGAtjYSwwFsbCWGAsjIWxwFgYC2NhLDAWxsJYMD3WgYJcKDAWxsJYGAuMhbEwFhgLY2EsMBbGwlhgLIyFscBYGAtjgbEwFsYCY2EsjAXGwlgYC4yFsTAWGAtjYSwwFsbCWGAsjIWxwFgYC2OBsTAWxgJjYSyMBcbCWBgLjIWxMBYYC2NhLDAWxsJYYCyMhbHAWBgLY4GxMBbGAmNhLIwFxsJYGAuMhbEwFhgLY2EsMBbGwlhgLIyFsTAWGAtjYSwwFsbCWGAsjIWxwFgYC2OBsTAWxgJjYSyMBcbCWBgLjIWxMBYYC2NhLDAWxsJYYCyMhbHAWBgLY4GxMBbGAmNhLIwFxsJYGAuMhbEwFhgLY2EsMBbGwlhgLIyFscBYGAtjgbEwFsYCY2EsjAXGwlgYC4yFsTAWGAtjYSwwFsbCWGAsjIWxwFgYC2NhLAkwFsbCWGAsjIWxwFgYC2OBsTAWxgJjYSyMBcbCWBgLjIWxMBYYC2NhLDAWxsJYYCyMhbHAWBgLY4GxMBbGAmNhLIwFxsJYGAuMhbEwFhgLY2EsMBbGwlhgLIyFscBYGAtjgbEwFsYCY2EsjAXGwlgYC4yFsTAWGAtjYSwwFsbCWGAsjIWxwFgYC2OBsTAWxgJjYSyMhbHAWBgLY8GwB2DTFJhG2Cf4AAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDI0LTA2LTEzVDA2OjE0OjIwKzAwOjAwSSomSgAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyNC0wNi0xM1QwNjoxNDoyMCswMDowMDh3nvYAAAAASUVORK5CYII="
                  alt="RU"
                  className="w-8 h-8 rounded-full object-cover"
                />
                <img
                  src="https://www.wtlogistic.uz/assets/flag-usa-BS9dwa41.jpeg"
                  alt="EN"
                  className="w-8 h-8 rounded-full object-cover"
                />
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="self-end text-4xl"
              >
                &times;
              </button>
            </div>

            <nav className="flex flex-col w-full">
              {arr.map((item) => (
                <a
                  key={item.title}
                  href={item.link}
                  className="text-[19px] text-gray-700 font-medium relative inline-block group hover:text-blue-600 transition duration-300 hover:scale-105 hover:translate-y-1 active:bg-blue-100 px-5 py-3"
                >
                  {item.title}
                </a>
              ))}
            </nav>

            <button
              onClick={() => {
                setIsModalOpen(true);
                setIsOpen(false);
              }}
              className="bg-blue-500 md:hidden hover:bg-blue-600 text-white px-4 py-2 rounded-md"
            >
              Biz bilan bog'laning
            </button>
          </div>
        </div>
      </header>

      {/* Modalni alohida tashqarida render qilamiz */}
      {isModalOpen && <Modal onClose={() => setIsModalOpen(false)} />}
    </>
  );
}
