import type { FC } from "react";
import { Text } from "../Text";

type Props = {};

const Ingredients: FC<Props> = ({}) => {
  return (
    <div>
      <ul>
        <li>
          <Text>1 Packet of Pams Tasty Grated Cheese</Text>
        </li>
        <li>
          <Text>1 tin Pams evaporated milk</Text>
        </li>
        <li>
          <Text>1 packet Pams onion soup mix</Text>
        </li>
        <li>
          <Text>1/2 Loaf Pams white sandwich sliced bread</Text>
        </li>
      </ul>
    </div>
  );
};

export default Ingredients;
