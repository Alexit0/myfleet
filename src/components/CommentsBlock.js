import Cargo from "./Cargo";
import Ref from "./Ref";

import classes from "./LoadingForm.module.css";

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
