import { useState } from "react";
import { Link } from "react-scroll";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const links = [
        { to: "about", label: "About" },
        { to: "works", label: "Works" },
        { to: "skills", label: "Skills" },
        { to: "highlights", label: "Highlights" },
        { to: "contact", label: "Contact" },
    ];

    return (
        <div className="w-full fixed z-50 bg-black border-b border-b-gray-800">
            {/* Top bar */}
            <div className="flex justify-between items-center p-2 md:px-3 text-2xl md:text-3xl">
                <div className="[font-family:'Syne'] font-bold text-white">
                    Ankit Saini
                </div>

                {/* Desktop Nav */}
                <div className="hidden [font-family:'Syne'] md:flex space-x-5">
                    {links.map((link) => (
                        <Link
                            key={link.to}
                            to={link.to}
                            smooth={true}
                            duration={500}
                            offset={-80}
                            spy={true}
                            activeClass="text-amber-400"
                            className="cursor-pointer transition-all duration-300"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                {/* Mobile menu toggle */}
                <div className="md:hidden">
                    <i
                        className={`fa-solid ${menuOpen ? "fa-xmark" : "fa-bars"} text-2xl`}
                        onClick={() => setMenuOpen(!menuOpen)}
                    ></i>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {menuOpen && (
                <div className="md:hidden absolute right-2 top-14 flex flex-col w-fit bg-black [font-family:'Syne'] space-y-4 py-4 px-6 text-xl border border-gray-800 rounded-xl shadow-lg">
                    {links.map((link) => (
                        <Link
                            key={link.to}
                            to={link.to}
                            smooth={true}
                            duration={500}
                            offset={-80}
                            spy={true}
                            activeClass="text-amber-400"
                            className="cursor-pointer text-white transition-all duration-300 whitespace-nowrap"
                            onClick={() => setMenuOpen(false)} 
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Header;
