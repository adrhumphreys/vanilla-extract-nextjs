import Image from "next/image";
import Link from "next/link";
import type { FC } from "react";
import * as styles from "./Header.css";

const logo =
  "https://www.precisionmedia.co.nz/-/media/Project/Sitecore/Precision-Media/FPM-logo-hoz-dhtagline.png?h=1248&iar=0&w=4105&hash=67FFDB8BE0C0FF155BCB53D1C7EABCC0";

type Props = {
  links: {
    title: string;
    href: string;
    active?: boolean;
  }[];
};

const Header: FC<Props> = ({ links }) => {
  return (
    <header className={styles.root}>
      <div>
        <Link href={"/"}>
          <Image
            width={4105}
            height={1248}
            src={logo}
            alt="Precision Media"
            className={styles.image}
          />
        </Link>
      </div>
      <div>
        <ul className={styles.links}>
          {links.map((link) => (
            <Link key={link.href} href={link.href} className={styles.link}>
              {link.title}
            </Link>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
