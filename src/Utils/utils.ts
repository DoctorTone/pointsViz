import { Vector3 } from "three";
import { Season_22_23 } from "../seasons/Season_22_23";
const SEGMENTS = {
  WEEK_LENGTH: 3,
  MAX: 38,
};

const SEASON_COLOUR = {
  Season_24_25: "red",
  Season_23_24: "yellow",
  Season_22_23: "green",
};

const SCENE = {
  LOW_RES: 600,
  MEDIUM_RES: 880,
  HIGH_RES: 1024,
  CAM_POSITION: new Vector3(0, 0, 80),
};

const ANIMATION = {
  PLAYBACK_SPEED: 500,
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

export { SEGMENTS, SCENE, ANIMATION, SEASON_COLOUR, isMobileDevice };
