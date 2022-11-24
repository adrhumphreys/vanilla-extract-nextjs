import clsx from "clsx";
import Image from "next/image";
import type { FC } from "react";
import { Box } from "../Box";
import { Button } from "../Button/Button";
import Container from "../Container";
import { Heading } from "../Heading";
import { Text } from "../Text";
import * as styles from "./ImageBlock.css";

type Props = {
  imageUrl: string;
  heading: string;
  content: string;
  position?: "LEFT" | "RIGHT";
  theme?: "PURPLE" | "WHITE";
  callToAction?: {
    title: string;
    location: string;
  };
};

const ImageBlock: FC<Props> = ({
  heading,
  imageUrl,
  content,
  callToAction,
  theme = "WHITE",
  position = "LEFT",
}) => {
  return (
    <Box className={clsx(styles.root, theme === "PURPLE" && styles.purple)}>
      <Container>
        <Box display={{ md: "flex" }}>
          {position === "LEFT" && (
            <div className={styles.imageContainer}>
              <Image
                width={650}
                height={430}
                src={imageUrl}
                alt=""
                className={styles.image}
              />
            </div>
          )}

          <Box
            paddingY={16}
            className={clsx(styles.content, {
              [styles.contentLeft]: position === "RIGHT",
              [styles.contentRight]: position === "LEFT",
            })}
          >
            <Heading size="h3">{heading}</Heading>
            <Box paddingTop={16} paddingBottom={callToAction && 16}>
              <Text>{content}</Text>
            </Box>
            {callToAction && <Button>{callToAction.title}</Button>}
          </Box>

          {position === "RIGHT" && (
            <div className={styles.imageContainer}>
              <Image
                width={650}
                height={430}
                src={imageUrl}
                alt=""
                className={styles.image}
              />
            </div>
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default ImageBlock;
