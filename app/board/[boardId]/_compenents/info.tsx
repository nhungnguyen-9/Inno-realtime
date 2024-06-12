import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

export const Info = () => {
    return <div className="absolute top-2 left-2 bg-white rounded-md px-1.5 h-12 flex items-center shadow-md">
        TODO
    </div>;
};


Info.Skeleton = function InfoSkeleton() {
    return (
        <div className="absolute top-2 left-2 bg-white rounded-md px-1.5 h-12 flex items-center shadow-md">
            <Skeleton className="h-full w-ful bg-muted-400" />
        </div>
    )
}