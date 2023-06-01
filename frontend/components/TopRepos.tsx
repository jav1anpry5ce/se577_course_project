"use client";

import { AiOutlineStar } from "react-icons/ai";
import Link from "next/link";
import { DetailedRepo } from "@/utils/projectTypes";
// import { getRepos } from "@/utils/dataFetchers";

const colors = [
  "bg-red-500",
  "bg-yellow-500",
  "bg-green-500",
  "bg-blue-500",
  "bg-indigo-500",
  "bg-purple-500",
  "bg-pink-500",
];

const textColors = ["text-yellow-500", "text-blue-500", "text-pink-500"];

async function getRepos() {
  const res = await fetch("http://localhost:3000/api/repos");
  if (!res.ok) null;
  return await res.json();
}

export default function TopRepos({ repos }: { repos: DetailedRepo[] }) {
  // const repos: DetailedRepo[] = await getRepos();

  return (
    <div className="mt-12 grow space-y-3">
      <h2 className="ml-20 text-2xl font-semibold">Top Repos</h2>
      {repos.length > 0 && (
        <div className="flex flex-wrap items-center justify-center gap-2.5">
          {repos
            .sort((a, b) => (a.stargazers_count > b.stargazers_count ? -1 : 1))
            .slice(0, 6)
            .map((repo: DetailedRepo) => (
              <Repos key={repo.id} {...repo} />
            ))}
        </div>
      )}
    </div>
  );
}

function Repos({ name, visibility, language, stargazers_count }: DetailedRepo) {
  return (
    <Link
      href={`/repositories/${name}`}
      className="w-[450px] cursor-pointer space-y-4 rounded p-4 ring-1 ring-gray-700 transition duration-150 hover:ring-gray-300"
    >
      <div className="flex items-center justify-between">
        <p
          className={`font-semibold ${
            textColors[Math.floor(Math.random() * textColors.length)]
          }`}
        >
          {name}
        </p>
        <p className="rounded-full px-2.5 text-xs font-semibold capitalize ring-1 ring-gray-500">
          {visibility}
        </p>
      </div>
      <div className="flex items-center gap-4 text-gray-400">
        {language && (
          <div className="inline-flex items-center gap-0.5">
            <div
              className={`h-2.5 w-2.5 rounded-full ${
                colors[Math.floor(Math.random() * colors.length)]
              }`}
            />
            <p>{language}</p>
          </div>
        )}
        {stargazers_count > 0 && (
          <div className="flex items-center gap-0.5">
            <AiOutlineStar className="inline-block" />
            <p className="inline-block">{stargazers_count}</p>
          </div>
        )}
      </div>
    </Link>
  );
}
