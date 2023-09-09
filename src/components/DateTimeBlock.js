import Date from "./Date";
import Time from "./Time";
import FixedTerm from "./FixedTerm";

import classes from "./LoadingForm.module.css";

const DateTimeBlock = (props) => {
    return ( 
        <div className={classes['date-time']}>
          <Date dateTitle={props.dateTitle} />
          <Time timeTitle="From " />
          <Time timeTitle="To " />
          <FixedTerm />
        </div>
    );
}
 
export default DateTimeBlock;