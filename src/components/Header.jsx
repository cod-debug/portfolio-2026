import { useState } from "react";
import Container from "./Container";

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Container className="sticky top-0 bg-primary-background pt-4 pb-2 z-50">
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
                        <ul className="flex gap-6 md:gap-16 text-primary-accent">
                            <li><a href="#">ME</a></li>
                            <li><a href="#">ABOUT</a></li>
                            <li><a href="#">PROJECTS</a></li>
                            <li><a href="#">CONTACT</a></li>
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
                    <div className="md:hidden mt-2">
                        <ul className="flex flex-col gap-2 text-primary-accent absolute bg-primary-background w-full left-0 rounded-lg py-4 px-8">
                            <li className="border-b border-muted-labels/20 py-2"><a href="#">ME</a></li>
                            <li className="border-b border-muted-labels/20 py-2"><a href="#">ABOUT</a></li>
                            <li className="border-b border-muted-labels/20 py-2"><a href="#">PROJECTS</a></li>
                            <li className="border-b border-muted-labels/20 py-2"><a href="#">CONTACT</a></li>
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
    );
}

export default Header;
