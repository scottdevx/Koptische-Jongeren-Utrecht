import {
  text_color_accent,
  border_color_accent,
  quick_zoom,
} from "../pages/Layout";

type VersProps = {
  title: string;
  body: string;
  bg?: string;
};

function VersCard({ title, body, bg = "bg-neutral-900" }: VersProps) {
  return (
    <div
      className={`w-[70vw] sm:w-[60vw] lg:w-[50vw] 2xl:w-[35vw] rounded overflow-hidden shadow-lg ${bg}`}
    >
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">
          <p>{title}</p>
        </div>
        <p className="font-serif">{`"${body}"`}</p>
      </div>
    </div>
  );
}

export default VersCard;
