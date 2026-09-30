"use client";

import { useState } from "react";
import { Roboto_Condensed } from "next/font/google";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const interests = ["Court booking", "Coaching", "Membership", "Events"];

const stats = [
  ["2", "Locations"],
  ["7", "Days a week"],
  ["8", "Certified coaches"],
  ["620", "Active players"],
];

export default function Contact() {
  const [interest, setInterest] = useState("Court booking");

  return (
    <section
      id="contact"
      className={`${robotoCondensed.className} bg-[#071B2A] px-3 py-16 text-[#F4F8FA] sm:px-4 sm:py-20 lg:px-5 lg:py-28`}
    >
      <div className="mx-auto max-w-[1600px]">
        {/* HEADER */}
        <div className="mb-12 lg:mb-16">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-2.5 w-2.5 rounded-full bg-[#DFFD44]" />

            <span className="text-[12px] font-medium uppercase tracking-[0.14em] text-white/50">
              Let&apos;s play
            </span>
          </div>

          <div className="flex max-w-[1200px] flex-wrap items-end gap-x-5">
            <span
              className="text-[72px] leading-[0.8] text-[#DFFD44] sm:text-[95px] lg:text-[125px]"
              style={{
                fontFamily: '"Brush Script MT", "Brush Script Std", cursive',
                fontWeight: 400,
              }}
            >
              Ready
            </span>

            <h2 className="text-[47px] font-bold uppercase leading-[0.86] tracking-[-0.05em] sm:text-[66px] md:text-[82px] lg:text-[104px]">
              FOR YOUR NEXT GAME?
            </h2>
          </div>
        </div>

        {/* MAIN GRID */}
        <div className="grid gap-4 lg:grid-cols-[0.75fr_1.25fr] lg:gap-5">
          {/* LEFT PANEL */}
          <div className="flex min-h-[500px] flex-col justify-between bg-[#103348] p-6 sm:p-8 lg:min-h-[620px] lg:p-10 xl:p-12">
            <div>
              <p className="max-w-[440px] text-[22px] font-normal leading-[1.25] tracking-[-0.02em] text-white/85 sm:text-[26px] lg:text-[30px]">
                Book a court, ask about coaching, or find the right membership.
                We&apos;ll get you on court.
              </p>

              <div className="mt-10 flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#DFFD44] opacity-40" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-[#DFFD44]" />
                </span>

                <span className="text-[12px] font-medium uppercase tracking-[0.12em] text-white/55">
                  Courts open today
                </span>
              </div>
            </div>

            {/* CONTACT INFO */}
            <div className="space-y-3">
              <a
                href="mailto:hello@orviapadel.com"
                className="group flex items-center justify-between border border-white/10 bg-white/[0.04] px-5 py-4 transition-colors hover:bg-white/[0.08]"
              >
                <div className="flex items-center gap-4">
                  <Mail
                    size={20}
                    strokeWidth={1.6}
                    className="text-[#DFFD44]"
                  />

                  <span className="text-[15px] font-normal text-white/80 sm:text-[17px]">
                    hello@orviapadel.com
                  </span>
                </div>

                <ArrowUpRight
                  size={18}
                  className="text-white/35 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>

              <a
                href="tel:+13055550148"
                className="group flex items-center justify-between border border-white/10 bg-white/[0.04] px-5 py-4 transition-colors hover:bg-white/[0.08]"
              >
                <div className="flex items-center gap-4">
                  <Phone
                    size={20}
                    strokeWidth={1.6}
                    className="text-[#DFFD44]"
                  />

                  <span className="text-[15px] font-normal text-white/80 sm:text-[17px]">
                    +1 (305) 555-0148
                  </span>
                </div>

                <ArrowUpRight
                  size={18}
                  className="text-white/35 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>

              {/* LOCATIONS */}
              <div className="grid gap-2 pt-2 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                <div className="flex items-center gap-3 border border-white/10 bg-white/[0.04] px-4 py-3.5">
                  <MapPin
                    size={18}
                    strokeWidth={1.6}
                    className="shrink-0 text-[#DFFD44]"
                  />

                  <div>
                    <div className="text-[11px] uppercase tracking-[0.1em] text-white/35">
                      Location 01
                    </div>

                    <div className="mt-1 text-[15px] text-white/80">
                      Miami Beach, FL
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 border border-white/10 bg-white/[0.04] px-4 py-3.5">
                  <MapPin
                    size={18}
                    strokeWidth={1.6}
                    className="shrink-0 text-[#DFFD44]"
                  />

                  <div>
                    <div className="text-[11px] uppercase tracking-[0.1em] text-white/35">
                      Location 02
                    </div>

                    <div className="mt-1 text-[15px] text-white/80">
                      Austin, TX
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* SIGN OFF */}
            <div className="mt-10">
              <div
                className="text-[58px] leading-[0.9] text-[#DFFD44] sm:text-[70px]"
                style={{
                  fontFamily: '"Brush Script MT", "Brush Script Std", cursive',
                }}
              >
                See you
              </div>

              <div className="mt-1 text-[32px] font-bold uppercase leading-none tracking-[-0.04em] text-white sm:text-[42px]">
                ON COURT.
              </div>
            </div>
          </div>

          {/* FORM */}
          <form className="bg-[#0875C9] p-6 sm:p-8 lg:p-10 xl:p-12">
            <div className="mb-10 flex items-start justify-between gap-8">
              <div>
                <span className="text-[11px] font-medium uppercase tracking-[0.13em] text-white/55">
                  Start here
                </span>

                <h3 className="mt-2 text-[35px] font-bold uppercase leading-[0.9] tracking-[-0.04em] text-white sm:text-[44px] lg:text-[54px]">
                  TELL US WHAT
                  <br />
                  YOU&apos;RE LOOKING FOR
                </h3>
              </div>

              <span className="hidden text-[64px] font-light leading-none text-[#DFFD44] sm:block">
                ↘
              </span>
            </div>

            {/* INPUTS */}
            <div className="grid gap-3 sm:grid-cols-2">
              <label>
                <span className="mb-2 block text-[11px] uppercase tracking-[0.1em] text-white/55">
                  Name
                </span>

                <input
                  type="text"
                  placeholder="Your name"
                  className="h-[58px] w-full border border-white/20 bg-white/[0.10] px-4 text-[15px] text-white outline-none placeholder:text-white/35 transition focus:border-[#DFFD44] focus:bg-white/[0.14]"
                />
              </label>

              <label>
                <span className="mb-2 block text-[11px] uppercase tracking-[0.1em] text-white/55">
                  Email
                </span>

                <input
                  type="email"
                  placeholder="you@email.com"
                  className="h-[58px] w-full border border-white/20 bg-white/[0.10] px-4 text-[15px] text-white outline-none placeholder:text-white/35 transition focus:border-[#DFFD44] focus:bg-white/[0.14]"
                />
              </label>

              <label className="sm:col-span-2">
                <span className="mb-2 block text-[11px] uppercase tracking-[0.1em] text-white/55">
                  Phone
                </span>

                <input
                  type="tel"
                  placeholder="+1"
                  className="h-[58px] w-full border border-white/20 bg-white/[0.10] px-4 text-[15px] text-white outline-none placeholder:text-white/35 transition focus:border-[#DFFD44] focus:bg-white/[0.14]"
                />
              </label>
            </div>

            {/* INTEREST */}
            <div className="mt-7">
              <span className="mb-3 block text-[11px] uppercase tracking-[0.1em] text-white/55">
                I&apos;m interested in
              </span>

              <div className="flex flex-wrap gap-2">
                {interests.map((item) => {
                  const active = interest === item;

                  return (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setInterest(item)}
                      className={`
                        rounded-full border px-4 py-2.5
                        text-[12px] font-medium
                        uppercase tracking-[0.06em]
                        transition-all duration-300
                        ${
                          active
                            ? "border-[#DFFD44] bg-[#DFFD44] text-[#071B2A]"
                            : "border-white/20 bg-white/[0.07] text-white/70 hover:bg-white/[0.13]"
                        }
                      `}
                    >
                      {item}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* MESSAGE */}
            <label className="mt-7 block">
              <span className="mb-2 block text-[11px] uppercase tracking-[0.1em] text-white/55">
                Message
              </span>

              <textarea
                placeholder="Tell us a little more..."
                rows={5}
                className="w-full resize-none border border-white/20 bg-white/[0.10] p-4 text-[15px] text-white outline-none placeholder:text-white/35 transition focus:border-[#DFFD44] focus:bg-white/[0.14]"
              />
            </label>

            {/* BUTTON */}
            <button
              type="submit"
              className="group mt-7 flex w-full items-center justify-between overflow-hidden bg-[#DFFD44] text-[#071B2A]"
            >
              <span className="relative flex h-[58px] flex-1 items-center overflow-hidden px-6">
                <span className="absolute left-6 text-[14px] font-semibold uppercase tracking-[0.08em] transition-transform duration-500 ease-[cubic-bezier(.2,.8,.2,1)] group-hover:-translate-y-[180%]">
                  Send request
                </span>

                <span className="absolute left-6 translate-y-[180%] text-[14px] font-semibold uppercase tracking-[0.08em] transition-transform duration-500 ease-[cubic-bezier(.2,.8,.2,1)] group-hover:translate-y-0">
                  Send request
                </span>
              </span>

              <span className="m-[4px] flex h-[50px] w-[54px] items-center justify-center bg-[#101113] text-white">
                <ArrowUpRight
                  size={20}
                  strokeWidth={2}
                  className="transition-transform duration-500 group-hover:rotate-45"
                />
              </span>
            </button>
          </form>
        </div>

        {/* BOTTOM STRIP */}
        <div className="mt-4 grid overflow-hidden bg-[#103348] sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(([value, label], index) => (
            <div
              key={label}
              className={`flex items-center gap-4 px-6 py-6 lg:px-8 ${
                index !== stats.length - 1
                  ? "border-b border-white/10 sm:border-b-0 sm:border-r"
                  : ""
              }`}
            >
              <span className="text-[34px] font-normal leading-none text-[#DFFD44]">
                {value}
              </span>

              <span className="text-[13px] font-medium uppercase tracking-[0.07em] text-white/65">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
