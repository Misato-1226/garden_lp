import { Faq } from "@/components/Faq";

import { Hero_section } from "@/components/Hero_section";
import { Stories } from "@/components/Stories";
import { Button } from "@/components/ui/button";
import { Upcoming_events } from "@/components/Upcoming_events";

export default function Home() {
  return (
    <div>
      <Hero_section />
      <Upcoming_events />
      <Stories />
      <Faq />
    </div>
  );
}
