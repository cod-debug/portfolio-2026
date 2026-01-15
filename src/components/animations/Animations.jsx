import { motion } from "framer-motion";

export function FadeInUp({children, delay = 0.2}) { 
    return (
        <motion.div
        initial={{ y: 30, opacity: 0, }}
        whileInView={{ y: 0, opacity: 1, }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: delay }}
        >
            {children}
        </motion.div>
    )
}

export function FadeInLeft({children, delay = 0.2}) { 
    return (
        <motion.div
        initial={{ x: 30, opacity: 0, }}
        whileInView={{ x: 0, opacity: 1, }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: delay }}
        >
            {children}
        </motion.div>
    )
}

export function FadeInRight({children, delay = 0.2}) { 
    return (
        <motion.div
        initial={{ x: -30, opacity: 0, }}
        whileInView={{ x: 0, opacity: 1, }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: delay }}
        >
            {children}
        </motion.div>
    )
}

export function FadeIn({children, delay = 0.2, className = ""}) { 
    return (
        <motion.div
        initial={{ opacity: 0, }}
        whileInView={{  opacity: 1, }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: delay }}
        className={className}
        >
            {children}
        </motion.div>
    )
}