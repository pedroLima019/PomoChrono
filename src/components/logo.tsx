import { TimerIcon } from "lucide-react";

const Logo = () => {
  return (
    <header className=" w-full   flex flex-col items-center justify-start  gap-1 p-1">
      <TimerIcon className="w-[100px] h-[100px] mt-10 text-white" />
      <h1 className="font-bold text-3xl mb-5 mt-2.5 text-white font-roboto ">
        PomoChrono
      </h1>
    </header>
  );
};

export default Logo;
