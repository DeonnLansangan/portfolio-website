import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

function FooterItem({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="self-start text-center xs:text-left">
      <h2 className="text-lg text-gray-800 mt-8 font-bold xl:mt-4 ">{title}</h2>
      <ul className="text-sm mt-2 text-gray-600 list-none flex flex-col gap-2">
        {children}
      </ul>
    </div>
  );
}

export default function Footer() {
  const footerSections = [
    {
      title: "About Us",
      items: ["Members", "Projects", "Contact"],
      hrefs: ["/aboutUs", "/aboutUs", "/contact"],
    },
    {
      title: "Legal",
      items: ["Terms & Conditions", "Privacy Policy"],
      hrefs: ["/terms", "/privacyPolicy"],
    },
  ];

  return (
    <footer className="grid grid-cols-1 px-8 pb-12 xs:grid-cols-2 xs:place-items-center md:grid-cols-3 md:pt-4 md:px-24 lg:px-50 xl:px-80">
      {footerSections.map(({ title, items, hrefs }) => (
        <FooterItem key={title} title={title}>
          {items.map((item, index) => (
            <Link key={item} href={hrefs[index]}>
              <li
                className="transition duration-300 hover:text-primary-500"
                key={item}
              >
                {item}
              </li>
            </Link>
          ))}
        </FooterItem>
      ))}
      <div className="text-center col-span-full md:col-span-1 md:order-first md:text-left ">
        <p className="mt-8 xl:mt-4 text-gray-800 font-semibold">Powered by</p>
        <div className="relative w-24 h-24 mx-auto -my-4 md:mx-0">
          <Image
            src="/logos/aws-logo.png"
            alt="AWS Logo"
            sizes="100%"
            fill
            className="object-contain"
          />
        </div>
        <p className="text-sm text-gray-600 text-center my-4 md:text-left md:order-2">
          &copy; HAU Batch &apos;24-&apos;25 CS Graduates. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
