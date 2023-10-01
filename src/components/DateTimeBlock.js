import Date from "./Date";
import Time from "./Time";
import FixedTerm from "./FixedTerm";

import classes from "./LoadingForm.module.css";

const DateTimeBlock = (props) => {
  return (
    <div className={classes["date-time-block"]}>
      <Date
        dateTitle={props.dateTitle}
        generalInput={props.generalInput}
        index={props.index}
      />
      <Time
        name="timeFrom"
        timeTitle="From "
        generalInput={props.generalInput}
        index={props.index}
      />
      <Time
        name="timeTo"
        timeTitle="To "
        generalInput={props.generalInput}
        index={props.index}
      />
      <FixedTerm generalInput={props.generalInput} index={props.index} />
    </div>
  );
};

export default DateTimeBlock;
