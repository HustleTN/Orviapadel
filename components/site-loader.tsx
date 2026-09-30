"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const ICON = "/images/orvia-icon.svg";

export default function SiteLoader() {
  const [visible, setVisible] = useState(true);

  const loaderRef = useRef<HTMLDivElement>(null);
  const courtRef = useRef<HTMLDivElement>(null);
  const ballRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);

  const hasFinishedRef = useRef(false);

  useEffect(() => {
    if (!loaderRef.current) return;

    const originalOverflow = document.documentElement.style.overflow;

    document.documentElement.style.overflow = "hidden";

    let pageReady = document.readyState === "complete";

    const handleLoad = () => {
      pageReady = true;
    };

    window.addEventListener("load", handleLoad);

    /* ======================================================
       COURT LINE SETUP
    ====================================================== */

    const lines = gsap.utils.toArray<SVGPathElement>(".orvia-loader-line");

    lines.forEach((line) => {
      const length = line.getTotalLength();

      gsap.set(line, {
        strokeDasharray: length,
        strokeDashoffset: length,
      });
    });

    /* ======================================================
       INITIAL STATES
    ====================================================== */

    gsap.set(ballRef.current, {
      left: "77%",
      top: "23%",
      opacity: 0,
      scale: 0.7,
    });

    gsap.set(iconRef.current, {
      opacity: 0,
      scale: 0.55,
      rotation: -8,
    });

    gsap.set(progressRef.current, {
      opacity: 0,
      y: 10,
    });

    const counter = {
      value: 0,
    };

    /* ======================================================
       INTRO
    ====================================================== */

    const intro = gsap.timeline({
      defaults: {
        ease: "power3.inOut",
      },
    });

    /* COURT DRAWS */

    intro.to(lines, {
      strokeDashoffset: 0,
      duration: 0.75,
      stagger: 0.045,
      ease: "power2.out",
    });

    /* PROGRESS APPEARS */

    intro.to(
      progressRef.current,
      {
        opacity: 1,
        y: 0,
        duration: 0.35,
      },
      0.25
    );

    /* BALL APPEARS */

    intro.to(
      ballRef.current,
      {
        opacity: 1,
        scale: 1,
        duration: 0.18,
      },
      0.42
    );

    /* RALLY 01 */

    intro.to(
      ballRef.current,
      {
        left: "23%",
        top: "72%",
        duration: 0.38,
        ease: "power1.inOut",
      },
      0.62
    );

    /* ICON REVEAL */

    intro.to(
      iconRef.current,
      {
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 0.48,
        ease: "back.out(1.5)",
      },
      0.72
    );

    /* RALLY 02 */

    intro.to(
      ballRef.current,
      {
        left: "74%",
        top: "68%",
        duration: 0.36,
        ease: "power1.inOut",
      },
      1.02
    );

    /* RALLY 03 */

    intro.to(
      ballRef.current,
      {
        left: "27%",
        top: "27%",
        duration: 0.36,
        ease: "power1.inOut",
      },
      1.38
    );

    /* FINAL BALL TO CENTER */

    intro.to(
      ballRef.current,
      {
        left: "50%",
        top: "50%",
        duration: 0.3,
        ease: "power2.out",
      },
      1.72
    );

    /* ICON PULSE */

    intro.to(
      iconRef.current,
      {
        scale: 1.08,
        duration: 0.2,
        ease: "power2.out",
      },
      1.75
    );

    intro.to(
      iconRef.current,
      {
        scale: 1,
        duration: 0.24,
        ease: "power2.inOut",
      },
      1.95
    );

    /* ======================================================
       COUNTER
    ====================================================== */

    gsap.to(counter, {
      value: 100,
      duration: 2,
      ease: "power2.out",

      onUpdate: () => {
        if (!counterRef.current) return;

        counterRef.current.textContent = String(
          Math.round(counter.value)
        ).padStart(3, "0");
      },
    });

    /* ======================================================
       EXIT
    ====================================================== */

    const finishLoader = () => {
      if (hasFinishedRef.current) return;

      hasFinishedRef.current = true;

      const exit = gsap.timeline({
        onComplete: () => {
          document.documentElement.style.overflow = originalOverflow;

          setVisible(false);
        },
      });

      /* BALL SHOOTS DOWN */

      exit.to(ballRef.current, {
        top: "120%",
        scale: 0.55,
        duration: 0.42,
        ease: "power3.in",
      });

      /* ICON ENLARGES */

      exit.to(
        iconRef.current,
        {
          scale: 1.25,
          opacity: 0,
          duration: 0.35,
          ease: "power2.in",
        },
        "-=0.28"
      );

      /* COURT + PROGRESS FADE */

      exit.to(
        [courtRef.current, progressRef.current],
        {
          opacity: 0,
          duration: 0.28,
          ease: "power2.out",
        },
        "-=0.18"
      );

      /* SCREEN LIFTS */

      exit.to(
        loaderRef.current,
        {
          yPercent: -100,
          duration: 0.8,
          ease: "power4.inOut",
        },
        "-=0.03"
      );
    };

    /* ======================================================
       WAIT FOR PAGE
    ====================================================== */

    const minimumTimer = window.setTimeout(() => {
      if (pageReady) {
        finishLoader();
        return;
      }

      const readyCheck = window.setInterval(() => {
        if (!pageReady) return;

        window.clearInterval(readyCheck);
        finishLoader();
      }, 80);

      window.setTimeout(() => {
        window.clearInterval(readyCheck);
        finishLoader();
      }, 2500);
    }, 2100);

    /* ======================================================
       CLEANUP
    ====================================================== */

    return () => {
      window.removeEventListener("load", handleLoad);

      window.clearTimeout(minimumTimer);

      document.documentElement.style.overflow = originalOverflow;

      gsap.killTweensOf([
        loaderRef.current,
        courtRef.current,
        ballRef.current,
        iconRef.current,
        progressRef.current,
        counter,
      ]);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      ref={loaderRef}
      className="
        fixed
        inset-0
        z-[9999]
        h-[100svh]
        w-screen
        overflow-hidden
        bg-[#071B2A]
        text-[#F4F8FA]
      "
    >
      {/* ======================================================
          FULL-SCREEN COURT
      ====================================================== */}

      <div
        ref={courtRef}
        className="
          absolute
          inset-x-3
          inset-y-4
          sm:inset-x-6
          sm:inset-y-6
          lg:inset-x-10
          lg:inset-y-8
        "
      >
        <svg
          viewBox="0 0 1600 900"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 h-full w-full"
        >
          {/* OUTER COURT */}

          <path
            className="orvia-loader-line"
            d="M20 20H1580V880H20V20Z"
            stroke="rgba(244,248,250,0.28)"
            strokeWidth="2"
          />

          {/* CENTRAL NET */}

          <path
            className="orvia-loader-line"
            d="M800 20V880"
            stroke="rgba(244,248,250,0.38)"
            strokeWidth="2"
          />

          {/* LEFT SERVICE LINE */}

          <path
            className="orvia-loader-line"
            d="M500 20V880"
            stroke="rgba(244,248,250,0.20)"
            strokeWidth="2"
          />

          {/* RIGHT SERVICE LINE */}

          <path
            className="orvia-loader-line"
            d="M1100 20V880"
            stroke="rgba(244,248,250,0.20)"
            strokeWidth="2"
          />

          {/* TOP CENTER */}

          <path
            className="orvia-loader-line"
            d="M500 450H800"
            stroke="rgba(244,248,250,0.20)"
            strokeWidth="2"
          />

          {/* BOTTOM CENTER */}

          <path
            className="orvia-loader-line"
            d="M800 450H1100"
            stroke="rgba(244,248,250,0.20)"
            strokeWidth="2"
          />

          {/* GLASS DETAILS */}

          <path
            className="orvia-loader-line"
            d="M20 170H110"
            stroke="rgba(244,248,250,0.10)"
            strokeWidth="2"
          />

          <path
            className="orvia-loader-line"
            d="M20 730H110"
            stroke="rgba(244,248,250,0.10)"
            strokeWidth="2"
          />

          <path
            className="orvia-loader-line"
            d="M1490 170H1580"
            stroke="rgba(244,248,250,0.10)"
            strokeWidth="2"
          />

          <path
            className="orvia-loader-line"
            d="M1490 730H1580"
            stroke="rgba(244,248,250,0.10)"
            strokeWidth="2"
          />
        </svg>

        {/* ====================================================
            ORVIA ICON
        ==================================================== */}

        <div
          ref={iconRef}
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            z-20
            w-[82px]
            -translate-x-1/2
            -translate-y-1/2
            sm:w-[105px]
            lg:w-[130px]
          "
        >
          <Image
            src={ICON}
            alt="ORVIA Padel"
            width={160}
            height={160}
            priority
            className="h-auto w-full"
          />
        </div>

        {/* ====================================================
            BALL
        ==================================================== */}

        <div
          ref={ballRef}
          className="
            absolute
            z-30
            h-[12px]
            w-[12px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[#DFFD44]
            shadow-[0_0_25px_rgba(223,253,68,0.85)]
            sm:h-[14px]
            sm:w-[14px]
            lg:h-[16px]
            lg:w-[16px]
          "
        />
      </div>

      {/* ======================================================
          TOP LABEL
      ====================================================== */}

      <div
        className="
          absolute
          left-5
          top-5
          z-30
          text-[9px]
          uppercase
          tracking-[0.2em]
          text-[#7896A6]
          sm:left-8
          sm:top-7
          sm:text-[10px]
          lg:left-12
          lg:top-9
        "
      >
        ORVIA PADEL
      </div>

      {/* ======================================================
          PROGRESS
      ====================================================== */}

      <div
        ref={progressRef}
        className="
          absolute
          bottom-5
          left-5
          right-5
          z-30
          flex
          items-center
          justify-between
          border-t
          border-white/10
          pt-4
          sm:bottom-7
          sm:left-8
          sm:right-8
          lg:bottom-9
          lg:left-12
          lg:right-12
        "
      >
        <span
          className="
            text-[9px]
            uppercase
            tracking-[0.2em]
            text-[#7896A6]
            sm:text-[10px]
          "
        >
          Loading court
        </span>

        <div className="flex items-baseline gap-1.5">
          <span
            ref={counterRef}
            className="
              text-[12px]
              font-medium
              tabular-nums
              tracking-[0.1em]
              text-[#F4F8FA]
              sm:text-[13px]
            "
          >
            000
          </span>

          <span className="text-[9px] text-[#7896A6]">%</span>
        </div>
      </div>
    </div>
  );
}
