import Hero from "@/components/sections/hero";
import Members from "@/components/sections/members";

export default function AboutUs() {
  return (
    <>
      <Hero
        header="About Us"
        subheader="An exclusive team dedicated to innovative technology solutions for a
        better future."
        paragraph="We are a multidisciplinary team of forward-thinkers passionate about
        harnessing technology to create meaningful change. Our expertise spans
        web development, software development, UI/UX design, machine learning,
        and cloud computing. By developing innovative, scalable, and secure
        applications, we push the boundaries of what's possible and drive
        progress in every project we undertake."
      />
      <Members
        header="Who We Are"
        subheader="Founded by a group of passionate developers, our team collaborates to
        create meaningful technology solutions to address real-world challenges"
      ></Members>
    </>
  );
}
