import About from "../components/about/About"
import Banner from "../components/banner/Banner"
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
        </>
    );
}

export default HomePage;
