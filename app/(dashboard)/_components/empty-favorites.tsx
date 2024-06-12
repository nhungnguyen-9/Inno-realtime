import React from "react";
import Image from "next/image";
import empty from "@/public/empty-favorites.png";

const EmptyFavorite = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image src={empty} alt="empty" height={180} width={180} />
      <h2 className="text-2xl font-semibold mt-6">No favorite boards!</h2>
      <p className="text-muted-foreground text-sm mt-2">
        Try favoriting a board
      </p>
    </div>
  );
};

export default EmptyFavorite;
