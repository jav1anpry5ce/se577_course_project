// import { getProfile, getRepo } from "@/utils/dataFetchers";
import moment from "moment";
import { getRepo, getProfile } from "@/utils/dataFetchers";
import RepoDiv from "./RepoDiv";

export default async function RepoProfile({ slug }: { slug: string }) {
  const repoData = await getRepo(slug);
  const profileData = getProfile();

  const [repo, profile] = await Promise.all([repoData, profileData]);

  return repo && profile ? (
    <RepoDiv>
      <div>
        <h1 className="truncate font-semibold text-gray-100">
          Repository Name: <span className="font-normal">{repo.name}</span>
        </h1>
        <p className="font-semibold text-gray-100">
          Created By: <span className="font-normal">{profile.name}</span>
        </p>
        <p className="font-semibold text-gray-100">
          Created:{" "}
          <span className="font-normal">
            {moment(repo.created_at).format("MMMM Do YYYY")}
          </span>
        </p>
        <p className="font-semibold text-gray-100">
          Last Updated:{" "}
          <span className="font-normal">
            {moment(repo.pushed_at).fromNow()}
          </span>
        </p>
      </div>
    </RepoDiv>
  ) : (
    <div className="min-w-[20rem] rounded bg-gray-600/30 p-2 shadow-md shadow-gray-300/10 outline outline-1 outline-gray-300/50">
      <p className="p-2 text-center">Something went wrong!</p>
    </div>
  );
}
