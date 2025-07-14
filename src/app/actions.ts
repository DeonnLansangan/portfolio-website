"use server";

import { Member } from "@/types";
import { z } from "zod";

const schema = z.object({
  name: z.string("Invalid Name"),
  email: z.email("Invalid Email"),
  message: z.string("Invalid Message"),
});

export async function sendEmail(
  initialState: any,
  formData: FormData,
  member: Member
) {
  const validatedFields = schema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return;
  }

  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");
  const recipient = member.email;

  await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/send`, {
    method: "POST",
    body: JSON.stringify({ name, email, message, recipient }),
    headers: { "Content-Type": "application/json" },
  });
}
