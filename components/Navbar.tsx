import Image from "next/image";
import Link from "next/link";
import "@/styles/components/Navbar.module.css";
// import devstreamLogo from '@/public/devstream.svg'

export default function Navbar() {
  return (
    <nav className="flex flex-row items-center justify-between py-8 px-12">
      <span className="flex flex-row items-center gap-x-2">
        <Image
          alt="devstream logo"
          height={32}
          width={32}
          src="/devstream.svg"
        />
        <span>
          <Link href="https://www.devstream.in/">devstream</Link>
          &nbsp;&#47;&nbsp;
          <Link href="https://ruskin.devstream.in/">ruskin</Link>
        </span>
      </span>
      <ul className="flex flex-row gap-x-8">
        <li>
          <Link href="/faq">FAQ</Link>
        </li>
        <li>
          <Link href="/docs">Documentation</Link>
        </li>
        <li>
          <Link href="https://www.github.com/AdityaMayukhSom/ruskin">
            GitHub
          </Link>
        </li>
      </ul>
    </nav>
  );
}
