import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import ResponsiveCamera from "./components/ResponsiveCamera";
import Graph from "./components/Graph";
import Timeline from "./components/Timeline";
import Points from "./components/Points";
import Controls from "./UI/Controls";
import Title from "./UI/Title";
import { SCENE } from "./Utils/utils";
import useStore from "./state/store";
import Key from "./components/Key";
import { isMobileDevice } from "./Utils/utils";
import { Leva } from "leva";

function App() {
  const backGround = useStore((state) => state.backGround);
  const isMobile = isMobileDevice();

  return (
    <>
      {isMobile && <Leva collapsed={true} />}
      <Controls />
      <Title />
      <Canvas
        camera={{ position: SCENE.CAM_POSITION }}
        style={{ background: backGround }}
      >
        <ResponsiveCamera />
        <Stage
          adjustCamera={false}
          shadows="contact"
          intensity={0.5}
          environment="city"
        >
          <Graph />
          <Points />
          <Timeline />
          <Key />
        </Stage>
        <OrbitControls makeDefault />
      </Canvas>
    </>
  );
}

export default App;
