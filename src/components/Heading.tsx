import { HomeIcon, SettingsIcon, SunIcon, TimerIcon } from "lucide-react";

const Heading = () => {
  return (
    <header className=" w-full   flex flex-col items-center justify-start  gap-5 p-3">
      <div className="flex flex-col items-center gap-y-5 mt-2">
        <TimerIcon className="w-[100px] h-[100px] mt-10 text-white" />
        <h1 className="font-bold text-3xl m-3 text-white font-roboto ">
          PomoChrono
        </h1>
      </div>

      <div className=" w-full flex justify-center gap-5">
        <button className="p-2  rounded-xl bg-white  hover:text-green-500">
          <HomeIcon className=" " />
        </button>
        <button className="p-2 rounded-xl bg-white hover:text-green-500 ">
          <TimerIcon className=" " />
        </button>
        <button className="p-2 rounded-xl bg-white  hover:text-green-500">
          <SettingsIcon className=" " />
        </button>
        <button className="p-2 rounded-xl bg-white  hover:text-green-500">
          <SunIcon className=" " />
        </button>
      </div>
    </header>
  );
};

export default Heading;
