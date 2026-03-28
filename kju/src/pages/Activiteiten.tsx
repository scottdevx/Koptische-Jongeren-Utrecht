import { Outlet, Link } from "react-router-dom";
import { border_color_accent } from "./Layout";
import Calendar from "../components/Calendar";

export function Activiteiten() {
  return (
    <div className="flex flex-col py-8 min-h-screen">
      <p className="text-4xl font-bold text-center pb-4">Activiteiten</p>
      <hr className={`border-b-2 ${border_color_accent} mx-auto w-55 mb-6`} /> {/* mx-auto centers the hr */}
      <div className="">
        <Outlet />
      </div>
    </div>
  );
}

export function ActiviteitenHome() {
  const events = [
    { title: "Meeting Met Nog Extra Text", date: "2026-03-30" },
    { title: "Conference", date: "2026-04-10" },
  ]

  return (
    <div className="">
      <div className="flex flex-col items-center">
          <p>Kies een activiteit of klik op Inschrijven!</p>
          <Link
              to="inschrijven"
              className="text-blue-500 hover:underline"
          >
              Activiteit1
          </Link>
          <Link
              to="inschrijven"
              className="text-blue-500 hover:underline"
          >
              Activiteit2
          </Link>
      </div>
      <div className="pt-8 px-12 mx-auto w-[80vw] lg:w-[65vw] 2xl:w-[55vw]">
          <Calendar events={events}/>
      </div>
    </div>
  );
}