"use client";

import { Member } from "@/types";
import Link from "next/link";
import Image from "next/image";
import Button from "../ui/button";
import { sendEmail } from "@/app/actions";
import { useActionState, useEffect, useRef } from "react";
import { notifications } from "@mantine/notifications";

const initialState = {
  message: "",
};

export default function ContactForm({ member }: { member: Member }) {
  const wrappedSendEmail = async (
    prevState: any,
    formData: FormData
  ): Promise<any> => {
    return sendEmail(prevState, formData, member);
  };

  const [state, formAction, isPending] = useActionState(
    wrappedSendEmail,
    initialState
  );

  const wasPending = useRef(false);

  useEffect(() => {
    if (wasPending.current && !isPending) {
      notifications.show({
        title: "Message sent!",
        message: "Your email has been successfully delivered.",
        color: "green",
        autoClose: 3000,
      });
    }
    wasPending.current = isPending;
  }, [isPending]);
  return (
    <>
      <div
        className={`grid ${
          member.linkedIn ? "grid-cols-2" : "grid-cols-1"
        } place-items-center gap-x-12 sm:gap-x-0 sm:max-w-115 mb-4`}
      >
        <div className="cursor-pointer">
          <Link
            href={`mailto:${member.email}`}
            className="flex items-center gap-2"
          >
            <Image
              src="/logos/gmail.png"
              alt="Gmail icon"
              width={30}
              height={30}
            ></Image>
            <p className="hidden sm:block">{member.email}</p>
          </Link>
        </div>
        {member.linkedIn && (
          <div className="cursor-pointer sm:place-self-end">
            <Link href={member.linkedIn} className="flex items-center gap-2">
              <Image
                src="/logos/linkedIn.png"
                alt="Linkedin icon"
                width={30}
                height={30}
              ></Image>
              <p className="hidden sm:block">LinkedIn</p>
            </Link>
          </div>
        )}
      </div>
      <form action={formAction} className="flex flex-col gap-4 px-4">
        <div className="grid grid-cols-2 gap-x-1">
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            className="bg-white border border-gray-500 rounded-xl p-2"
            required
          />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            className="bg-white border border-gray-500 rounded-xl p-2"
            required
          />
        </div>
        <textarea
          id="message"
          name="message"
          placeholder="Your Message"
          className="bg-white border border-gray-500 min-h-50 rounded-lg p-2"
          required
        />
        <p aria-live="polite">{state?.message}</p>
        <Button
          type="submit"
          hover="tinted"
          color="primary"
          disabled={isPending}
        >
          {isPending ? "Sending Message" : "Send Message"}
        </Button>
      </form>
    </>
  );
}
