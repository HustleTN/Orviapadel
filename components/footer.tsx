import Image from "next/image";
import { Roboto_Condensed } from "next/font/google";
import { ArrowUpRight } from "lucide-react";

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const nav = [
  ["Courts", "#courts"],
  ["Coaching", "#coaching"],
  ["Coaches", "#coaches"],
  ["Contact", "#contact"],
];

export default function Footer() {
  return (
    <footer
      className={`${robotoCondensed.className} bg-[#071B2A] px-3 pb-3 text-[#F4F8FA] sm:px-4 sm:pb-4 lg:px-5 lg:pb-5`}
    >
      <div className="border border-[#21475C] bg-[#103348]">
        {/* TOP */}
        <div className="flex flex-col justify-between gap-8 border-b border-[#2B5266] px-6 py-8 sm:px-8 lg:flex-row lg:items-center lg:px-10">
          <Image
            src="/images/logoorviapadel1.svg"
            alt="ORVIA Padel"
            width={180}
            height={55}
            className="h-auto w-[145px] sm:w-[165px]"
          />

          <p className="max-w-[310px] text-[14px] font-normal uppercase leading-[1.5] tracking-[0.08em] text-white/55 lg:text-right">
            Play often. Train with purpose.
            <br />
            Own every point.
          </p>
        </div>

        {/* MAIN */}
        <div className="grid lg:grid-cols-[1.4fr_0.75fr_0.85fr_0.9fr]">
          {/* STATEMENT */}
          <div className="border-b border-[#2B5266] p-6 sm:p-8 lg:border-b-0 lg:border-r lg:p-10">
            <span
              className="block text-[64px] leading-[0.8] text-[#DFFD44] sm:text-[82px]"
              style={{
                fontFamily: '"Brush Script MT", "Brush Script Std", cursive',
                fontWeight: 400,
              }}
            >
              Next
            </span>

            <h2 className="mt-2 text-[44px] font-bold uppercase leading-[0.86] tracking-[-0.045em] sm:text-[58px] lg:text-[68px]">
              MATCH STARTS HERE.
            </h2>

            <p className="mt-6 max-w-[420px] text-[14px] font-normal leading-[1.6] text-white/50">
              Book your next court, sharpen your game, and keep moving forward.
            </p>

            <a
              href="#contact"
              className="group mt-7 inline-flex items-center gap-4 text-[12px] font-medium uppercase tracking-[0.08em] text-white"
            >
              Start your next match
              <span className="flex h-10 w-10 items-center justify-center bg-[#DFFD44] text-[#071B2A] transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight size={17} strokeWidth={1.8} />
              </span>
            </a>
          </div>

          {/* NAV */}
          <div className="border-b border-[#2B5266] p-6 sm:p-8 lg:border-b-0 lg:border-r lg:p-10">
            <p className="mb-6 text-[10px] uppercase tracking-[0.16em] text-white/35">
              Explore
            </p>

            <div className="flex flex-col gap-4">
              {nav.map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  className="group flex items-center justify-between text-[16px] font-medium uppercase tracking-[0.04em] text-white/75 transition-colors hover:text-white"
                >
                  {label}

                  <ArrowUpRight
                    size={15}
                    strokeWidth={1.6}
                    className="text-white/25 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#DFFD44]"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* LOCATIONS */}
          <div className="border-b border-[#2B5266] p-6 sm:p-8 lg:border-b-0 lg:border-r lg:p-10">
            <p className="mb-6 text-[10px] uppercase tracking-[0.16em] text-white/35">
              Locations
            </p>

            <div className="space-y-6">
              <div>
                <div className="text-[17px] font-medium uppercase text-white">
                  Miami Beach
                </div>

                <div className="mt-1 text-[13px] text-white/45">
                  Florida, USA
                </div>
              </div>

              <div>
                <div className="text-[17px] font-medium uppercase text-white">
                  Austin
                </div>

                <div className="mt-1 text-[13px] text-white/45">Texas, USA</div>
              </div>
            </div>
          </div>

          {/* CONTACT */}
          <div className="p-6 sm:p-8 lg:p-10">
            <p className="mb-6 text-[10px] uppercase tracking-[0.16em] text-white/35">
              Get in touch
            </p>

            <div className="space-y-4">
              <a
                href="mailto:hello@orviapadel.com"
                className="block text-[15px] text-white/75 transition-colors hover:text-[#DFFD44]"
              >
                hello@orviapadel.com
              </a>

              <a
                href="tel:+13055550148"
                className="block text-[15px] text-white/75 transition-colors hover:text-[#DFFD44]"
              >
                +1 (305) 555-0148
              </a>
            </div>

            <a
              href="#contact"
              className="group mt-8 inline-flex items-center gap-3 bg-[#DFFD44] px-5 py-3 text-[12px] font-semibold uppercase tracking-[0.06em] text-[#071B2A]"
            >
              Book a session
              <ArrowUpRight
                size={16}
                strokeWidth={2}
                className="transition-transform duration-300 group-hover:rotate-45"
              />
            </a>
          </div>
        </div>

        {/* GIANT BRAND */}
        <div className="overflow-hidden border-t border-[#2B5266] px-4 pt-6 sm:px-6">
          <div
            className="
              select-none
              whitespace-nowrap
              text-center
              text-[20vw]
              font-bold
              uppercase
              leading-[0.68]
              tracking-[-0.07em]
              text-white/[0.045]
              lg:text-[15vw]
            "
          >
            ORVIA
          </div>
        </div>

        {/* BOTTOM */}
        <div className="flex flex-col gap-3 border-t border-[#2B5266] px-6 py-4 text-[10px] uppercase tracking-[0.1em] text-white/35 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
          <span>© 2026 ORVIA PADEL</span>

          <div className="flex flex-wrap gap-5">
            <a href="#" className="transition-colors hover:text-white">
              Instagram
            </a>

            <a href="#" className="transition-colors hover:text-white">
              Privacy
            </a>

            <a href="#" className="transition-colors hover:text-white">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
