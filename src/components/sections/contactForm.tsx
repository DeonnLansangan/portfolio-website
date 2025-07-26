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

export default function ContactForm({
  member,
  showLabel = false,
}: {
  member: Member;
  showLabel?: boolean;
}) {
  const wrappedSendEmail = async (
    prevState: { message: string },
    formData: FormData
  ): Promise<{ message: string }> => {
    return sendEmail(prevState, formData, member);
  };

  const [state, formAction, isPending] = useActionState(
    wrappedSendEmail,
    initialState
  );

  const wasPending = useRef(false);

  useEffect(() => {
    if (wasPending.current && !isPending) {
      if (state.message === "Email sent successfully") {
        notifications.show({
          title: "Message sent!",
          message: "Your email has been successfully delivered.",
          color: "green",
          autoClose: 3000,
        });
      } else {
        notifications.show({
          title: "Message failed",
          message: state.message || "Something went wrong. Please try again.",
          color: "red",
          autoClose: 3000,
        });
      }
    }
    wasPending.current = isPending;
  }, [isPending, state.message]);
  return (
    <div className="flex flex-col max-w-100">
      <div className="flex justify-between mb-4">
        <div className="cursor-pointer">
          <Link href={`mailto:${member.email}`} className="flex gap-2">
            <Image
              src="/logos/gmail.png"
              alt="Gmail icon"
              width={30}
              height={30}
            ></Image>
            <p className={`hidden ${showLabel && "sm:block"}`}>
              {member.email}
            </p>
          </Link>
        </div>
        {member.linkedIn && (
          <div className="cursor-pointer">
            <Link href={member.linkedIn} className="flex gap-2">
              <Image
                src="/logos/linkedIn.png"
                alt="Linkedin icon"
                width={30}
                height={30}
              ></Image>
              <p className={`hidden ${showLabel && "sm:block"}`}>LinkedIn</p>
            </Link>
          </div>
        )}
      </div>
      <form action={formAction} className="flex flex-col gap-4">
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
        <Button
          type="submit"
          hover="tinted"
          color="primary"
          disabled={isPending}
        >
          {isPending ? "Sending Message" : "Send Message"}
        </Button>
      </form>
    </div>
  );
}
