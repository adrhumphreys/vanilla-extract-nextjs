import { defineProperties, createSprinkles } from "@vanilla-extract/sprinkles";
import { breakpointConditions } from "../styles/breakpointConditions";
import { Spacing } from "../styles/spacing";

const responsiveProperties = defineProperties({
  conditions: breakpointConditions,
  defaultCondition: "xs",
  properties: {
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      md: "1.125rem",
      lg: "1.25rem",
      xl: "1.375rem",
    },
    lineHeight: {
      xs: 1,
      sm: 1,
      base: 1.25,
      md: 1.22,
      lg: 1.2,
      xl: 1.09,
    },
    fontWeight: {
      base: 400,
      medium: 600,
      bold: 700,
      strong: 900,
    },
    color: {
      cta: "red",
      subdued: "#333",
    },
    textAlign: ["left", "center", "right"],
    marginBottom: Spacing,
  },
  shorthands: {
    align: ["textAlign"],
    size: ["fontSize", "lineHeight"],
    weight: ["fontWeight"],
  },
});

export const sprinkles = createSprinkles(responsiveProperties);

export type Sprinkles = Parameters<typeof sprinkles>[0];
