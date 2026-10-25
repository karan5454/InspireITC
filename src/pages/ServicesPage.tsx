
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Layers3,
  Sparkles,
  Boxes,
  Zap,
  Globe,
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "Service 1",
    description: "Discover our first service and explore what we offer.",
    icon: Layers3,
  },
  {
    number: "02",
    title: "Service 2",
    description: "Explore our second service and its key features.",
    icon: Sparkles,
  },
  {
    number: "03",
    title: "Service 3",
    description: "Learn more about our third service and solutions.",
    icon: Boxes,
  },
  {
    number: "04",
    title: "Service 4",
    description: "Discover another service designed around your needs.",
    icon: Zap,
  },
  {
    number: "05",
    title: "Service 5",
    description: "Explore our fifth service and available offerings.",
    icon: Globe,
  },
];

export default function ServicesPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-jet text-white">
      {/* Background video */}
      <div className="absolute inset-0 h-[650px] overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="h-full w-full object-cover object-center brightness-125"
        >
          
          <source
  src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260319_055001_8e16d972-3b2b-441c-86ad-2901a54682f9.mp4"
  type="video/mp4"
/>
        </video>
        

        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/55 to-jet" />
      </div>

      {/* Page heading */}
      <section className="relative px-6 pb-16 pt-44 sm:pb-24 sm:pt-52">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amethyst/40 bg-black/30 px-4 py-2 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-cyan shadow-[0_0_10px_#00E5FF]" />
            <span className="text-xs tracking-[0.2em] text-white/80">
              WHAT WE DO
            </span>
          </div>

          <h1 className="max-w-4xl font-instrument text-5xl leading-tight sm:text-7xl md:text-8xl">
            Our Services
            <span className="text-amethyst">.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-white/70 sm:text-lg">
            Technology solutions designed to help your business move forward.
            Explore what InspireITC has to offer.
          </p>

          <Link
            to="/contact"
            className="group mt-8 inline-flex items-center gap-3 rounded-full bg-amethyst px-6 py-3.5 text-sm font-medium text-white transition duration-300 hover:shadow-[0_0_30px_rgba(139,44,245,0.45)]"
          >
            Let's Talk
            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>
      </section>

      {/* Service cards */}
      <section className="relative px-6 pb-24 pt-8 sm:pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10">
            <p className="text-xs tracking-[0.25em] text-cyan">
              EXPLORE OUR OFFERINGS
            </p>
            <h2 className="mt-3 font-instrument text-3xl sm:text-4xl">
              Services Built for You
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.number}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-amethyst/60 hover:bg-white/[0.07] hover:shadow-[0_15px_45px_rgba(139,44,245,0.12)] sm:p-8"
                >
                  <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-amethyst/0 blur-3xl transition-colors duration-500 group-hover:bg-amethyst/15" />

                  <div className="relative flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-amethyst/30 bg-amethyst/10 text-amethyst transition-colors duration-300 group-hover:border-cyan/40 group-hover:bg-cyan/10 group-hover:text-cyan">
                      <Icon size={23} strokeWidth={1.7} />
                    </div>

                    <span className="font-instrument text-3xl text-white/20 transition-colors group-hover:text-cyan/70">
                      {service.number}
                    </span>
                  </div>

                  <h3 className="relative mt-7 text-xl font-semibold">
                    {service.title}
                  </h3>

                  <p className="relative mt-3 min-h-14 text-sm leading-7 text-white/55">
                    {service.description}
                  </p>

                  <Link
                    to="/contact"
                    className="relative mt-6 inline-flex items-center gap-2 text-sm font-medium text-cyan"
                  >
                    Learn More
                    <ArrowUpRight
                      size={16}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
