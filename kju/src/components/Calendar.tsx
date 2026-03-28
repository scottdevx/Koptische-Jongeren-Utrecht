import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import nlLocale from "@fullcalendar/core/locales/nl";

// https://fullcalendar.io/docs#toc
type CalendarEvent = {
  title: string;
  date: string;
};

type CalendarProps = {
  events: CalendarEvent[];
};

function Calendar(props: CalendarProps) {
  const events = props.events

  return (
    <FullCalendar
      plugins={[dayGridPlugin, interactionPlugin]}
      initialView="dayGridMonth"
      locale={nlLocale}
      events={events}
      aspectRatio={1.0}
      dateClick={(info) => {
        alert(`Clicked date: ${info.dateStr}`);
      }}
    />
  );
};

export default Calendar;