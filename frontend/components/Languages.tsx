import RepoDiv from "./RepoDiv";
import { getUrlData } from "@/utils/dataFetchers";

const colors = [
  "bg-red-500",
  "bg-yellow-500",
  "bg-green-500",
  "bg-blue-500",
  "bg-indigo-500",
  "bg-purple-500",
  "bg-pink-500",
];

export default async function Languages({ url }: { url: string }) {
  const languages: string[] = await getUrlData(url);
  return (
    <RepoDiv>
      {languages ? (
        <>
          <div className="flex items-center gap-1 font-semibold">
            <p>Languages</p>
            <div className="flex aspect-square h-6 w-6 items-center justify-center rounded-full bg-black/20 p-1 text-center text-xs">
              <p>{Object.keys(languages).length}</p>
            </div>
          </div>
          <div>
            {Object.keys(languages).map((language) => (
              <Language key={language} language={language} />
            ))}
          </div>
        </>
      ) : (
        <p className="p-2 text-center">Something went wrong!</p>
      )}
    </RepoDiv>
  );
}

function Language({ language }: { language: string }) {
  return (
    <div className="flex items-center gap-1">
      <div
        className={`h-2.5 w-2.5 rounded-full ${
          colors[Math.floor(Math.random() * colors.length)]
        }`}
      />
      <p>{language}</p>
    </div>
  );
}
