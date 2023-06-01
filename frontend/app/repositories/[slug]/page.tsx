import { Suspense } from "react";
import {
  Contents,
  Contributions,
  Languages,
  LoadingCard,
  LoadingContent,
  RepoProfile,
} from "@/components";
import { getRepo } from "@/utils/dataFetchers";
import { notFound } from "next/navigation";

export const dynamicParams = true;
export const revalidate = 60;

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  return {
    title: params.slug,
  };
}

// export async function generateStaticParams(): Promise<{ slug: string }[]> {
//   const repos = await getRepos();
//   if (!repos) return [];
//   return repos.map((repo) => ({
//     slug: repo.name,
//   }));
// }

export default async function Page({ params }: { params: { slug: string } }) {
  const repo = await getRepo(params.slug);
  if (!repo) notFound();
  return (
    <div className="mx-auto w-full max-w-7xl flex-1">
      <div className="mt-8 flex w-full gap-4 pb-4">
        <Suspense fallback={<LoadingContent />}>
          {/* @ts-expect-error Server Component */}
          <Contents repo={repo} />
        </Suspense>
        <div>
          <div className="sticky top-4">
            <div className="flex flex-col space-y-4">
              <Suspense fallback={<LoadingCard />}>
                {/* @ts-expect-error Server Component */}
                <RepoProfile slug={params.slug} />
              </Suspense>
              <Suspense fallback={<LoadingCard />}>
                {/* @ts-expect-error Server Component */}
                <Contributions url={repo.contributors_url} />
              </Suspense>
              <Suspense fallback={<LoadingCard />}>
                {/* @ts-expect-error Server Component */}
                <Languages url={repo.languages_url} />
              </Suspense>
            </div>
          </div>
        </div>
      </div>
      <pre className="my-2 rounded bg-black p-1">
        <p className="font-mono text-sm">{JSON.stringify(repo, null, 2)}</p>
      </pre>
    </div>
  );
}
