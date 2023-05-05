import { ProfileTypes } from "@/utils/projectTypes";
import { NextResponse } from "next/server";
import { Octokit } from "octokit";

export async function GET(request: Request) {
  const octokit = new Octokit({
    auth: process.env.NEXT_PUBLIC_GITHUB_API_KEY,
  });
  const { searchParams } = new URL(request.url);
  const url = searchParams.get("url");
  try {
    const res = await octokit.request(`GET ${url?.split("{")[0]}`);
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
