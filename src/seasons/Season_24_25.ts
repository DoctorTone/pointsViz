import { SegInfo } from "../Utils/SegmentInfo";
import points2425 from "../Data/forest_24_25.json";
import { SEGMENTS } from "../Utils/utils";

export const Season_24_25: SegInfo[] = points2425.map((current, index) => {
  const nextPoints = current.points;
  const prevPoints = index === 0 ? 0 : points2425[index - 1].points;
  const deltaPoints = nextPoints - prevPoints;
  const segLength = Math.sqrt(SEGMENTS.WEEK_LENGTH ** 2 + deltaPoints ** 2);
  const rot = Math.asin(deltaPoints / segLength);
  const yPos = (nextPoints - prevPoints) / 2 + prevPoints;
  return {
    length: segLength,
    rotation: rot,
    xPosition: index * SEGMENTS.WEEK_LENGTH,
    yPosition: yPos,
  };
});
