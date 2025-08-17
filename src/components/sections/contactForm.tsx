"use client";

import { Member } from "@/types";
import Link from "next/link";
import Image from "next/image";
import Button from "../ui/button";
import { sendEmail } from "@/app/actions";
import { useActionState, useEffect, useRef, startTransition } from "react";
import { notifications } from "@mantine/notifications";
import FadeIn from "../ui/fadeIn";

const initialState = {
  message: "",
  errors: undefined,
};

export default function ContactForm({
  member,
  showLabel = false,
}: {
  member: Member;
  showLabel?: boolean;
}) {
  const wrappedSendEmail = async (
    prevState: { message: string; errors?: Record<string, string[]> },
    formData: FormData
  ): Promise<{ message: string; errors?: Record<string, string[]> }> => {
    return sendEmail(prevState, formData, member);
  };

  const [state, formAction, isPending] = useActionState(
    wrappedSendEmail,
    initialState
  );

  const wasPending = useRef(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (formRef.current) {
        const formData = new FormData(formRef.current);
        startTransition(() => {
          formAction(formData);
        });
      }
    }
  };

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
    <FadeIn>
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
        <form ref={formRef} action={formAction} className="flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-x-1">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              className={`bg-white border rounded-xl p-2 ${
                state.errors?.name ? "border-red-500" : "border-gray-500"
              }`}
              onKeyDown={handleKeyDown}
              required
            />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              className={`bg-white border rounded-xl p-2 ${
                state.errors?.email ? "border-red-500" : "border-gray-500"
              }`}
              onKeyDown={handleKeyDown}
              required
            />
          </div>
          {(state.errors?.name || state.errors?.email) && (
            <div className="grid grid-cols-2 gap-x-1 -mt-2">
              <div>
                {state.errors?.name && (
                  <p className="text-red-500 text-sm">{state.errors.name[0]}</p>
                )}
              </div>
              <div>
                {state.errors?.email && (
                  <p className="text-red-500 text-sm">
                    {state.errors.email[0]}
                  </p>
                )}
              </div>
            </div>
          )}
          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            className={`bg-white border min-h-50 rounded-lg p-2 ${
              state.errors?.message ? "border-red-500" : "border-gray-500"
            }`}
            onKeyDown={handleKeyDown}
            required
          />
          {state.errors?.message && (
            <p className="text-red-500 text-sm -mt-2">
              {state.errors.message[0]}
            </p>
          )}
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
    </FadeIn>
  );
}
