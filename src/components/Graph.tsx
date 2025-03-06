import { useMemo } from "react";
import Segment from "./Segment";
import { SegInfo } from "../Utils/SegmentInfo";
import { SEGMENTS } from "../Utils/utils";

const points = [1, 4, 5, 8, 9];

const Graph = () => {
  const segDetails: SegInfo[] = useMemo(() => {
    const details: SegInfo[] = [];
    points.map((_, index) => {
      const nextPoints = points[index];
      const prevPoints = index === 0 ? 0 : points[index - 1];
      const segLength = Math.sqrt(9 + nextPoints * nextPoints);
      const rot = Math.asin(nextPoints / segLength);
      const yPos = (nextPoints - prevPoints) / 2 + prevPoints;
      details.push({
        length: segLength,
        rotation: rot,
        xPosition: index * SEGMENTS.WEEK_LENGTH,
        yPosition: yPos,
      });
    });

    return details;
  }, []);

  return (
    <>
      {segDetails.map((info, index) => (
        <Segment {...info} key={index} />
      ))}
    </>
  );
};

export default Graph;
