"use client";

import Image from "next/image";
import { useState } from "react";
import { Roboto_Condensed } from "next/font/google";

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const coaches = [
  {
    name: "Sophia Carter",
    role: "Technique & Fundamentals",
    image: "/images/section3/coach1.png",
    tags: ["BEGINNER FRIENDLY", "TECHNIQUE", "CONFIDENCE"],
    description:
      "Sophia helps new and developing players build solid technique, cleaner movement and confidence from the very first session.",
  },
  {
    name: "Daniel Brooks",
    role: "Performance Coach",
    image: "/images/section3/coach2.png",
    tags: ["INTERMEDIATE", "FOOTWORK", "CONSISTENCY"],
    description:
      "Daniel focuses on rhythm, positioning and repetition to help players become sharper and more consistent in match situations.",
  },
  {
    name: "Lucas Bennett",
    role: "Match Strategy",
    image: "/images/section3/coach3.png",
    tags: ["ADVANCED", "TACTICS", "COMPETITIVE"],
    description:
      "Lucas works with experienced players on decision-making, net control and building points with confidence under pressure.",
  },
  {
    name: "Ethan Cole",
    role: "Doubles & Game IQ",
    image: "/images/section3/coach4.png",
    tags: ["TEAM PLAY", "POSITIONING", "GAME IQ"],
    description:
      "Ethan specializes in doubles movement, communication and reading the game to make players more effective together.",
  },
];

