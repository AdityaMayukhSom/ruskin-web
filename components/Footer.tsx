import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-row items-center justify-between py-8 px-12">
      <span className="flex flex-row items-center gap-x-2">
        <Image
          alt="devstream logo"
          height={32}
          width={32}
          src="/devstream.svg"
        />
      </span>
      <ul className="flex flex-row gap-x-8">
        <li>
          <Link href="https://www.github.com/AdityaMayukhSom/ruskin">
            Star Us On GitHub
          </Link>
        </li>
      </ul>
    </footer>
  );
}
