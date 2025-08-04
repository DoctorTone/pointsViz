import { SegInfo } from "../Utils/SegmentInfo";
import points2324 from "../Data/forest_23_24.json";
import { SEGMENTS } from "../state/Config";

export const Season_23_24: SegInfo[] = points2324.map((current, index) => {
  const nextPoints = current.points;
  const prevPoints = index === 0 ? 0 : points2324[index - 1].points;
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
    name: "Season_23_24",
  };
});
