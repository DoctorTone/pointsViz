import Segment from "./Segment";
import { Box } from "@react-three/drei";

const points = [1, 2, 3, 4, 5];

const Graph = () => {
  return (
    <>
      {points.map((_, index) => (
        <Segment
          position={[index * 5, index + 1, 0]}
          rotation-z={Math.PI / 12}
          key={index}
        />
      ))}
    </>
  );
};

export default Graph;
