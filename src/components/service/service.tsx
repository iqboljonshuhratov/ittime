import { Service2 } from "./service2";
import Services3 from "./service3";
import { serviceArr } from "./servisArr";

export const Service = () => {
  return (
    <>
      <div className="w-full  ">
        <div className="relative overflow-hidden -mb-px ">
          <div className="bg-white clip-path-my-skew-reverse p-8"></div>
        </div>
        <div className="bg-white  w-full -mt-px ">
          <div className="container1 pt-[100px]">
            <div className="text-3xl md:text-5xl  gap-2 flex md:flex-row flex-col justify-center px-5 md:px-[100px]">
              {" "}
              <span className="font-bold text-center text-blue-500">
                Bizning yetkazib berish
              </span>{" "}
              <span className="font-bold text-center">
                {" "}
                Sizning afzalligingiz{" "}
              </span>
            </div>
            <p className="text-center px-[40px] text-[18px] md:text-[20px] mt-10">
              Kompaniyaning asosiy maqsadi biznesni yuqori sifatli logistika,
              Yevropa va MDHning <br /> istalgan nuqtasiga yuklarni eng qulay va
              ishonchli tashish bilan ta'minlashdan iborat.
            </p>
            <div className="flex bg-white justify-center items-center flex-col md:flex-row gap-20 mt-25 pb-32">
              {serviceArr.map((item, i) => {
                return (
                  <div className="flex flex-col justify-center items-center text-center gap-8 w-[341px]">
                    <div key={i} className="w-[208px] h-[208px]">
                      <img
                        src={item.url}
                        alt={item.title}
                        className="w-[100%] object-cover rounded-lg"
                      />
                    </div>
                    <div className="md:ml-10 mt-5 md:mt-0">
                      <h2 className="text-xl font-bold">{item.title}</h2>
                      <p className="text-gray-600 mt-2">{item.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <Service2 />
            <Services3 />
          </div>
        </div>
      </div>
    </>
  );
};