export default function Section3() {
  const [activeCoach, setActiveCoach] = useState(0);

  return (
    <section
      id="coaches"
      className={`${robotoCondensed.className} overflow-hidden bg-[#F4F8FA] px-4 py-20 text-[#071B2A] sm:px-5 lg:px-6 lg:py-[120px]`}
    >
      <div className="mx-auto max-w-[1440px]">
        {/* HEADER */}
        <div className="mb-12 grid items-start gap-8 lg:mb-[64px] lg:grid-cols-[1fr_2.1fr_1fr] lg:gap-12">
          <div className="flex items-center gap-2.5 pt-2.5">
            <span className="h-[7px] w-[7px] rounded-full bg-[#0875C9]" />

            <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#071B2A]/50">
              Meet the coaches
            </span>
          </div>

          <h2 className="text-[52px] font-extrabold uppercase leading-[0.88] tracking-[-0.055em] sm:text-[70px] md:text-[82px] lg:text-[96px] xl:text-[104px]">
            MOVE YOUR
            <br />
            GAME <span className="text-[#0875C9]">FORWARD.</span>
          </h2>

          <p className="max-w-[340px] text-[15px] leading-[1.65] text-[#071B2A]/60 lg:ml-auto lg:mt-2">
            Different playing styles. Different strengths. One coaching team
            built to help every player improve with confidence.
          </p>
        </div>

        {/* DESKTOP INTERACTIVE COACHES */}
        <div
          className="hidden h-[610px] gap-[10px] lg:flex"
          onMouseLeave={() => setActiveCoach(0)}
        >
          {coaches.map((coach, index) => {
            const active = activeCoach === index;

            return (
              <article
                key={coach.name}
                onMouseEnter={() => setActiveCoach(index)}
                onFocus={() => setActiveCoach(index)}
                tabIndex={0}
                style={{
                  flex: active ? "2.35 1 0%" : "1 1 0%",
                }}
                className="relative flex min-w-0 cursor-pointer overflow-hidden bg-[#071B2A] outline-none transition-[flex] duration-700 ease-[cubic-bezier(.2,.75,.2,1)]"
              >
                {/* IMAGE */}
                <div className="relative min-w-0 flex-1 overflow-hidden">
                  <Image
                    src={coach.image}
                    alt={`${coach.name}, ORVIA Padel coach`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    quality={90}
                    className={[
                      "object-cover object-top transition-all duration-700",
                      active ? "scale-100" : "scale-[1.035] grayscale-[8%]",
                    ].join(" ")}
                  />

                  {/* subtle image shading */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071B2A]/75 via-transparent to-transparent" />

                  {/* NUMBER */}
                  <div className="absolute left-5 top-5 flex h-9 min-w-9 items-center justify-center border border-white/20 bg-[#071B2A]/45 px-2 text-[10px] tracking-[0.12em] text-white backdrop-blur-md">
                    0{index + 1}
                  </div>

                  {/* NAME WHEN CLOSED */}
                  <div
                    className={[
                      "absolute inset-x-0 bottom-0 p-5 transition-all duration-500",
                      active
                        ? "translate-y-3 opacity-0"
                        : "translate-y-0 opacity-100",
                    ].join(" ")}
                  >
                    <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-[#DFFD44]">
                      {coach.role}
                    </p>

                    <h3 className="mt-1 text-[27px] font-bold uppercase leading-[0.9] tracking-[-0.035em] text-white">
                      {coach.name}
                    </h3>
                  </div>
                </div>

                {/* EXPANDING INFORMATION PANEL */}
                <div
                  className={[
                    "relative flex shrink-0 flex-col justify-between overflow-hidden bg-[#071B2A] transition-all duration-700 ease-[cubic-bezier(.2,.75,.2,1)]",
                    active
                      ? "w-[330px] opacity-100 xl:w-[360px]"
                      : "w-0 opacity-0",
                  ].join(" ")}
                >
                  <div className="min-w-[330px] p-8 xl:min-w-[360px] xl:p-9">
                    <div className="mb-8 h-[3px] w-10 bg-[#DFFD44]" />

                    <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#DFFD44]">
                      {coach.role}
                    </span>

                    <h3 className="mt-3 text-[42px] font-extrabold uppercase leading-[0.88] tracking-[-0.05em] text-white">
                      {coach.name}
                    </h3>

                    <p className="mt-6 text-[14px] leading-[1.65] text-white/60">
                      {coach.description}
                    </p>
                  </div>

                  <div className="min-w-[330px] border-t border-white/15 p-8 xl:min-w-[360px] xl:p-9">
                    <div className="flex flex-wrap gap-2">
                      {coach.tags.map((tag) => (
                        <span
                          key={tag}
                          className="border border-white/15 px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.1em] text-white/65"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* MOBILE / TABLET */}
        <div className="grid gap-3 sm:grid-cols-2 lg:hidden">
          {coaches.map((coach, index) => (
            <article key={coach.name} className="overflow-hidden bg-[#071B2A]">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={coach.image}
                  alt={`${coach.name}, ORVIA Padel coach`}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  quality={88}
                  className="object-cover object-top"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#071B2A]/85 via-transparent to-transparent" />

                <span className="absolute left-4 top-4 text-[10px] font-bold tracking-[0.12em] text-white/70">
                  0{index + 1}
                </span>

                <div className="absolute inset-x-0 bottom-0 p-5">
                  <span className="text-[10px] font-bold uppercase tracking-[0.13em] text-[#DFFD44]">
                    {coach.role}
                  </span>

                  <h3 className="mt-1 text-[31px] font-extrabold uppercase leading-[0.9] tracking-[-0.04em] text-white">
                    {coach.name}
                  </h3>
                </div>
              </div>

              <div className="border-t border-white/15 p-5">
                <p className="text-[13px] leading-[1.6] text-white/55">
                  {coach.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {coach.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-white/15 px-2.5 py-1.5 text-[8px] font-semibold uppercase tracking-[0.1em] text-white/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* BOTTOM LINE */}
        <div className="mt-8 flex items-center justify-between border-t border-[#071B2A]/15 pt-6">
          <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#071B2A]/40">
            03 / ORVIA
          </span>

          <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#071B2A]/40">
            Coaching team
          </span>
        </div>
      </div>
    </section>
  );
}
