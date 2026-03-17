import { text_color_accent, border_color_accent } from "../pages/Layout";
import tikokLogo from "../assets/tik.png";
import instagramLogo from "../assets/ig.png"
import ytLogo from "../assets/ytlogo.png";

const contact_text = `
Een tekst over de ligging van de kerk hier en contact.
`;
const address = "Adriaan van Bergenstraat 61, 3554 VC Utrecht"
const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;

const email = "info@koptischejongerenutrecht.nl"
const tiktok = "https://www.tiktok.com/@koptischejongerenutrecht"
const yt = "https://www.youtube.com/@KoptischOrthodoxeKerkUtrecht"
const instagram = "https://www.instagram.com/koptischejongerenutrecht"

function Contact() {
  return (
    <div className="flex flex-row justify-center py-[10vh] md:py-[12vh] px-[10vw] md:px-[20vw]">
      {/* On lg+: left-right layout, on smaller screens 1 vertical columns */}
      <div className="max-w-5xl w-full grid grid-cols-1 xl:grid-cols-2 gap-10">
        
        {/* LEFT SIDE */}
        <div>
          <p className="text-5xl font-bold pb-3">Contact</p>
          <hr className={`border-b-2 ${border_color_accent} w-50 mb-6`} />

          <div className="grid grid-cols-1 gap-x-8 gap-y-2 text-lg pb-8 w-full max-w-md">
            <h1>Adres:</h1>
            <div className="flex items-center gap-2">
              <span className={`${text_color_accent}`}>-</span>
              <p>{address}</p>
            </div>

            <h1>Email:</h1>
            <div className="flex items-center gap-2">
              <span className={`${text_color_accent}`}>-</span>
              <a href={email} className="hover:underline">{email}</a>
            </div>

          </div>

          <p className="text-lg w-full">Link naar onze socials:</p>
          <div className="socials pt-6 flex justify gap-x-18">
            <a href={yt} target="_blank">
              <div className="socials_email size-12">
                <img className="pt-2" src={ytLogo} alt="" /> {/* Adjust YT-logo */}
              </div>
            </a>
            <a href={tiktok} target="_blank">
              <div className={`socials_tiktok size-12`}>
                <img src={tikokLogo} alt="" />
              </div>
            </a>
              <a href={instagram} target="_blank">
              <div className={`socials_instagram size-12`}>
                <img src={instagramLogo} alt="" />
              </div>
            </a>
          </div>

          {/* OTHER OPTION: TEXT INSTEAD OF IMGAGES*/}
          {/* <p className="text-lg w-full">Link naar onze socials:</p> */}
          {/* <div className="grid grid-cols-3 gap-x-8 gap-y-2 text-lg pb-8 w-full max-w-md">
            <div className="flex items-center gap-2">
              <span className={`${text_color_accent}`}>-</span>
              <a
                href={yt}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Youtube
              </a>
            </div>

            <div className="flex items-center gap-2">
              <span className={`${text_color_accent}`}>-</span>
              <a
                href={instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Instagram
              </a>
            </div>

            <div className="flex items-center gap-2">
              <span className={`${text_color_accent}`}>-</span>
              <a
                href={tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                TikTok
              </a>
            </div>
          </div> */}
        </div>

        {/* RIGHT SIDE (MAP) */}
        <div className="w-full">
          <iframe
            src={mapUrl}
            className="w-full h-[50vh] xl:h-full xl:mt-15"
          />
        </div>

      </div>
    </div>
  );
}

export default Contact;
