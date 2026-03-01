import { text_color_accent, border_color_accent, bg_color_accent_hover, lorem } from "./Layout";
import { Link } from "react-router-dom";
import VersCard from "../components/Vers";
import cross from '../assets/cross.png';
import empty from "../assets/empty.jpg";

const title = "Koptische Jongeren Utrecht"
const subtitle = "Een plek van geloof en gemeenschap"
const logo_url = "../assets/logo.png"

const john_8_12 = "Johannes 8:12"
const john_8_12_body = "Christus is ons Licht en leven."

function Home() {
  return (
    <div className="relative min-h-screen flex flex-col items-center py-[20vh] md:py-[25vh] px-[10vw] md:px-[15vw] lg:px-[20vw] 2xl:px-[30vw]">
      
      {/* Background Image Layer */}
      <div
        className="absolute inset-0 bg-[url('/images/logo.png')] bg-no-repeat bg-center bg-size-[300px] bg-fixed opacity-30 pointer-events-none"
      ></div>

      {/* Content */}
      <div className="relative z-10 text-center">
        <img src={cross} alt="Cross" className="mx-auto mb-4 w-24 opacity-100" />
        <p className="text-2xl sm:text-3xl lg:text-4xl font-bold pb-3 opacity-100">{title}</p>
        <p className={`text-m sm:text-l lg:text-xl font-serif pb-8 ${text_color_accent} opacity-100`}>
          {subtitle}
        </p>
        <button
          className={`
            bg-transparent
            ${text_color_accent}
            font-semibold hover:text-white py-3 px-6 border
            ${bg_color_accent_hover}
            hover:border-transparent rounded opacity-100
          `}
        >
          <Link to="/about">Learn More</Link>
        </button>

        <div className="py-6">
          <VersCard
            title={john_8_12}
            body={john_8_12_body}
          />
        </div>
      </div>
    </div>
  );
}


export default Home;

