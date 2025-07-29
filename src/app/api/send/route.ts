import { EmailTemplate } from "@/components/email-template";
import { Resend } from "resend";
import { validateContactFormBody } from "@/lib/middleware";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  console.log("🌐 [API Route] POST /api/send called");
  
  try {
    console.log("📝 [API Route] Validating request body...");
    const { name, email, message, recipient } =
      await validateContactFormBody(req);

    console.log("✅ [API Route] Request validation successful:", {
      name,
      email,
      recipient,
      messageLength: message.length,
      resendApiKeyExists: !!process.env.RESEND_API_KEY,
    });

    console.log("📧 [API Route] Sending email via Resend...");
    const { data, error } = await resend.emails.send({
      from: "Portfolio Website <portfolio@hau-cs-graduates.com>",
      to: [recipient],
      subject: `New Contact Message`,
      react: EmailTemplate({ name: name, email: email, message: message }),
    });

    if (error) {
      console.log("❌ [API Route] Resend error:", error);
      return new Response(JSON.stringify({ error }), { status: 500 });
    }

    console.log("✅ [API Route] Email sent successfully via Resend:", data);

    return new Response(
      JSON.stringify({ message: `Email sent successfully, ${data}` }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.log("💥 [API Route] Unexpected error:", error);
    if (error instanceof Error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }
  }
}
