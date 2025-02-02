"use client";

import { PaymentForm } from "@/components/PaymentForm";
import { SelectEvent } from "@/components/SelectEvent";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

const Payment = () => {
  const searchParams = useSearchParams();
  const selectedOption = searchParams?.get("selectedOption") || "";

  const [event, setEvent] = useState<string>(selectedOption);

  const handleEvent = (event: React.MouseEvent<HTMLElement>) => {
    const eventValue = (event.currentTarget as HTMLButtonElement).value;
    setEvent(eventValue);
  };

  return (
    <div className="h-[140vh] flex flex-col justify-center items-center gap-y-10 p-10 md:p-20">
      <SelectEvent handleEvent={handleEvent} selectedOption={event} />

      <PaymentForm event={event} />
    </div>
  );
};

export default Payment;
