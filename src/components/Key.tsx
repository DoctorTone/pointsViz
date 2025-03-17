import { Text } from "@react-three/drei";
import useStore from "../state/store";

const Key = () => {
  const show_24_25 = useStore((state) => state.show_24_25);
  const show_23_24 = useStore((state) => state.show_23_24);
  const show_22_23 = useStore((state) => state.show_22_23);
  const show_Villa = useStore((state) => state.show_villa);
  const show_Newcastle = useStore((state) => state.show_newcastle);
  const show_Derby = useStore((state) => state.show_derby);

  return (
    <>
      {show_24_25 && (
        <Text color="red" position={[30 * 3, 55, 0]} fontSize={2}>
          24/25
        </Text>
      )}
      {show_23_24 && (
        <Text color="blue" position={[39 * 3, 35, 0]} fontSize={2}>
          23/24
        </Text>
      )}
      {show_22_23 && (
        <Text color="green" position={[39 * 3, 40, 0]} fontSize={2}>
          22/23
        </Text>
      )}
      {show_Villa && (
        <Text color="#893d9a" position={[39 * 3, 69, 0]} fontSize={2}>
          Villa
        </Text>
      )}
      {show_Newcastle && (
        <Text color="white" position={[40 * 3, 72, 0]} fontSize={2}>
          Newcastle
        </Text>
      )}
      {show_Derby && (
        <Text color="black" position={[39 * 3, 12, 0]} fontSize={2}>
          Derby
        </Text>
      )}
    </>
  );
};

export default Key;
