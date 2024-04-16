import React from "react";
import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import './Calendar.css';

function Calendar() {
  return (
    <div style={{width:"80%"}}>
    <Fullcalendar
      plugins={[dayGridPlugin]}
      initialView={"dayGridMonth"}
      height={"90vh"}
    
    />
  </div>
  );
}

export default Calendar;