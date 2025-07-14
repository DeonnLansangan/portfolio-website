import { Center } from "@mantine/core";
import { Montserrat } from "next/font/google";
import Button from "../ui/button";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function Hero() {
  return (
    <section className="bg-linear-135 from-secondary to-azure min-h-screen px-32 py-48 md:py-60 text-center">
      <Center>
        <div className="">
          <h1
            className={`text-5xl/14 lg:text-6xl ${montserrat.className} font-bold mb-8`}
          >
            Welcome to Our Portfolio
          </h1>
          <p className="text-white text-base md:text-lg lg:text-xl mb-12">
            Discover our innovative projects and meet the passionate team
            driving our success. Dive in to explore our work and achievements!
          </p>
          <Button color="secondary" hover="inverted">
            Learn More
          </Button>
        </div>
      </Center>
    </section>
  );
}
