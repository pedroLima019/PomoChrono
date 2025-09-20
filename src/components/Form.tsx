import DefaultInput from "./DefaultInput";
import Cycles from "./Cycles";
import DefaultButton from "./DefaultButtom";
import { PlayCircleIcon } from "lucide-react";

const Form = () => {
  return (
    <form
      className=" flex flex-col gap-5 items-center justify-center w-full p-2 "
      action=""
    >
      <div className="flex flex-col justify-center items-center p-2 ">
        <DefaultInput
          id="TaskInput"
          type="text"
          labelText="Tasks"
          required
          placeholder="Digite sua tarefa"
        />
      </div>
      <div className=" text-white text-center  text-sm ">
        <span className="font-semibold">Lorem ipsum dolor sit amet.</span>s
      </div>
      <Cycles />
      <DefaultButton icon={<PlayCircleIcon />} />
    </form>
  );
};

export default Form;
