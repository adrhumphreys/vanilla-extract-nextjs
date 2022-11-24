import Link from "next/link";
import type { FC } from "react";
import { Box } from "../Box";
import { Text } from "../Text";
import * as styles from "./Footer.css";

type Props = {};

const Footer: FC<Props> = ({}) => {
  return (
    <footer className={styles.root}>
      <Text>Precision Media</Text>
      <ul className={styles.links}>
        <li>
          <Link href="/" className={styles.link}>
            Our approach
          </Link>
        </li>
        <li>
          <Link href="/" className={styles.link}>
            Solutions
          </Link>
        </li>
        <li>
          <Link href="/" className={styles.link}>
            About us
          </Link>
        </li>
        <li>
          <Link href="/" className={styles.link}>
            Contact us
          </Link>
        </li>
      </ul>
      <Box display="flex" gap={24} wrap="wrap">
        <Text>
          Copyright © 2022 Foodstuffs Precision Media. All rights Reserved.
        </Text>
        <Text>
          <Link href="/">Terms and Conditions</Link>
        </Text>
        <Text>
          <Link href="/">Privacy Policy</Link>
        </Text>
      </Box>
    </footer>
  );
};

export default Footer;
