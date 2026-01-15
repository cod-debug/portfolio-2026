import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Contact from "../components/contact/Contact";
import { motion, useScroll } from "framer-motion";
import Separator from "../components/Separator";

function Layout() {
  const { scrollYProgress } = useScroll();
  return (
    <main>
      
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className='scroll-progress-bar'
      />
      <Header />
      <Outlet />
      
      <Separator />
      <Contact />
    </main>
  );
}
export default Layout;