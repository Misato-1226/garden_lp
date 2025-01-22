import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

interface PropsType {
  event: string;
}

export function PaymentForm({ event }: PropsType) {
  const [price, setPrice] = useState(0);
  const [ticketCount, setTicketCount] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    if (event === "festivalOfLights") {
      setPrice(29.9);
    } else if (event === "GardenGiftShop") {
      setPrice(19.9);
    } else if (event === "MedicineEvent") {
      setPrice(18.9);
    } else {
      setPrice(0);
    }
  }, [event]);

  useEffect(() => {
    const total = price * ticketCount;
    setTotalPrice(Number(total.toFixed(1)));
  }, [price, ticketCount]);

  const handleTicketPrice = (value: string) => {
    setTicketCount(Number(value));
  };
  return (
    <div className="">
      <Card className="md:w-[50vh]">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold">
            Ticket Payment
          </CardTitle>
          <CardDescription>
            <div className="p-2">
              <Image height={300} width={300} alt="" src="/card_5brand.png" />
            </div>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <Label className="text-lg md:text-xl font-semibold">
                Number of Ticket
              </Label>
              <Select onValueChange={handleTicketPrice}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="1" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1</SelectItem>
                  <SelectItem value="2">2</SelectItem>
                  <SelectItem value="3">3</SelectItem>
                  <SelectItem value="4">4</SelectItem>
                  <SelectItem value="5">5</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label
                htmlFor="cardNumber"
                className="text-lg md:text-xl font-semibold"
              >
                Card Number
              </Label>
              <Input placeholder="1234 5678 9012 3456" />
            </div>
            <div className="md:flex justify-between items-center">
              <div>
                <Label
                  htmlFor="expiryDate"
                  className="text-lg md:text-xl font-semibold"
                >
                  Expiry Date
                </Label>
                <Input id="expiryDate" placeholder="MM/YY" />
              </div>
              <div>
                <Label
                  htmlFor="cvv"
                  className="text-lg md:text-xl font-semibold"
                >
                  CVV
                </Label>
                <Input placeholder="" />
              </div>
            </div>
            <div>
              <Label
                htmlFor="cardName"
                className="text-lg md:text-xl font-semibold"
              >
                Name on Card
              </Label>
              <Input placeholder="John Doe" />
            </div>
            <div>
              <h2 className="text-lg md:text-xl">
                Amount:
                <span className="text-xl font-semibold ml-5">
                  ${totalPrice}
                </span>{" "}
              </h2>
              <h3 className="text-lg md:text-xl">
                Selected ticket:{" "}
                <span className="text-xl font-semibold ml-5">{event}</span>
              </h3>
            </div>
            <div>
              <Button
                variant="outline"
                className="text-lg md:text-xl py-5 md:py-8 w-full mt-5"
              >
                Make a Payment
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
