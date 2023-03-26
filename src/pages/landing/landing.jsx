import { CountdownCircleTimer } from "react-countdown-circle-timer";

const landing = () => {
  return (
    <div className="wrapper">
      <div className="contain flex-col gap-5 justify-start items-center  py-8">
        <div className="w-full flex justify-between items-center gap-2">
          <img src="/logo.png" className="w-[277px] object-contain" alt="" />
          <button
            className="text-[23px] shadow-btn text-white leading-[1] relative font-normal  rounded-full w-full max-w-[270px] bg-btn pb-2 h-[60px]
           "
          >
            Connect wallet
          </button>
        </div>
        <div className="flex mt-16 justify-center items-stretch w-full gap-8">
          <div className="flex justify-between items-stretch w-full bg-purpleBg bg-cover bg-no-repeat rounded-[30px] px-6 py-8 shadow-purple">
            <div className="flex justify-between gap-7 items-center flex-col ">
              <h3 className="text-white font-normal text-[32px]">
                Current Jackpot
              </h3>
              <h2 className="text-white font-normal text-[82px]">$250</h2>
              <h3 className="text-white font-normal text-[32px] capitalize">
                weekly live draw
              </h3>
            </div>
            <div className="flex justify-between  items-center flex-col ">
              <h3 className="text-white font-normal text-[32px] capitalize">
                Next Jackpot in
              </h3>
              <CountdownCircleTimer
                isPlaying
                size={147}
                strokeWidth={14}
                rotation="counterclockwise"
                colors={["#FFCE4F", "#F3B30C"]}
                trailColor={"#FFE7A842"}
                duration={100}
                colorsTime={[7, 5, 2, 0]}
              >
                {({ remainingTime }) => (
                  <span className="text-white text-6xl pb-2 leading-[1] font-bold">
                    {parseFloat(remainingTime / 86400).toFixed(0)}
                  </span>
                )}
              </CountdownCircleTimer>
              <h3 className="text-white font-normal text-[32px] capitalize">
                Days
              </h3>
            </div>
          </div>
          <div className="w-full  flex justify-start items-start flex-col gap-3">
            <div className="rounded-[30px] h-full flex justify-center w-full bg-purpleBg bg-no-repeat bg-cover gap-5 items-center  px-5 shadow-purple">
              <img src="/gift.png" className="object-contain w-[92px]" alt="" />
              <div className="flex justify-start items-center flex-col gap-2">
                <h4 className="text-white text-[32px] leading-[1] font-normal">
                  Earn 10% Direct
                </h4>
                <p className="text-white font-normal">Invite Your Friend</p>
                <button
                  className="text-[16px] shadow-btn text-white leading-[1] relative font-normal  rounded-full w-[196px] bg-btn h-[45px] pb-1
           "
                >
                  Copy Referral Code
                </button>
              </div>
            </div>
            <div className="rounded-[30px] h-full flex justify-center w-full bg-lightYellow gap-8 items-center  px-5">
              <img
                src="/wallet.png"
                className="object-contain w-[92px]"
                alt=""
              />
              <div className="flex justify-start items-center flex-col gap-2">
                <h4 className="text-black text-[32px] leading-[1] font-normal">
                  Winnings
                </h4>
                <p className="text-black font-normal capitalize">
                  Claim once per week
                </p>
                <button
                  className="text-[16px] shadow-btn text-white leading-[1] relative font-normal  rounded-full w-[196px] bg-btn h-[45px]
           "
                >
                  Claim Winnings
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default landing;
