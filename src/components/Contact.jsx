
import { motion } from "framer-motion";
import {
    Github,
    Linkedin,
    Mail,
    MapPin,
    Phone,
    MessageCircle,
} from "lucide-react";
import { profile } from "../data/portfolio";

export default function Contact() {
    const phoneNumber = profile.phone?.replace(/[^\d+]/g, "");
    const whatsappNumber = profile.whatsapp?.replace(/\D/g, "");

    const handleEmail = () => {
        window.location.href = `mailto:${profile.email}`;
    };

    const handleCall = () => {
        window.location.href = `tel:${phoneNumber}`;
    };

    const handleWhatsApp = () => {
        window.open(
            `https://wa.me/${whatsappNumber}`,
            "_blank",
            "noopener,noreferrer"
        );
    };

    return (
        <section id="contact" className="section">
            <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-[2rem] border border-violet-400/20 bg-gradient-to-br from-violet-950/80 via-slate-900 to-cyan-950/60 p-8 md:p-14"
            >
                <div className="orb -right-20 -top-20 h-64 w-64 bg-violet-500" />

                <div className="relative">
                    <p className="text-xs font-bold tracking-[.25em] text-cyan-300">
                        05 / CONTACT
                    </p>

                    <h2 className="mt-4 max-w-2xl text-4xl font-black md:text-6xl">
                        Let's build something amazing together.
                    </h2>

                    <p className="mt-5 max-w-xl text-slate-300">
                        Have a project or opportunity? Feel free to contact me.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4">
                        {/* Email */}
                        <button
                            type="button"
                            onClick={handleEmail}
                            className="flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-bold text-slate-950 transition hover:scale-105"
                        >
                            <Mail size={18} />
                            Email Me
                        </button>

                        {/* Call */}
                        <button
                            type="button"
                            onClick={handleCall}
                            className="glass flex items-center gap-2 rounded-xl px-5 py-3 font-bold transition hover:scale-105"
                        >
                            <Phone size={18} />
                            Call Me
                        </button>

                        {/* WhatsApp */}
                        <button
                            type="button"
                            onClick={handleWhatsApp}
                            className="glass flex items-center gap-2 rounded-xl px-5 py-3 font-bold transition hover:scale-105"
                        >
                            <MessageCircle size={18} />
                            WhatsApp
                        </button>

                        {/* GitHub */}
                        <a
                            href={profile.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                            className="glass rounded-xl p-3 transition hover:scale-105"
                        >
                            <Github />
                        </a>

                        {/* LinkedIn */}
                        <a
                            href={profile.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            className="glass rounded-xl p-3 transition hover:scale-105"
                        >
                            <Linkedin />
                        </a>
                    </div>

                    {/* Phone number */}
                    <div className="mt-6 flex items-center gap-2 text-sm text-slate-400">
                        <Phone size={16} />
                        <a
                            href={`tel:${phoneNumber}`}
                            className="transition hover:text-white"
                        >
                            {profile.phone}
                        </a>
                    </div>

                    {/* Location */}
                    <div className="mt-3 flex items-center gap-2 text-sm text-slate-400">
                        <MapPin size={16} />
                        {profile.location}
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
