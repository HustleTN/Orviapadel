import Image from "next/image";
import { Roboto_Condensed } from "next/font/google";
import { ArrowUpRight } from "lucide-react";

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const features = [
  {
    title: "6 PREMIUM COURTS",
    description:
      "Competition-grade surfaces, proper spacing and consistent lighting.",
  },
  {
    title: "MORE THAN A COURT",
    description:
      "Changing rooms, lounge space and everything you need before and after.",
  },
  {
    title: "DAY TO NIGHT",
    description:
      "Book morning, evening or late sessions across both ORVIA locations.",
  },
];

export default function Section2() {
  return (
    <section
      id="courts"
      className={`${robotoCondensed.className} overflow-hidden bg-[#071B2A] px-4 py-20 text-white sm:px-5 lg:px-6 lg:py-[120px]`}
    >
      <div className="mx-auto w-full max-w-[1440px]">
        {/* HEADER */}
        <div className="mb-12 grid items-start gap-8 lg:mb-[72px] lg:grid-cols-[1fr_2.1fr_1fr] lg:gap-12">
          <div className="flex items-center gap-2.5 pt-2.5">
            <span className="h-[7px] w-[7px] rounded-full bg-[#DFFD44]" />

            <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-white/55">
              Our courts
            </span>
          </div>

          <h2 className="m-0 text-[52px] font-extrabold uppercase leading-[0.88] tracking-[-0.055em] sm:text-[70px] md:text-[82px] lg:text-[96px] xl:text-[104px]">
            BUILT FOR
            <br />
            BETTER <span className="text-[#DFFD44]">PLAY.</span>
          </h2>

          <p className="max-w-[340px] text-[15px] leading-[1.65] text-white/60 lg:ml-auto lg:mt-2">
            Professional blue courts, clean lighting and glass-built spaces
            designed for fast rallies, long sessions and better matches.
          </p>
        </div>

        {/* EDITORIAL IMAGE GRID */}
        <div className="grid min-h-[680px] gap-[14px] lg:grid-cols-[3fr_1fr]">
          {/* MAIN IMAGE */}
          <article className="group relative min-h-[520px] overflow-hidden rounded-[3px] bg-[#0C2639] lg:min-h-[680px]">
            <Image
              src="/images/section2/Asset1.png"
              alt="ORVIA premium blue padel court"
              fill
              priority
              quality={88}
              sizes="(max-width: 1024px) 100vw, 75vw"
              className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(.2,.7,0,1)] group-hover:scale-[1.025]"
            />
          </article>

          {/* RIGHT COLUMN */}
          <div className="grid grid-cols-2 gap-[14px] lg:grid-cols-1 lg:grid-rows-2">
            {/* ACTION */}
            <article className="group relative min-h-[320px] overflow-hidden rounded-[3px] bg-[#0C2639]">
              <Image
                src="/images/section2/Asset2.png"
                alt="Padel players competing on an ORVIA court"
                fill
                quality={88}
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(.2,.7,0,1)] group-hover:scale-[1.03]"
              />
            </article>

            {/* LIFESTYLE */}
            <article className="group relative min-h-[320px] overflow-hidden rounded-[3px] bg-[#0C2639]">
              <Image
                src="/images/section2/Asset3.png"
                alt="ORVIA Padel court-side equipment"
                fill
                quality={88}
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(.2,.7,0,1)] group-hover:scale-[1.03]"
              />
            </article>
          </div>
        </div>

        {/* STATEMENT BAND */}
        <div className="mt-[14px] grid min-h-[150px] bg-[#DFFD44] text-[#071B2A] sm:grid-cols-[1fr_auto]">
          <div className="flex flex-col justify-end p-5 sm:p-7">
            <span className="mb-1 text-[10px] font-bold uppercase tracking-[0.14em]">
              Made for the game
            </span>

            <strong className="max-w-[780px] text-[38px] font-extrabold uppercase leading-[0.88] tracking-[-0.05em] sm:text-[48px] lg:text-[60px]">
              EVERY COURT.
              <br />
              READY TO PLAY.
            </strong>
          </div>

          <div className="hidden items-end justify-end p-7 sm:flex">
            <span className="text-[10px] font-bold uppercase tracking-[0.14em] opacity-60">
              ORVIA PADEL / COURTS
            </span>
          </div>
        </div>

        {/* FEATURES */}
        <div className="mt-[72px] grid border-t border-white/15 md:grid-cols-3">
          {features.map((feature, index) => (
            <article
              key={feature.title}
              className={[
                "py-[30px] md:min-h-[175px] md:pr-8",
                index > 0 ? "md:pl-8" : "",
                index !== features.length - 1
                  ? "border-b border-white/15 md:border-b-0 md:border-r"
                  : "",
              ].join(" ")}
            >
              <h3 className="m-0 text-[16px] font-bold uppercase tracking-[-0.015em] text-white">
                {feature.title}
              </h3>

              <p className="mt-3 max-w-[310px] text-[13px] leading-[1.6] text-white/55">
                {feature.description}
              </p>
            </article>
          ))}
        </div>

        {/* FOOTER */}
        <div className="flex items-end justify-between border-t border-white/15 pt-8">
          <a
            href="#booking"
            className="group inline-flex items-center gap-7 text-[12px] font-bold uppercase tracking-[0.08em] text-white"
          >
            <span>Explore the courts</span>

            <span className="flex h-[38px] w-[38px] items-center justify-center rounded-full bg-[#DFFD44] text-[#071B2A] transition-all duration-300 group-hover:-translate-y-[3px] group-hover:translate-x-[3px] group-hover:bg-white">
              <ArrowUpRight size={17} strokeWidth={1.8} />
            </span>
          </a>

          <span className="hidden text-[10px] uppercase tracking-[0.12em] text-white/40 sm:block">
            ORVIA PADEL
          </span>
        </div>
      </div>
    </section>
  );
}
