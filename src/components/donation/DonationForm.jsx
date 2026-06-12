import Button from "../Button";
import InputBox from "../InputBox";
import RadioBox from "../RadioBox";
import TextBox from "../TextBox";
export const serviceOptions = ["1000 TK", "2000 TK", "10000 TK"];
const paymentMethods = ["Bkash", "Visa", "Nagat", "Rocket"];
export default function DonationForm() {
  return (
    <section className="container">
      <div className="shadow px-6 sm:px-16 py-8 sm:py-10 md:px-25 md:py-15">
        <form action="">
          <div className="pt-6 flex items-center flex-wrap gap-4">
            {serviceOptions.map((option, index) => {
              return <RadioBox key={index} value={option} />;
            })}
            <div>
              <input
                className="border h-10 border-red pl-4 placeholder:text-charcoal"
                placeholder="Enter Amount.."
              />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-8 mt-10 sm:mt16 md:mt-25">
            <InputBox label="First Name" placeholder="Ex: John" />
            <InputBox label="Last Name" placeholder="Ex: Doe" />
            <InputBox label="Phone Number" placeholder="Ex: *880 16254785365" />
            <InputBox label="Email" placeholder="Ex: sgsdg@gmail.com" />
            <TextBox label="Address" placeholder="Ex: Dhaka" />
            <TextBox
              label="Additional Note"
              placeholder="Ex: sgsdg@gmail.com"
            />
          </div>
          <div>
            <div className="mt-8">
              <p className="font-semibold">Payment details</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {paymentMethods.map((payMethod, index) => (
                  <button
                    key={index}
                    className="px-4 text-sm py-1.5 border rounded-cs hover:bg-red/20"
                  >
                    {payMethod}
                  </button>
                ))}
              </div>
              <div className="flex flex-col mt-5">
                <label>Card Number</label>
                <input
                  type="text"
                  placeholder="0112 0258 7896 3210"
                  className="mt-4 border border-light-blue  h-10 pl-4 placeholder:text-light-blue font-inter focus:outline-none focus:border focus:border-red-500 w-fit text-sm"
                />
              </div>
              <div className="flex gap-6">
                <div className="flex flex-col mt-5">
                <label>Expiry</label>
                <input
                  type="text"
                  placeholder="MM/YY"
                  className="mt-4 border border-light-blue  h-10 pl-4 placeholder:text-light-blue font-inter focus:outline-none focus:border focus:border-red-500 w-20 text-sm"
                />
              </div><div className="flex flex-col mt-5">
                <label>CVV</label>
                <input
                  type="text"
                  placeholder="123"
                  className="mt-4 border border-light-blue  h-10 pl-4 placeholder:text-light-blue font-inter focus:outline-none focus:border focus:border-red-500 w-15 text-sm"
                />
              </div>
              </div>
            </div>
          </div>
          <Button size="small" className="mt-8 mx-auto w-fit block hover:border-black! hover:border"  >Donate</Button>
        </form>
      </div>
    </section>
  );
}
