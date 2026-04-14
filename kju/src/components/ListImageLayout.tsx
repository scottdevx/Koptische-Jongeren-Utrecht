import { quick_zoom } from "../pages/Layout";
import empty from "../assets/empty.jpg";

type LinkItem = {
  href: string;
  label: string;
};

type Props = {
  title: string;
  links: LinkItem[];
};

function ListImageLayout({ title, links }: Props) {
  return (
    <div className="flex flex-col md:flex-row">
      {/* Left */}
      <div className="flex-1 flex justify-center">
        <div className="flex flex-col items-start pb-4">
          <p className="text-xl pb-3">{title}</p>
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="hover:font-bold"
              target="_blank"
              rel="noopener noreferrer"
            >
              - {link.label}
            </a>
          ))}
        </div>
      </div>

      {/* Right */}
      <div className="flex-1 flex justify-center">
        <img
          src={empty}
          alt=""
          className={`${quick_zoom} md:w-[20vw] max-w-xs object-contain`}
        />
      </div>
    </div>
  );
}

export default ListImageLayout;
