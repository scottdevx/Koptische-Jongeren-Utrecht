import {
  text_color_accent,
  border_color_accent,
  quick_zoom,
} from "../pages/Layout";

type CardProps = {
  img_path: string;
  title: string;
  github_path: string;
  body: string;
  tags?: string[];
};

function CardHorizontalImage(props: CardProps) {
  const tags = props.tags;

  return (
    <div
      className={`max-w-xs rounded overflow-hidden shadow-lg bg-neutral-800`}
    >
      <img className={`${quick_zoom} w-sm`} src={props.img_path} alt="" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">
          <a
            href={props.github_path}
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            {props.title}
          </a>
        </div>
        <p className="text-base">{props.body}</p>
      </div>
      <div className="px-6 pb-2">
        <ul>
          {tags?.map((t) => (
            <span
              className={`inline-block rounded-full px-3 py-1 border ${border_color_accent} text-sm font-semibold ${text_color_accent} mr-2 mb-2`}
            >
              {t}
            </span>
          ))}
        </ul>
      </div>
    </div>
  );
}

export { CardHorizontalImage };
