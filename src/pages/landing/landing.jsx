import { useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import HurrayModal from "../../components/HurrayModal";

const landing = () => {
  const [openHurray, setOpenHurray] = useState(false);
  return (
    <>
      {openHurray && <HurrayModal setModal={setOpenHurray} />}
      <div className="wrapper">
        <div className="contain flex-col gap-5 justify-start items-center  py-8">
          <div className="w-full flex justify-between items-center gap-2">
            <img
              src="/logo.png"
              className="w-[130px] sm:w-[180px] md:w-[277px] object-contain"
              alt=""
            />
            <button
              className="text-base md:text-[23px] shadow-btn text-white leading-[1] relative font-normal  rounded-full w-full md:max-w-[270px] max-w-[170px] bg-btn pb-1 md:pb-2 h-[45px] md:h-[60px]
           "
            >
              Connect wallet
            </button>
          </div>
          <div className="flex mt-8 xl:mt-16 xl:flex-row flex-col justify-center items-stretch w-full gap-5 xl:gap-8">
            <div className="flex justify-between items-stretch w-full bg-purpleBg bg-cover bg-no-repeat rounded-[30px] px-3 lg:px-6 py-8 shadow-purple">
              <div className="flex justify-between gap-7 items-center flex-col ">
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
              <div className="flex justify-between  items-center flex-col ">
                <h3 className="text-white font-normal text-lg lg:text-[32px] capitalize">
                  Next Jackpot in
                </h3>
                <CountdownCircleTimer
                  isPlaying
                  size={window.innerWidth > 1024 ? 147 : 83}
                  strokeWidth={window.innerWidth > 1024 ? 14 : 8}
                  rotation="counterclockwise"
                  colors={["#FFCE4F", "#F3B30C"]}
                  trailColor={"#FFE7A842"}
                  duration={60} // in seconds
                >
                  {({ remainingTime }) => (
                    <span className="text-white text-3xl lg:text-6xl pb-1 lg:pb-2 leading-[1] font-bold">
                      {/* {parseFloat(remainingTime / 86400).toFixed(0)} // code to convert it to days*/}
                      {remainingTime}
                    </span>
                  )}
                </CountdownCircleTimer>
                <h3 className="text-white font-normal text-lg lg:text-[32px] capitalize">
                  Days
                </h3>
              </div>
            </div>
            <div className="w-full hidden xl:flex justify-start items-start flex-col gap-3">
              <div className="rounded-[30px] min-h-[160px] h-full flex justify-center w-full bg-purpleBg bg-no-repeat bg-cover gap-5 items-center  px-5 shadow-purple">
                <img
                  src="/gift.png"
                  className="object-contain w-[92px]"
                  alt=""
                />
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
              <div className="rounded-[30px] min-h-[160px] h-full flex justify-center w-full bg-lightYellow gap-8 items-center  px-5">
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
          <div className="flex sm:flex-row flex-col  justify-start mt-5 items-stretch w-full gap-8">
            <div className="flex justify-start items-center flex-col gap-3 w-full">
              <div className="w-full shadow-box h-[260px] xl:h-[348px] flex bg-white rounded-[30px] justify-start items-center flex-col gap-6 py-5 px-3">
                <div className="text-center">
                  <h4 className="text-dark text-base xl:text-2xl font-normal capitalize">
                    Available to spend
                  </h4>
                  <h2 className="text-dark sm:mb-2 sm:mt-4 text-2xl xl:text-[48px] font-normal">
                    $208.50
                  </h2>
                </div>
                <div className="flex justify-start items-center w-full gap-2 px-4 border border-solid max-w-[400px] border-yellow rounded-full h-[45px] xl:h-[51px]">
                  <p className="text-black text-xl leading-[1] pb-2 xl:p-0">
                    $
                  </p>
                  <input
                    type="text"
                    className="w-full h-full bg-transparent border-none outline-none"
                  />
                </div>
                <button
                  className="text-lg shadow-btn text-white leading-[1] relative font-normal  rounded-full w-full max-w-[400px] bg-btn pb-2 h-[50px]
           "
                >
                  Buy Now
                </button>
              </div>
              <div className="flex justify-start items-center text-center flex-col ">
                <h4 className="text-dark font-normal text-lg xl:text-[32px] capitalize">
                  2% Auto stake daily reward
                </h4>
                <p className="text-gray capitalize text-xs xl:text-lg">
                  Reinvest once per day. Claim once per week
                </p>
              </div>
            </div>
            <div className="flex justify-start items-center flex-col gap-3 w-full">
              <div className="w-full shadow-box flex bg-white h-[260px] xl:h-[348px] rounded-[30px] justify-start items-center flex-col gap-4 py-5 px-3">
                <div className="text-center">
                  <h4 className="text-dark text-base xl:text-2xl font-normal capitalize">
                    Available to Reinvest
                  </h4>
                  <h2 className="text-dark sm:mb-2 sm:mt-4 text-2xl xl:text-[48px] font-normal">
                    $300.99
                  </h2>
                </div>
                <div className="flex justify-center aspect-square w-[140px] items-center rounded-full bg-purpleBg bg-left text-center bg-cover shadow-purple bg-no-repeat">
                  <button
                    onClick={() => setOpenHurray(true)}
                    className="text-white text-base xl:text-lg"
                  >
                    Reinvest <br />
                    Winnings
                  </button>
                </div>
              </div>
              <div className="flex justify-start items-center text-center flex-col ">
                <h4 className="text-dark font-normal text-lg xl:text-[32px] capitalize">
                  Invest winnings to buy more Tickets
                </h4>
                <p className="text-gray capitalize text-xs xl:text-lg">
                  to earn more from the Lotto
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex xl:hidden justify-start items-start flex-col gap-20 mt-20">
          <div className="flex-col min-h-[160px] h-full flex justify-center w-full bg-purpleBg bg-no-repeat bg-cover gap-5 items-center pb-6  px-5 shadow-purple">
            <img
              src="/gift.png"
              className="-translate-y-1/2 -mb-14 object-contain w-[92px]"
              alt=""
            />
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
          <div className="flex-col min-h-[160px] h-full flex justify-center w-full bg-lightYellow gap-5 items-center pb-6  px-5 shadow-purple">
            <img
              src="/wallet.png"
              className="-translate-y-1/2 -mb-14 object-contain w-[92px]"
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
    </>
  );
};

export default landing;
