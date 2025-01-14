"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

interface SearchParamsHandlerProps {
  setEvent: (event: string) => void;
}

export const SearchParamsHandler = ({ setEvent }: SearchParamsHandlerProps) => {
  const searchParams = useSearchParams();

  useEffect(() => {
    const selectedOption = searchParams.get("selectedOption") || "";
    setEvent(selectedOption);
  }, [searchParams, setEvent]);

  return null; // UIはレンダリングしない
};
