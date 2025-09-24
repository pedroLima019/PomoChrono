const Cycles = () => {
  return (
    <div className="text-black text-center">
      <span className="font-semibold mb-2 text-xl dark:text-white ">
        Ciclos:{" "}
      </span>
      <div className="flex justify-center gap-2 mt-2">
        <span className=" worktime  w-[10px] h-[10px] rounded bg-green-500"></span>
        <span className=" shortTime w-[10px] h-[10px] rounded bg-amber-500"></span>
        <span className=" longTime w-[10px] h-[10px] rounded bg-blue-500"></span>
      </div>
    </div>
  );
};

export default Cycles;
