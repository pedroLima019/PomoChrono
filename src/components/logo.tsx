import { TimerIcon } from "lucide-react";

const Logo = () => {
  return (
    <header className=" w-full  flex flex-col items-center justify-center  gap-1 mt-5 ">
      <TimerIcon className="  w-[60px] h-[60px] mt-3 sm:w-[100px] text-black dark:text-white" />
      <h1 className="font-bold text-3xl mb-5 mt-2.5 font-roboto text-black dark:text-white ">
        PomoChrono
      </h1>
    </header>
  );
};

export default Logo;
