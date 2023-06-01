import { ContributorType } from "@/utils/projectTypes";
import Image from "next/image";
import RepoDiv from "./RepoDiv";
import { getUrlData } from "@/utils/dataFetchers";

export default async function Contributions({ url }: { url: string }) {
  const contributors: ContributorType[] = await getUrlData(url);
  return (
    <RepoDiv>
      {contributors ? (
        <>
          <div className="flex items-center gap-1 font-semibold">
            <p>Contributors</p>
            <div className="flex aspect-square h-6 w-6 items-center justify-center rounded-full bg-black/20 p-1 text-center text-xs">
              <p>{contributors.length}</p>
            </div>
          </div>
          <div className="space-y-1">
            {contributors.map((contributor) => (
              <Contributor key={contributor.login} contributor={contributor} />
            ))}
          </div>
        </>
      ) : (
        <p className="p-2 text-center">Something went wrong!</p>
      )}
    </RepoDiv>
  );
}

function Contributor({ contributor }: { contributor: ContributorType }) {
  return (
    <div className="flex items-center gap-2">
      <Image
        src={contributor.avatar_url}
        alt={contributor.login}
        width={30}
        height={30}
        className="rounded-full"
      />
      <div className="flex items-center gap-2">
        <a
          href={contributor.html_url}
          target="_blank"
          className="text-sm font-semibold transition duration-150 hover:text-blue-400"
        >
          {contributor.login}
        </a>
        <p className="text-xs text-gray-400">
          contributions: {contributor.contributions}
        </p>
      </div>
    </div>
  );
}
