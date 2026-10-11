import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowDown, Download, ExternalLink } from "lucide-react";
import { profile } from "../data/portfolio";

const letters = {
    hidden: {
        opacity: 0,
        y: 20,
    },

    show: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.035,
        },
    }),
};

const heroImages = [
    {
        src: "/images/profile.png",
        title: "Software Developer",
        subtitle: "React • React Native • Node.js",
    },
    {
        src: "/images/developer.png",
        title: "Full Stack Developer",
        subtitle: "Web • Backend • Mysql",
    },
    {
        src: "/images/mobile-app.png",
        title: "Mobile Development",
        subtitle: "React Native Applications",
    },
    {
        src: "/images/iknits.png",
        title: "Full Stack Developer",
        subtitle: "Web • Backend • Mysql",

    },
    {
        src: "/images/ticket.png",
        title: "Full Stack Developer",
        subtitle: "Web • Backend • Mysql",

    },
    {
        src: "/images/coding.png",
        title: "Building Digital Products",
        subtitle: "Modern & Scalable Solutions",
    },
];

export default function Hero() {
    const [activeImage, setActiveImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveImage((previous) => (previous + 1) % heroImages.length);
        }, 4000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <section
            id="home"
            className="bg-grid relative flex min-h-screen items-center overflow-hidden px-6"
        >
            {/* Background Orbs */}
            <div className="orb left-[-10rem] top-24 h-96 w-96 bg-violet-600" />

            <div className="orb bottom-10 right-[-8rem] h-96 w-96 bg-cyan-500" />

            <div className="relative mx-auto grid max-w-6xl gap-12 py-32 md:grid-cols-[1.4fr_.8fr] md:items-center">
                {/* Left Content */}
                <div>
                    <motion.p
                        initial={{
                            opacity: 0,
                            y: 10,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            duration: 0.6,
                        }}
                        className="mb-5 text-sm font-semibold tracking-[.25em] text-cyan-300"
                    >
                        WELCOME TO MY PORTFOLIO
                    </motion.p>

                    {/* Name + Role */}
                    <h1 className="mb-6 text-4xl font-black leading-[1.1] md:text-6xl">
                        {profile.name.split("").map((letter, index) => (
                            <motion.span
                                key={index}
                                custom={index}
                                variants={letters}
                                initial="hidden"
                                animate="show"
                            >
                                {letter}
                            </motion.span>
                        ))}

                        <motion.span
                            initial={{
                                opacity: 0,
                                y: 20,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                delay: 0.45,
                                duration: 0.6,
                            }}
                            className="mt-2 block text-3xl gradient-text md:text-5xl"
                        >
                            {profile.role}
                        </motion.span>
                    </h1>

                    {/* Tagline */}
                    <motion.p
                        initial={{
                            opacity: 0,
                            y: 20,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            delay: 0.6,
                            duration: 0.6,
                        }}
                        className="max-w-xl text-lg leading-8 text-slate-300"
                    >
                        {profile.tagline}
                    </motion.p>

                    {/* Buttons */}
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 20,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            delay: 0.8,
                            duration: 0.6,
                        }}
                        className="mt-8 flex flex-wrap gap-4"
                    >
                        <motion.a
                            href="#projects"
                            whileHover={{
                                scale: 1.05,
                            }}
                            whileTap={{
                                scale: 0.97,
                            }}
                            className="flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-slate-950 transition"
                        >
                            View Projects
                            <ExternalLink size={17} />
                        </motion.a>

                        <motion.a
                            href={profile.resume}
                            download
                            whileHover={{
                                scale: 1.05,
                            }}
                            whileTap={{
                                scale: 0.97,
                            }}
                            className="glass flex items-center gap-2 rounded-xl px-5 py-3 font-semibold transition hover:border-violet-400"
                        >
                            Download Resume
                            <Download size={17} />
                        </motion.a>
                    </motion.div>
                </div>

                {/* Dynamic Image Section */}
                <motion.div
                    animate={{
                        y: [-10, 10, -10],
                        rotate: [-1, 1, -1],
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="glass relative mx-auto flex h-80 w-80 items-center justify-center overflow-hidden rounded-[2.5rem] md:h-96 md:w-96"
                >
                    {/* Background Glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 via-transparent to-cyan-400/20" />

                    {/* Animated Image */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeImage}
                            initial={{
                                opacity: 0,
                                scale: 0.85,
                                rotate: -5,
                            }}
                            animate={{
                                opacity: 1,
                                scale: 1,
                                rotate: 0,
                            }}
                            exit={{
                                opacity: 0,
                                scale: 1.08,
                                rotate: 5,
                            }}
                            transition={{
                                duration: 0.7,
                                ease: "easeInOut",
                            }}
                            className="absolute inset-5 overflow-hidden rounded-[2rem]"
                        >
                            {/* Image */}
                            <img
                                src={heroImages[activeImage].src}
                                alt={heroImages[activeImage].title}
                                className="h-full w-full object-contain"
                            />

                            {/* Image Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/10 to-transparent" />

                            {/* Image Information */}
                            <motion.div
                                initial={{
                                    opacity: 0,
                                    y: 15,
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                transition={{
                                    delay: 0.3,
                                }}
                                className="absolute bottom-6 left-6 right-6"
                            >
                                <h3 className="text-lg font-bold text-white">
                                    {heroImages[activeImage].title}
                                </h3>

                                <p className="mt-1 text-sm text-slate-300">
                                    {heroImages[activeImage].subtitle}
                                </p>
                            </motion.div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Image Indicators */}
                    <div className="absolute bottom-3 left-1/2 z-20 flex -translate-x-1/2 items-center gap-1.5">
                        {heroImages.map((_, index) => (
                            <button
                                key={index}
                                type="button"
                                onClick={() => {
                                    setActiveImage(index);
                                }}
                                aria-label={`Show image ${index + 1}`}
                                className={`h-1.5 rounded-full transition-all duration-300 ${activeImage === index
                                    ? "w-6 bg-white"
                                    : "w-1.5 bg-white/40 hover:bg-white/70"
                                    }`}
                            />
                        ))}
                    </div>

                    {/* Decorative Border */}
                    <div className="pointer-events-none absolute inset-3 rounded-[2.2rem] border border-white/10" />

                    {/* Floating Glow */}
                    <motion.div
                        animate={{
                            scale: [1, 1.15, 1],
                            opacity: [0.2, 0.4, 0.2],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-violet-500/30 blur-3xl"
                    />

                    <motion.div
                        animate={{
                            scale: [1.15, 1, 1.15],
                            opacity: [0.3, 0.15, 0.3],
                        }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="pointer-events-none absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-cyan-500/30 blur-3xl"
                    />
                </motion.div>
            </div>

            {/* Scroll Down */}
            <motion.a
                href="#about"
                initial={{
                    opacity: 0,
                }}
                animate={{
                    opacity: 1,
                }}
                transition={{
                    delay: 1.2,
                }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-400 transition hover:text-white"
            >
                <ArrowDown className="animate-bounce" />
            </motion.a>
        </section>
    );
}
