"use client";

import FontItem from "./components/fontItem";
import { arrayGooleFonts } from "./initGooleFont";

export default function Home() {
  return (
    <div className="h-[50vh] w-full bg-green-300 flex flex-col">
      {arrayGooleFonts.map((item) => {
        return <FontItem key={item.className} {...item} />;
      })}
    </div>
  );
}
