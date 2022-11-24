import { globalStyle, style } from "@vanilla-extract/css";
import { colors } from "../styles/colors";
import { responsiveStyle } from "../styles/responsiveStyle";

export const root = style({
  padding: "20px 16px",

  ...responsiveStyle({
    md: {
      padding: 48,
    },
  }),
});

export const content = style({
  display: "flex",
  maxWidth: 812,
  margin: "auto",
  flexDirection: "column",
  gap: 16,
});

export const iframe = style({});

globalStyle(`${iframe} > iframe`, {
  aspectRatio: "16/9",
  width: "100%",
  height: "100%",
});
