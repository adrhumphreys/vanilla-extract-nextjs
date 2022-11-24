import { style } from "@vanilla-extract/css";
import { colors } from "../styles/colors";

export const root = style({
  color: colors.White,
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  paddingLeft: 20,
  paddingRight: 20,
  gap: 12,

  position: "relative",
  height: "100%",
  maxHeight: "calc(100vh - 52px)",
  ":before": {
    content: " ",
    position: "absolute",
    inset: 0,
    background: "linear-gradient(360deg,#1a005d 0%,rgba(26,0,93,.25) 100%)",
    zIndex: -1,
    display: "block",
  },
});

export const container = style({
  maxWidth: 600,
});

export const image = style({
  objectFit: "cover",
  zIndex: -2,
});
