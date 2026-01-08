import Button from "./Button";
import Container from "./Container";
import Separator from "./Separator";
import { RxCaretRight } from "react-icons/rx";

function About() {
    return (
        <Container className="my-8">
            <div className="flex items-center gap-2 mb-8">
                <div className="font-bold rounded-full bg-[#D8DFE967] p-1 w-fit flex">
                    <RxCaretRight className="text-3xl text-accent-blue" />
                    <RxCaretRight className="-ml-5 text-3xl text-primary-accent" />
                </div>
                <div className="tracking-wider text-xl text-primary-text">ABOUT ME</div>
            </div>
            <div className="flex flex-col md:flex-row gap-4">
                <div className="experience-section w-md rounded-xl p-2">
                    <div className="experience-inner rounded-xl p-4">
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center font-bold">
                                <div className="text-8xl">5+</div>
                                <div>
                                    <div className="text-4xl">Years</div>
                                    <div className="text-xl">Experience</div>
                                </div>
                            </div>
                            <Separator />
                            <div>
                                <p>Expert in Frontend &amp; Backend Development</p>
                                <br />
                                <p>Specializing in Php, Laravel, JavaScript, Vue, React, Node.js, Python, Django and more.</p>
                            </div>
                            <Button>LEARN MORE</Button>
                        </div>
                    </div>
                </div>
                <div className="text-muted-labels">
                    Projects will be displayed here soon...
                </div>
            </div>
        </Container>
    );
}

export default About;
