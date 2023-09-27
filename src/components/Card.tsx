import Image from "next/image"
interface CardType {
  key: number;
  title: string;
  description: string;
  image: string;
  date: string;
}

export function Card({ item }: { item: CardType }) {
  return (
    <div className="container mx-auto my-16 grid grid-rows-2 md:grid-rows-1 grid-cols-1 md:grid-cols-2 item-center">
      <div className="w-full">
        <Image
          className="w-full rounded-md h-full"
          src={item.image}
          height="324"
          width="424"
          alt={item.title}
        />
      </div>

      <div className="self-center p-6">
        <span className="text-sm text-gray-500">{item.date}</span>
        <p className="mt-3 text-lg font-medium leading-6">
          <a
            href="./blog-post.html"
            className="text-xl text-gray-800 group-hover:text-gray-500 lg:text-2xl"
          >
            {item.title}
          </a>
        </p>
        <p className="mt-2 text-lg text-gray-500">
          {item.description}
        </p>
      </div>
    </div>
  );
}
