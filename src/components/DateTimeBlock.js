import Date from "./singleComponents/Date";
import Time from "./singleComponents/Time";

import classes from "./OrderForm.module.css";

const DateTimeBlock = ({ index, value, dateTitle, handleInput, onChange }) => {
  return (
    <div className={classes["date-time-block"]}>
      <Date
        dateTitle={dateTitle}
        index={index}
        value={value.date}
        handleInput={handleInput}
        onChange={onChange}
      />
      <Time
        name="timeFrom"
        timeTitle="From "
        index={index}
        value={value.timeFrom}
        handleInput={handleInput}
        onChange={onChange}
      />
      <Time
        name="timeTo"
        timeTitle="To "
        index={index}
        value={value.timeTo}
        handleInput={handleInput}
        onChange={onChange}
      />
    </div>
  );
};

export default DateTimeBlock;
