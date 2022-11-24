import { AllHTMLAttributes, FC, forwardRef, ReactNode, Ref } from "react";
import { clsx } from "clsx";
import { UrlObject } from "url";
import * as styles from "./Button.css";

interface Props extends AllHTMLAttributes<Partial<HTMLLinkElement>> {
  className?: string;
  children: ReactNode;
  theme?: "primary" | "secondary";
  removePadding?: boolean;
  LinkComponent: FC<{
    children: ReactNode;
    href: string | UrlObject;
    ref?: Ref<any> | undefined;
  }>;
  href: string;
}

export const LinkButton = forwardRef(
  (
    {
      className,
      removePadding,
      theme,
      children,
      LinkComponent,
      href,
      ...rest
    }: Props,
    ref
  ) => {
    const chosenTheme = theme || "primary";

    return (
      <LinkComponent href={href} ref={ref}>
        <a
          className={clsx(
            styles.linkButton,
            {
              [styles.primary]: chosenTheme === "primary",
              [styles.secondary]: chosenTheme === "secondary",
            },
            className
          )}
          {...rest}
        >
          {children}
        </a>
      </LinkComponent>
    );
  }
);

LinkButton.displayName = "LinkButton";
