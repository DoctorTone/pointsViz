import useStore from "../state/store";
import Segment from "./Segment";
import { Season_24_25 } from "../seasons/Season_24_25";
import { Season_23_24 } from "../seasons/Season_23_24";
import { Season_22_23 } from "../seasons/Season_22_23";
import { Villa_23_24 } from "../seasons/Villa_23_24";

const Graph = () => {
  const show_24_25 = useStore((state) => state.show_24_25);
  const show_23_24 = useStore((state) => state.show_23_24);
  const show_22_23 = useStore((state) => state.show_22_23);
  const show_Villa = useStore((state) => state.show_villa);

  return (
    <>
      {show_24_25 &&
        Season_24_25.map((info, index) => (
          <Segment info={info} colour="red" key={index} />
        ))}
      {show_23_24 &&
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
    </>
  );
};

export default Graph;
