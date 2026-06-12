export default function TextBox({ label, id, required,error, ...rest }) {
  return (
    <div className="flex flex-col">
      <label htmlFor={id}>{label}{required&& <span className="text-red-500 pl-0.5">*</span>}</label>
      <textarea cols={5} type="text" id={id} name={id} className="mt-4 border h-40 pt-3   pl-4 pr-2 placeholder:text-light-blue font-inter focus:outline-none focus:border focus:border-red-500 "  {...rest} />
      {error &&<p className="text-xs pl-1 mt-0.5 text-red-500">{error}</p> }
      
    </div>
  );
}