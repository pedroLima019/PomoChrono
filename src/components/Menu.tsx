import { HomeIcon, SettingsIcon, SunIcon, TimerIcon } from "lucide-react";

const Menu = () => {
  return (
    <nav className=" w-full flex justify-center gap-6 mt-3">
      <a
        href="#"
        className="p-2  rounded-xl bg-white  hover:text-green-500 hover:bg-gray-700 transition-all "
      >
        <HomeIcon className=" " />
      </a>
      <a
        href="#"
        className="p-2 rounded-xl bg-white hover:text-green-500 hover:bg-gray-700 transition-all"
      >
        <TimerIcon className=" " />
      </a>
      <a
        href="#"
        className="p-2 rounded-xl bg-white  hover:text-green-500 hover:bg-gray-700 transition-all"
      >
        <SettingsIcon className=" " />
      </a>
      <a
        href="#"
        className="p-2 rounded-xl bg-white  hover:text-green-500 hover:bg-gray-700 transition-all"
      >
        <SunIcon className=" " />
      </a>
    </nav>
  );
};

export default Menu;
