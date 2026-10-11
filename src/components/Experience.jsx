import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { experience } from "../data/portfolio";
export default function Experience() {
    return (
        <section id="experience" className="section">
            <SectionTitle eyebrow="02 / EXPERIENCE" title="My journey." />
            <div className="space-y-5 border-l border-white/10 pl-6">
                {experience.map((e, i) => (
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        key={i}
                        className="relative glass rounded-2xl p-6"
                    >
                        <span className="absolute -left-[34px] top-8 h-4 w-4 rounded-full border-4 border-[#070b17] bg-violet-400" />
                        <p className="text-sm font-bold text-cyan-300">
                            {e.period}
                        </p>
                        <h3 className="mt-2 text-xl font-black">{e.title}</h3>
                        <p className="mt-3 leading-7 text-slate-400">
                            {e.text}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
