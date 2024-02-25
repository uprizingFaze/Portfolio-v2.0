import Image from "next/image";
import Hero from "@/components/hero";
import {Second} from "@/components/second";
import { Third } from "@/components/third";
import { BentoGridThirdDemo } from "@/components/fourth";

export default function Home() {
  return (
    <div>
      <Hero />
      <Second />

      <BentoGridThirdDemo />
    </div>
  );
}
