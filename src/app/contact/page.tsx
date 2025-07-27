import Hero from "@/components/sections/hero";
import Members from "@/components/sections/members";

export default function Contact() {
  return (
    <>
      <Hero
        header="Contact Us"
        subheader="For any inquiries or work, contact us through the links and forms below."
      />
      <Members showContact={true} align="start" />
    </>
  );
}
