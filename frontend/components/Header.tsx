import Image from "next/image";
import { BsBook, BsFillJournalBookmarkFill } from "react-icons/bs";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex w-full items-center justify-between bg-gray-900 px-12 py-3 text-white shadow-md shadow-gray-950/40">
      <nav className="flex items-center gap-3">
        <Image
          src="https://media.licdn.com/dms/image/C4E03AQGs09eW9E5YmQ/profile-displayphoto-shrink_800_800/0/1603149965221?e=2147483647&v=beta&t=-ByMSaWjO_4b3iaLtO2ML364GNO_uMdo3Maye-ove20"
          alt="Logo"
          width={35}
          height={35}
          className="rounded-full object-cover"
        />
        <p>Javaughn Pryce</p>
      </nav>
      <nav>
        <ul className="flex items-center gap-3">
          <li>
            <Link
              href="/"
              className="flex items-center gap-2 transition-colors duration-200 hover:text-amber-400"
            >
              <BsBook />
              <p>Overview</p>
            </Link>
          </li>
          <li>
            <Link
              href="/repositories"
              className="flex items-center gap-2 transition-colors duration-200 hover:text-amber-400"
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
