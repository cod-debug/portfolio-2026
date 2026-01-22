import { useEffect } from "react";
import Container from "../components/Container";
import TimelineItemEnd from "../components/experience/TimelineItemEnd";
import TimelineItemLeft from "../components/experience/TimelineItemLeft";
import TimelineItemRight from "../components/experience/TimelineItemRight";
import TimelineItemStart from "../components/experience/TimelineItemStart";
import { FadeIn, FadeInLeft, FadeInRight } from "../components/animations/Animations";
import timelineData from "../data/experience/timeline-data.json";

function ExperiencePage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <Container>
            <div className="p-4 gap-4 flex flex-col text-center">
                <FadeInRight delay={0.2}>
                    <h1 className="text-4xl font-bold mt-12 text-steal-blue">
                        EXPERIENCE
                    </h1>
                </FadeInRight>
                <FadeInLeft delay={0.4}>
                    <p className="text-primary-text">
                        I rebuilt a complex business web application from the
                        ground up, migrating it from Angular to Vue.js (Quasar)
                        in just three months. The platform serves multiple user
                        types—seven in total—each with different access levels,
                        tools, and workflows, resulting in a faster, more
                        stable, and easier-to-maintain system. I also created an
                        internal AI platform that allows company teams to easily
                        use AI-powered features without worrying about technical
                        complexity, helping streamline internal operations and
                        future development.
                    </p>
                </FadeInLeft>
                <FadeInRight delay={0.6}>
                    <p className="text-primary-text">
                        Beyond web development, I modernized a mobile
                        application by migrating it from Xamarin to Flutter,
                        improving performance and long-term scalability. I also
                        developed a secure mobile notification app that allows
                        users to receive live updates from a web system using
                        QR-code login—perfect for users who don’t have email
                        addresses or mobile numbers. In addition, I built a
                        complete point-of-sale system with inventory management
                        entirely on my own. As part of improving existing
                        systems, I upgraded a legacy stopwatch feature within a
                        web application, replacing it with a modern, reliable,
                        and bug-free solution.
                    </p>
                </FadeInRight>
            </div>
            <div className="relative mt-12 mb-8">
                <FadeIn delay={0.4} className="absolute timeline-connector w-0.5"></FadeIn>
                <FadeIn>
                    <TimelineItemStart />
                </FadeIn>
                {timelineData.map((timelineItem, index) => {
                    return (
                        <div key={index}>
                            {index % 2 === 1 ? (
                                <FadeInRight>
                                    <TimelineItemLeft timelineItem={timelineItem} />
                                </FadeInRight>
                            ) : (
                                <FadeInLeft>
                                    <TimelineItemRight
                                        timelineItem={timelineItem}
                                    />
                                </FadeInLeft>
                            )}
                        </div>
                    );
                })}
                <TimelineItemEnd />
            </div>
        </Container>
    );
}

export default ExperiencePage;
