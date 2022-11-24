import * as NextImage from "next/image";
import type { ImageProps } from "next/image";
import "../ui/styles/global.css.ts";
import Link from "next/link";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

// Load next/images in storybook
// https://dev.to/jonasmerlin/how-to-use-the-next-js-image-component-in-storybook-1415
// https://github.com/RyanClementsHax/storybook-addon-next/blob/main/src/images/next-image-stub.tsx
const OriginalNextImage = NextImage.default;
Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props: ImageProps) =>
    typeof props.src === "string" ? (
      <OriginalNextImage {...props} unoptimized blurDataURL={props.src} />
    ) : (
      <OriginalNextImage {...props} unoptimized />
    ),
});

// Replace next link with an a tag in storybook (v13 made the link render as an a and break)
Object.defineProperty(Link, "default", {
  configurable: true,
  value: ({ children, ...props }) => {
    return <a {...props}>{children}</a>;
  },
});
