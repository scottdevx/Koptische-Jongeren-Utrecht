import { font_main, text_color_main, bg_color_footer } from "../pages/Layout";
import tikokLogo from "../assets/tik.png";
import instagramLogo from "../assets/ig.png"
import mailLogo from "../assets/mail.png";

function Footer() {
  return (
    <footer
      className={`w-full py-4 flex flex-col items-center justify-center ${bg_color_footer} ${font_main} ${text_color_main}`}
    >
      <div className="socials flex justify-center gap-x-4">
        <a href="mailto:info@koptischejongerenutrecht.nl" target="_blank">
          <div className="socials_email size-8">
            <img src={mailLogo} alt="" />
          </div>
        </a>
        <a href="https://www.tiktok.com/@koptischejongerenutrecht" target="_blank">
          <div className={`socials_tiktok size-8`}>
            <img src={tikokLogo} alt="" />
          </div>
        </a>
          <a href="https://www.instagram.com/koptischejongerenutrecht" target="_blank">
          <div className={`socials_instagram size-8`}>
            <img src={instagramLogo} alt="" />
          </div>
        </a>
      </div>
      <p className="font-medium pt-1.5">© 2026 Koptische Jongeren Utrecht</p>
    </footer>
  );
}
export default Footer;
