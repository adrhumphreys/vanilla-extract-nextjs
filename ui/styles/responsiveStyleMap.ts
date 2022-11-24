import { style } from "@vanilla-extract/css";
import * as CSS from "csstype";
import type { Breakpoint } from "./breakpoints";
import { breakpoints } from "./breakpoints";

type ResponsiveProps<T> = {
  [Type in Breakpoint]?: T;
};

export const resolveBreakpoints = (variant: any, attr: any, pAcc: any) => {
  if (variant[attr] instanceof Object) {
    (Object.keys(variant[attr]) as Breakpoint[]).reduce(
      (acc, breakpointKey) => {
        const handleBreakpoint = Object.prototype.hasOwnProperty.call(
          breakpoints,
          breakpointKey
        );

        if (!handleBreakpoint) {
          acc[attr] = variant[attr];
          return acc;
        }

        if (breakpointKey === "xs") {
          acc[attr] = variant[attr].xs;
        } else {
          if (!acc["@media"]) {
            acc["@media"] = {};
          }
          if (!acc["@media"][`(min-width: ${breakpoints[breakpointKey]}px)`]) {
            acc["@media"][`(min-width: ${breakpoints[breakpointKey]}px)`] = {};
          }
          acc["@media"][`(min-width: ${breakpoints[breakpointKey]}px)`] = {
            ...acc["@media"][`(min-width: ${breakpoints[breakpointKey]}px)`],
            [attr]: variant[attr][breakpointKey],
          };
        }
        return acc;
      },
      pAcc
    );
  } else {
    // eslint-disable-next-line no-param-reassign
    pAcc[attr] = variant[attr];
  }
  return pAcc;
};

export const responsiveStyleMap = (
  styleObj: CSS.Properties<string | number | ResponsiveProps<string | number>>
) =>
  style(
    Object.keys(styleObj).reduce(
      (acc, attr) => resolveBreakpoints(styleObj, attr, acc),
      {}
    )
  );
