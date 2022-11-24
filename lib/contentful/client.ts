import { createClient } from "@urql/core";

const client = createClient({
  url: "https://graphql.contentful.com/content/v1/spaces/{SPACE}",
});
