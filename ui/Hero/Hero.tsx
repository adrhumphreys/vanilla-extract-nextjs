import type { FC } from "react";
import { Heading } from "../Heading";
import { Text } from "../Text";
import Image from "next/image";
import * as styles from "./Hero.css";
import Container from "../Container";

type Props = {
  title: string;
  content: string;
  imageUrl: string;
};

const Hero: FC<Props> = ({ title, content, imageUrl }) => {
  return (
    <div className={styles.root}>
      <Container>
        <div className={styles.container}>
          <Heading size="h1">{title}</Heading>
          <Text size="lg">{content}</Text>
        </div>
      </Container>
      <Image fill src={imageUrl} alt="" className={styles.image} />
    </div>
  );
};

export default Hero;
