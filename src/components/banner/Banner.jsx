import { Link } from "react-router-dom";
import MeImg from "../../assets/me.png";
import { FadeInLeft, FadeInRight, FadeInUp } from "../animations/Animations";
import Button from "../Button";
import Container from "../Container";
import Separator from "../Separator";

function Banner() {
    return (
        <Container id="home">
            <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-12 px-8 py-16 relative">
                <div className="w-3/4 flex flex-col gap-3 text-center md:text-left">
                    <FadeInRight>
                        <div className="text-light text-xl">
                            Hi, I’m Roy
                        </div>
                    </FadeInRight>
                    <FadeInRight delay={0.4}>
                        <div className="text-light text-4xl font-bold">
                            <span>Full-Stack Developer</span>
                            <br />
                            <span className="text-secondary-accent">
                                specializing in scalable web apps
                            </span>
                        </div>
                    </FadeInRight>
                    <Separator />
                    <FadeInRight delay={0.6}>
                        <div className="text-light mb-4">
                            Recently rebuilt a 7-role business platform in under 3 months—improving performance and reducing system errors.
                        </div>
                    </FadeInRight>
                    <FadeInRight delay={0.8}>
                        <div className="flex flex-col md:flex-row gap-2">
                            <div className="flex justify-center md:justify-start">
                                <Button href="/#/#contact" btnType="accent">
                                    CONTACT ME
                                </Button>
                            </div>
                            <div>
                                <Link to="/projects">
                                    <div className="p-px bg-linear-to-tl from-[#191919] via-[#959494] to-[#191919] rounded-md w-fit mx-auto">
                                        <button className="w-fit text-light bg-primary-background cursor-pointer px-4 py-2 rounded-md tracking-wider font-medium">
                                            VIEW PROJECTS
                                        </button>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </FadeInRight>
                </div>
                <div className="hidden md:flex md:justify-end">
                    <FadeInLeft>
                        <div className="banner-me-shadows w-fit relative rounded-full overflow-hidden p-4">
                            <div className="banner-me-img overflow-hidden">
                                <div className="overlay w-9/10 h-9/10"></div>
                                <div className="inner z-10 relative">
                                    <img src={MeImg} alt="Me myself and I" />
                                </div>
                            </div>
                        </div>
                    </FadeInLeft>
                </div>
                <div className="w-full flex justify-center md:hidden">
                    <FadeInUp>
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
                    </FadeInUp>
                </div>
            </div>
        </Container>
    );
}

export default Banner;
