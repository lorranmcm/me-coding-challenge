import React from "react";
import Calendar from "react-calendar";
import "./styles.css";
export function RCalendar() {
  const [todaysDate, setTodaysDate] = React.useState(new Date());

  return (
    <Calendar
      className="shadow-sm"
      onChange={setTodaysDate}
      value={todaysDate}
      prev2Label={null}
      next2Label={null}
      calendarType={"US"}
    />
  );
}
