import clsx from "clsx";
import React, { AllHTMLAttributes } from "react";
import * as styles from "./Button.css";

interface Props extends AllHTMLAttributes<HTMLButtonElement> {
  theme?: "primary" | "secondary";
}

export const Button = ({ children, theme = "primary", ...rest }: Props) => {
  return (
    <button
      {...rest}
      type="button"
      className={clsx({
        [styles.primary]: theme === "primary",
        [styles.secondary]: theme === "secondary",
      })}
    >
      {children} - hey
    </button>
  );
};
