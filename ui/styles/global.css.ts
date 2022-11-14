import { globalStyle } from "@vanilla-extract/css";

// CSS reset to set the default for images to be block to remove the spacing that comes from
// an image being set to inline
globalStyle("svg, img", {
  display: "block",
});

globalStyle("html, body", {
  textRendering: "optimizeLegibility",
  WebkitFontSmoothing: "antialiased",
});

globalStyle("a", {
  color: "inherit",
  textDecoration: "none",
});

globalStyle("button", {
  border: 0,
  padding: 0,
  background: "none",
  cursor: "pointer",
  color: "inherit",
});
