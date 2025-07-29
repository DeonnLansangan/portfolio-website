import { memberList } from "@/data/memberList";
import { z } from "zod";

const apiSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.email("Invalid email address"),
  message: z.string().min(1, "Message is required"),
  recipient: z.email("Invalid recipient email"),
});

export async function validateContactFormBody(req: Request) {
  let body;
  const memberEmails = memberList.map((member) => member.email);

  try {
    body = await req.json();
  } catch (error) {
    throw new Error(`Invalid JSON body: ${error}`);
  }

  const validatedFields = apiSchema.safeParse(body);

  if (!validatedFields.success) {
    const errors = validatedFields.error.flatten().fieldErrors;
    const errorMessages = Object.entries(errors)
      .map(([field, messages]) => `${field}: ${messages.join(", ")}`)
      .join("; ");
    throw new Error(`Validation failed: ${errorMessages}`);
  }

  if (!memberEmails.includes(validatedFields.data.recipient)) {
    throw new Error("Invalid recipient - not a valid member email");
  }

  return validatedFields.data;
}
