import React from "react";
import RepoDiv from "./RepoDiv";

export default function LoadingCard() {
  return (
    <RepoDiv>
      <LoadingLine />
      <LoadingLine />
      <div className="flex items-center gap-1.5">
        <LoadingLine />
        <LoadingLine />
      </div>
      <div className="flex items-center gap-1.5">
        <LoadingLine />
        <LoadingLine />
      </div>
      <div className="flex items-center gap-1.5">
        <LoadingLine />
        <LoadingLine />
      </div>
    </RepoDiv>
  );
}

function LoadingLine() {
  const durationTime = ["100ms", "150ms", "200ms", "500ms", "1000ms"];
  const random = Math.floor(Math.random() * durationTime.length);
  return (
    <div
      className={`h-1 w-full animate-pulse rounded-full bg-gray-500/40 duration-[${durationTime[random]}]`}
    />
  );
}
