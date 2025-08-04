import { SegInfo } from "../Utils/SegmentInfo";
import villaPoints from "../Data/villa_23_24.json";
import { SEGMENTS } from "../state/Config";

export const Villa_23_24: SegInfo[] = villaPoints.map((current, index) => {
  const nextPoints = current.points;
  const prevPoints = index === 0 ? 0 : villaPoints[index - 1].points;
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
    name: "Villa",
  };
});
