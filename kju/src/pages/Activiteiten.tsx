import { Outlet, Link } from "react-router-dom";
import { border_color_accent } from "./Layout";

export function Activiteiten() {
  return (
    <div className="flex flex-col items-center py-8">
      <p className="text-4xl font-bold pb-4">Activiteiten</p>
      <hr className={`border-b-2 ${border_color_accent} w-55 mb-6`} />
      <Outlet />
    </div>
  );
}

export function ActiviteitenHome() {
  return (
    <div className="flex flex-col">
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
  );
}