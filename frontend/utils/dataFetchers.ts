import { DetailedRepo, ProfileTypes } from "./projectTypes";

const uri =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : process.env.NEXT_PUBLIC_PROD_URL;

export async function getProfile(): Promise<ProfileTypes | null> {
  try {
    const res = await fetch(`${uri}/api/profile`);
    if (!res.ok) return null;
    return await res.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function getRepos(): Promise<DetailedRepo[] | null> {
  try {
    const res = await fetch(`${uri}/api/repos`);
    if (!res.ok) return null;
    return await res.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function getRepo(slug: string): Promise<DetailedRepo | null> {
  try {
    const res = await fetch(`${uri}/api/repo?repo=${slug}`);
    if (!res.ok) return null;
    return await res.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function getUrlData(url: string) {
  try {
    const res = await fetch(`${uri}/api/get-url-data?url=${url}`);
    if (!res.ok) return null;
    return await res.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}
