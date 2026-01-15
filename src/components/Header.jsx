import { useState } from "react";
import Container from "./Container";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const scrollWithOffset = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = -80; 
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
    }

    return (
        <div className="bg-primary-background sticky top-0 pt-4 pb-2 z-50">
            <Container>
                <header className="px-4 sm:px-8">
                    <div className="flex justify-between items-center">
                        {/* Logo */}
                        <div className="text-primary-text">
                            <div className="text-xl sm:text-2xl font-bold md:pl-5">
                                ROY DUEÑAS
                            </div>
                        </div>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex">
                            <ul className="flex gap-6 md:gap-16 text-steal-blue font-medium">
                                <li><HashLink smooth scroll={scrollWithOffset} to="/#home">ME</HashLink></li>
                                <li><HashLink smooth scroll={scrollWithOffset} to="/#about">ABOUT</HashLink></li>
                                <li><Link to="/projects">PROJECTS</Link></li>
                                <li><Link to="/experience">EXPERIENCE</Link></li>
                                <li><HashLink smooth scroll={scrollWithOffset} to="#contact">CONTACT</HashLink></li>
                            </ul>
                        </nav>

                        {/* Mobile Hamburger */}
                        <div className="md:hidden flex items-center">
                            <button
                                className="text-primary-accent focus:outline-none"
                                onClick={() => setIsOpen(!isOpen)}
                            >
                                {/* Hamburger icon */}
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    {isOpen && (
                        <div className="md:hidden">
                            <ul className="flex flex-col gap-2 text-steal-blue font-medium absolute bg-primary-background w-full left-0 rounded-lg py-4 px-8">
                                <li className="border-b border-muted-labels/20 py-2"><HashLink smooth scroll={scrollWithOffset} to="/#home">ME</HashLink></li>
                                <li className="border-b border-muted-labels/20 py-2"><HashLink smooth scroll={scrollWithOffset} to="/#about">ABOUT</HashLink></li>
                                <li className="border-b border-muted-labels/20 py-2"><Link to="/projects">PROJECTS</Link></li>
                                <li className="border-b border-muted-labels/20 py-2"><Link to="/experience">EXPERIENCE</Link></li>
                                <li className="border-b border-muted-labels/20 py-2"><HashLink smooth scroll={scrollWithOffset} to="/#contact">CONTACT</HashLink></li>
                            </ul>
                        </div>
                    )}

                    {/* Subtitle / Divider */}
                    <div className="items-center gap-2 mt-2 hidden md:flex">
                        <div className="w-10 h-px bg-muted-labels opacity-20"></div>
                        <div className="text-primary-accent text-xs">WEB DEVELOPER</div>
                        <div className="grow h-px bg-muted-labels opacity-20"></div>
                    </div>
                </header>
            </Container>
        </div>
    );
}

export default Header;
