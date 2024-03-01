const parseDateTimeString = (dateTimeString) => {
  const [datePart, timePart] = dateTimeString.split(" ");

  // Check if timePart is defined
  if (!timePart) {
    return null;
  }

  const [year, month, day] = datePart.split("/");

  const [startHour, startMinute, endHour, endMinute] = timePart
    .replace("-", " ")
    .match(/\d{2}/g) || []; // Use default value [] if match returns null

  const formattedStartDate = new Date(
    parseInt(year, 10),
    parseInt(month, 10) - 1,
    parseInt(day, 10),
    parseInt(startHour, 10),
    parseInt(startMinute, 10)
  );

  const formattedEndDate =
    endHour &&
    endMinute &&
    new Date(
      parseInt(year, 10),
      parseInt(month, 10) - 1,
      parseInt(day, 10),
      parseInt(endHour, 10),
      parseInt(endMinute, 10)
    );

  return {
    start: formattedStartDate,
    end: formattedEndDate,
  };
};

export default parseDateTimeString;
