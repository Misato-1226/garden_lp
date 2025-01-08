"use client";

import { PaymentForm } from "@/components/PaymentForm";
import { SelectEvent } from "@/components/SelectEvent";
import { useState } from "react";

const Payment = () => {
  const [event, setEvent] = useState("");
  const handleEvent = (event) => {
    const eventValue = event.target.value;
    setEvent(eventValue);
  };
  return (
    <div className="h-[120vh] flex flex-col justify-center items-center gap-y-24 p-10">
      <SelectEvent handleEvent={handleEvent} />
      <PaymentForm event={event} />
    </div>
  );
};

export default Payment;
