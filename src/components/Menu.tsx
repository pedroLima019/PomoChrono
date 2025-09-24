import { HomeIcon, SettingsIcon, TimerIcon } from "lucide-react";
import ButtonTheme from "./ButtonTheme";

const Menu = () => {
  return (
    <nav className=" w-full flex justify-center gap-6 mt-3">
      <a
        href="#"
        className="p-2 rounded-xl text-white hover:text-green-500 bg-gray-800 transition-al"
      >
        <HomeIcon className=" " />
      </a>
      <a
        href="#"
        className="p-2 rounded-xl text-white hover:text-green-500  bg-gray-800 transition-al"
      >
        <TimerIcon className=" " />
      </a>
      <a
        href="#"
        className="p-2 rounded-xl text-white hover:text-green-500 bg-gray-800 transition-al"
      >
        <SettingsIcon className=" " />
      </a>
      <ButtonTheme />
    </nav>
  );
};

export default Menu;
