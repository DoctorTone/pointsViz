import { useEffect } from "react";
import { useThree } from "@react-three/fiber";
import { SCENE } from "../Utils/utils";

const ResponsiveCamera = () => {
  const { camera, size } = useThree();

  useEffect(() => {
    const updateCameraPosition = () => {
      if (size.width < SCENE.LOW_RES) {
        camera.position.set(0, 0, 220);
        camera.updateProjectionMatrix();
      } else if (size.width <= SCENE.MEDIUM_RES && size.height > size.width) {
        camera.position.set(0, 0, 140);
        camera.updateProjectionMatrix();
      } else if (size.width <= SCENE.MEDIUM_RES) {
        camera.position.set(0, 0, 100);
        camera.updateProjectionMatrix();
      }
    };
    updateCameraPosition();
    window.addEventListener("resize", updateCameraPosition);
    return () => window.removeEventListener("resize", updateCameraPosition);
  }, [camera, size]);

  return null;
};

export default ResponsiveCamera;
