import Cargo from "./Cargo";
import Ref from "./Ref";

const CommentsBlock = (props) => {
  return (
    <div>
      <div>
        <Cargo />
      </div>
      <div>
        <Ref refTitle="Loading Reference" loadingRef={props.loadingRef} />
      </div>
    </div>
  );
};

export default CommentsBlock;
