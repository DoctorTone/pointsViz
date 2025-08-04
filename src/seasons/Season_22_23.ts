import { SegInfo } from "../Utils/SegmentInfo";
import points2223 from "../Data/forest_22_23.json";
import { SEGMENTS } from "../Utils/utils";

export const Season_22_23: SegInfo[] = points2223.map((current, index) => {
  const nextPoints = current.points;
  const prevPoints = index === 0 ? 0 : points2223[index - 1].points;
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
    name: "Season_22_23",
  };
});
