import { NextResponse } from "next/server";
import { Octokit } from "octokit";

export async function GET(request: Request) {
  const octokit = new Octokit({
    auth: process.env.NEXT_PUBLIC_GITHUB_API_KEY,
  });
  const { searchParams } = new URL(request.url);
  const repo = searchParams.get("repo");
  try {
    const user = await octokit.request("GET /user");
    const res = await octokit.request(`GET /repos/${user.data.login}/${repo}`);
    const data = res.data;
    return NextResponse.json(data, {
      status: 200,
    });
  } catch {
    return NextResponse.json(
      { message: "Requested data not found!" },
      {
        status: 404,
      }
    );
  }
}
