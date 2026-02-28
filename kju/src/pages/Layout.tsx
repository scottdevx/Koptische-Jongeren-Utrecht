// src/components/Layout.tsx
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const bg_color = "bg-[#202020]";
export const bg_color_accent = "bg-[#ffbf00]";
export const bg_color_accent_alpha = "bg-[#ffbf0020]";
export const bg_color_accent_hover = `hover:${bg_color_accent}`;

export const bg_color_navbar = bg_color;
export const bg_color_footer = bg_color;

export const text_color_main = "text-[#fafafa]";
export const text_color_accent = "text-[#ffbf00]";

export const border_color_accent = "border-[#ffbf00]";

export const font_main = "font-montserrat";
export const font_weight_main = "font-medium";

export const quick_zoom =
  "transform transition-transform duration-100 ease-in-out hover:scale-105";

export const lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

// https://tailwindcss.com/plus/ui-blocks?ref=sidebar
export default function Layout() {
  return (
    <>
      <Navbar />
      <main
        className={`w-full min-h-screen ${bg_color} ${font_main} ${font_weight_main} ${text_color_main}`}
      >
        <Outlet /> {/* Renders the current page */}
      </main>
      <Footer />
    </>
  );
}
