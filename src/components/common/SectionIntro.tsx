interface SectionIntroProps {
  eyebrow: string;
  title: string;
  text?: string;
  centered?: boolean;
}

export function SectionIntro({
  eyebrow,
  title,
  text,
  centered = false,
}: SectionIntroProps) {
  return (
    <div className={centered ? 'mx-auto max-w-2xl text-center' : 'max-w-xl'}>
      <div className="mb-4 text-[11px] font-bold uppercase tracking-[0.18em] text-[#389c8e]">
        {eyebrow}
      </div>
      <h2 className="text-4xl font-bold leading-[1.08] tracking-[-0.055em] text-[#334155] sm:text-5xl">
        {title}
      </h2>
      {text && <p className="mt-5 text-base leading-7 text-slate-500">{text}</p>}
    </div>
  );
}
