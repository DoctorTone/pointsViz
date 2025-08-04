import { useState, useEffect } from "react";
import useStore from "../state/store";
import Segment from "./Segment";
import { Text } from "@react-three/drei";
import { ANIMATION, SEGMENTS, SEASON_COLOUR } from "../state/Config";
import { Season_24_25 } from "../seasons/Season_24_25";
import { Season_23_24 } from "../seasons/Season_23_24";
import { Season_22_23 } from "../seasons/Season_22_23";
import { Season_09_10 } from "../seasons/Season_09_10";
import { Season_10_11 } from "../seasons/Season_10_11";
import { Villa_23_24 } from "../seasons/Villa_23_24";
import { Newcastle_22_23 } from "../seasons/Newcastle_22_23";
import { Derby_07_08 } from "../seasons/Derby_07_08";
import { SegInfo } from "../Utils/SegmentInfo";
import { Vector3 } from "three";

const Graph = () => {
  const [visibleSegment, setVisibleSegment] = useState(-1);
  const show_24_25 = useStore((state) => state.show_24_25);
  const show_23_24 = useStore((state) => state.show_23_24);
  const show_22_23 = useStore((state) => state.show_22_23);
  const show_Villa = useStore((state) => state.show_villa);
  const show_Newcastle = useStore((state) => state.show_newcastle);
  const show_Derby = useStore((state) => state.show_derby);
  const show_09_10 = useStore((state) => state.show_09_10);
  const show_10_11 = useStore((state) => state.show_10_11);
  const animating = useStore((state) => state.animating);
  const toggleAnimation = useStore((state) => state.toggleAnimation);

  const getSegment = (season: SegInfo[]) => {
    const segs = season.map((info, index) => (
      <Segment
        info={info}
        colour={SEASON_COLOUR[info.name]}
        key={index}
        visible={visibleSegment < 0 ? true : index <= visibleSegment}
      />
    ));

    let pointsPosition = new Vector3();

    if (visibleSegment >= 0) {
      pointsPosition.x =
        season[visibleSegment].xPosition + SEGMENTS.WEEK_LENGTH;
      pointsPosition.y = season[visibleSegment].yPosition + 3;
    } else {
      pointsPosition.x =
        season[SEGMENTS.MAX - 1].xPosition + SEGMENTS.WEEK_LENGTH;
      pointsPosition.y = season[SEGMENTS.MAX - 1].yPosition + 3;
    }

    return (
      <>
        <Text
          fontSize={2}
          color={SEASON_COLOUR[season[0].name]}
          position={pointsPosition}
        >
          {visibleSegment < 0
            ? season[SEGMENTS.MAX - 1].points
            : season[visibleSegment].points}
        </Text>
        {segs}
      </>
    );
  };

  useEffect(() => {
    let interval: number;

    if (animating) {
      interval = setInterval(() => {
        setVisibleSegment((segment) => segment + 1);
      }, ANIMATION.PLAYBACK_SPEED);
    }

    return () => clearInterval(interval);
  }, [animating]);

  useEffect(() => {
    if (visibleSegment >= SEGMENTS.MAX - 1) {
      setVisibleSegment(-1);
      toggleAnimation();
    }
  }, [visibleSegment]);

  return (
    <>
      {show_24_25 && getSegment(Season_24_25)}

      {show_23_24 && getSegment(Season_23_24)}
      {show_22_23 && getSegment(Season_22_23)}
      {show_Villa &&
        Villa_23_24.map((info, index) => (
          <Segment info={info} colour="#451f4e" key={index} visible={true} />
        ))}
      {show_Newcastle &&
        Newcastle_22_23.map((info, index) => (
          <Segment info={info} colour="white" key={index} visible={true} />
        ))}
      {show_Derby &&
        Derby_07_08.map((info, index) => (
          <Segment info={info} colour="black" key={index} visible={true} />
        ))}
      {show_09_10 &&
        Season_09_10.map((info, index) => (
          <Segment info={info} colour="gold" key={index} visible={true} />
        ))}
      {show_10_11 &&
        Season_10_11.map((info, index) => (
          <Segment info={info} colour="gold" key={index} visible={true} />
        ))}
    </>
  );
};

export default Graph;
