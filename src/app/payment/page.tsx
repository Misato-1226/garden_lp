"use client";

import { PaymentForm } from "@/components/PaymentForm";
import { SelectEvent } from "@/components/SelectEvent";
import { useSearchParams } from "next/navigation";
import { useState, Suspense } from "react";

const Payment = () => {
  const searchParams = useSearchParams();
  const selectedOption = searchParams.get("selectedOption") || "";
  const [event, setEvent] = useState<string>(selectedOption);

  const handleEvent = (event: React.MouseEvent<HTMLElement>) => {
    const eventValue = (event.currentTarget as HTMLButtonElement).value;
    setEvent(eventValue);
  };
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="h-[120vh] flex flex-col justify-center items-center gap-y-24 p-10">
        <SelectEvent handleEvent={handleEvent} />
        <PaymentForm event={event} />
      </div>
    </Suspense>
  );
};

export default Payment;
