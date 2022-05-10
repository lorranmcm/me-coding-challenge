import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
export function RCalendar() {
  const [todaysDate, setTodaysDate] = React.useState(new Date());

  return (
    <div className="h-80">
      <Calendar onChange={setTodaysDate} value={todaysDate} />
    </div>
  );
}
