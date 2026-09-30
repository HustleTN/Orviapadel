import Image from "next/image";
import { Roboto_Condensed } from "next/font/google";

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export default function Section4() {
  return (
    <section
      id="about"
      className={`${robotoCondensed.className} bg-[#F4F8FA] px-4 py-20 text-[#071B2A] sm:px-5 lg:px-6 lg:py-[120px]`}
    >
      <div className="mx-auto max-w-[1440px]">
        {/* HEADER */}
        <div className="mb-12 flex items-center gap-2.5 lg:mb-16">
          <span className="h-[7px] w-[7px] rounded-full bg-[#0875C9]" />

          <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#071B2A]/50">
            About ORVIA
          </span>
        </div>

        {/* MAIN LAYOUT */}
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.45fr] lg:gap-16">
          {/* STORY */}
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="max-w-[580px] text-[52px] font-extrabold uppercase leading-[0.88] tracking-[-0.055em] sm:text-[68px] lg:text-[82px] xl:text-[92px]">
                PADEL HAS A WAY
                <br />
                OF PULLING YOU
                <br />
                <span className="text-[#0875C9]">BACK IN.</span>
              </h2>

              <div className="mt-10 max-w-[520px] space-y-5 text-[15px] leading-[1.7] text-[#071B2A]/65 lg:mt-12">
                <p>
                  You come for one game. Then another. You start recognizing
                  faces, finding your rhythm, chasing the point you almost won
                  last time.
                </p>

                <p className="font-semibold text-[#071B2A]">
                  That feeling is what ORVIA is built around.
                </p>

                <p>
                  Great courts matter. Good coaching matters. But what makes a
                  club special is everything that happens around the game: the
                  progress, the rivalry, the people you meet, and the reason you
                  want to come back tomorrow.
                </p>
              </div>
            </div>

            {/* CLOSING LINE */}
            <div className="mt-12 border-t border-[#071B2A]/15 pt-6 lg:mt-16">
              <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#0875C9]">
                Come for the game.
              </span>

              <p className="mt-1 text-[22px] font-bold uppercase tracking-[-0.025em] sm:text-[26px]">
                Become part of the club.
              </p>
            </div>
          </div>

          {/* IMAGE */}
          <div className="group relative min-h-[520px] overflow-hidden bg-[#071B2A] sm:min-h-[620px] lg:min-h-[720px]">
            <Image
              src="/images/section4/asset1.png"
              alt="Entrance to ORVIA Padel club"
              fill
              quality={90}
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(.2,.7,0,1)] group-hover:scale-[1.025]"
            />

            {/* subtle treatment */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#071B2A]/35 via-transparent to-transparent" />

            {/* IMAGE LABEL */}
            <div className="absolute bottom-5 left-5 flex items-center gap-3 bg-[#071B2A]/75 px-4 py-3 backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-[#DFFD44]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.13em] text-white">
                Welcome to ORVIA
              </span>
            </div>
          </div>
        </div>

        {/* SECTION FOOTER */}
        <div className="mt-8 flex items-center justify-between border-t border-[#071B2A]/15 pt-6">
          <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#071B2A]/35">
            04 / ORVIA
          </span>

          <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#071B2A]/35">
            Our story
          </span>
        </div>
      </div>
    </section>
  );
}