import Circle from "../ui/circle";
import Head from "../ui/head";

export default function Hero({
  header,
  subheader,
  paragraph,
}: {
  header: string;
  subheader?: string;
  paragraph?: string;
}) {
  return (
    <section className="bg-linear-135 from-primary to-azure mx-1 rounded-lg pt-8 pb-12 px-2 sm:px-20 lg:px-32 xl:px-80 text-center relative">
      <Head>{header}</Head>
      <h3 className="text-gray-200 px-4 text-lg md:text-xl font-medium">
        {subheader}
      </h3>
      <p className="text-white font-light mt-8">{paragraph}</p>
      <Circle position="top-right" />
      <Circle position="bottom-left" />
    </section>
  );
}
