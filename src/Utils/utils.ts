import { RESOLUTIONS, CONFIGURATIONS, CONFIG_TYPE } from "../state/Config";

export const getScreenConfiguration = (width: number, height: number) => {
  if (width <= RESOLUTIONS.SMALL) {
    return CONFIGURATIONS[CONFIG_TYPE.SMALL];
  }

  if (width <= RESOLUTIONS.MEDIUM && height > width) {
    return CONFIGURATIONS[CONFIG_TYPE.PORTRAIT];
  }

  if (width <= RESOLUTIONS.LARGE) {
    return CONFIGURATIONS[CONFIG_TYPE.LANDSCAPE];
  }

  return CONFIGURATIONS[CONFIG_TYPE.DEFAULT];
};

export const isMobileDevice = () => {
  // See if mobile
  try {
    document.createEvent("TouchEvent");
    return true;
  } catch (error) {
    // Must be desktop
    return false;
  }
};
