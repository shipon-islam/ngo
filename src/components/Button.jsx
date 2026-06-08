export default function Button({
  children,
  className,
  type = "fill",
  size="normal",
  ...rest
}) {
  const buttonStyle =
    type == "outline"
      ? "border "
      : "border border-red bg-red text-white hover:border-white ";
      const buttonSize=size=="small"?"text-base py-2 px-5":"text-xl py-3 px-7.5"
  return (
    <button
      className={` font-bold  hoverEffect  rounded-[20px] cursor-pointer hover:bg-white hover:text-black ${buttonStyle} ${buttonSize} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
