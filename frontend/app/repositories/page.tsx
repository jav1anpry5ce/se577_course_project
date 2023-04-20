import { AiOutlineStar } from "react-icons/ai";
import Link from "next/link";
import data from "../../utils/example.json";
import { RepoTypes } from "@/utils/projectTypes";

export const metadata = {
  title: "Repositories",
};

export default function Page() {
  return (
    <main className="mt-4 w-full max-w-7xl flex-1 self-center pb-4">
      <div className="w-full border-b border-gray-700">
        {data.map((repo) => (
          <Repos key={repo.id} {...repo} />
        ))}
      </div>
    </main>
  );
}

function Repos({ name, type, language, stars, lastUpdated, url }: RepoTypes) {
  return (
    <div className="w-full space-y-4 border-t border-gray-700 py-5 text-gray-400">
      <div>
        <div className="flex items-center gap-2">
          <Link
            href={`/repositories/${url}`}
            className="cursor-pointer font-bold text-blue-500 hover:underline"
          >
            {name}
          </Link>
          <p className="w-fit rounded-full px-2.5 text-xs font-semibold ring-1 ring-gray-500">
            {type}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="inline-flex items-center gap-0.5">
          <div className="h-2.5 w-2.5 rounded-full bg-cyan-600" />
          <p className="text-sm font-semibold">{language}</p>
        </div>
        <div className="flex items-center gap-0.5">
          <AiOutlineStar fontSize={16} className="inline-block" />
          <p className="inline-block text-xs">{stars}</p>
        </div>
        <p className="text-xs">{new Date(lastUpdated).toDateString()}</p>
      </div>
    </div>
  );
}
