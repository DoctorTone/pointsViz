import { Vector3 } from "three";
const SEGMENTS = {
  WEEK_LENGTH: 3,
};

const SCENE = {
  CAM_POSITION: new Vector3(0, 0, 200),
};

const isMobileDevice = () => {
  // See if mobile
  try {
    document.createEvent("TouchEvent");
    return true;
  } catch (error) {
    // Must be desktop
    return false;
  }
};

export { SEGMENTS, SCENE, isMobileDevice };
