import { AiOutlineStar } from "react-icons/ai";
import Link from "next/link";
import { DetailedRepo, ProfileTypes } from "@/utils/projectTypes";
import { getProfile, getRepos } from "@/utils/dataFetchers";
import Image from "next/image";
import moment from "moment";
import { notFound } from "next/navigation";

export const revalidate = 60;

export const metadata = {
  title: "Repositories",
};

const colors = [
  "bg-red-500",
  "bg-yellow-500",
  "bg-green-500",
  "bg-blue-500",
  "bg-indigo-500",
  "bg-purple-500",
  "bg-pink-500",
];

export default async function Page() {
  const reposData = getRepos();
  const profileData = getProfile();

  const [profile, repos] = await Promise.all([profileData, reposData]);
  if (!profile || !repos) notFound();
  return (
    <div className="mt-4 flex w-full max-w-7xl flex-1 gap-4 self-center pb-4">
      <div>
        <MiniProfile {...profile} />
      </div>
      <div className="w-full border-b border-gray-700">
        {repos
          .sort(
            (a, b) =>
              new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime()
          )
          .map((repo) => (
            <Repos key={repo.id} {...repo} />
          ))}
      </div>
    </div>
  );
}

function Repos({
  name,
  visibility,
  language,
  stargazers_count,
  pushed_at,
}: DetailedRepo) {
  return (
    <div className="w-full space-y-4 border-t border-gray-700 px-2 py-5 text-gray-400">
      <div>
        <div className="flex items-center gap-2">
          <Link
            href={`/repositories/${name}`}
            className="cursor-pointer font-bold text-blue-500 hover:underline"
          >
            {name}
          </Link>
          <p className="w-fit rounded-full px-2.5 text-xs font-semibold capitalize ring-1 ring-gray-500">
            {visibility}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2.5">
        {language && (
          <div className="inline-flex items-center gap-1">
            <div
              className={`h-2.5 w-2.5 rounded-full ${
                colors[Math.floor(Math.random() * colors.length)]
              }`}
            />
            <p className="text-sm font-semibold">{language}</p>
          </div>
        )}
        {stargazers_count > 0 && (
          <div className="flex items-center gap-0.5">
            <AiOutlineStar fontSize={16} className="inline-block" />
            <p className="inline-block text-xs">{stargazers_count}</p>
          </div>
        )}
        <p className="text-xs">Updated {moment(pushed_at).fromNow()}</p>
      </div>
    </div>
  );
}

function MiniProfile({ name, avatar_url, email, blog }: ProfileTypes) {
  return (
    <div className="sticky top-4">
      <div className="flex w-[25rem] items-start gap-2 overflow-hidden rounded-lg bg-gray-700/10 outline outline-1 outline-gray-200/40">
        <Image src={avatar_url} alt="" width={110} height={110} />

        <div>
          <div className="flex flex-col p-1">
            <p className="text-xl font-bold">{name}</p>
            <p className="text-gray-400">he/him</p>
            <a
              href={`mailto:${email}`}
              className="transition duration-150 hover:text-blue-400 hover:underline"
            >
              {email}
            </a>
            {blog && (
              <a
                href={blog}
                className="transition duration-150 hover:text-blue-400 hover:underline"
                target="_blank"
              >
                {blog}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
