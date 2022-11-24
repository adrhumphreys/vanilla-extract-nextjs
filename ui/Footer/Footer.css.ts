import { style } from "@vanilla-extract/css";
import { colors } from "../styles/colors";
import { responsiveStyle } from "../styles/responsiveStyle";

export const root = style({
  backgroundColor: colors.Purple,
  color: colors.White,
  padding: 20,
  ...responsiveStyle({}),
});

export const links = style({
  display: "flex",
  flexDirection: "column",
  listStyleType: "none",
  padding: 0,
  margin: 0,
  gap: 8,

  ...responsiveStyle({
    md: {
      display: "flex",
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
