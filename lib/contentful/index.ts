import { createClient } from "contentful";

export const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
export const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;

if (!space || !accessToken) {
  throw new Error("No space/token in env");
}

const client = createClient({
  space: space,
  accessToken: accessToken,
});
