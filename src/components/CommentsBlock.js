import Cargo from "./Cargo";
import Ref from "./Ref";

const CommentsBlock = () => {
  return (
    <div>
      <div>
        <Cargo />
      </div>
      <div>
        <Ref refTitle="Loading Reference" />
      </div>
    </div>
  );
};

export default CommentsBlock;
