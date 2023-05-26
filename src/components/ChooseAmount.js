import { TicketAmountPicker } from "./TicketAmountPicker";

export default function ChooseAmount() {
  return (
    <>
      <div className="rounded-2 mx-3 mb-8">
        <div className="grid place-content-center bg-gradient-to-b from-color-opacity-20 to-color-opacity-10 ">
          <h2 className="serif m-8 text-center uppercase">Amount</h2>
          <TicketAmountPicker />
        </div>
      </div>
    </>
  );
}
