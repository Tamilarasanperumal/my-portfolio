import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
export default function App() {
    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Contact />
            <footer className="border-t border-white/10 py-8 text-center text-sm text-slate-500">
                © {new Date().getFullYear()} Developer Portfolio. Built with
                React.
            </footer>
        </>
    );
}
