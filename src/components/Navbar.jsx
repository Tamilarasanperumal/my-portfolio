import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download, ArrowUpRight, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [active, setActive] = useState("home");

    const links = [
        { name: "Home", id: "home" },
        { name: "About", id: "about" },
        { name: "Skills", id: "skills" },
        { name: "Projects", id: "projects" },
        { name: "Experience", id: "experience" },
        { name: "Contact", id: "contact" },
    ];

    /*
     * Detect current section while scrolling
     */
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 30);

            const sections = links.map((item) => item.id);

            let currentSection = "home";

            for (const id of sections) {
                const section = document.getElementById(id);

                if (!section) continue;

                const rect = section.getBoundingClientRect();

                if (rect.top <= 180) {
                    currentSection = id;
                }
            }

            setActive(currentSection);
        };

        window.addEventListener("scroll", handleScroll, {
            passive: true,
        });

        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    /*
     * Smooth scroll to section
     */
    const scrollToSection = (id) => {
        const section = document.getElementById(id);

        if (!section) return;

        const navbarOffset = 100;

        const sectionTop =
            section.getBoundingClientRect().top + window.scrollY - navbarOffset;

        window.scrollTo({
            top: sectionTop,
            behavior: "smooth",
        });

        setActive(id);
        setOpen(false);
    };

    return (
        <header className="fixed left-0 top-0 z-50 w-full px-4 pt-4">
            <motion.nav
                initial={{
                    y: -30,
                    opacity: 0,
                }}
                animate={{
                    y: 0,
                    opacity: 1,
                }}
                transition={{
                    duration: 0.6,
                    ease: "easeOut",
                }}
                className={`
                    relative mx-auto flex max-w-7xl items-center
                    justify-between rounded-2xl border
                    px-4 py-3 transition-all duration-500
                    md:px-6
                    ${
                        scrolled
                            ? "border-white/15 bg-slate-950/80 shadow-2xl shadow-violet-950/30 backdrop-blur-2xl"
                            : "border-white/10 bg-white/[0.04] backdrop-blur-xl"
                    }
                `}
            >
                {/* ========================================
                    Animated Background Glow
                ======================================== */}
                <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl">
                    <motion.div
                        animate={{
                            x: [0, 15, 0],
                            y: [0, 10, 0],
                            opacity: [0.5, 0.8, 0.5],
                        }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="absolute -left-10 -top-10 h-24 w-24 rounded-full bg-violet-500/10 blur-3xl"
                    />

                    <motion.div
                        animate={{
                            x: [0, -15, 0],
                            y: [0, -10, 0],
                            opacity: [0.4, 0.7, 0.4],
                        }}
                        transition={{
                            duration: 7,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="absolute -bottom-10 right-10 h-20 w-20 rounded-full bg-cyan-500/10 blur-3xl"
                    />
                </div>

                {/* ========================================
                    Logo
                ======================================== */}
                <motion.button
                    type="button"
                    whileHover={{
                        scale: 1.02,
                    }}
                    whileTap={{
                        scale: 0.97,
                    }}
                    onClick={() => scrollToSection("home")}
                    className="group relative flex items-center gap-3"
                    aria-label="Go to home"
                >
                    <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-violet-500 via-purple-500 to-cyan-400 shadow-lg shadow-violet-500/30">
                        <Sparkles
                            size={19}
                            className="text-white transition-transform duration-500 group-hover:rotate-180"
                        />

                        <div className="absolute inset-0 bg-white/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    </div>

                    <div className="hidden text-left sm:block">
                        <div className="text-sm font-black tracking-wide text-white">
                            TAMILARASAN PERUMAL
                        </div>

                        <div className="text-[10px] font-medium uppercase tracking-[0.25em] text-slate-400">
                            Software Developer
                        </div>
                    </div>
                </motion.button>

                {/* ========================================
                    Desktop Navigation
                ======================================== */}
                <nav className="hidden items-center gap-1 lg:flex">
                    {links.map((link) => (
                        <motion.button
                            key={link.id}
                            type="button"
                            onClick={() => scrollToSection(link.id)}
                            whileHover={{
                                y: -1,
                            }}
                            whileTap={{
                                scale: 0.96,
                            }}
                            className={`
                                relative rounded-xl px-4 py-2.5
                                text-sm font-medium
                                transition-all duration-300
                                ${
                                    active === link.id
                                        ? "text-white"
                                        : "text-gray-400 hover:text-white"
                                }
                            `}
                        >
                            {/* Active background */}
                            {active === link.id && (
                                <motion.div
                                    layoutId="activeNav"
                                    className="absolute inset-0 rounded-xl border border-white/10 bg-white/10"
                                    transition={{
                                        type: "spring",
                                        stiffness: 400,
                                        damping: 30,
                                    }}
                                />
                            )}

                            <span className="relative z-10 flex items-center gap-2">
                                {link.name}

                                {active === link.id && (
                                    <motion.span
                                        layoutId="activeDot"
                                        className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50"
                                    />
                                )}
                            </span>
                        </motion.button>
                    ))}
                </nav>

                {/* ========================================
                    Desktop CTA
                ======================================== */}
                <div className="hidden items-center gap-2 lg:flex">
                    {/* Resume */}
                    <motion.a
                        href="/TamilarasanPerumal_UpdateResume.pdf"
                        download="Tamilarasan_Perumal_Resume.pdf"
                        whileHover={{
                            scale: 1.04,
                        }}
                        whileTap={{
                            scale: 0.96,
                        }}
                        className="group flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm font-semibold text-slate-200 transition-all hover:border-white/20 hover:bg-white/[0.08]"
                    >
                        <Download
                            size={15}
                            className="transition-transform duration-300 group-hover:-translate-y-0.5"
                        />
                        Resume
                    </motion.a>

                    {/* Let's Talk */}
                    <motion.button
                        type="button"
                        whileHover={{
                            scale: 1.04,
                            boxShadow: "0 0 30px rgba(139,92,246,0.35)",
                        }}
                        whileTap={{
                            scale: 0.96,
                        }}
                        onClick={() => scrollToSection("contact")}
                        className="group flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-violet-600/20"
                    >
                        Let's Talk
                        <ArrowUpRight
                            size={16}
                            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                    </motion.button>
                </div>

                {/* ========================================
                    Mobile Menu Button
                ======================================== */}
                <motion.button
                    type="button"
                    whileTap={{
                        scale: 0.9,
                    }}
                    onClick={() => setOpen(!open)}
                    className="relative z-50 flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] text-white transition hover:bg-white/[0.1] lg:hidden"
                    aria-label={open ? "Close navigation" : "Open navigation"}
                    aria-expanded={open}
                >
                    <AnimatePresence mode="wait" initial={false}>
                        {open ? (
                            <motion.div
                                key="close"
                                initial={{
                                    rotate: -90,
                                    opacity: 0,
                                }}
                                animate={{
                                    rotate: 0,
                                    opacity: 1,
                                }}
                                exit={{
                                    rotate: 90,
                                    opacity: 0,
                                }}
                            >
                                <X size={21} />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="menu"
                                initial={{
                                    rotate: 90,
                                    opacity: 0,
                                }}
                                animate={{
                                    rotate: 0,
                                    opacity: 1,
                                }}
                                exit={{
                                    rotate: -90,
                                    opacity: 0,
                                }}
                            >
                                <Menu size={21} />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.button>

                {/* ========================================
                    Mobile Navigation
                ======================================== */}
                <AnimatePresence>
                    {open && (
                        <motion.div
                            initial={{
                                opacity: 0,
                                y: -15,
                                scale: 0.97,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                                scale: 1,
                            }}
                            exit={{
                                opacity: 0,
                                y: -15,
                                scale: 0.97,
                            }}
                            transition={{
                                duration: 0.25,
                            }}
                            className="absolute left-0 right-0 top-[calc(100%+10px)] rounded-2xl border border-white/10 bg-slate-950/95 p-3 shadow-2xl shadow-black/40 backdrop-blur-2xl lg:hidden"
                        >
                            {/* Mobile Links */}
                            <div className="space-y-1">
                                {links.map((link, index) => (
                                    <motion.button
                                        key={link.id}
                                        type="button"
                                        initial={{
                                            opacity: 0,
                                            x: -10,
                                        }}
                                        animate={{
                                            opacity: 1,
                                            x: 0,
                                        }}
                                        transition={{
                                            delay: index * 0.05,
                                        }}
                                        onClick={() => scrollToSection(link.id)}
                                        className={`
                                                flex w-full
                                                items-center
                                                justify-between
                                                rounded-xl
                                                px-4 py-3
                                                text-left
                                                text-sm
                                                font-medium
                                                transition
                                                ${
                                                    active === link.id
                                                        ? "bg-violet-500/10 text-white"
                                                        : "text-slate-400 hover:bg-white/[0.05] hover:text-white"
                                                }
                                            `}
                                    >
                                        <span>{link.name}</span>

                                        {active === link.id && (
                                            <span className="h-1.5 w-1.5 rounded-full bg-violet-400 shadow-lg shadow-violet-400" />
                                        )}
                                    </motion.button>
                                ))}
                            </div>

                            {/* Mobile Buttons */}
                            <div className="mt-3 grid grid-cols-2 gap-2 border-t border-white/10 pt-3">
                                {/* Resume */}
                                <motion.a
                                    whileTap={{
                                        scale: 0.97,
                                    }}
                                    href="/TamilarasanPerumal_UpdateResume.pdf"
                                    download="Tamilarasan_Perumal_Resume.pdf"
                                    onClick={() => setOpen(false)}
                                    className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-3 text-sm font-semibold text-slate-200 transition hover:bg-white/[0.08]"
                                >
                                    <Download size={15} />
                                    Resume
                                </motion.a>

                                {/* Let's Talk */}
                                <motion.button
                                    type="button"
                                    whileTap={{
                                        scale: 0.97,
                                    }}
                                    onClick={() => scrollToSection("contact")}
                                    className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-3 py-3 text-sm font-semibold text-white"
                                >
                                    Let's Talk
                                    <ArrowUpRight size={15} />
                                </motion.button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>
        </header>
    );
}
