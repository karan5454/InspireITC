
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

const VIDEO_URL =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_115001_bcdaa3b4-03de-47e7-ad63-ae3e392c32d4.mp4";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-jet px-5 text-center text-white">
      {/* Background video */}
      <video
  autoPlay
  muted
  loop
  playsInline
  preload="auto"
  src={VIDEO_URL}
  className="absolute inset-0 h-full w-full translate-y-[17%] object-cover"
  style={{ opacity: 1 }}
/>

      {/* Dark overlay for readable text */}
      <div className="absolute inset-0 bg-black/10" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/50" />
      {/* Smooth bottom fade */}
<div className="pointer-events-none absolute inset-x-0 bottom-0 z-[5] h-36 bg-gradient-to-b from-transparent via-jet/70 to-jet" />

{/* Cyan separator line */}
<div className="pointer-events-none absolute inset-x-0 bottom-0 z-[6] h-px bg-gradient-to-r from-transparent via-cyan/70 to-transparent" />

      {/* Hero content */}
      <div className="relative z-10 mx-auto max-w-5xl -translate-y-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-6 text-sm tracking-[0.25em] text-cyan"
        >
          TECHNOLOGY · TALENT · TRANSFORMATION
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="font-instrument text-4xl leading-tight sm:text-6xl lg:text-7xl"
        >
          Build Your Future
          <br />
          <span className="text-amethyst">
            With Technology.
          </span>
        </motion.h1>

        <p className="mx-auto mt-6 max-w-2xl leading-7 text-white/80">
          Modern IT solutions, industry-focused training and career support
          to help you move forward.
        </p>

        <motion.a
          href="/services"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="mt-9 inline-flex items-center gap-3 rounded-full bg-amethyst px-7 py-4 transition hover:shadow-[0_0_30px_#8B2CF5]"
        >
          Explore Our Services
          <ArrowRight size={18} />
        </motion.a>
      </div>
    </section>
  );
}
