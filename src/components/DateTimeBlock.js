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
      />
      <Time
        name="timeFrom"
        timeTitle="From "
        generalInput={props.generalInput}
      />
      <Time name="timeTo" timeTitle="To " generalInput={props.generalInput} />
      <FixedTerm generalInput={props.generalInput} />
    </div>
  );
};

export default DateTimeBlock;
