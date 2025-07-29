"use server";

import { Member } from "@/types";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.email("Invalid email address"),
  message: z.string().min(1, "Message is required"),
});

export async function sendEmail(
  initialState: { message: string; errors?: Record<string, string[]> },
  formData: FormData,
  member: Member
): Promise<{ message: string; errors?: Record<string, string[]> }> {
  const validatedFields = schema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      message: "Validation failed",
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");
  const recipient = member.email;

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/send`,
      {
        method: "POST",
        body: JSON.stringify({ name, email, message, recipient }),
        headers: { "Content-Type": "application/json" },
      }
    );

    if (!response.ok) {
      throw new Error();
    }

    return { message: "Email sent successfully" };
  } catch (error) {
    return { message: `${error} sending message` };
  }
}
