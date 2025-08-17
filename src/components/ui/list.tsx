import FadeIn from "./fadeIn";

interface listItemObject {
  head: string;
  paragraph: string;
}

export default function List({ listItems }: { listItems: listItemObject[] }) {
  return (
    <article className="mt-12 md:px-24 lg:px-50 xl:px-80">
      <ol className="list-decimal pb-12 pl-12 sm:pl-20 md:pl-4">
        {listItems.map((listItem) => (
          <FadeIn key={listItem.head}>
            <li className="text-xl font-semibold mt-8">{listItem.head}</li>
            <p className="pr-8 font-light">{listItem.paragraph}</p>
          </FadeIn>
        ))}
      </ol>
    </article>
  );
}
