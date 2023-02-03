import "./styles.css";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

export default function App() {
  return (
    <div className="App">
      <FullCalendar
        plugins={[dayGridPlugin]}
        weekends={true}
        height={"auto"}
        headerToolbar={{
          left: "title",
          center: "",
          right: "prev,next today"
        }}
      />
    </div>
  );
}
