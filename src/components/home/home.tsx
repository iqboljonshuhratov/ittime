const Home = () => {
  return (
    <>
      <div className="max-w-[1500px] mr-auto ml-auto h-[577px] flex justify-center   pr-4 pl-4 pt-[40px] pb-[30px]">
        <div className="rounded-2xl w-[100%] p-[40px] bg-black/50 duration-700 transition-transform hover:scale-103 ">
          <h1 className=" lg:text-7xl text-white font-bold md:text-4xl sm:text-3xl text-2xl ">
            Biz tez va xavfsiz yetkazib berishni kafolatlaymiz!
          </h1>
          <div className="w-[192px] h-[4px] bg-[#2563eb] mt-5"></div>
          <div className="flex justify-center items-center mt-7">
            <p className="text-white ml-auto mr-auto inline-block lg:text-[24px] md:text-[20px] sm:text-[18px] text-[16px]">
              Bizning parkimiz o‘z sinfidagi eng yaxshi yuk mashinalaridan{" "}
              <br /> iborat bo‘lib, yuklaringizni qayerga bo‘lmasin tez, xavfsiz
              va o‘z <br /> vaqtida yetkazib beradi.
            </p>
          </div>
          <button className="bg-blue-500 mt-7 hvr-grow hover:bg-blue-600 cursor-pointer text-white px-[20px] py-[10px] md:px[60px] md:py-[20px] rounded-full font-bold">
            Biz bilan bog'laning
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
