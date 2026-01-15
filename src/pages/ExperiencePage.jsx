import { useEffect } from "react";
import Container from "../components/Container";
import TimelineItemEnd from "../components/experience/TimelineItemEnd";
import TimelineItemLeft from "../components/experience/TimelineItemLeft";
import TimelineItemRight from "../components/experience/TimelineItemRight";
import TimelineItemStart from "../components/experience/TimelineItemStart";

const timelineData = [
    {
        position: "Full-Stack Developer",
        company: "Ingenuiti, Dumaguete City, Philippines",
        duration: "June 2023 - Present",
        description: "Responsible for developing and maintaining websites/web applications. Technologies used: <strong>HTML, CSS, JavaScript, CodeIgniter, Laravel, VueJs, ReactJs, Flutter (Dart), Docker, Vagrant Box</strong>"
    },
    {
        position: "Software Engineer",
        company: "Telcom Live Content, Inc.",
        duration: "February 2021 - April 2023 (full-time)",
        description: "Responsible for leading a front-end team, developing and maintaining websites/web applications, and collaborating with Project Managers and System Analysts. Technologies used: <strong>Laravel, CodeIgniter, Nodejs (Express), Vuejs (NuxtJs and Quasar), ReactJs, React Native, Docker.</strong>"
    },
    {
        position: "Management Information System Personnel",
        company: "Southland College, Kabankalan City Inc.",
        duration: "August 2020 - February 2021 (full-time)",
        description: "Responsible for creating the school’s website and digital logbook with RFID for both students and employees. Technologies used: <strong>PHP, HTML, CSS, JavaScript, JQuery, and Filezilla for FTP.</strong>"
    },
    {
        position: "Web Developer",
        company: "323Col Solutions",
        duration: "June 2020 - August 2020 (part-time)",
        description: "Created their own website. <strong>Technology used: HTML, CSS, JavaScript, PHP</strong>"
    },
    {
        position: "Web Developer",
        company: "Coders Tribe",
        duration: "June 2020 - August 2020 (part-time)",
        description: "Created an election voting app for doctors. Technology used: <strong>HTML, CSS, JavaScript, Django (Python)</strong>"
    },
    {
        position: "Web Developer (Trainee)",
        company: "Servio Tech",
        duration: "January 2020 - June 2020 (part-time)",
        description: "Responsible for creating reports using <strong>crystal report</strong> and <strong>SQL</strong>, manage <strong>WIX website</strong>. Technologies used: <strong>EBT accounting app, SQL, WIX corvid, Crystal report</strong>."
    }
]

function ExperiencePage(){
    useEffect(() => {
        // Temporarily disable smooth scroll behavior
        window.scrollTo(0, 0);
    }, []);
    return(
        <Container>
            <div className="p-4 gap-4 flex flex-col text-center">
                <h1 className="text-4xl font-bold mt-12 text-steal-blue">
                    EXPERIENCE
                </h1>
                <p className="text-primary-text">I rebuilt a complex business web application from the ground up, migrating it from Angular to Vue.js (Quasar) in just three months. The platform serves multiple user types—seven in total—each with different access levels, tools, and workflows, resulting in a faster, more stable, and easier-to-maintain system. I also created an internal AI platform that allows company teams to easily use AI-powered features without worrying about technical complexity, helping streamline internal operations and future development.</p>
                <p className="text-primary-text">Beyond web development, I modernized a mobile application by migrating it from Xamarin to Flutter, improving performance and long-term scalability. I also developed a secure mobile notification app that allows users to receive live updates from a web system using QR-code login—perfect for users who don’t have email addresses or mobile numbers. In addition, I built a complete point-of-sale system with inventory management entirely on my own. As part of improving existing systems, I upgraded a legacy stopwatch feature within a web application, replacing it with a modern, reliable, and bug-free solution.</p>
            </div>
            <div className="relative mt-12 mb-8">
                <div className="absolute timeline-connector w-0.5"></div>
                <TimelineItemStart />
                {
                    timelineData.map((timelineItem, index) => {
                        return(
                            <div key={index}>
                                {index % 2 === 1 ? <TimelineItemLeft timelineItem={timelineItem} /> : <TimelineItemRight timelineItem={timelineItem} />}
                            </div>
                        )
                    })
                }
                <TimelineItemEnd />
            </div>
        </Container>
    )
}

export default ExperiencePage;