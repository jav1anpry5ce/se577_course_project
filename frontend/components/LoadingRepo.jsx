import React from "react";

export default function LoadingRepo() {
  return (
    <div className="mt-14 flex flex-wrap items-center gap-2.5">
      <Repo />
      <Repo />
      <Repo />
      <Repo />
      <Repo />
      <Repo />
    </div>
  );
}

function Repo() {
  return (
    <div className="w-[450px] animate-pulse space-y-8 rounded p-4 py-8 ring-1 ring-gray-700">
      <div className="h-1 w-full animate-pulse rounded-full bg-gray-500/40" />
      <div className="h-1 w-full animate-pulse rounded-full bg-gray-500/40" />
    </div>
  );
}
