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

  {/* Andere optie: iframe */}
  return (
    <div className="w-full h-[80vh]">
        <iframe
            src="https://outlook.office365.com/calendar/published/f0a13193155143e5b777f4f000df15c5@papakyrillous.nl/aa87688d2b944820b86f8d23a9adb8dc13118198828885950745/calendar.html"
            className="w-full h-full border-0"
            title="Outlook Calendar"
        ></iframe>
    </div>
    // <FullCalendar
    //   plugins={[dayGridPlugin, interactionPlugin]}
    //   initialView="dayGridMonth"
    //   locale={nlLocale}
    //   events={events}
    //   aspectRatio={1.0}
    //   dateClick={(info) => {
    //     alert(`Clicked date: ${info.dateStr}`);
    //   }}
    // />
  );
};

export default Calendar;