import { style } from "@vanilla-extract/css";
import { colors } from "../styles/colors";
import { responsiveStyle } from "../styles/responsiveStyle";

export const root = style({
  paddingTop: 60,
  paddingBottom: 60,

  ...responsiveStyle({
    md: {
      paddingLeft: 60,
      paddingRight: 60,
    },
  }),
});

export const purple = style({
  backgroundColor: colors.Purple,
  color: "white",
});

export const imageContainer = style({
  width: "100%",
  flex: 1,

  ...responsiveStyle({
    md: {
      position: "relative",
      maxWidth: 545,
    },
    xl: {
      height: 400,
    },
  }),
});

export const image = style({
  borderRadius: 8,

  ...responsiveStyle({
    md: {
      objectFit: "cover",
      position: "absolute",
      left: 0,
      top: 0,
      width: "100%",
      height: "100%",
    },
  }),
});

export const content = style({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  ...responsiveStyle({
    xs: {
      paddingLeft: 16,
      paddingRight: 16,
    },
    md: {
      paddingLeft: 32,
      paddingRight: 0,
    },
    xl: {
      paddingLeft: 96,
      paddingRight: 0,
    },
  }),
});

export const contentRight = style({
  ...responsiveStyle({
    md: {
      paddingLeft: 32,
      paddingRight: 0,
    },
    xl: {
      paddingLeft: 96,
      paddingRight: 0,
    },
  }),
});

export const contentLeft = style({
  ...responsiveStyle({
    md: {
      paddingLeft: 0,
      paddingRight: 32,
    },
    xl: {
      paddingLeft: 0,
      paddingRight: 96,
    },
  }),
});
