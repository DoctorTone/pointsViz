import { Text } from "@react-three/drei";

const Points = () => {
  const pointsLine = [10, 20, 30, 40, 50, 60, 70, 80];
  return (
    <>
      <Text position={[-5, 85, 0]} fontSize={3} color="grey">
        Points
      </Text>
      {pointsLine.map((total) => (
        <Text position={[-5, total, 0]} fontSize={2} color="grey" key={total}>
          {total.toString()}
        </Text>
      ))}
    </>
  );
};

export default Points;
