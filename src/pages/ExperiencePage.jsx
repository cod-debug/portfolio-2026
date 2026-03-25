import { useEffect } from "react";
import { Helmet } from "react-helmet";
import Container from "../components/Container";
import TimelineItemEnd from "../components/experience/TimelineItemEnd";
import TimelineItemLeft from "../components/experience/TimelineItemLeft";
import TimelineItemRight from "../components/experience/TimelineItemRight";
import TimelineItemStart from "../components/experience/TimelineItemStart";
import { FadeIn, FadeInLeft, FadeInRight } from "../components/animations/Animations";
import timelineData from "../data/experience/timeline-data.json";

export default function ExperiencePage() {
    const pageUrl = "https://yourportfolio.com/#/experience";
    const pageTitle = "Experience - Roy Dueñas | Full Stack Developer Career Journey";
    const pageDescription = "Explore Roy Dueñas's professional experience as a full stack developer. From migrating complex web applications to building AI platforms and mobile apps with Vue.js, React, and Flutter.";
    const keywords = "work experience, professional experience, full stack developer, Vue.js migration, React developer, Flutter mobile apps, web development career, AI platform development, Roy Dueñas experience, web application development, freelance projects, software engineering experience, custom software solutions, gldrp experience";
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    return (
        <Container>
            <Helmet>
                {/* Primary Meta Tags */}
                <title>{pageTitle}</title>
                <meta name="title" content={pageTitle} />
                <meta name="description" content={pageDescription} />
                <meta name="keywords" content={keywords} />
                <link rel="canonical" href={pageUrl} />
                
                {/* Open Graph / Facebook */}
                <meta property="og:type" content="profile" />
                <meta property="og:url" content={pageUrl} />
                <meta property="og:title" content={pageTitle} />
                <meta property="og:description" content={pageDescription} />
                <meta property="og:image" content="https://gldrp.com/og-image-experience.jpg" />
                <meta property="og:site_name" content="gldrp.com - Roy Duenas" />
                <meta name="author" content="Roy Duenas" />
                <meta name="robots" content="index, follow" />
                
                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content={pageUrl} />
                <meta property="twitter:title" content={pageTitle} />
                <meta property="twitter:description" content={pageDescription} />
                <meta property="twitter:image" content="https://gldrp.com/og-image-experience.jpg" />
                
                {/* Structured Data - JSON-LD */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "ProfilePage",
                        "name": "Roy Duenas Professional Experience - gldrp.com",
                        "description": pageDescription,
                        "url": pageUrl,
                        "mainEntity": {
                            "@type": "Person",
                            "name": "Roy Duenas",
                            "alternateName": "Roy Dueñas",
                            "jobTitle": "Full Stack Web Developer",
                            "brand": {
                                "@type": "Brand",
                                "name": "gldrp",
                                "url": "https://gldrp.com"
                            },
                            "hasOccupation": {
                                "@type": "Occupation",
                                "name": "Full Stack Developer at gldrp",
                                "skills": [
                                    "Vue.js",
                                    "React",
                                    "Flutter",
                                    "JavaScript",
                                    "TypeScript",
                                    "Web Application Development",
                                    "Mobile Application Development",
                                    "AI Platform Development",
                                    "gldrp projects"
                                ]
                            }
                        },
                        "breadcrumb": {
                            "@type": "BreadcrumbList",
                            "itemListElement": [{
                                "@type": "ListItem",
                                "position": 1,
                                "name": "Home",
                                "item": "https://gldrp.com"
                            }, {
                                "@type": "ListItem",
                                "position": 2,
                                "name": "Experience",
                                "item": "https://gldrp.com/#/experience"
                            }]
                        }
                    })}
                </script>
            </Helmet>
            
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
                        QR-code login—perfect for users who don't have email
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