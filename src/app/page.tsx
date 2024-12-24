import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero_section } from "@/components/Hero_section";
import { Stories } from "@/components/Stories";
import { Button } from "@/components/ui/button";
import { Upcoming_events } from "@/components/Upcoming_events";

export default function Home() {
  return (
    <div className="h-screen">
      <Header />
      <Hero_section />
      <Upcoming_events />
      <Stories />
      <Faq />
      <Footer />
    </div>
  );
}
