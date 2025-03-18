import { Vector3 } from "three";
const SEGMENTS = {
  WEEK_LENGTH: 3,
};

const SCENE = {
  LOW_RES: 600,
  MEDIUM_RES: 880,
  HIGH_RES: 1024,
  CAM_POSITION: new Vector3(0, 0, 80),
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
