import Link from "next/link";
import Image from "next/image";

export const Header = () => {
  return (
    <header>
      <div>
        <div className="topNav">
          <Image
            alt={"logo"}
            src={"/images/vercel.svg"}
            height={50}
            width={50}
          />
          <nav>
            <ul>
              <li>
                <Link href="/" passHref>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/events" passHref>
                  Events
                </Link>
              </li>
              <li>
                <Link href="/about-us" passHref>
                  About us
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <h1>title title title </h1>
      </div>
    </header>
  );
};
