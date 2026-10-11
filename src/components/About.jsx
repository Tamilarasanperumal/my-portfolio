import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { profile } from "../data/portfolio";
export default function About() {
    return (
        <section id="about" className="section">
            <SectionTitle
                eyebrow="01 / ABOUT ME"
                title="Turning ideas into digital experiences."
            />
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass grid gap-8 rounded-3xl p-8 md:grid-cols-3"
            >
                <div className="md:col-span-2">
                    <p className="text-lg leading-8 text-slate-300">
                        I am a developer focused on creating modern, responsive
                        and user-friendly applications. My work spans frontend
                        web development, mobile applications and backend
                        integration.
                    </p>
                    <p className="mt-5 leading-8 text-slate-400">
                        I enjoy building reusable components, clean interfaces,
                        dynamic data-driven experiences and scalable application
                        architecture.
                    </p>
                </div>
                <div className="space-y-4 rounded-2xl bg-white/5 p-5 text-sm">
                    <p>
                        <span className="text-slate-500">Location</span>
                        <br />
                        {profile.location}
                    </p>
                    <p>
                        <span className="text-slate-500">Focus</span>
                        <br />
                        React • React Native • Node.js
                    </p>
                    <p>
                        <span className="text-slate-500">Availability</span>
                        <br />
                        Open to opportunities
                    </p>
                </div>
            </motion.div>
        </section>
    );
}
