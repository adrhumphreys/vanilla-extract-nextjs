import type { FC, ReactNode } from "react";
import { root } from "./Container.css";

type Props = { children: ReactNode };

const Container: FC<Props> = ({ children }) => {
  return <div className={root}>{children}</div>;
};

export default Container;
