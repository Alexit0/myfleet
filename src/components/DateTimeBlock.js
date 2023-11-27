import Date from "./singleComponents/Date";
import Time from "./singleComponents/Time";
import FixedTerm from "./singleComponents/FixedTerm";

import classes from "./OrderForm.module.css";

const DateTimeBlock = ({ index, value, dateTitle, handleInput }) => {
  return (
    <div className={classes["date-time-block"]}>
      <Date
        dateTitle={dateTitle}
        index={index}
        value={value.date}
        handleInput={handleInput}
      />
      <Time
        name="timeFrom"
        timeTitle="From "
        index={index}
        value={value.timeFrom}
        handleInput={handleInput}
      />
      <Time
        name="timeTo"
        timeTitle="To "
        index={index}
        value={value.timeTo}
        handleInput={handleInput}
      />
      {/* <FixedTerm
        index={index}
        value={value.fixedTime}
        handleInput={handleInput}
      /> */}
    </div>
  );
};

export default DateTimeBlock;
