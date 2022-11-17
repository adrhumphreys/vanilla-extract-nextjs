import type { FC } from "react";
import { Heading } from "../Heading";
import { Text } from "../Text";
import Ingredients from "./Ingredients";
import Method from "./Method";

type Props = {};

const Recipe: FC<Props> = ({}) => {
  return (
    <div>
      <Heading size="h1">Cheese and Onion Rolls</Heading>
      <Text>Serves 3 - 4</Text>
      <Text>Prep time: 0 - 15 mins | Cooking time: 0 - 15 mins</Text>
      <Text>This Bakery Classic is a delicious afternoon snack!</Text>
      <div>
        <Ingredients />
        <Method />
      </div>
    </div>
  );
};

export default Recipe;
