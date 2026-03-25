import { Helmet } from "react-helmet";
import About from "../components/about/About"
import Banner from "../components/banner/Banner"
import Separator from "../components/Separator"
import Skills from "../components/skills/Skills"

function HomePage() {
    const pageUrl = "https://gldrp.com/";
    const pageTitle = "Roy Duenas - Full Stack Web Developer | gldrp.com Portfolio";
    const pageDescription = "Roy Duenas (Roy Dueñas) - Full stack web developer at gldrp.com specializing in modern web applications using React, Vue.js, Flutter, and more. Explore gldrp projects and portfolio showcasing innovative web and mobile development.";
    const keywords = "roy duenas, software developer dumaguete, web developer dumaguete, web developer negros oriental, Web Developer Negros occidental, Roy Duenas, gldrp.com, gldrp, gldrp projects, Roy Duenas, Roy Dueñas, gldrp, gldrp projects, gldrp software, gldrp system, gldrp web development, gldrp.com, gldrp projects, Full Stack Developer, Web Developer, React Developer, Vue.js Developer, Flutter Developer, JavaScript, TypeScript, Web Applications, Portfolio, Software Engineer, gldrp portfoliosystem developer, Dumaguete, Negros Oriental, Negros Occidental, Dumaguete Software Developer, Dumaguete System Developer, developer in dumaguete, developers in dumaguete, Roy Duenas, Roy Duenas Jr, Roy Jr Duenas, Roy Jr. Dueñas, Roy Duenas projects, gldrp projects, gldrp, gldrp.com, Roy Dueñas projects";
    
    return (
        <>
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
                <meta property="og:image" content={`${pageUrl}og-image.jpg`} />
                <meta property="og:site_name" content="gldrp.com - Roy Duenas Portfolio" />
                <meta name="author" content="Roy Duenas" />
                <meta name="robots" content="index, follow" />
                
                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content={pageUrl} />
                <meta property="twitter:title" content={pageTitle} />
                <meta property="twitter:description" content={pageDescription} />
                <meta property="twitter:image" content={`${pageUrl}og-image.jpg`} />
                
                {/* Structured Data - JSON-LD */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Person",
                        "name": "Roy Duenas",
                        "alternateName": "Roy Dueñas",
                        "jobTitle": "Full Stack Web Developer",
                        "description": "Full stack web developer at gldrp.com specializing in modern web applications and gldrp projects",
                        "url": pageUrl,
                        "brand": {
                            "@type": "Brand",
                            "name": "gldrp",
                            "url": "https://gldrp.com"
                        },
                        "sameAs": [
                            "https://gldrp.com"
                        ],
                        "knowsAbout": [
                            "React",
                            "Vue.js",
                            "Flutter",
                            "JavaScript",
                            "TypeScript",
                            "Web Development",
                            "Mobile Development",
                            "gldrp projects"
                        ],
                        "mainEntityOfPage": {
                            "@type": "WebSite",
                            "@id": "https://gldrp.com",
                            "name": "gldrp",
                            "url": "https://gldrp.com",
                            "description": "Roy Duenas portfolio and gldrp projects",
                            "author": {
                                "@type": "Person",
                                "name": "Roy Duenas"
                            }
                        }
                    })}
                </script>
            </Helmet>
            
            <Banner />
            <Separator />
            <About />
            <Separator />
            <Skills />
        </>
    );
}

export default HomePage;
