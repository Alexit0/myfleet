import Cargo from "./Cargo";
import Ref from "./Ref";

import classes from "./LoadingForm.module.css";

const CommentsBlock = () => {
  return (
    <>
      <div className={classes.cargo}>
        <Cargo />
      </div>
      <div className={classes.ref}>
        <Ref refTitle="Loading Reference" />
      </div>
    </>
  );
};

export default CommentsBlock;
