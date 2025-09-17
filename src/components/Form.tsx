import { ArrowRightIcon } from "lucide-react";

const Form = () => {
  return (
    <form
      className=" flex flex-col gap-5 items-center justify-center w-full p-2 "
      action=""
    >
      <div className="flex flex-col justify-center items-center p-2">
        <label
          htmlFor="input"
          className="text-white font-semibold text-2xl sm:text-3xl mt-5"
        >
          Task
        </label>
        <input
          id="input"
          type="text"
          className="border-white  border-b mt-2.5 w-[200px] sm:w-[300px]  text-white focus:border-green-500 outline-hidden "
        />
      </div>
      <div className=" text-white text-center  text-sm ">
        <span className="font-semibold">Lorem ipsum dolor sit amet.</span>
      </div>
      <div className="text-white text-center ">
        <p className="font-semibold mb-1.5">Ciclos</p>
        <span>0 0 0 0 0 </span>
      </div>
      <div>
        <button className="bg-green-500 w-[200px] flex justify-center p-1 rounded-2xl  mt-2 mb-2">
          <ArrowRightIcon />
        </button>
      </div>
    </form>
  );
};

export default Form;
