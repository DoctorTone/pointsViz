import { JSX } from "@emotion/react/jsx-runtime";
import { Plane, useTexture } from "@react-three/drei";

const Face = (props: JSX.IntrinsicElements["group"]) => {
  const billy = useTexture("./Images/Billy.png");

  return (
    <group {...props}>
      <Plane args={[5, 5]}>
        <meshStandardMaterial map={billy} transparent={true} />
      </Plane>
    </group>
  );
};

export default Face;
