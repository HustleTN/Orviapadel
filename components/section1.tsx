import Image from "next/image";
import { Roboto_Condensed } from "next/font/google";
import { ArrowUpRight } from "lucide-react";

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const levels = [
  {
    number: "01",
    stage: "START",
    title: "YOUR FIRST SESSIONS",
    description:
      "Learn positioning, movement and the fundamentals of playing with the glass.",
    image: "/images/section1/image1.png",
    background: "#0875C9",
  },
  {
    number: "02",
    stage: "BUILD",
    title: "FIND YOUR RHYTHM",
    description:
      "Build consistency, smarter shot selection and confidence under pressure.",
    image: "/images/section1/image2.png",
    background: "#0A5F9D",
  },
  {
    number: "03",
    stage: "COMPETE",
    title: "OWN YOUR GAME",
    description:
      "Refine tactics, transitions and match awareness when every point matters.",
    image: "/images/section1/image3.png",
    background: "#071B2A",
  },
];

export default function Section1() {
  return (
    <section
      id="coaching"
      className={`${robotoCondensed.className} bg-[#F4F8FA] px-4 py-20 text-[#071B2A] sm:px-5 lg:px-6 lg:py-[120px]`}
    >
      <div className="mx-auto max-w-[1440px]">
        {/* HEADER */}
        <div className="mb-12 grid items-start gap-8 lg:mb-16 lg:grid-cols-[1fr_2.1fr_1fr] lg:gap-12">
          <div className="flex items-center gap-2.5 pt-2.5">
            <span className="h-[7px] w-[7px] rounded-full bg-[#DFFD44]" />

            <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#071B2A]/50">
              Coaching pathway
            </span>
          </div>

          <h2 className="text-[52px] font-extrabold uppercase leading-[0.88] tracking-[-0.055em] sm:text-[70px] md:text-[82px] lg:text-[96px] xl:text-[104px]">
            FROM FIRST RALLY
            <br />
            <span className="text-[#0875C9]">TO FULL CONTROL.</span>
          </h2>

          <p className="max-w-[340px] text-[15px] leading-[1.65] text-[#071B2A]/60 lg:ml-auto lg:mt-2">
            Structured coaching built around your level, your pace and where you
            want your game to go.
          </p>
        </div>

        {/* MAIN STORY */}
        <div className="mb-4 overflow-hidden bg-[#071B2A] lg:mb-5">
          <div className="grid lg:grid-cols-[0.38fr_0.62fr]">
            {/* COPY */}
            <div className="flex min-h-[390px] flex-col justify-between p-7 sm:p-9 lg:min-h-[500px] lg:p-11">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#DFFD44]">
                  Your progression
                </span>

                <h3 className="mt-5 max-w-[430px] text-[44px] font-extrabold uppercase leading-[0.9] tracking-[-0.045em] text-white sm:text-[54px] lg:text-[64px]">
                  A CLEAR PATH TO BETTER PADEL.
                </h3>
              </div>

              <div>
                <p className="mb-7 max-w-[410px] text-[14px] leading-[1.65] text-white/55 sm:text-[15px]">
                  Start where you are. Train with purpose. Build consistency,
                  confidence and smarter decisions every session.
                </p>

                <a
                  href="#levels"
                  className="group inline-flex items-center gap-5 text-[12px] font-bold uppercase tracking-[0.08em] text-white"
                >
                  Find your level
                  <span className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#DFFD44] text-[#071B2A] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:bg-white">
                    <ArrowUpRight size={17} strokeWidth={1.8} />
                  </span>
                </a>
              </div>
            </div>

            {/* WIDE IMAGE */}
            <div className="group relative min-h-[340px] overflow-hidden sm:min-h-[420px] lg:min-h-[500px]">
              <Image
                src="/images/section1/image4.png"
                alt="ORVIA Padel coaching session"
                fill
                quality={88}
                sizes="(max-width: 1024px) 100vw, 62vw"
                className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.02]"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#071B2A]/25 via-transparent to-transparent" />

              <div className="absolute bottom-5 right-5 border border-white/20 bg-[#071B2A]/55 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-white backdrop-blur-md">
                ORVIA Coaching
              </div>
            </div>
          </div>
        </div>

        {/* LEVEL CARDS */}
        <div id="levels" className="grid gap-3 lg:grid-cols-3 lg:gap-4">
          {levels.map((level) => (
            <article
              key={level.number}
              className="group relative min-h-[275px] overflow-hidden sm:min-h-[290px]"
              style={{ backgroundColor: level.background }}
            >
              {/* TEXT SIDE */}
              <div className="relative z-20 flex min-h-[275px] w-[62%] flex-col justify-between p-6 sm:min-h-[290px] sm:p-7">
                <div>
                  <div className="mb-8 flex items-center gap-3">
                    <span className="text-[11px] font-bold text-[#DFFD44]">
                      {level.number}
                    </span>

                    <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-white/55">
                      {level.stage}
                    </span>
                  </div>

                  <h3 className="max-w-[220px] text-[30px] font-extrabold uppercase leading-[0.9] tracking-[-0.04em] text-white sm:text-[34px]">
                    {level.title}
                  </h3>
                </div>

                <div>
                  <p className="max-w-[235px] text-[12px] leading-[1.55] text-white/60 sm:text-[13px]">
                    {level.description}
                  </p>

                  <div className="mt-5 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white transition-all duration-300 group-hover:rotate-45 group-hover:border-[#DFFD44] group-hover:bg-[#DFFD44] group-hover:text-[#071B2A]">
                    <ArrowUpRight size={15} strokeWidth={1.8} />
                  </div>
                </div>
              </div>

              {/* SMALL RIGHT-ALIGNED IMAGE */}
              <div className="absolute bottom-0 right-0 top-0 w-[42%] overflow-hidden transition-[width] duration-500 ease-out group-hover:w-[46%]">
                <Image
                  src={level.image}
                  alt={level.title}
                  fill
                  quality={88}
                  sizes="(max-width: 1024px) 45vw, 15vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                />

                {/* Blend image into card */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(
                      90deg,
                      ${level.background} 0%,
                      ${level.background}CC 12%,
                      transparent 42%
                    )`,
                  }}
                />
              </div>

              {/* SMALL LIME EDGE */}
              <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#DFFD44] transition-all duration-500 group-hover:w-full" />
            </article>
          ))}
        </div>

        {/* BOTTOM META */}
        <div className="mt-8 flex items-center justify-between border-t border-[#071B2A]/15 pt-6">
          <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#071B2A]/35">
            01 / ORVIA
          </span>

          <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#071B2A]/35">
            Coaching pathway
          </span>
        </div>
      </div>
    </section>
  );
}
