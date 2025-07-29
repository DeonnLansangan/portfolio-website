"use server";

import { Member } from "@/types";
import { z } from "zod";

const schema = z.object({
  name: z.string("Invalid Name"),
  email: z.email("Invalid Email"),
  message: z.string("Invalid Message"),
});

export async function sendEmail(
  initialState: { message: string },
  formData: FormData,
  member: Member
): Promise<{ message: string }> {
  console.log("🚀 [Server Action] sendEmail called with:", {
    memberEmail: member.email,
    formDataKeys: Array.from(formData.keys()),
  });

  const validatedFields = schema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  console.log("📝 [Server Action] Validation result:", {
    success: validatedFields.success,
    errors: validatedFields.success ? null : validatedFields.error.flatten(),
  });

  if (!validatedFields.success) {
    console.log("❌ [Server Action] Validation failed");
    return { message: "Validation failed" };
  }

  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");
  const recipient = member.email;

  console.log("📧 [Server Action] Preparing to send email:", {
    name,
    email,
    recipient,
    messageLength: message?.toString().length,
    apiUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/api/send`,
  });

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/send`,
      {
        method: "POST",
        body: JSON.stringify({ name, email, message, recipient }),
        headers: { "Content-Type": "application/json" },
      }
    );

    console.log("🌐 [Server Action] API Response status:", response.status);

    if (!response.ok) {
      const errorText = await response.text();
      console.log("❌ [Server Action] API Response error:", errorText);
      throw new Error(`API returned ${response.status}: ${errorText}`);
    }

    const responseData = await response.json();
    console.log("✅ [Server Action] Email sent successfully:", responseData);

    return { message: "Email sent successfully" };
  } catch (error) {
    console.log("💥 [Server Action] Error in sendEmail:", error);
    return { message: `Error sending message, ${error}` };
  }
}
