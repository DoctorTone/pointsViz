import { useState, useEffect } from "react";
import useStore from "../state/store";
import Segment from "./Segment";
import { Season_24_25 } from "../seasons/Season_24_25";
import { Season_23_24 } from "../seasons/Season_23_24";
import { Season_22_23 } from "../seasons/Season_22_23";
import { Season_09_10 } from "../seasons/Season_09_10";
import { Season_10_11 } from "../seasons/Season_10_11";
import { Villa_23_24 } from "../seasons/Villa_23_24";
import { Newcastle_22_23 } from "../seasons/Newcastle_22_23";
import { Derby_07_08 } from "../seasons/Derby_07_08";
import { SegInfo } from "../Utils/SegmentInfo";

const animating = false;

const Graph = () => {
  const [visibleSegment, setVisibleSegment] = useState(0);
  const show_24_25 = useStore((state) => state.show_24_25);
  const show_23_24 = useStore((state) => state.show_23_24);
  const show_22_23 = useStore((state) => state.show_22_23);
  const show_Villa = useStore((state) => state.show_villa);
  const show_Newcastle = useStore((state) => state.show_newcastle);
  const show_Derby = useStore((state) => state.show_derby);
  const show_09_10 = useStore((state) => state.show_09_10);
  const show_10_11 = useStore((state) => state.show_10_11);

  const getSegment = (season: SegInfo[]) => {
    if (animating) {
      const segs = Season_24_25.map((info, index) => (
        <Segment
          info={info}
          colour="red"
          key={index}
          visible={index < visibleSegment}
        />
      ));

      return segs;
    } else {
      const segs = Season_24_25.map((info, index) => (
        <Segment info={info} colour="red" key={index} visible={true} />
      ));
      return segs;
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleSegment((segment) => segment + 1);
    }, 250);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {show_24_25 && getSegment(Season_24_25)}

      {/* {show_23_24 &&
        Season_23_24.map((info, index) => (
          <Segment info={info} colour="blue" key={index} />
        ))}
      {show_22_23 &&
        Season_22_23.map((info, index) => (
          <Segment info={info} colour="green" key={index} />
        ))}
      {show_Villa &&
        Villa_23_24.map((info, index) => (
          <Segment info={info} colour="#451f4e" key={index} />
        ))}
      {show_Newcastle &&
        Newcastle_22_23.map((info, index) => (
          <Segment info={info} colour="white" key={index} />
        ))}
      {show_Derby &&
        Derby_07_08.map((info, index) => (
          <Segment info={info} colour="black" key={index} />
        ))}
      {show_09_10 &&
        Season_09_10.map((info, index) => (
          <Segment info={info} colour="gold" key={index} />
        ))}
      {show_10_11 &&
        Season_10_11.map((info, index) => (
          <Segment info={info} colour="gold" key={index} />
        ))} */}
    </>
  );
};

export default Graph;
