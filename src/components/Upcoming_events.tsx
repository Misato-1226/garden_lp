"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useRouter } from "next/navigation";

export const Upcoming_events = () => {
  const router = useRouter();

  const goToPayment = (option: string) => {
    router.push(`/payment?selectedOption=${option}`);
  };
  return (
    <div className="h-[80vh] bg-green-800">
      <h1 className="text-center text-white font-semibold text-3xl p-14">
        Upcoming Events
      </h1>
      <div className="flex justify-center items-center p-10 gap-x-10">
        <Card className="rounded-3xl">
          <CardHeader>
            <CardTitle className="text-center text-2xl">
              Festival of Lights
            </CardTitle>
            <CardDescription className="text-xl mx-10 pt-10 text-black">
              A unique opportunity to explore themed light areas, and savour
              tasty treats from a variety of food vendors.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-3xl text-center font-bold mb-3">$ 29.90</p>
          </CardContent>
          <CardFooter className="flex justify-center">
            <button
              onClick={() => goToPayment("festivalOfLights")}
              className="text-white text-xl rounded-2xl bg-red-500 py-4 px-8"
            >
              Buy Tickets
            </button>
          </CardFooter>
        </Card>
        <Card className="rounded-3xl">
          <CardHeader>
            <CardTitle className="text-center text-2xl">
              Garden Gift Shop
            </CardTitle>
            <CardDescription className="text-xl mx-10 pt-10 text-black">
              Save big on holiday decor and garden-inspired gift. Plus enjoy
              complimentary coffee, tea, and treats.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-3xl text-center font-bold mb-3">$ 19.90</p>
          </CardContent>
          <CardFooter className="flex justify-center">
            <button
              onClick={() => goToPayment("GardenGiftShop")}
              className="text-white text-xl rounded-2xl bg-red-500 py-4 px-8"
            >
              Buy Tickets
            </button>
          </CardFooter>
        </Card>
        <Card className="rounded-3xl">
          <CardHeader>
            <CardTitle className="text-center text-2xl">
              Medicine Event
            </CardTitle>
            <CardDescription className="text-xl mx-10 pt-10 text-black">
              Drumming and prayers are shared. People from varying backgrounds
              and spiritual traditions are all invited.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-3xl text-center font-bold mb-3">$ 18.90</p>
          </CardContent>
          <CardFooter className="flex justify-center">
            <button
              onClick={() => goToPayment("MedicineEvent")}
              className="text-white text-xl rounded-2xl bg-red-500 py-4 px-8"
            >
              Buy Tickets
            </button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};
