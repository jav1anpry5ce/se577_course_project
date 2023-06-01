"use client"; // Error components must be Client components

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-1 items-center justify-center">
      <div className="flex flex-col items-center space-y-4">
        <h2 className="text-xl font-semibold">Something went wrong!</h2>
        <button
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => reset()
          }
          className="mt-4 rounded-md px-4 py-2 font-semibold text-white outline outline-1 outline-green-600 hover:bg-green-600"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
