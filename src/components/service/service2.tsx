import { serviceArr2 } from "./servisArr";

export const Service2 = () => {
  return (
    <>
      <div className="w-[100%]  bg-white ">
        <div className="bg-white    container1">
          <div className="text-3xl md:text-5xl  gap-2 flex md:flex-row flex-col justify-center px-5 md:px-[100px]">
            {" "}
            <span className="font-bold text-center text-blue-500">Bizning</span>
            <span className="font-bold text-center"> Xizmatlar </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-6 max-w-7xl mx-auto mt-25 pb-32">
            {serviceArr2.map((item, i) => {
              return (
                <div className="flex flex-col items-center group">
                  <div key={i} className="w-[208px] h-[208px] mb-6">
                    <img
                      src={item.url}
                      alt={item.title}
                      className="w-[100%] object-cover rounded-lg"
                    />
                  </div>
                  <div className="text-center max-w-[200px]">
                    <h2 className="text-lg font-bold mb-2 text-gray-800 group-hover:text-blue-500 transition-colors duration-300">
                      {item.title}
                    </h2>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
