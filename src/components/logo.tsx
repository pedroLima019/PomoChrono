import { TimerIcon } from "lucide-react";

const Logo = () => {
  return (
    <header className=" w-full mt-  flex flex-col items-center justify-center  gap-1 mt-5 ">
      <TimerIcon className="w-[60px] h-[60px] mt-3 text-white sm:w-[100px] " />
      <h1 className="font-bold text-3xl mb-5 mt-2.5 text-white font-roboto ">
        PomoChrono
      </h1>
    </header>
  );
};

export default Logo;
