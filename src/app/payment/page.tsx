"use client";

import { PaymentForm } from "@/components/PaymentForm";
import { SelectEvent } from "@/components/SelectEvent";
import { useSearchParams } from "next/navigation";
import { useState, Suspense } from "react";

const Payment = () => {
  const searchParams = useSearchParams();
  const selectedOption = searchParams?.get("selectedOption") || "";

  const [event, setEvent] = useState<string>(selectedOption);

  const handleEvent = (event: React.MouseEvent<HTMLElement>) => {
    const eventValue = (event.currentTarget as HTMLButtonElement).value;
    setEvent(eventValue);
  };

  return (
    <div className="h-[120vh] flex flex-col justify-center items-center gap-y-24 p-10">
      <Suspense fallback={<div>Loading Select Event...</div>}>
        <SelectEvent handleEvent={handleEvent} selectedOption={event} />
      </Suspense>
      <PaymentForm event={event} />
    </div>
  );
};

export default Payment;
