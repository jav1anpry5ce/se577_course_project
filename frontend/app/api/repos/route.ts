import { DetailedRepo } from "@/utils/projectTypes";
import { NextResponse } from "next/server";
import { Octokit } from "octokit";

export async function GET() {
  const octokit = new Octokit({
    auth: process.env.NEXT_PUBLIC_GITHUB_API_KEY,
  });
  try {
    const res = await octokit.request("GET /user/repos");
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
