import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import ProjectItem from "../components/projects-page/ProjectItem";
import Separator from "../components/Separator";
import { FadeInLeft, FadeInRight, FadeInUp } from "../components/animations/Animations";
import Container from "../components/Container";
import sample_projects from "../data/projects/sample-projects";
import PreviewImagesModal from "../components/projects-page/PreviewImagesModal";
import Carousel from "react-multi-carousel";
import ProjectCarouselItem from "../components/projects-page/ProjectCarouselItem";

export default function ProjectsPage() {
    const pageUrl = "https://gldrp.com/#/projects";
    const pageTitle = "Projects - Roy Duenas Portfolio | Web & Mobile Applications";
    const pageDescription = "Explore gldrp projects by Roy Duenas (Roy Dueñas) - innovative web and mobile applications built with React, Vue.js, Flutter, and cutting-edge technologies. View gldrp.com portfolio demos and case studies.";
    const keywords = "Roy Duenas, Roy Duenas Jr, Roy Jr Duenas, Roy Jr. Dueñas, Roy Duenas projects, gldrp projects, gldrp, gldrp.com, Roy Dueñas projects, web projects, mobile apps, React projects, Vue.js applications, Flutter apps, portfolio projects, web development, software projects, gldrp portfolio, system developer, Dumaguete, Negros Oriental, Negros Occidental, Dumaguete Software Developer, Dumaguete System Developer, developer in dumaguete, developers in dumaguete";
    
    const screenSize = window.innerWidth;
    const mdSize = 768;
    const isLessThanMd = screenSize < mdSize;
    const [isOpenPreviewImagesModal, setIsOpenPreviewImagesModal] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const openPreviewImagesModal = (project) => {
        // Implement modal opening logic here
        setSelectedProject(project);
        setIsOpenPreviewImagesModal(true);
    }
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const carousel_responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 1,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

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
                <meta property="og:type" content="website" />
                <meta property="og:url" content={pageUrl} />
                <meta property="og:title" content={pageTitle} />
                <meta property="og:description" content={pageDescription} />
                <meta property="og:image" content="https://gldrp.com/logo.png" />
                <meta property="og:site_name" content="gldrp.com - Roy Duenas Projects" />
                <meta name="author" content="Roy Duenas" />
                <meta name="robots" content="index, follow" />
                
                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content={pageUrl} />
                <meta property="twitter:title" content={pageTitle} />
                <meta property="twitter:description" content={pageDescription} />
                <meta property="twitter:image" content="https://gldrp.com/logo.png" />
                
                {/* Structured Data - JSON-LD */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "CollectionPage",
                        "name": "gldrp Projects Portfolio",
                        "description": pageDescription,
                        "url": pageUrl,
                        "author": {
                            "@type": "Person",
                            "name": "Roy Duenas",
                            "alternateName": "Roy Dueñas",
                            "brand": {
                                "@type": "Brand",
                                "name": "gldrp",
                                "url": "https://gldrp.com"
                            }
                        },
                        "about": {
                            "@type": "CreativeWork",
                            "name": "gldrp Web and Mobile Application Projects"
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
                                "name": "gldrp Projects",
                                "item": "https://gldrp.com/#/projects"
                            }]
                        }
                    })}
                </script>
            </Helmet>
            
            <div className="text-center p-4 gap-4 flex flex-col">
                <FadeInRight>
                    <h1 className="text-4xl font-bold mt-12 text-steal-blue">
                        PROJECTS
                    </h1>
                </FadeInRight>
                <FadeInLeft>
                    <p className="text-muted-labels">
                        A collection of projects I've built using modern web
                        technologies, focusing on usability, performance and
                        clean design.
                    </p>
                </FadeInLeft>
            </div>
            
            <div className="hidden lg:block">
                <FadeInUp>
                    <div className="project-card rounded-lg">
                        <Carousel responsive={carousel_responsive}
                            infinite={true}
                            className="skill-slider"
                        >
                            {sample_projects.map((project, index) => (
                                <ProjectCarouselItem project={project} key={`${project.title}-${index}`}  openPreviewImagesModal={openPreviewImagesModal} />
                            ))}
                        </Carousel>
                    </div>
                </FadeInUp>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 my-8 text-primary-text gap-8">
                {sample_projects.map((project, index) => (
                    <ProjectItem
                        project={project}
                        animationDelay={((index % (isLessThanMd ? 1 : 3)) + 1) * 0.2}
                        key={project.title}
                        openPreviewImagesModal={openPreviewImagesModal}
                    />
                ))}
            </div>
            <Separator className="my-8" />
            <p className="text-muted-labels mb-8">
                More web/mobile application projects will be posted soon...
            </p>
            <PreviewImagesModal
                project={selectedProject}
                isOpenPreviewImagesModal={isOpenPreviewImagesModal}
                setIsOpenPreviewImagesModal={setIsOpenPreviewImagesModal}
            />
        </Container>
    );
}
