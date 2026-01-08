import Button from "../Button";
import Container from "../Container";
import ProjectSamples from "../projects/ProjectSamples";
import Separator from "../Separator";
import { RxCaretRight } from "react-icons/rx";

function About() {
    return (
        <Container className="my-8" id="about">
            <div className="flex items-center gap-2 mb-8">
                <div className="font-bold rounded-full bg-[#D8DFE967] p-1 w-fit flex">
                    <RxCaretRight className="text-3xl text-accent-blue" />
                    <RxCaretRight className="-ml-5 text-3xl text-primary-accent" />
                </div>
                <div className="tracking-wider text-xl text-primary-text">ABOUT ME</div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                <div className="experience-section rounded-xl md:col-span-4 p-2">
                    <div className="experience-inner h-full rounded-xl p-4">
                        <div className="flex flex-col gap-4 h-full">
                            <div className="flex items-center font-bold">
                                <div className="text-8xl">5+</div>
                                <div>
                                    <div className="text-4xl">Years</div>
                                    <div className="text-xl">Experience</div>
                                </div>
                            </div>
                            <Separator />
                            <div className="grow">
                                <p>Expert in Frontend &amp; Backend Development</p>
                                <br />
                                <p>Specializing in Php, Laravel, JavaScript, Vue, React, Node.js, Python, Django and more.</p>
                            </div>
                            <Button>LEARN MORE</Button>
                        </div>
                    </div>
                </div>
                <div className="text-muted-labels md:col-span-8">
                    <ProjectSamples />
                </div>
            </div>
        </Container>
    );
}

export default About;
