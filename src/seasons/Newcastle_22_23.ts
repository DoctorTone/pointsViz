import { SegInfo } from "../Utils/SegmentInfo";
import newcastlePoints from "../Data/newcastle_22_23.json";
import { SEGMENTS } from "../state/Config";

export const Newcastle_22_23: SegInfo[] = newcastlePoints.map(
  (current, index) => {
    const nextPoints = current.points;
    const prevPoints = index === 0 ? 0 : newcastlePoints[index - 1].points;
    const deltaPoints = nextPoints - prevPoints;
    const segLength = Math.sqrt(SEGMENTS.WEEK_LENGTH ** 2 + deltaPoints ** 2);
    const rot = Math.asin(deltaPoints / segLength);
    const yPos = (nextPoints - prevPoints) / 2 + prevPoints;
    return {
      length: segLength,
      rotation: rot,
      xPosition: index * SEGMENTS.WEEK_LENGTH,
      yPosition: yPos,
      points: nextPoints,
      name: "Newcastle",
    };
  }
);
