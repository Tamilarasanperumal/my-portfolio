export default function SectionTitle({ eyebrow, title, text }) {
    return (
        <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-xs font-bold tracking-[.25em] text-violet-400">
                {eyebrow}
            </p>
            <h2 className="text-4xl font-black md:text-5xl">{title}</h2>
            {text && <p className="mt-4 leading-7 text-slate-400">{text}</p>}
        </div>
    );
}
