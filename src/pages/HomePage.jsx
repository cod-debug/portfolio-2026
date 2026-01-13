import About from "../components/about/About"
import Banner from "../components/banner/Banner"
import Contact from "../components/contact/Contact"
import Separator from "../components/Separator"
import Skills from "../components/skills/Skills"

function HomePage() {
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
