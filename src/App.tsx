import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Lights from "./components/Lights";
import Graph from "./components/Graph";

function App() {
  return (
    <>
      <Canvas camera={{ position: [0, 0, 20] }}>
        <Lights />
        <Graph />
        <OrbitControls makeDefault />
      </Canvas>
    </>
  );
}

export default App;
