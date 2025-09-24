type DefaultInputProps = {
  id: string;
  labelText?: string;
} & React.ComponentProps<"input">;

const DefaultInput = ({ id, type, labelText, ...rest }: DefaultInputProps) => {
  return (
    <>
      <label
        htmlFor={id}
        className=" text-black font-semibold text-xl sm:text-3xl mt-2.5 dark:text-white"
      >
        {labelText}
      </label>
      <input
        {...rest}
        id={id}
        type={type}
        className=" InputClass border-b mt-5 w-[200px] sm:w-[300px] text-center 
         text-black focus:border-green-500 outline-hidden  placeholder:text-sm placeholder:font-thin placeholder:text-gray-400 dark:text-white "
      />
    </>
  );
};

export default DefaultInput;
