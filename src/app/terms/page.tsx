import Hero from "@/components/sections/hero";
import List from "@/components/ui/list";

export default function TermsConditions() {
  const terms = [
    {
      head: "Acceptance of Terms",
      paragraph:
        "By accessing and using this portfolio website, you acknowledge and agree to abide by these Terms and Conditions. If you do not agree, please discontinue using this site immediately.",
    },
    {
      head: "Use of Information",
      paragraph:
        "The content provided on this portfolio website is intended solely for informational and demonstrative purposes, showcasing various projects and skills. Users must refrain from using the content in a manner that infringes upon rights, including distributing harmful or malicious material, unauthorized reproduction, or usage that violates applicable laws.",
    },
    {
      head: "Intellectual Property",
      paragraph:
        "All original content, including text, graphics, and software, created specifically for this portfolio, is protected by copyright and intellectual property laws and remains the exclusive property of the portfolio owners. Certain logos, icons, images, and graphics displayed on this website may belong to third-party companies and are used solely for illustrative purposes to support portfolio projects. Such third-party content remains the property of its respective owners. Unauthorized use, duplication, reproduction, or distribution of any content from this website or third-party assets is expressly forbidden.",
    },
    {
      head: "User Responsibilities",
      paragraph:
        "Visitors agree to use this portfolio website responsibly and lawfully, ensuring they do not engage in activities that may impair or disrupt website functionality or security.",
    },
    {
      head: "Disclaimer of Warranties",
      paragraph:
        'Content provided on this portfolio website is presented "as is" without warranties of any kind, whether express or implied. The portfolio owners make no assurances regarding content accuracy, reliability, or suitability for any specific purpose.',
    },
    {
      head: "Limitation of Liability",
      paragraph:
        "The portfolio owner is not responsible for any damages, losses, or expenses arising from your use or inability to use this website, including direct, indirect, incidental, consequential, or punitive damages.",
    },
    {
      head: "Changes to the Terms",
      paragraph:
        "We reserve the right to update or modify these Terms and Conditions at any time without prior notice. Your continued use of the website after any changes signifies your acceptance of the updated terms.",
    },
    {
      head: "Governing Law",
      paragraph:
        "These Terms and Conditions shall be governed by the laws of the jurisdiction in which the portfolio owners reside, and disputes arising will be subject to its exclusive jurisdiction.",
    },
    {
      head: "Contact Us",
      paragraph:
        "For inquiries regarding these Terms and Conditions, please reach out through the contact forms provided on this website.",
    },
  ];
  return (
    <div className="bg-gray-100">
      <Hero
        header="Terms and Conditions"
        subheader="Please read these terms carefully before using our website."
      />
      <List listItems={terms} />
    </div>
  );
}
