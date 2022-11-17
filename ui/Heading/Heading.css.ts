import { style } from "@vanilla-extract/css";
import { defineProperties, createSprinkles } from "@vanilla-extract/sprinkles";
import { breakpointConditions } from "../styles/breakpointConditions";
import { responsiveStyleMap } from "../styles/responsiveStyleMap";

export const root = style({
  fontWeight: 700,
});

export const fontSizes = {
  h1: responsiveStyleMap({
    fontSize: {
      xs: "1.5rem",
      md: "2rem",
    },
    lineHeight: {
      xs: 1,
      md: 1.5,
    },
  }),
  h2: responsiveStyleMap({
    fontSize: {
      xs: "1.2rem",
      md: "1.4rem",
    },
    lineHeight: {
      xs: 1,
      md: 1.4,
    },
  }),
  h3: responsiveStyleMap({
    fontSize: {
      xs: "1.1rem",
      md: "1.3rem",
    },
    lineHeight: {
      xs: 1,
      md: 1.4,
    },
  }),
  h4: responsiveStyleMap({
    fontSize: {
      xs: "1rem",
      md: "1.2rem",
    },
    lineHeight: {
      xs: 1,
      md: 1.3,
    },
  }),
  h5: responsiveStyleMap({
    fontSize: {
      xs: "1rem",
      md: "1.1rem",
    },
    lineHeight: {
      xs: 1,
      md: 1.4,
    },
  }),
};
export type FontSize = keyof typeof fontSizes;

const responsiveProperties = defineProperties({
  conditions: breakpointConditions,
  defaultCondition: "xs",
  properties: {
    fontWeight: {
      base: 400,
      medium: 500,
      bold: 600,
      strong: 700,
    },
    color: {
      cta: "red",
      subdued: "#333",
    },
    textAlign: ["center"],
  },
  shorthands: {
    align: ["textAlign"],
    weight: ["fontWeight"],
  },
});

export const sprinkles = createSprinkles(responsiveProperties);

export type Sprinkles = Parameters<typeof sprinkles>[0];
