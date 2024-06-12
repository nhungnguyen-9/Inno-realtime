import React from "react";
import Image from "next/image";
import empty from "@/public/empty-search.png";

const EmptySearch = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image src={empty} alt="empty" height={180} width={180} />
      <h2 className="text-2xl font-semibold mt-6">No results found!</h2>
      <p className="text-muted-foreground text-sm mt-2">
        Try searching for something else
      </p>
    </div>
  );
};

export default EmptySearch;
