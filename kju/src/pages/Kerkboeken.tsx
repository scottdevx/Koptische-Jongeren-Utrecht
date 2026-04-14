import { border_color_accent } from "./Layout";

const links = [
  { href: "/resume.pdf", label: "Resume 1" },
  { href: "/resume.pdf", label: "Resume 2" },
  { href: "/resume.pdf", label: "Resume 3" }
];


function Kerkboeken() {
    return (
        <div className="flex flex-col py-8 min-h-screen">
            <p className="text-4xl font-bold text-center pb-4">Kerkboeken</p>
            <hr className={`border-b-2 ${border_color_accent} mx-auto w-55 mb-6`} /> {/* mx-auto centers the hr */}
            <div className="flex flex-col items-center">
                {links.map((link, index) => (
                    <a
                    key={index}
                    href={link.href}
                    className="hover:font-bold"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                        {link.label}
                    </a>
                    )
                )}
            </div>
        </div>
    );
}

export default Kerkboeken