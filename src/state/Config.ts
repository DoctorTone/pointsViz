import { Vector3 } from "three";

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
  PLAYBACK_SPEED: 375,
};

const RESOLUTIONS = {
  SMALL: 600,
  MEDIUM: 900,
  LARGE: 1200,
  X_LARGE: 1536,
};

const CONFIG_TYPE = {
  SMALL: 0,
  PORTRAIT: 1,
  MEDIUM: 2,
  LANDSCAPE: 3,
  DEFAULT: 4,
};

const CONFIGURATIONS = [
  {
    CAMERA_POSITION: new Vector3(0, 0, 220),
  },
  {
    CAMERA_POSITION: new Vector3(0, 0, 160),
  },
  {
    CAMERA_POSITION: new Vector3(0, 0, 100),
  },
  {
    CAMERA_POSITION: new Vector3(0, 0, 100),
  },
  {
    CAMERA_POSITION: new Vector3(0, 0, 80),
  },
];

export type ScreenSize = {
  width: number;
  height: number;
};

export {
  SEGMENTS,
  SCENE,
  ANIMATION,
  SEASON_COLOUR,
  RESOLUTIONS,
  CONFIG_TYPE,
  CONFIGURATIONS,
};
