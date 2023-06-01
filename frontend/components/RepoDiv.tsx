import React from "react";

export default function RepoDiv({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-w-[20rem] max-w-[24rem] space-y-2 rounded bg-gray-800/20 p-2 shadow-md shadow-gray-700/5 outline outline-1 outline-gray-400/20">
      {children}
    </div>
  );
}
