"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Eye, EyeOff, LockKeyhole, Mail } from "lucide-react";
import memberLoginLogo from "@/public/assets/Logo Upated.png";
import memberLoginVisual from "@/public/assets/login-csc.jpg";

const MemberLogin = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <section className="relative flex min-h-screen overflow-hidden bg-[#eef3f7] px-4 py-6 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(28,47,92,0.14),_transparent_38%),radial-gradient(circle_at_bottom_right,_rgba(240,102,0,0.1),_transparent_28%)]" />

      <div className="relative mx-auto grid w-full max-w-5xl overflow-hidden rounded-[32px] border border-[#d9e3ec] bg-white shadow-[0_28px_90px_rgba(16,32,51,0.12)] lg:max-h-[calc(100vh-3rem)] lg:grid-cols-[1fr_0.92fr]">
        <div className="flex flex-col justify-center px-6 py-10 sm:px-10 md:px-12 lg:px-14">
          <div className="mb-8 flex items-center gap-4">
            <div className="flex h-[72px] w-[72px] items-center justify-center rounded-[22px] bg-[#f5f8fb] p-3 shadow-inner">
              <Image
                src={memberLoginLogo}
                alt="ClaimScope logo"
                className="h-full w-full object-contain"
              />
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#446281]">
                Member Portal
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-[#102033] sm:text-4xl">
                Member Login
              </h1>
            </div>
          </div>

          <p className="max-w-xl text-sm leading-7 text-[#516579] sm:text-base">
            Sign in to access your learning modules, educational resources, and
            governance-aligned training content inside the ClaimScope LMS.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div>
              <label
                htmlFor="member-email"
                className="mb-2 block text-sm font-semibold text-[#102033]"
              >
                Email Address
              </label>
              <div className="relative">
                <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#5d7590]" />
                <input
                  id="member-email"
                  type="email"
                  placeholder="Enter your member email"
                  className="w-full rounded-2xl border border-[#d4deea] bg-[#f8fbfd] py-4 pl-11 pr-4 text-sm text-[#102033] outline-none transition focus:border-[#1c2f5c] focus:bg-white focus:shadow-[0_0_0_4px_rgba(28,47,92,0.08)]"
                  required
                />
              </div>
            </div>

            <div>
              <div className="mb-2 flex items-center justify-between gap-4">
                <label
                  htmlFor="member-password"
                  className="block text-sm font-semibold text-[#102033]"
                >
                  Password
                </label>
              </div>

              <div className="relative">
                <LockKeyhole className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#5d7590]" />
                <input
                  id="member-password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="w-full rounded-2xl border border-[#d4deea] bg-[#f8fbfd] py-4 pl-11 pr-14 text-sm text-[#102033] outline-none transition focus:border-[#1c2f5c] focus:bg-white focus:shadow-[0_0_0_4px_rgba(28,47,92,0.08)]"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((value) => !value)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#5d7590] transition hover:text-[#1c2f5c]"
                  aria-label={
                    showPassword ? "Hide password" : "Show password"
                  }
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-3 pt-2 sm:flex-row">
              <button
                type="submit"
                className="inline-flex min-h-[56px] flex-1 items-center justify-center rounded-2xl bg-[#1c2f5c] px-6 text-sm font-semibold tracking-wide text-white transition hover:bg-[#162448]"
              >
                Sign In
              </button>
              <Link
                href="/lms"
                className="inline-flex min-h-[56px] flex-1 items-center justify-center rounded-2xl border border-[#d4deea] bg-white px-6 text-sm font-semibold tracking-wide text-[#102033] transition hover:border-[#1c2f5c] hover:text-[#1c2f5c]"
              >
                Back to LMS
              </Link>
            </div>
          </form>
        </div>

        <div className="relative hidden min-h-full lg:block">
          <Image
            src={memberLoginVisual}
            alt="Member portal visual"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(16,32,51,0.2)_0%,rgba(16,32,51,0.74)_100%)]" />
        </div>
      </div>
    </section>
  );
};

export default MemberLogin;
