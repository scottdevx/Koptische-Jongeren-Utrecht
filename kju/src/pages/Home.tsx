import { text_color_accent, border_color_accent, bg_color_accent_hover, lorem } from "./Layout";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="flex flex-col items-start py-[20vh] md:ph-[25vh] px-[10vw] md:px-[15vw] lg:px-[20vw] 2xl:px-[30vw]">
        <p className={`text-lg ${text_color_accent} font-semibold pb-2`}>
          Hi, my name is
        </p>
        <p className="text-5xl md:text-6xl font-bold pb-3">Full Name.</p>
        <p className="text-5xl md:text-6xl font-bold pb-8">
          A strong one-liner here.
        </p>

        <p className="text-lg pb-8 w-full max-w-lg">{lorem}</p>

        <button
          className={`bg-transparent ${bg_color_accent_hover} ${text_color_accent} font-semibold hover:text-white py-3 px-6 border ${border_color_accent} hover:border-transparent rounded`}
        >
          <Link to="/projects">Learn More</Link>
        </button>
      </div>
    </>
  );
}

export default Home;
