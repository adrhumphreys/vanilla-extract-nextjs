import { style } from "@vanilla-extract/css";

export const button = style({
  borderWidth: 2,
  borderStyle: "solid",
  borderRadius: 3,
  fontWeight: 600,
  fontSize: "1rem",
  transition: "all 0.2s ease-in-out",
  letterSpacing: 0.5,
  lineHeight: 1,
  userSelect: "none",
  padding: "10px 24px",
});

export const primary = style([
  button,
  {
    backgroundColor: "green",
  },
]);

export const secondary = style([
  button,
  {
    backgroundColor: "green",
  },
]);
