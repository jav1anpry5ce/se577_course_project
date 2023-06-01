import Image from "next/image";
import { ProfileTypes } from "@/utils/projectTypes";
import { BsFillPeopleFill, BsFillBuildingFill } from "react-icons/bs";
import { BiCurrentLocation } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { AiOutlineLink } from "react-icons/ai";
// import { getProfile } from "@/utils/dataFetchers";

export default function Profile({ profile }: { profile: ProfileTypes }) {
  // const profile: ProfileTypes = await getProfile();

  return (
    <div className="flex grow-0 flex-col gap-4 text-gray-200">
      <Image
        src={profile.avatar_url}
        alt="Profile"
        width={275}
        height={275}
        className="rounded-full object-cover"
      />
      <div className="flex flex-col gap-3">
        <div>
          <p className="text-2xl font-bold">{profile.name}</p>
          <p className="text-lg text-gray-400">
            {profile.login} <span>he/him</span>
          </p>
        </div>
        <p>{profile.bio}</p>
        <div className="flex items-center gap-1">
          <BsFillPeopleFill className="text-gray-600" />
          <p>{profile.followers} followers</p>|
          <p>{profile.following} following</p>
        </div>
        <ul>
          <li className="flex items-center gap-1.5">
            <BsFillBuildingFill className="text-gray-600" />
            {profile.company}
          </li>
          <li className="flex items-center gap-1.5">
            <BiCurrentLocation className="text-gray-600" />
            {profile.location}
          </li>
          <li className="flex items-center gap-1.5">
            <MdEmail className="text-gray-600" />
            <a
              href={`mailto:${profile.email}`}
              className="transition duration-150 hover:text-blue-400 hover:underline"
            >
              {profile.email}
            </a>
          </li>
          {profile.blog && (
            <li className="flex items-center gap-1.5">
              <AiOutlineLink className="text-gray-600" />
              <a
                href={profile.blog}
                className="transition duration-150 hover:text-blue-400 hover:underline"
                target="_blank"
              >
                {profile.blog}
              </a>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
