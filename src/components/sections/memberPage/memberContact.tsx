"use client";
import Head from "@/components/ui/head";
import ContactForm from "../contactForm";
import { useMemberStore } from "@/store/memberStore";

export default function MemberContact() {
  const member = useMemberStore((state) => state.member);
  if (!member) return;
  return (
    <section
      id="contact"
      className="flex flex-col items-center bg-gray-100 pt-8 pb-20"
    >
      <Head>Contact Me</Head>
      <ContactForm member={member} />
    </section>
  );
}
