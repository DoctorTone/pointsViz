import { Text } from "@react-three/drei";

const Timeline = () => {
  const matches = [5, 10, 15, 20, 25, 30, 35];

  return (
    <>
      <Text color="grey" position={[40 * 3, -1, 0]} fontSize={3}>
        Matches
      </Text>
      {matches.map((match) => (
        <Text
          position={[match * 3, -1, 0]}
          fontSize={2}
          color="grey"
          key={match}
        >
          {match.toString()}
        </Text>
      ))}
    </>
  );
};

export default Timeline;
