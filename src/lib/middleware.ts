import { memberList } from "@/data/memberList";

export async function validateContactFormBody(req: Request) {
  let body;
  const memberEmails = memberList.map((member) => member.email);

  try {
    body = await req.json();
  } catch (error) {
    throw new Error(`"Invalid JSON body.", ${error}`);
  }

  if (!body.name || !body.email || !body.message || !body.recipient) {
    throw new Error("Missing required fields.");
  }

  if (!memberEmails.includes(body.recipient)) {
    throw new Error("Invalid recipient");
  }

  return body;
}
