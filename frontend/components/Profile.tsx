import Image from "next/image";

export default function Profile() {
  return (
    <div className="flex shrink-0 flex-col gap-4 text-gray-200">
      <Image
        src="https://media.licdn.com/dms/image/C4E03AQGs09eW9E5YmQ/profile-displayphoto-shrink_800_800/0/1603149965221?e=2147483647&v=beta&t=-ByMSaWjO_4b3iaLtO2ML364GNO_uMdo3Maye-ove20"
        alt="Profile"
        width={275}
        height={275}
        className="rounded-full object-cover"
      />
      <div className="ml-4 flex flex-col gap-3">
        <div>
          <p className="text-2xl font-bold">Javaughn Pryce</p>
          <p className="text-lg text-gray-400">
            jav1anpry5ce <span>he/him</span>
          </p>
        </div>
        <p>Bio goes here...</p>
        <div className="flex items-center gap-2">
          <p>Followers</p>
          <p>Following</p>
        </div>
        <ul>
          <li>Job goes here</li>
          <li>Location goes here</li>
          <li>Email goes here</li>
          <li>Website goes here</li>
        </ul>
      </div>
    </div>
  );
}
