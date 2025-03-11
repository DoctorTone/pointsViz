import { useMemo } from "react";
import useStore from "../state/store";
import Segment from "./Segment";
import { SegInfo } from "../Utils/SegmentInfo";
import { SEGMENTS } from "../Utils/utils";
import points2425 from "../Data/forest_24_25.json";
import points2324 from "../Data/forest_23_24.json";

const Graph = () => {
  const show_24_25 = useStore((state) => state.show_24_25);
  const show_23_24 = useStore((state) => state.show_23_24);

  const segDetails: SegInfo[] = useMemo(() => {
    const details: SegInfo[] = [];
    points2425.map((current, index) => {
      const nextPoints = current.points;
      const prevPoints = index === 0 ? 0 : points2425[index - 1].points;
      const deltaPoints = nextPoints - prevPoints;
      const segLength = Math.sqrt(SEGMENTS.WEEK_LENGTH ** 2 + deltaPoints ** 2);
      const rot = Math.asin(deltaPoints / segLength);
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

  const segDetails2: SegInfo[] = useMemo(() => {
    const details: SegInfo[] = [];
    points2324.map((current, index) => {
      const nextPoints = current.points;
      const prevPoints = index === 0 ? 0 : points2324[index - 1].points;
      const deltaPoints = nextPoints - prevPoints;
      const segLength = Math.sqrt(SEGMENTS.WEEK_LENGTH ** 2 + deltaPoints ** 2);
      const rot = Math.asin(deltaPoints / segLength);
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
      {show_24_25 &&
        segDetails.map((info, index) => (
          <Segment info={info} colour="red" key={index} />
        ))}
      {show_23_24 &&
        segDetails2.map((info, index) => (
          <Segment info={info} colour="blue" key={index} />
        ))}
    </>
  );
};

export default Graph;
