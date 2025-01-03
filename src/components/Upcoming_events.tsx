import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const Upcoming_events = () => {
  return (
    <div className="h-[80vh] bg-green-700">
      <h1 className="text-center text-white font-semibold text-5xl p-14">
        Upcoming Events
      </h1>
      <div className="flex justify-center items-center p-10 gap-x-10">
        <Card className="rounded-3xl">
          <CardHeader>
            <CardTitle className="text-center text-4xl">
              Festival of Lights
            </CardTitle>
            <CardDescription className="text-xl mx-10 pt-10 text-black">
              A unique opportunity to explore themed light areas, and savour
              tasty treats from a variety of food vendors.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-5xl text-center font-bold mb-3">$ 29.90</p>
          </CardContent>
          <CardFooter className="flex justify-center">
            <button className="text-white text-xl rounded-2xl bg-red-500 py-4 px-8">
              Buy Tickets
            </button>
          </CardFooter>
        </Card>
        <Card className="rounded-3xl">
          <CardHeader>
            <CardTitle className="text-center text-4xl">
              Garden Gift Shop
            </CardTitle>
            <CardDescription className="text-xl mx-10 pt-10 text-black">
              Save big on holiday decor and garden-inspired gift. Plus enjoy
              complimentary coffee, tea, and treats.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-5xl text-center font-bold mb-3">$ 19.90</p>
          </CardContent>
          <CardFooter className="flex justify-center">
            <button className="text-white text-xl rounded-2xl bg-red-500 py-4 px-8">
              Buy Tickets
            </button>
          </CardFooter>
        </Card>
        <Card className="rounded-3xl">
          <CardHeader>
            <CardTitle className="text-center text-4xl">
              Medicine Event
            </CardTitle>
            <CardDescription className="text-xl mx-10 pt-10 text-black">
              Drumming and prayers are shared. People from varying backgrounds
              and spiritual traditions are all invited.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-5xl text-center font-bold mb-3">$ 18.90</p>
          </CardContent>
          <CardFooter className="flex justify-center">
            <button className="text-white text-xl rounded-2xl bg-red-500 py-4 px-8">
              Buy Tickets
            </button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};
