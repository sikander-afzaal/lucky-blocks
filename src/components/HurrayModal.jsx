import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";

const HurrayModal = ({ setModal }) => {
  const { width, height } = useWindowSize();
  return (
    <>
      <div
        onClick={() => setModal(false)}
        className="fixed sm:opacity-100 opacity-70 top-0 left-0 z-[93]"
      >
        <Confetti
          width={width}
          height={height}
          gravity={0.1}
          numberOfPieces={200}
        />
      </div>
      <div className="sm:hidden block bg-[#f1deeb] fixed top-0 left-0 w-full h-full z-[92]"></div>
      <div
        onClick={() => setModal(false)}
        className="fixed top-0 right-0 bg-black bg-opacity-60 z-[91] h-full w-full cursor-pointer"
      ></div>
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-5 pt-24 pb-6 w-full sm:max-w-[450px] flex justify-start max-h-full sm:max-h-[90%] overflow-y-auto sm:bg-[#F1DEEB] z-[100] h-full sm:h-auto sm:rounded-2xl items-center overflow-hidden flex-col gap-2">
        {/* <img
          src="/blur.png"
          className="absolute top-0 left-0 z-20 -translate-x-1/2 -translate-y-1/2 blur-[235px]"
          alt=""
        /> */}
        <svg
          onClick={() => setModal(false)}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="#F5B317"
          className="w-8 absolute top-4 right-4 h-8 self-end cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>

        <img
          src="/float-coins.png"
          className="w-[230px]  object-contain"
          alt=""
        />
        <img
          src="/coins.png"
          className="object-contain my-2 w-[200px] "
          alt=""
        />
        <h2 className="text-dark text-[56px] leading-[1.3] font-normal text-center">
          Hurray! <br /> Multiplier
        </h2>
      </div>
    </>
  );
};

export default HurrayModal;
