import Container from "../components/Container"
import TimelineItemLeft from "../components/experience/TimelineItemLeft";
import TimelineItemRight from "../components/experience/TimelineItemRight";

function ExperiencePage(){
    return(
        <Container className="p-8">
            <div className="p-4 gap-4 flex flex-col text-center">
                <h1 className="text-4xl font-bold mt-12 text-primary-accent">
                    EXPERIENCE
                </h1>
                <p className="text-muted-labels">I rebuilt a complex business web application from the ground up, migrating it from Angular to Vue.js (Quasar) in just three months. The platform serves multiple user types—seven in total—each with different access levels, tools, and workflows, resulting in a faster, more stable, and easier-to-maintain system. I also created an internal AI platform that allows company teams to easily use AI-powered features without worrying about technical complexity, helping streamline internal operations and future development.</p>
                <p className="text-muted-labels">Beyond web development, I modernized a mobile application by migrating it from Xamarin to Flutter, improving performance and long-term scalability. I also developed a secure mobile notification app that allows users to receive live updates from a web system using QR-code login—perfect for users who don’t have email addresses or mobile numbers. In addition, I built a complete point-of-sale system with inventory management entirely on my own. As part of improving existing systems, I upgraded a legacy stopwatch feature within a web application, replacing it with a modern, reliable, and bug-free solution.</p>
            </div>
            <div className="relative">
                <div className="absolute timeline-connector w-0.5"></div>
                <div className="flex items-center justify-center mb-10">
                    <div className="flex flex-col items-center self-stretch">
                        <div className="timeline-circle w-10">
                            <div className="timeline-circle-inner"></div>
                        </div>
                    </div>
                </div>
                <TimelineItemRight />
                <TimelineItemLeft />
                <div className="absolute timeline-connector w-0.5"></div>
                <div className="flex items-center justify-center mt-10">
                    <div className="flex flex-col items-center self-stretch">
                        <div className="timeline-circle w-10">
                            <div className="timeline-circle-inner"></div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default ExperiencePage;