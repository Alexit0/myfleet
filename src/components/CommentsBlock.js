import Cargo from "./Cargo";
import Ref from "./Ref";

const CommentsBlock = (props) => {
  return (
    <div>
      <div>
        <Cargo
          generalInput={props.generalInput}
          index={props.index}
          cargoDetails={props.cargoDetails}
        />
      </div>
      <div>
        <Ref
          refTitle="Loading Reference"
          generalInput={props.generalInput}
          index={props.index}
          comments={props.comments}
        />
      </div>
    </div>
  );
};

export default CommentsBlock;
