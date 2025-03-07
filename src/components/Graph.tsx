import { useMemo } from "react";
import Segment from "./Segment";
import { SegInfo } from "../Utils/SegmentInfo";
import { SEGMENTS } from "../Utils/utils";

const points_2324 = [0, 3, 3, 6, 7, 7, 8, 9, 10, 10];

const points_2425 = [
  1, 4, 5, 8, 9, 9, 10, 13, 16, 19, 19, 19, 22, 22, 25, 28, 31, 34, 37, 40, 41,
  44, 44, 47, 47, 47, 48,
];

const Graph = () => {
  const segDetails: SegInfo[] = useMemo(() => {
    const details: SegInfo[] = [];
    points_2425.map((_, index) => {
      const nextPoints = points_2425[index];
      const prevPoints = index === 0 ? 0 : points_2425[index - 1];
      const deltaPoints = nextPoints - prevPoints;
      const segLength = Math.sqrt(9 + deltaPoints * deltaPoints);
      const rot = Math.asin(deltaPoints / segLength);
      const yPos = (nextPoints - prevPoints) / 2 + prevPoints;
      details.push({
        length: segLength,
        rotation: rot,
        xPosition: index * SEGMENTS.WEEK_LENGTH,
        yPosition: yPos,
      });
    });

    // DEBUG
    // console.log("Details = ", details);
    return details;
  }, []);

  const segDetails2: SegInfo[] = useMemo(() => {
    const details: SegInfo[] = [];
    points_2324.map((_, index) => {
      const nextPoints = points_2324[index];
      const prevPoints = index === 0 ? 0 : points_2324[index - 1];
      const deltaPoints = nextPoints - prevPoints;
      const segLength = Math.sqrt(9 + deltaPoints * deltaPoints);
      const rot = Math.asin(deltaPoints / segLength);
      const yPos = (nextPoints - prevPoints) / 2 + prevPoints;
      details.push({
        length: segLength,
        rotation: rot,
        xPosition: index * SEGMENTS.WEEK_LENGTH,
        yPosition: yPos,
      });
    });

    // DEBUG
    // console.log("Details = ", details);
    return details;
  }, []);

  return (
    <>
      {segDetails.map((info, index) => (
        <Segment info={info} colour="red" key={index} />
      ))}
      {segDetails2.map((info, index) => (
        <Segment info={info} colour="blue" key={index} />
      ))}
    </>
  );
};

export default Graph;
