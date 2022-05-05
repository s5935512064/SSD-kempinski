import Nav from "./Nav";
import Footer from "./Footer";
import { motion, AnimatePresence } from "framer-motion"

const variants = {
    hidden: { opacity: 0, x: 0, y: 0 },
    enter: { opacity: 1, x: 0, y: 0, },
    exit: { opacity: 0, x: 0, y: 0 },
}

const Layout = ({ children }) => {
    return (
        <>
            <Nav />
            <motion.main
                variants={variants} // Pass the variant object into Framer Motion 
                initial="hidden" // Set the initial state to variants.hidden
                animate="enter" // Animated state to variants.enter
                exit="exit" // Exit state (used later) to variants.exit
                transition={{ type: 'linear', duration: 1 }} // Set the transition to linear
            >
                <div className="min-h-screen w-full bg-[#010F2A] relative ">
                    <div className="w-full h-screen bg-[url('/assets/manifestobg-f.png')]  bg-contain bg-no-repeat bg-fixed fixed opacity-20 bg-right"></div>
                    {children}
                </div>
            </motion.main>
            <Footer />
        </>
    );
}

export default Layout;