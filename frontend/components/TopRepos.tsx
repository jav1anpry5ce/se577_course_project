import { AiOutlineStar } from "react-icons/ai";
import data from "../utils/example.json";
import { TopReposTypes } from "@/utils/projectTypes";
import Link from "next/link";

export default function TopRepos() {
  return (
    <div className="mt-12 grow space-y-3">
      <h2 className="text-2xl font-semibold">Top Repos</h2>
      <div className="flex flex-wrap items-center gap-2.5">
        {data.map((repo) => (
          <Repos key={repo.id} {...repo} />
        ))}
      </div>
    </div>
  );
}

function Repos({ name, type, language, stars, url }: TopReposTypes) {
  return (
    <Link
      href={`/repositories/${url}`}
      className="w-[450px] cursor-pointer space-y-4 rounded p-4 ring-1 ring-gray-700 transition duration-150 hover:ring-gray-300"
    >
      <div className="flex items-center justify-between">
        <p className="font-semibold text-emerald-500">{name}</p>
        <p className="rounded-full px-2.5 text-xs font-semibold ring-1 ring-gray-500">
          {type}
        </p>
      </div>
      <div className="flex items-center gap-4 text-gray-400">
        <div className="inline-flex items-center gap-0.5">
          <div className="h-2.5 w-2.5 rounded-full bg-emerald-600" />
          <p>{language}</p>
        </div>
        <div className="flex items-center gap-0.5">
          <AiOutlineStar className="inline-block" />
          <p className="inline-block">{stars}</p>
        </div>
      </div>
    </Link>
  );
}
