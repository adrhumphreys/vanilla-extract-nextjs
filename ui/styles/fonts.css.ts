import { globalFontFace, globalStyle } from "@vanilla-extract/css";
import { colors } from "./colors";

globalFontFace("Avian", {
  src: `url('/fonts/AvianRegular.woff2') format('woff2')`,
  fontWeight: 400,
  fontStyle: "normal",
  fontDisplay: "swap",
});

globalFontFace("Avian", {
  src: `url('/fonts/AvianBold.woff2') format('woff2')`,
  fontWeight: 700,
  fontStyle: "normal",
  fontDisplay: "swap",
});

globalStyle("body", {
  color: colors.TextBlack,
  fontFamily: '"Avian", sans-serif',
});
