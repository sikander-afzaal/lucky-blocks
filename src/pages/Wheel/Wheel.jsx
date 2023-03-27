import { useEffect, useState } from "react";

const Wheel = () => {
  const [rotate, setRotate] = useState(0);
  useEffect(() => {
    // const rotation = Math.floor(Math.random() * 720);
    const rotation = 720;
    setRotate(rotation);
  }, []);

  return (
    <div className="bg-[#f1deeb] w-full  min-h-screen py-10 flex justify-center items-center">
      <div className="w-[90%] max-w-[500px] overflow-visible flex justify-start gap-10   flex-col items-center ">
        <img
          src="/logo.png"
          className="w-full max-w-[280px] object-contain"
          alt=""
        />
        <div className="flex bg-purpleBg bg-cover bg-no-repeat w-full py-10 rounded-xl justify-between gap-7 items-center flex-col ">
          <h3 className="text-white font-normal text-lg lg:text-[32px]">
            Current Jackpot
          </h3>
          <h2 className="text-white font-normal text-[46px] lg:text-[82px]">
            $250
          </h2>
          <h3 className="text-white font-normal text-lg lg:text-[32px] capitalize">
            weekly live draw
          </h3>
        </div>

        <h2 className="text-dark font-normal text-[40px] text-center">
          Win Every Time <br /> Lottery
        </h2>
        <div className="relative isolate overflow-hidden">
          <img
            src="/pointer.png"
            className="absolute top-[4%] sm:top-[5%]  z-20 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[70px]"
            alt=""
          />
          <img
            src="/base.png"
            className="absolute top-[3%] -z-20  -translate-y-1/2 left-1/2 -translate-x-1/2 w-[100px]"
            alt=""
          />

          <img
            style={{ transform: `rotate(${rotate}deg)` }}
            className="transition-all sm:min-w-0 w-full min-w-[600px] duration-[10s] -z-10"
            src="/wheel.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Wheel;
