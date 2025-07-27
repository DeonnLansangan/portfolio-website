import Hero from "@/components/sections/hero";
import List from "@/components/ui/list";

export default function PrivacyPolicy() {
  const policy = [
    {
      head: "Information Collection",
      paragraph:
        "We only collect personal information when you voluntarily provide it through our contact forms. This includes your name, email address, and any message you send. Your data is used solely to respond to your inquiries.",
    },
    {
      head: "Data Usage",
      paragraph:
        "Collected information is utilized exclusively to communicate with you and respond to your inquiries. Your personal data will not be sold, rented, or disclosed to third parties unless required by law or explicitly authorized by you.",
    },
    {
      head: "Data Security",
      paragraph:
        "Industry-standard measures, including encryption and secure server practices, are employed to safeguard your personal data. Despite these measures, absolute security cannot be guaranteed due to the inherent risks of internet transmissions.",
    },
    {
      head: "Changes to This Privacy Policy",
      paragraph:
        "This Privacy Policy may be updated periodically. Updates will be clearly communicated by posting the revised policy. Continued usage of this portfolio website indicates acceptance of these changes.",
    },
    {
      head: "Contact Us",
      paragraph:
        "If you have questions or concerns regarding this Privacy Policy or your personal data, please reach out through the provided contact forms.",
    },
  ];
  return (
    <div className="bg-gray-100">
      <Hero
        header="Privacy Policy"
        subheader="Your privacy is important, and this policy outlines how your data is managed within this portfolio website."
      />
      <List listItems={policy} />
    </div>
  );
}
