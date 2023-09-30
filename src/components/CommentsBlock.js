import Cargo from "./Cargo";
import Ref from "./Ref";

const CommentsBlock = (props) => {
  return (
    <div>
      <div>
        <Cargo generalInput={props.generalInput} />
      </div>
      <div>
        <Ref
          refTitle="Loading Reference"
          generalInput={props.generalInput}
          index={props.index}
        />
      </div>
    </div>
  );
};

export default CommentsBlock;
