import {
  text_color_accent,
  border_color_accent,
  bg_color_accent_hover,
  quick_zoom,
  lorem,
} from "./Layout";

import { Link } from "react-router-dom";
import empty from "../assets/empty.jpg";

function About() {
  return (
    <div className="flex flex-col md:flex-row items-start py-[10vh] md:py-[12vh] px-[10vw] md:px-[25vw] gap-x-2 lg:gap-x-8">
      <div className="pr-12 max-w-lg">
        <p className="text-5xl font-bold pb-3">Over ons</p>
        <hr className={`border-b-2 ${border_color_accent} w-60 mb-6`} />

        <p className="min-w-xs text-lg pb-2">{lorem}</p>
        <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-lg pb-8 w-full max-w-md">
          <div className="flex items-center gap-2">
            <span className={`${text_color_accent}`}>-</span>
            <span>Bullet 1</span>
          </div>
          <div className="flex items-center gap-2">
            <span className={`${text_color_accent}`}>-</span>
            <span>Bullet 3</span>
          </div>
          <div className="flex items-center gap-2">
            <span className={`${text_color_accent}`}>-</span>
            <span>Bullet 2</span>
          </div>
          <div className="flex items-center gap-2">
            <span className={`${text_color_accent}`}>-</span>
            <span>Bullet 4</span>
          </div>
        </div>

        <button
          className={`bg-transparent ${bg_color_accent_hover} ${text_color_accent} font-semibold hover:text-white py-3 px-6 mb-5 border ${border_color_accent} hover:border-transparent rounded`}
        >
          <Link to="/resume.pdf" target="_blank" rel="noopener noreferrer">
            Een pdf-link
          </Link>
        </button>
      </div>

      <div className="pt-18">
        <img
          src={empty}
          alt=""
          className={`${quick_zoom} md:w-[20vw] max-w-2xs object-contain`}
        />
      </div>
    </div>
  );
}

export default About;
