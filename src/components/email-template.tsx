import {
  Tailwind,
  pixelBasedPreset,
  Section,
  Text,
} from "@react-email/components";

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export function EmailTemplate({ name, email, message }: EmailTemplateProps) {
  return (
    <Tailwind
      config={{
        presets: [pixelBasedPreset],
        theme: {
          extend: {
            colors: {
              brand: "#007291",
            },
          },
        },
      }}
    >
      <Text className="font-semibold text-xl text-blue-500 leading-[32px]">
        New Contact Inquiry Received
      </Text>
      <Text className="text-base text-gray-500 leading-[24px]">Good day,</Text>
      <Text className="text-base text-gray-500 leading-[24px]">
        A new message has been sent to you through our portfolio website's
        contact forms. The details are below:
      </Text>
      <Section className="bg-gray-100 p-4 rounded-xl">
        <Text className="font-bold text-base">
          Name: <span className="font-normal text-gray-800">{name}</span>
        </Text>
        <Text className="font-bold text-base">
          Email: <span className="font-normal text-gray-800">{email}</span>
        </Text>
        <Text className="font-bold text-base">
          Message: <span className="font-normal text-gray-800">{message}</span>
        </Text>
      </Section>
    </Tailwind>
  );
}
