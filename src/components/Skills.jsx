import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { skillCategories } from "../data/portfolio";

export default function Skills() {
    return (
        <section id="skills" className="section">
            <SectionTitle
                eyebrow="10 / SKILLS"
                title="Technologies I work with."
                text="A practical stack for building modern web, mobile, backend, and AI-assisted products."
            />

            <div className="space-y-10">
                {skillCategories.map((category, categoryIndex) => (
                    <div key={category.title}>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="mb-4"
                        >
                            <h3 className="text-xl font-bold">
                                {category.title}
                            </h3>

                            <p className="mt-1 text-sm text-slate-400">
                                {category.description}
                            </p>
                        </motion.div>

                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                            {category.skills.map((skill, i) => (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{
                                        delay: i * 0.05,
                                    }}
                                    viewport={{ once: true }}
                                    whileHover={{ y: -6 }}
                                    key={skill.name}
                                    className="glass rounded-2xl p-5"
                                >
                                    <div className="mb-4 flex items-center justify-between">
                                        <span className="text-2xl">
                                            {skill.icon}
                                        </span>

                                        <span className="text-sm text-slate-400">
                                            {skill.level}%
                                        </span>
                                    </div>

                                    <p className="font-bold">
                                        {skill.name}
                                    </p>

                                    <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{
                                                width: `${skill.level}%`,
                                            }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1 }}
                                            className="h-full rounded-full bg-gradient-to-r from-violet-500 to-cyan-400"
                                        />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}