"use client";

import Image from "next/image";
import { MouseEvent, useLayoutEffect, useRef, useState } from "react";
import { Roboto_Condensed } from "next/font/google";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Menu, X } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const slides = [
  {
    script: "Read",
    line1: "THE GAME",
    line2: "BEFORE IT MOVES",
  },
  {
    script: "Control",
    line1: "THE PACE",
    line2: "OF PLAY",
  },
  {
    script: "Own",
    line1: "EVERY POINT",
    line2: "THAT FOLLOWS",
  },
];

const navItems = [
  {
    label: "Courts",
    href: "#courts",
  },
  {
    label: "Coaching",
    href: "#coaching",
  },
  {
    label: "Coaches",
    href: "#coaches",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

const stats = [
  {
    value: "620",
    label: "Active players",
  },
  {
    value: "8",
    label: "Certified coaches",
  },
  {
    value: "2",
    label: "Locations",
  },
  {
    value: "1,140",
    label: "Monthly bookings",
  },
];

export default function Header() {
  const sectionRef = useRef<HTMLElement>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [menuOpen, setMenuOpen] = useState(false);

  /* =========================================================
     HERO HEADLINE ANIMATION
  ========================================================= */

  useLayoutEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const mm = gsap.matchMedia();

    const ctx = gsap.context(() => {
      const items = slideRefs.current.filter(Boolean) as HTMLDivElement[];

      const resetSlides = () => {
        gsap.set(items, {
          opacity: 0,
          y: 36,
          pointerEvents: "none",
        });

        gsap.set(items[0], {
          opacity: 1,
          y: 0,
        });
      };

      /* =====================================================
         DESKTOP / TABLET
         Keep original scroll-controlled pinned experience
      ===================================================== */

      mm.add("(min-width: 768px)", () => {
        resetSlides();

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "+=2400",
            pin: true,
            scrub: 0.8,
            anticipatePin: 1,
          },
        });

        timeline
          .to(items[0], {
            opacity: 0,
            y: -36,
            duration: 0.3,
          })

          .to(items[1], {
            opacity: 1,
            y: 0,
            duration: 0.3,
          })

          .to(
            items[1],
            {
              opacity: 0,
              y: -36,
              duration: 0.3,
            },
            "+=0.7"
          )

          .to(items[2], {
            opacity: 1,
            y: 0,
            duration: 0.3,
          })

          .to({}, { duration: 0.8 });

        return () => {
          timeline.kill();
        };
      });

      /* =====================================================
         MOBILE
         No pin = no 2400px empty spacer
         Cycle copy automatically instead
      ===================================================== */

      mm.add("(max-width: 767px)", () => {
        resetSlides();

        const prefersReducedMotion = window.matchMedia(
          "(prefers-reduced-motion: reduce)"
        ).matches;

        if (prefersReducedMotion) {
          return;
        }

        const timeline = gsap.timeline({
          repeat: -1,
          repeatDelay: 0.45,
        });

        timeline
          .to({}, { duration: 2.2 })

          .to(items[0], {
            opacity: 0,
            y: -24,
            duration: 0.4,
            ease: "power2.inOut",
          })

          .fromTo(
            items[1],
            {
              opacity: 0,
              y: 24,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.4,
              ease: "power2.out",
            },
            "-=0.1"
          )

          .to({}, { duration: 2.2 })

          .to(items[1], {
            opacity: 0,
            y: -24,
            duration: 0.4,
            ease: "power2.inOut",
          })

          .fromTo(
            items[2],
            {
              opacity: 0,
              y: 24,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.4,
              ease: "power2.out",
            },
            "-=0.1"
          )

          .to({}, { duration: 2.2 })

          .to(items[2], {
            opacity: 0,
            y: -24,
            duration: 0.4,
            ease: "power2.inOut",
          })

          .fromTo(
            items[0],
            {
              opacity: 0,
              y: 24,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.4,
              ease: "power2.out",
            },
            "-=0.1"
          );

        return () => {
          timeline.kill();
        };
      });
    }, section);

    return () => {
      mm.revert();
      ctx.revert();
    };
  }, []);

  /* =========================================================
     SMOOTH ANCHOR NAVIGATION
  ========================================================= */

  const scrollToSection = (
    event: MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    event.preventDefault();

    setMenuOpen(false);

    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      return;
    }

    const target = document.querySelector(href);

    if (!target) return;

    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <header
      ref={sectionRef}
      className="
        relative
        flex
        w-full
        flex-col
        overflow-hidden
        bg-[#071B2A]

        md:h-[100svh]
      "
    >
      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <div
        className="
          relative
          z-50
          shrink-0

          px-3
          pt-3

          sm:px-4
          sm:pt-4

          lg:px-5
        "
      >
        <nav
          className="
            relative

            flex
            h-[58px]
            w-full
            items-center
            justify-between

            border
            border-[#21475C]

            bg-[#103348]

            px-3

            sm:h-[64px]
            sm:px-5

            lg:h-[72px]
            lg:px-7
          "
        >
          {/* BRAND */}

          <a
            href="#"
            onClick={(event) => scrollToSection(event, "#")}
            aria-label="ORVIA Padel home"
            className="flex shrink-0 items-center"
          >
            {/* MOBILE ICON */}

            <Image
              src="/images/orvia-icon.svg"
              alt="ORVIA Padel"
              width={42}
              height={42}
              priority
              className="
                h-[34px]
                w-[34px]
                object-contain

                sm:h-[38px]
                sm:w-[38px]

                lg:hidden
              "
            />

            {/* DESKTOP LOGO */}

            <Image
              src="/images/logoorviapadel1.svg"
              alt="ORVIA Padel"
              width={160}
              height={46}
              priority
              className="
                hidden
                h-auto
                w-[150px]

                lg:block
              "
            />
          </a>

          {/* =================================================
              DESKTOP NAV
          ================================================= */}

          <div
            className="
              absolute
              left-1/2

              hidden
              -translate-x-1/2
              items-center
              gap-10

              lg:flex
            "
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(event) => scrollToSection(event, item.href)}
                className="
                  relative

                  text-[15px]
                  font-medium
                  uppercase
                  tracking-[0.055em]

                  text-white/80

                  transition-colors
                  duration-300

                  after:absolute
                  after:-bottom-2
                  after:left-0
                  after:h-px
                  after:w-0
                  after:bg-[#DFFD44]

                  after:transition-all
                  after:duration-300

                  hover:text-white
                  hover:after:w-full
                "
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* =================================================
              RIGHT ACTIONS
          ================================================= */}

          <div className="flex items-center gap-2 sm:gap-3">
            {/* BOOK */}

            <a
              href="#contact"
              onClick={(event) => scrollToSection(event, "#contact")}
              className="
                group

                flex
                shrink-0
                items-center
                overflow-hidden

                border
                border-[#DFFD44]

                bg-[#DFFD44]
                text-[#071B2A]
              "
            >
              <span
                className="
                  relative

                  flex
                  h-[18px]
                  min-w-[52px]
                  items-center
                  overflow-hidden

                  px-2

                  sm:h-[20px]
                  sm:min-w-[112px]
                  sm:px-4

                  lg:min-w-[138px]
                  lg:px-6
                "
              >
                {/* TEXT 1 */}

                <span
                  className="
                    absolute
                    left-1/2

                    -translate-x-1/2

                    whitespace-nowrap

                    text-[11px]
                    font-medium

                    transition-transform
                    duration-500

                    ease-[cubic-bezier(.2,.8,.2,1)]

                    group-hover:-translate-y-[170%]

                    sm:text-[13px]

                    lg:text-[15px]
                  "
                >
                  <span className="sm:hidden">Book</span>

                  <span className="hidden sm:inline">Book a session</span>
                </span>

                {/* TEXT 2 */}

                <span
                  className="
                    absolute
                    left-1/2

                    translate-y-[170%]
                    -translate-x-1/2

                    whitespace-nowrap

                    text-[11px]
                    font-medium

                    transition-transform
                    duration-500

                    ease-[cubic-bezier(.2,.8,.2,1)]

                    group-hover:translate-y-0

                    sm:text-[13px]

                    lg:text-[15px]
                  "
                >
                  <span className="sm:hidden">Book</span>

                  <span className="hidden sm:inline">Book a session</span>
                </span>
              </span>

              {/* ARROW */}

              <span
                className="
                  m-[3px]

                  flex
                  h-[34px]
                  w-[34px]
                  items-center
                  justify-center

                  bg-[#101113]

                  text-white

                  sm:h-[40px]
                  sm:w-[42px]

                  lg:h-[48px]
                  lg:w-[52px]
                "
              >
                <ArrowUpRight
                  size={18}
                  strokeWidth={2}
                  className="
                    transition-transform
                    duration-500

                    ease-[cubic-bezier(.2,.8,.2,1)]

                    group-hover:rotate-45
                  "
                />
              </span>
            </a>

            {/* HAMBURGER */}

            <button
              type="button"
              aria-label={menuOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((current) => !current)}
              className="
                flex
                h-[40px]
                w-[40px]
                shrink-0
                items-center
                justify-center

                border
                border-[#315367]

                bg-[#071B2A]

                text-white

                transition-colors
                duration-300

                hover:border-[#DFFD44]
                hover:text-[#DFFD44]

                sm:h-[46px]
                sm:w-[46px]

                lg:hidden
              "
            >
              <span
                className={`
                  transition-transform
                  duration-500

                  ${menuOpen ? "rotate-90" : "rotate-0"}
                `}
              >
                {menuOpen ? (
                  <X size={20} strokeWidth={1.8} />
                ) : (
                  <Menu size={21} strokeWidth={1.8} />
                )}
              </span>
            </button>
          </div>
        </nav>

        {/* =================================================
            MOBILE MENU
        ================================================= */}

        <div
          className={`
            absolute

            left-3
            right-3
            top-[71px]

            z-40

            overflow-hidden

            border
            border-[#21475C]

            bg-[#071B2A]

            shadow-[0_24px_60px_rgba(0,0,0,0.35)]

            transition-all
            duration-500

            ease-[cubic-bezier(.2,.8,.2,1)]

            sm:left-4
            sm:right-4
            sm:top-[84px]

            lg:hidden

            ${
              menuOpen
                ? "visible translate-y-0 opacity-100"
                : "invisible -translate-y-4 opacity-0"
            }
          `}
        >
          <div className="px-5 py-4 sm:px-7 sm:py-6">
            <div
              className="
                mb-4

                flex
                items-center
                gap-2

                text-[9px]
                font-medium
                uppercase
                tracking-[0.18em]

                text-white/35
              "
            >
              <span className="h-[6px] w-[6px] bg-[#DFFD44]" />
              Explore ORVIA
            </div>

            <div className="flex flex-col">
              {navItems.map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(event) => scrollToSection(event, item.href)}
                  className="
                    group

                    flex
                    items-center
                    justify-between

                    border-b
                    border-white/10

                    py-4

                    sm:py-5
                  "
                >
                  <div className="flex items-center gap-4">
                    <span
                      className="
                        text-[10px]
                        font-medium
                        tabular-nums

                        text-[#DFFD44]
                      "
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span
                      className={`
                        ${robotoCondensed.className}

                        text-[28px]
                        font-bold
                        uppercase
                        leading-none
                        tracking-[-0.035em]

                        text-white

                        sm:text-[36px]
                      `}
                    >
                      {item.label}
                    </span>
                  </div>

                  <ArrowUpRight
                    size={19}
                    strokeWidth={1.5}
                    className="
                      text-white/30

                      transition-all
                      duration-300

                      group-hover:-translate-y-1
                      group-hover:translate-x-1
                      group-hover:text-[#DFFD44]
                    "
                  />
                </a>
              ))}
            </div>
          </div>

          <div
            className="
              flex
              items-center
              justify-between

              bg-[#103348]

              px-5
              py-4

              sm:px-7
            "
          >
            <span
              className="
                text-[10px]
                uppercase
                tracking-[0.12em]

                text-white/40
              "
            >
              Miami Beach · Austin
            </span>

            <span
              className="
                text-[10px]
                uppercase
                tracking-[0.12em]

                text-[#DFFD44]
              "
            >
              Play often.
            </span>
          </div>
        </div>
      </div>

      {/* =====================================================
          VIDEO

          MOBILE:
          Natural 3:2 court.
          No viewport stretching.

          DESKTOP:
          Uses remaining viewport.
      ===================================================== */}

      <div
        className="
          shrink-0

          px-3
          py-3

          sm:px-4

          md:min-h-0
          md:flex-1

          lg:px-5
        "
      >
        <div
          className="
            relative

            aspect-[3/2]
            w-full

            overflow-hidden

            bg-[#0875C9]

            md:h-full
            md:aspect-auto
          "
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="
              absolute
              inset-0

              h-full
              w-full

              object-cover
              object-center
            "
          >
            <source src="/images/padelanimation.webm" type="video/webm" />

            <source src="/images/padelanimation.mp4" type="video/mp4" />
          </video>

          {/* VIDEO SHADING */}

          <div className="pointer-events-none absolute inset-0 bg-[#071B2A]/5" />

          <div
            className="
              pointer-events-none

              absolute
              inset-x-0
              top-0

              h-20

              bg-gradient-to-b
              from-[#04111D]/20
              to-transparent

              md:h-28
            "
          />

          <div
            className="
              pointer-events-none

              absolute
              inset-x-0
              bottom-0

              h-20

              bg-gradient-to-t
              from-[#04111D]/20
              to-transparent

              md:h-28
            "
          />

          {/* =================================================
              HERO TEXT
          ================================================= */}

          <div
            className="
              pointer-events-none

              absolute
              inset-0

              z-20

              flex
              items-center
              justify-center

              px-3

              sm:px-6
            "
          >
            {slides.map((slide, index) => (
              <div
                key={slide.script}
                ref={(element) => {
                  slideRefs.current[index] = element;
                }}
                className="
                  absolute

                  flex
                  w-full
                  max-w-[1150px]

                  flex-col
                  items-center
                  justify-center

                  px-2

                  text-center
                "
              >
                <div
                  className="
                    flex
                    flex-wrap
                    items-center
                    justify-center

                    gap-x-2
                    gap-y-0

                    sm:gap-x-5
                  "
                >
                  {/* SCRIPT */}

                  <span
                    className="
                      relative
                      z-10

                      text-[44px]
                      leading-[0.8]

                      text-[#DFFD44]

                      min-[390px]:text-[52px]

                      sm:text-[82px]
                      md:text-[105px]
                      lg:text-[145px]
                    "
                    style={{
                      fontFamily:
                        '"Brush Script MT", "Brush Script Std", cursive',
                      fontWeight: 400,
                    }}
                  >
                    {slide.script}
                  </span>

                  {/* LINE 1 */}

                  <span
                    className={`
                      ${robotoCondensed.className}

                      bg-gradient-to-b

                      from-[#FFFFFF]
                      via-[#DCE8ED]
                      to-[#7896A6]

                      bg-clip-text

                      text-[27px]
                      font-bold
                      uppercase

                      leading-[0.88]
                      tracking-[-0.045em]

                      text-transparent

                      min-[390px]:text-[31px]

                      sm:text-[52px]
                      md:text-[68px]
                      lg:text-[94px]
                    `}
                  >
                    {slide.line1}
                  </span>
                </div>

                {/* LINE 2 */}

                <span
                  className={`
                    ${robotoCondensed.className}

                    mt-1

                    max-w-[94vw]

                    bg-gradient-to-b

                    from-[#FFFFFF]
                    via-[#DCE8ED]
                    to-[#7896A6]

                    bg-clip-text

                    text-[27px]
                    font-bold
                    uppercase

                    leading-[0.88]
                    tracking-[-0.045em]

                    text-transparent

                    min-[390px]:text-[31px]

                    sm:text-[52px]
                    md:text-[68px]
                    lg:text-[94px]
                  `}
                >
                  {slide.line2}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* =====================================================
          STATS
      ===================================================== */}

      <div
        className="
          shrink-0

          px-3
          pb-3

          sm:px-4
          sm:pb-4

          lg:px-5
        "
      >
        <div
          className="
            flex
            w-full
            flex-col

            overflow-hidden

            border
            border-[#21475C]

            bg-[#103348]

            md:flex-row
            md:items-stretch

            lg:min-h-[104px]
          "
        >
          {/* INTRO */}

          <div
            className="
              hidden

              border-[#2B5266]

              px-5
              py-4

              md:flex
              md:w-[22%]
              md:items-center
              md:border-r

              lg:w-[23%]
              lg:px-7
            "
          >
            <p
              className={`
                ${robotoCondensed.className}

                max-w-[210px]

                text-[12px]
                font-normal
                uppercase

                leading-[1.45]
                tracking-[0.08em]

                text-white/65

                lg:text-[14px]
              `}
            >
              Play often.
              <br />
              Improve every point.
            </p>
          </div>

          {/* STATS GRID */}

          <div
            className="
              grid
              flex-1

              grid-cols-2

              md:grid-cols-4
            "
          >
            {stats.map(({ value, label }, index) => (
              <div
                key={label}
                className={`
                  relative

                  flex
                  min-h-[62px]
                  items-center

                  gap-2.5

                  px-3
                  py-2.5

                  sm:min-h-[70px]
                  sm:gap-3
                  sm:px-5

                  md:justify-center

                  lg:min-h-[102px]
                  lg:gap-5
                  lg:px-7

                  ${
                    index % 2 === 0
                      ? "border-r border-[#2B5266] md:border-r-0"
                      : ""
                  }

                  ${index < 2 ? "border-b border-[#2B5266] md:border-b-0" : ""}

                  ${
                    index !== stats.length - 1
                      ? "md:after:absolute md:after:right-0 md:after:top-1/2 md:after:h-12 md:after:w-px md:after:-translate-y-1/2 md:after:bg-[#2B5266]"
                      : ""
                  }
                `}
              >
                {/* VALUE */}

                <span
                  className={`
                    ${robotoCondensed.className}

                    shrink-0

                    text-[24px]
                    font-normal
                    leading-none

                    text-[#DFFD44]

                    sm:text-[28px]

                    lg:text-[40px]
                  `}
                >
                  {value}
                </span>

                {/* LABEL */}

                <span
                  className={`
                    ${robotoCondensed.className}

                    text-[10px]
                    font-medium
                    uppercase

                    leading-[1.1]
                    tracking-[0.04em]

                    text-white/80

                    min-[390px]:text-[11px]

                    sm:text-[12px]

                    lg:text-[16px]
                  `}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
