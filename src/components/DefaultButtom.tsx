type DefaultButtonProps = {
  icon: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
const DefaultButton = ({ icon, ...props }: DefaultButtonProps) => {
  return (
    <div className="flex justify-center items-center mt-2">
      <button
        {...props}
        className="bg-green-500 w-[200px] p-1 rounded-xl flex justify-center items-center cursor-pointer transition-all hover:bg-emerald-300 "
      >
        {icon}
      </button>
    </div>
  );
};

export default DefaultButton;
