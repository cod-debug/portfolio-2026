import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { motion, useScroll } from "framer-motion";

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
    </main>
  );
}
export default Layout;