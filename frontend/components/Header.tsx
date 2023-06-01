"use client";

import Image from "next/image";
import { BsBook, BsFillJournalBookmarkFill } from "react-icons/bs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getProfile } from "@/utils/dataFetchers";
import { useEffect, useState } from "react";
import { ProfileTypes } from "@/utils/projectTypes";

function Profile() {
  const [profile, setProfile] = useState<ProfileTypes | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getProfile()
      .then((profile) => setProfile(profile))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <LoadingProfile />;
  if (!profile) return <p>Error Fetching Profile Information!</p>;
  return (
    <nav className="flex items-center gap-3">
      <Image
        src={profile.avatar_url}
        alt="Logo"
        width={35}
        height={35}
        className="rounded-full object-cover"
      />
      <p>{profile.name}</p>
    </nav>
  );
}

function LoadingProfile() {
  return (
    <div className="flex items-center gap-3">
      <div className="aspect-square w-[35px] animate-pulse rounded-full bg-gray-700" />
      <div className="h-1 w-32 animate-pulse rounded bg-gray-700" />
    </div>
  );
}

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="flex w-full items-center justify-between bg-gray-900 px-12 py-3 text-white shadow-md shadow-gray-950/50">
      <Profile />
      <nav>
        <ul className="flex items-center gap-3">
          <li>
            <Link
              href="/"
              className={`flex items-center gap-2 transition-colors duration-200 hover:text-amber-400 ${
                pathname === "/" && "text-amber-400"
              }`}
            >
              <BsBook />
              <p>Overview</p>
            </Link>
          </li>
          <li>
            <Link
              href="/repositories"
              className={`flex items-center gap-2 transition-colors duration-200 hover:text-amber-400 ${
                pathname.includes("/repositories") && "text-amber-400"
              }`}
            >
              <BsFillJournalBookmarkFill />
              <p>Repositories</p>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
