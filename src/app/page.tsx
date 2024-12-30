import { Faq } from "@/components/Faq";

import { Hero_section } from "@/components/Hero_section";
import { Stories } from "@/components/Stories";
import { Upcoming_events } from "@/components/Upcoming_events";
import { Map } from "@/components/Map";

export default function Home() {
  return (
    <div>
      <Hero_section />
      <Upcoming_events />
      <Stories />
      <Map />
      <Faq />
    </div>
  );
}
