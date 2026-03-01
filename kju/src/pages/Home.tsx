import { text_color_accent, border_color_accent, bg_color_accent_hover, lorem } from "./Layout";
import { Link } from "react-router-dom";
import cross from '../assets/cross.png';

const title = "Koptische Jongeren Utrecht"
const subtitle = "Een plek van geloof en gemeenschap"
const logo_url = "../assets/logo.png"

function Home() {
  return (
    <>
      <div className="relative flex flex-col items-center py-[20vh] md:py-[25vh] px-[10vw] md:px-[15vw] lg:px-[20vw] 2xl:px-[30vw]">
        {/* Background logo as absolute layer */}
        <div className="absolute inset-0 bg-[url('/images/logo.png')] bg-no-repeat bg-center bg-size-[300px] opacity-20 pointer-events-none"></div>

        {/* Content stays on top */}
        <div className="relative z-10 text-center">
          <img src={cross} alt="Cross" className="mx-auto mb-4 w-24"/>
          <p className="text-2xl sm:text-3xl lg:text-4xl font-bold pb-3">{title}</p>
          <p className={`text-m sm:text-l lg:text-xl font-serif pb-8 ${text_color_accent}`}>{subtitle}</p>
          <p className="text-lg pb-8 w-full max-w-lg">{}</p>
          <button className={
            `bg-transparent 
            ${text_color_accent} font-semibold hover:text-white py-3 px-6 border
            ${bg_color_accent_hover} hover:border-transparent rounded`
            }>
            <Link to="/about">Learn More</Link>
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;
