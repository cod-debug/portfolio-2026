import { FadeInRight, FadeInUp } from "../animations/Animations";
import Button from "../Button";
import Container from "../Container";
import ProjectSamples from "../projects-sample/ProjectSamples";
import Separator from "../Separator";
import { RxCaretRight } from "react-icons/rx";

function About() {
    const year = new Date().getFullYear();
    const startYear = 2020;
    const yearsOfExperience = year - startYear;

    return (
        <Container className="my-12" id="about">
            <FadeInRight>
                <div className="flex items-center gap-2 mb-8">
                    <div className="font-bold rounded-full w-fit p-1 flex">
                        <RxCaretRight className="text-3xl text-amber-600 -ml-3" />
                        <RxCaretRight className="-ml-5 text-3xl -mr-3 text-amber-500" />
                    </div>
                    <div className="tracking-wider text-xl text-light">
                        ABOUT ME
                    </div>
                    <div className="grow">
                        <Separator />
                    </div>
                </div>
            </FadeInRight>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 text-light">
                <div className="lg:col-span-4">
                    <FadeInUp>
                        <div className="experience-section bg-linear-to-br from-amber-500 via-amber-200 to-primary-background rounded-xl p-0.5">
                            <div className="experience-inner h-full rounded-xl p-4 bg-primary-background">
                                <div className="flex flex-col gap-4 h-full">
                                    <div className="flex items-center font-bold bg-linear-to-t from-amber-500 to-amber-200 text-transparent bg-clip-text text-6xl gap-4">
                                        <div className="text-8xl ">
                                            {yearsOfExperience}+
                                        </div>
                                        <div>
                                            <div className="text-4xl">Years</div>
                                            <div className="text-xl">Experience</div>
                                        </div>
                                    </div>
                                    <Separator />
                                    <div className="grow">
                                        <ul className="pl-6 list-disc">
                                            <li>Build high-performance apps using Laravel & Vue</li>
                                            <li>Help teams reduce manual work and streamline workflows</li>
                                            <li>Modernized a mobile application by migrating it from Xamarin to Flutter</li>
                                            <li>Built a complete point-of-sale system with inventory management</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FadeInUp>
                </div>
                <div className="text-muted-labels lg:col-span-8">
                    <ProjectSamples />
                </div>
            </div>
        </Container>
    );
}

export default About;
