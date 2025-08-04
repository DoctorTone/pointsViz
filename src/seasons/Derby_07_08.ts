import { SegInfo } from "../Utils/SegmentInfo";
import derbyPoints from "../Data/derby_07_08.json";
import { SEGMENTS } from "../state/Config";

export const Derby_07_08: SegInfo[] = derbyPoints.map((current, index) => {
  const nextPoints = current.points;
  const prevPoints = index === 0 ? 0 : derbyPoints[index - 1].points;
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
    name: "Derby",
  };
});
