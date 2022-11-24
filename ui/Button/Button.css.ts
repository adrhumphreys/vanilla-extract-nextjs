import { style } from "@vanilla-extract/css";
import { colors } from "../styles/colors";

export const button = style({
  borderWidth: 1,
  borderStyle: "solid",
  borderRadius: 27,
  fontWeight: 600,
  fontSize: "1rem",
  transition: "all 0.2s ease-in-out",
  letterSpacing: 0.5,
  lineHeight: 1,
  height: 48,
  userSelect: "none",
  padding: "8px 32px",
});

export const primary = style([
  button,
  {
    color: colors.White,
    backgroundColor: colors.LightPurple,
    borderColor: colors.LightPurple,
    ":hover": {
      backgroundColor: colors.White,
      color: colors.LightPurple,
    },
  },
]);

export const secondary = style([
  button,
  {
    backgroundColor: "green",
  },
]);

export const linkButton = style([
  button,
  {
    display: "inline-block",
  },
]);
