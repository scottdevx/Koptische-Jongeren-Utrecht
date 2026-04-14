import { border_color_accent } from "./Layout";
import ListImageLayout from "../components/ListImageLayout";

const title = "Title 1";
const links = [
  { href: "/resume.pdf", label: "Boek 1" },
  { href: "/resume.pdf", label: "Boek 2" },
  { href: "/resume.pdf", label: "Boek 3" },
];

function Kerkboeken() {
  return (
    <div>
      <p className="text-4xl font-bold text-center pb-4 pt-8">Kerkboeken</p>
      <hr
        className={`border-b-2 ${border_color_accent} mx-auto w-55 mb-6`}
      />{" "}
      {/* mx-auto centers the hr */}
      <div className="pt-20 px-[20vw]">
        <ListImageLayout title={title} links={links}></ListImageLayout>
      </div>
      <div className="pt-20 px-[20vw]">
        <ListImageLayout title={title} links={links}></ListImageLayout>
      </div>
    </div>
  );
}

export default Kerkboeken;
