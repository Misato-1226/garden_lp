"use client";

import { PaymentForm } from "@/components/PaymentForm";
import { SelectEvent } from "@/components/SelectEvent";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

const Payment = () => {
  const searchParams = useSearchParams();
  const selectedOption = searchParams.get("selectedOption") || "";
  const [event, setEvent] = useState<string>(selectedOption);

  const handleEvent = (event: React.MouseEvent<HTMLElement>) => {
    const eventValue = (event.currentTarget as HTMLButtonElement).value;
    setEvent(eventValue);
  };
  return (
    <div className="h-[120vh] flex flex-col justify-center items-center gap-y-24 p-10">
      <SelectEvent handleEvent={handleEvent} selectedOption={selectedOption} />

      <PaymentForm event={event} />
    </div>
  );
};

export default Payment;
