export const Button = ({ children, disabled, onClick, className, type }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`hover:bg-blue-700 min-h-[34px] min-w-[100px] rounded-l bg-primary px-2 py-1 text-center disabled:bg-disabled ${className} `}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
