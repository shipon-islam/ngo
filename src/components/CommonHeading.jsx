export default function CommonHeading({ text, redText,center,className }) {
  return (
    <div>
      <h2 className={`border w-fit px-5 py-3 uppercase rounded-[20px] font-medium font-xl ${center&&"mx-auto"} ${className}`}>
        <span>{text}</span> <span className="text-red">{redText}</span>
      </h2>
    </div>
  );
}
