export interface ProfileTypes {
  avatar_url: string;
  email: string;
  name: string;
  bio: string;
  followers: number;
  following: number;
  login: string;
  location: string;
  blog: string;
  company: string;
}

export interface DetailedRepo {
  id: number;
  name: string;
  contributors_url: string;
  languages_url: string;
  language: string;
  stargazers_url: string;
  stargazers_count: number;
  commits_url: string;
  downloads_url: string;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  has_issues: boolean;
  visibility: string;
  branches_url: string;
  contents_url: string;
}

export interface ContributorType {
  login: string;
  avatar_url: string;
  html_url: string;
  contributions: number;
}

export interface ContentType {
  name: string;
  path: string;
  size: number;
  html_url: string;
  download_url: string;
}

export interface CommitType {
  commit: {
    date: string;
    message: string;
  };
  committer: {
    login: string;
    avatar_url: string;
  };
}
