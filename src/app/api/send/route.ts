import { EmailTemplate } from "@/components/email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message, recipient } = await req.json();

    const { data, error } = await resend.emails.send({
      from: "Portfolio Website <portfolio@hau-cs-graduates.com>",
      to: [recipient],
      subject: `New Contact Message`,
      react: EmailTemplate({ name: name, email: email, message: message }),
    });

    if (error) {
      return new Response(JSON.stringify({ error }), { status: 500 });
    }

    return new Response(JSON.stringify(data));
  } catch (error) {
    if (error instanceof Error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
      });
    }
  }
}
