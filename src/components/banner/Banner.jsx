import MeImg from "../../assets/me.png";
import "./Banner.css";
import Button from "../Button";
import Container from "../Container";
import Separator from "../Separator";

function Banner() {
    return (
        <Container id="home">
            <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-8 px-8 py-16">
                <div className="w-full flex flex-col gap-3 text-center md:text-left">
                    <div className="text-primary-text text-xl">
                        Hi, I'm Roy!
                    </div>
                    <div className="text-primary-text text-4xl font-bold">
                        <span>Creating Modern &amp; </span>
                        <span className="text-primary-accent">
                            Responsive Web Applications
                        </span>
                    </div>
                    <Separator />
                    <div className="text-primary-text mb-4">
                        Building digital experiences with passion and precision
                    </div>
                    <div className="flex justify-center md:justify-start">
                        <Button href="/resume/RESUME-ROY.pdf" download>DOWNLOAD RESUME</Button>
                    </div>
                </div>
                <div className="w-full hidden md:flex">
                    <div className="banner-me-shadows w-fit mx-auto relative rounded-full overflow-hidden p-12">
                        <div className="banner-me-img overflow-hidden">
                            <div className="overlay w-9/10 h-9/10"></div>
                            <div className="inner z-10 relative">
                                <img src={MeImg} alt="Me myself and I" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full flex justify-center md:hidden">
                    <div className="relative aspect-square w-auto max-w-xs">
                        <div className="rounded-full overflow-hidden w-full h-full relative">
                            <div className="banner-me-img w-full h-full relative">
                                <div className="overlay absolute inset-0 bg-black/20 z-0"></div>
                                <img
                                    src={MeImg}
                                    alt="Me myself and I"
                                    className="w-full h-full object-cover z-10 relative"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default Banner;
