import { style } from "@vanilla-extract/css";

export const container = style({
  borderTop: "1px solid #CCC",
  width: "100%",
  display: "flex",
  flexDirection: "column",
});

export const button = style({
  flex: 1,
  display: "flex",
  justifyContent: "space-between",
  padding: "24px 0",
});

export const head = style({
  fontSize: "1.5rem",
  margin: 0,
  fontWeight: 600,
});

export const body = style({
  marginBottom: 16,
});
