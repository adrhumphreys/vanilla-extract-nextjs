import { ReactNode, useState } from "react";
import { clsx } from "clsx";
import IconMinus from "../icons/minus.svg";
import IconPlus from "../icons/plus.svg";
import * as styles from "./Accordian.css";

interface Props {
  className?: string;
  title: string;
  initialExpanded?: boolean;
  children: ReactNode;
}

const Accordian = (props: Props) => {
  const { className, title, initialExpanded, children } = props;

  console.log("IconPlus", IconPlus);

  const [isExpanded, setExpanded] = useState<boolean>(initialExpanded ?? false);

  const handleToggle = () => {
    setExpanded((prev) => !prev);
  };

  return (
    <div className={clsx(styles.container, className)}>
      <button
        className={styles.button}
        type="button"
        onClick={handleToggle}
        data-testid={`accordian-${title.toLowerCase().replace(/ /g, "-")}`}
      >
        <h2 className={styles.head}>{title}</h2>
        {isExpanded ? (
          <IconMinus width={24} height={24} />
        ) : (
          <IconPlus width={24} height={24} />
        )}
      </button>

      {isExpanded && (
        <div
          className={styles.body}
          data-testid={`accordian-contents-${title
            .toLowerCase()
            .replace(/ /g, "-")}`}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default Accordian;
