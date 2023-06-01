import React from "react";

export default function LoadingContent() {
  return (
    <div className="h-fit w-full max-w-4xl grow overflow-hidden rounded outline outline-1 outline-gray-300/20">
      <div className="flex items-center justify-between bg-gray-500/20 p-2 py-4">
        <div className="flex items-center gap-2">
          <div className="h-[35px] w-[35px] animate-pulse rounded-full bg-gray-500/40" />
          <div className="h-1 w-[100px] animate-pulse rounded-full bg-gray-500/40" />
        </div>
        <div className="h-1 w-[150px] animate-pulse rounded-full bg-gray-500/40" />
      </div>

      <div className="flex items-center justify-between border-b border-gray-400/20 p-2 text-gray-200 transition duration-200 last:border-none hover:bg-gray-400/5">
        <div className="h-1 w-[250px] animate-pulse rounded-full bg-gray-500/40" />
        <div className="h-1 w-[30px] animate-pulse rounded-full bg-gray-500/40" />
      </div>
      <div className="flex items-center justify-between border-b border-gray-400/20 p-2 text-gray-200 transition duration-200 last:border-none hover:bg-gray-400/5">
        <div className="h-1 w-[250px] animate-pulse rounded-full bg-gray-500/40" />
        <div className="h-1 w-[30px] animate-pulse rounded-full bg-gray-500/40" />
      </div>
      <div className="flex items-center justify-between border-b border-gray-400/20 p-2 text-gray-200 transition duration-200 last:border-none hover:bg-gray-400/5">
        <div className="h-1 w-[250px] animate-pulse rounded-full bg-gray-500/40" />
        <div className="h-1 w-[30px] animate-pulse rounded-full bg-gray-500/40" />
      </div>
      <div className="flex items-center justify-between border-b border-gray-400/20 p-2 text-gray-200 transition duration-200 last:border-none hover:bg-gray-400/5">
        <div className="h-1 w-[250px] animate-pulse rounded-full bg-gray-500/40" />
        <div className="h-1 w-[30px] animate-pulse rounded-full bg-gray-500/40" />
      </div>
      <div className="flex items-center justify-between border-b border-gray-400/20 p-2 text-gray-200 transition duration-200 last:border-none hover:bg-gray-400/5">
        <div className="h-1 w-[250px] animate-pulse rounded-full bg-gray-500/40" />
        <div className="h-1 w-[30px] animate-pulse rounded-full bg-gray-500/40" />
      </div>
      <div className="flex items-center justify-between border-b border-gray-400/20 p-2 text-gray-200 transition duration-200 last:border-none hover:bg-gray-400/5">
        <div className="h-1 w-[250px] animate-pulse rounded-full bg-gray-500/40" />
        <div className="h-1 w-[30px] animate-pulse rounded-full bg-gray-500/40" />
      </div>
    </div>
  );
}
