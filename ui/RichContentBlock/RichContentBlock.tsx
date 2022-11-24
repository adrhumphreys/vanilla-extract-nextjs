import type { FC } from "react";
import useEmbed from "../../lib/youtube/useEmbed";
import { Heading } from "../Heading";
import { Text } from "../Text";
import * as styles from "./RichContentBlock.css";

type Props = {
  heading: string;
  content: string;
  video?: {
    title: string;
    url: string;
  };
};

const RichContentBlock: FC<Props> = ({ heading, content, video }) => {
  const { isLoading, thumbnailUrl, html } = useEmbed(video?.url);
  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <Heading size="h2">{heading}</Heading>
        <Text>{content}</Text>
        {isLoading && <p>Loading video</p>}
        {!isLoading && (
          <div
            className={styles.iframe}
            dangerouslySetInnerHTML={{ __html: html }}
          />
        )}
      </div>
    </div>
  );
};

export default RichContentBlock;
