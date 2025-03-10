import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import Graph from "./components/Graph";
import Timeline from "./components/Timeline";
import Points from "./components/Points";
import Controls from "./UI/Controls";
import Title from "./UI/Title";
import { SCENE } from "./Utils/utils";

function App() {
  return (
    <>
      <Controls />
      <Title />
      <Canvas camera={{ position: SCENE.CAM_POSITION }}>
        <Stage
          adjustCamera={false}
          shadows="contact"
          intensity={0.5}
          environment="city"
        >
          <Graph />
          <Points />
          <Timeline />
        </Stage>
        <OrbitControls makeDefault />
      </Canvas>
    </>
  );
}

export default App;
