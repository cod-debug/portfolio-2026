import { useEffect } from "react";
import About from "../components/about/About"
import Banner from "../components/banner/Banner"
import Contact from "../components/contact/Contact"
import Separator from "../components/Separator"
import Skills from "../components/skills/Skills"

function HomePage() {
    useEffect(() => {
        document.documentElement.style.scrollBehavior = 'auto';
        window.scrollTo(0, 0);
        setTimeout(() => {
            document.documentElement.style.scrollBehavior = 'smooth';
        }, 0);
    }, []);
    return (
        <>
            <Banner />
            <Separator />
            <About />
            <Separator />
            <Skills />
            <Separator />
            <Contact />
        </>
    );
}

export default HomePage;
