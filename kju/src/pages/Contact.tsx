import { text_color_accent, border_color_accent, lorem } from "../pages/Layout";

function Contact() {
  return (
    <div className="flex flex-row justify-center py-[10vh] md:py-[12vh] px-[10vw] md:px-[20vw]">
      <div className="max-w-lg">
        <p className="text-5xl font-bold pb-3">Contact</p>
        <hr className={`border-b-2 ${border_color_accent} w-50 mb-6`} />

        <p className="min-w-xs text-lg pb-6">{lorem}</p>

        <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-lg pb-8 w-full max-w-md">
          <div className="flex items-center gap-2">
            <span className={`${text_color_accent}`}>-</span>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              GitHub
            </a>
          </div>

          <div className="flex items-center gap-2">
            <span className={`${text_color_accent}`}>-</span>
            <a href="mailto:email@gmail.com" className="hover:underline">
              E-mail
            </a>
          </div>

          <div className="flex items-center gap-2">
            <span className={`${text_color_accent}`}>-</span>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              LinkedIn
            </a>
          </div>

          <div className="flex items-center gap-2">
            <span className={`${text_color_accent}`}>-</span>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
