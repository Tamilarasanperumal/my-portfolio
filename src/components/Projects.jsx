
import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { projects } from "../data/portfolio";

export default function Projects() {
    const handleProjectClick = (url) => {
        if (!url) return;
        window.open(url, "_blank", "noopener,noreferrer");
    };

    return (
        <section id="projects" className="section">
            <SectionTitle
                eyebrow="06 / PROJECTS"
                title="Selected work."
                text="A collection of products and applications I've designed and developed."
            />

            <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((p, i) => (
                    <motion.article
                        key={p.title}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{
                            duration: 0.6,
                            delay: i * 0.12,
                            ease: "easeOut",
                        }}
                        whileHover={{ y: -10 }}
                        className="group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] shadow-2xl backdrop-blur-xl"
                    >
                        {/* Preview */}
                        <button
                            type="button"
                            onClick={() => handleProjectClick(p.url)}
                            className="relative block h-56 w-full shrink-0 overflow-hidden text-left"
                        >
                            {/* Image */}
                            {p.image ? (
                                <img
                                    src={p.image}
                                    alt={p.title}
                                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                                />
                            ) : (
                                <div
                                    className={`h-full w-full bg-gradient-to-br ${p.accent}`}
                                />
                            )}

                            {/* Dark overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10 transition duration-500 group-hover:from-black/90" />

                            {/* Category */}
                            <span className="absolute left-5 top-5 rounded-full border border-white/20 bg-black/30 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-xl">
                                {p.category}
                            </span>

                            {/* External icon */}
                            <div className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/30 backdrop-blur-xl transition duration-300 group-hover:rotate-12 group-hover:bg-white group-hover:text-black">
                                <ArrowUpRight size={17} />
                            </div>

                            {/* Bottom project type */}
                            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                                <div>
                                    <p className="text-xs uppercase tracking-[0.2em] text-white/60">
                                        {p.type || "Project"}
                                    </p>

                                    <h3 className="mt-1 text-xl font-black text-white">
                                        {p.title}
                                    </h3>
                                </div>

                                <ExternalLink
                                    size={18}
                                    className="text-white/70 transition group-hover:text-white"
                                />
                            </div>
                        </button>

                        {/* Content */}
                        <div className="flex flex-1 flex-col p-6">
                            {/* Description */}
                            <p className="min-h-[72px] text-sm leading-6 text-slate-400">
                                {p.description}
                            </p>

                            {/* Tags */}
                            <div className="mt-5 min-h-[64px] flex flex-wrap content-start gap-2">
                                {p.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-xs font-medium text-slate-300 transition duration-300 group-hover:border-white/20"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Open project */}
                            <button
                                type="button"
                                onClick={() => handleProjectClick(p.url)}
                                className="mt-auto flex min-h-[44px] items-center gap-2 pt-5 text-sm font-bold text-white transition duration-300 hover:gap-3"
                            >
                                {p.isMobile
                                    ? "View on Play Store"
                                    : "Open live application"}

                                <ArrowUpRight size={16} />
                            </button>
                        </div>
                    </motion.article>
                ))}
            </div>
        </section>
    );
}
