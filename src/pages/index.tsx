import { Card } from "@/components/Card";

let items = [{
  key: 12,
  title: "How to install Bun in Debian & Linux distro?",
  description:
    "Install the Bun all-in-one JavaScript runtime & toolkit in the Linux distro.",
  image:
    "https://miro.medium.com/v2/resize:fit:720/format:webp/1*gL92hRazyPxD5VkRgwpQTw.png",
  date: "September 8, 2023",
}, {
  key: 11,
  title: "What is use client and use server directives in reactjs?",
  description: "Understand client and server action.",
  image:
    "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*vxR8wodQ5AZJtpdFYEXdHQ.png",
  date: "September 19, 2023",
}];


export default function Home() {
  return (
    <>
      <div className="container flex justify-start mx-auto">
        <h2 className="text-3xl text-red-400 font-medium">
          All Issues
        </h2>
      </div>

      {items.map((item) => <Card key={item.key} item={item} />)}
    </>
  );
}
