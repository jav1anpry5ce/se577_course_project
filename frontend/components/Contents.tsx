// import { getUrlData } from "@/utils/dataFetchers";
import {
  CommitType,
  ContentType,
  ContributorType,
  DetailedRepo,
} from "@/utils/projectTypes";
import Image from "next/image";
import React from "react";
import { AiFillFolder, AiFillFile, AiFillEye } from "react-icons/ai";
import { getUrlData } from "@/utils/dataFetchers";

export default async function Contents({ repo }: { repo: DetailedRepo }) {
  const contentsData: Promise<ContentType[]> = getUrlData(repo?.contents_url);
  const commitsData: Promise<CommitType[]> = getUrlData(repo?.commits_url);
  const contributorsData: Promise<ContributorType[]> = getUrlData(
    repo.contributors_url
  );

  const [contents, commits, contributors] = await Promise.all([
    contentsData,
    commitsData,
    contributorsData,
  ]);

  const commit = commits
    ? commits.sort((a: CommitType, b: CommitType) => {
        return (
          new Date(b.commit.date).getTime() - new Date(a.commit.date).getTime()
        );
      })[0]
    : null;

  const getContributions = (): number => {
    let totalContributions = 0;
    contributors &&
      contributors.forEach((contributor) => {
        totalContributions += contributor.contributions;
      });
    return totalContributions;
  };

  return (
    <div className="h-fit max-w-4xl grow overflow-hidden rounded outline outline-1 outline-gray-300/20">
      <div className="flex items-center justify-between bg-gray-500/20 p-2 py-4 text-gray-200">
        {commit ? (
          <>
            <div className="flex items-center gap-2">
              <Image
                src={commit.committer.avatar_url}
                width={30}
                height={30}
                alt={commit.committer.login}
                className="rounded-full"
              />
              <div className="flex shrink-0 items-center gap-1">
                <p className="shrink-0">{commit.committer.login}</p>
                <p className="truncate text-xs">`{commit.commit.message}`</p>
              </div>
            </div>
            <p className="shrink-0">
              {getContributions()}{" "}
              <span className="text-sm text-gray-400">commits</span>
            </p>
          </>
        ) : (
          <p className="p-2 text-center">Something went wrong!</p>
        )}
      </div>
      {contents ? (
        contents
          .sort((a: ContentType, b: ContentType) => {
            return b.size - a.size;
          })
          .reverse()
          .map((content: ContentType) => (
            <Content content={content} key={content.name} />
          ))
      ) : (
        <p className="p-4 text-center">Something went wrong!</p>
      )}
    </div>
  );
}

function Content({ content }: { content: ContentType }) {
  return (
    <div className="flex items-center justify-between border-b border-gray-400/20 p-2 text-gray-200 transition duration-200 last:border-none hover:bg-gray-400/5">
      <div className="flex items-center gap-2">
        {content.size > 0 ? (
          <AiFillFile className="text-gray-400" />
        ) : (
          <AiFillFolder className="text-gray-400" />
        )}
        <p>{content.name}</p>
      </div>
      <a href={content.html_url} target="_blank" className="cursor-pointer">
        <AiFillEye className="text-gray-400 hover:text-gray-200" />
      </a>
    </div>
  );
}
