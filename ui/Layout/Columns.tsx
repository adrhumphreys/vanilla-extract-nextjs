import type { FC, ReactNode } from "react";
import { Box } from "../Box";
import { Sprinkles } from "../Box/sprinkles.css";

type Props = {
  gap?: Sprinkles["gap"];
  children: ReactNode;
};

const Columns: FC<Props> = ({ gap, children }) => {
  return (
    <Box display="flex" gap={gap}>
      {children}
    </Box>
  );
};

export default Columns;
