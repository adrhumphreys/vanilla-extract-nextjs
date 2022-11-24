import type { StyleRule } from "@vanilla-extract/css";
import omit from "lodash/omit";
import isEqual from "lodash/isEqual";
import { Breakpoint, breakpoints } from "./breakpoints";

type StyleWithoutMediaQueries = Exclude<StyleRule["@media"], undefined>[string];
interface ResponsiveStyle {
  xs?: StyleWithoutMediaQueries;
  sm?: StyleWithoutMediaQueries;
  md?: StyleWithoutMediaQueries;
  lg?: StyleWithoutMediaQueries;
  xl?: StyleWithoutMediaQueries;
}

const makeMediaQuery =
  (breakpoint: Breakpoint) => (styles: StyleWithoutMediaQueries) =>
    !styles || Object.keys(styles).length === 0
      ? {}
      : {
          [`screen and (min-width: ${breakpoints[breakpoint]}px)`]: styles,
        };

const mediaQuery = {
  sm: makeMediaQuery("sm"),
  md: makeMediaQuery("md"),
  lg: makeMediaQuery("lg"),
  xl: makeMediaQuery("xl"),
};

export const responsiveStyle = ({
  xs,
  sm,
  md,
  lg,
  xl,
}: ResponsiveStyle): StyleRule => {
  const xsStyles = omit(xs, "@media");
  const smStyles = !sm || isEqual(sm, xsStyles) ? null : sm;
  const mdStyles = !md || isEqual(md, xsStyles || smStyles) ? null : md;
  const lgStyles =
    !lg || isEqual(lg, xsStyles || smStyles || mdStyles) ? null : lg;
  const xlStyles =
    !xl || isEqual(xl, xsStyles || smStyles || mdStyles || lgStyles)
      ? null
      : xl;

  const hasMediaQueries = smStyles || mdStyles || lgStyles || xlStyles;

  return {
    ...xsStyles,
    ...(hasMediaQueries
      ? {
          "@media": {
            ...(smStyles ? mediaQuery.sm(smStyles) : {}),
            ...(mdStyles ? mediaQuery.md(mdStyles) : {}),
            ...(lgStyles ? mediaQuery.lg(lgStyles) : {}),
            ...(xlStyles ? mediaQuery.xl(xlStyles) : {}),
          },
        }
      : {}),
  };
};
