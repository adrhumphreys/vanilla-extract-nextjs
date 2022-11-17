import type { FC } from "react";
import { Heading } from "../Heading";
import { Text } from "../Text";

type Props = {};

const Method: FC<Props> = ({}) => {
  return (
    <div>
      <Heading size="h2">Method</Heading>
      <ol>
        <li>
          <Text>Step 1</Text>
          <Text>
            Preheat oven to 200°C. In a saucepan over a low heat, stir together
            the soup mix and the evaporated milk until the mixture has
            thickened.
          </Text>
        </li>
        <li>
          <Text>Step 2</Text>
          <Text>
            Remove from the heat and stir in the cheese. Do not return to the
            heat once the cheese has been added as if it boils the cheese will
            go stringy. Allow the mix to cool.
          </Text>
        </li>
        <li>
          <Text>Step 3</Text>
          <Text>
            Spread one side of the slices of bread with the butter. Turn over
            and place buttered side down – preferably on a board.
          </Text>
        </li>
        <li>
          <Text>Step 4</Text>
          <Text>
            Spread about 2 Tbsp cheese and onion mix on the unbuttered side and
            roll the bread slice up. Secure with a toothpick.
          </Text>
        </li>
        <li>
          <Text>Step 5</Text>
          <Text>
            Place on a baking paper-lined baking tray. Bake for 10 - 12 minutes
            or until golden and hot. Remove toothpicks and serve hot as a snack
            or finger food.
          </Text>
        </li>
      </ol>
    </div>
  );
};

export default Method;
