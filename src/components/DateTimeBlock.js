import Date from "./singleComponents/Date";
import Time from "./singleComponents/Time";
import FixedTerm from "./singleComponents/FixedTerm";

import classes from "./OrderForm.module.css";

const DateTimeBlock = (props) => {
  return (
    <div className={classes["date-time-block"]}>
      <Date
        dateTitle={props.dateTitle}
        generalInput={props.generalInput}
        index={props.index}
        value={props.date}
      />
      <Time
        name="timeFrom"
        timeTitle="From "
        generalInput={props.generalInput}
        index={props.index}
        value={props.timeFrom}
      />
      <Time
        name="timeTo"
        timeTitle="To "
        generalInput={props.generalInput}
        index={props.index}
        value={props.timeTo}
      />
      <FixedTerm
        generalInput={props.generalInput}
        index={props.index}
        value={props.fixedTime}
      />
    </div>
  );
};

export default DateTimeBlock;
