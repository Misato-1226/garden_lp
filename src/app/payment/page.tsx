import { PaymentForm } from "@/components/PaymentForm";
import { SelectEvent } from "@/components/SelectEvent";
import { useState } from "react";

interface Props {
  searchParams: { [key: string]: string | undefined };
}

const Payment = ({ searchParams }: Props) => {
  const selectedOption = searchParams.selectedOption || ""; // クエリパラメータから取得
  const [event, setEvent] = useState<string>(selectedOption);

  const handleEvent = (event: React.MouseEvent<HTMLElement>) => {
    const eventValue = (event.currentTarget as HTMLButtonElement).value;
    setEvent(eventValue);
  };

  return (
    <div className="h-[120vh] flex flex-col justify-center items-center gap-y-24 p-10">
      <SelectEvent handleEvent={handleEvent} selectedOption={event} />
      <PaymentForm event={event} />
    </div>
  );
};

export default Payment;
