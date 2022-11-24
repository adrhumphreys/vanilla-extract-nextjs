import { style } from "@vanilla-extract/css";
import { colors } from "../styles/colors";
import { responsiveStyle } from "../styles/responsiveStyle";

export const root = style({
  backgroundColor: colors.Purple,
  display: "flex",
  alignItems: "center",
  height: 52,
  paddingLeft: 16,
  paddingRight: 16,
  justifyContent: "space-between",
  ...responsiveStyle({
    md: {
      height: 90,
    },
  }),
});

export const image = style({
  width: 164,

  ...responsiveStyle({
    md: {
      width: 219,
    },
  }),
});

export const links = style({
  display: "none",
  ...responsiveStyle({
    md: {
      listStyleType: "none",
      padding: 0,
      margin: 0,
      display: "flex",
      gap: 30,
    },
  }),
});

export const link = style({
  color: colors.White,
  transition: "color 150ms",
  ":hover": {
    color: colors.Orange,
  },
});
