"use client";

import { PaymentForm } from "@/components/PaymentForm";
import { SearchParamsHandler } from "@/components/SearchParamsHandler";
import { SelectEvent } from "@/components/SelectEvent";

import { useState } from "react";

const Payment = () => {
  const [event, setEvent] = useState<string>("");

  const handleEvent = (event: React.MouseEvent<HTMLElement>) => {
    const eventValue = (event.currentTarget as HTMLButtonElement).value;
    setEvent(eventValue);
  };
  return (
    <div className="h-[120vh] flex flex-col justify-center items-center gap-y-24 p-10">
      <SearchParamsHandler setEvent={setEvent} />

      <SelectEvent handleEvent={handleEvent} event={event} />

      <PaymentForm event={event} />
    </div>
  );
};

export default Payment;
