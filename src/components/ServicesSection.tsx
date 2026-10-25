
import { Link } from "react-router-dom";
import {
  Code2,
  Smartphone,
  Cloud,
  GraduationCap,
  BriefcaseBusiness,
  ArrowUpRight,
} from "lucide-react";


const services = [
  {
    number: "01",
    title: "Service 1",
    description: "Discover our first service and explore what we offer.",
    icon: Code2,
    tags: ["Service", "Solutions"],
  },
  {
    number: "02",
    title: "Service 2",
    description: "Explore our second service and its key features.",
    icon: Smartphone,
    tags: ["Service", "Solutions"],
  },
  {
    number: "03",
    title: "Service 3",
    description: "Learn more about our third service and available solutions.",
    icon: Cloud,
    tags: ["Service", "Solutions"],
  },
  {
    number: "04",
    title: "Service 4",
    description: "Discover another service designed around your needs.",
    icon: GraduationCap,
    tags: ["Service", "Solutions"],
  },
  {
    number: "05",
    title: "Service 5",
    description: "Explore our fifth service and learn more about our offerings.",
    icon: BriefcaseBusiness,
    tags: ["Service", "Solutions"],
  },
];


export default function ServicesSection() {
  return (
    <section className="relative overflow-hidden bg-jet px-6 py-20 sm:py-28">
      {/* Background glow */}
      <div className="pointer-events-none absolute -left-40 top-40 h-80 w-80 rounded-full bg-amethyst/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-10 h-80 w-80 rounded-full bg-cyan/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-12 flex flex-col justify-between gap-5 sm:mb-16 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-xs tracking-[0.25em] text-cyan sm:text-sm">
              WHAT WE DO
            </p>

            <h2 className="max-w-2xl font-instrument text-4xl leading-tight text-white sm:text-5xl md:text-6xl">
              Solutions That Move
              <span className="text-amethyst"> You Forward.</span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-white/55 sm:text-base">
              From digital products to career development, explore our
              technology services designed for the next generation.
            </p>
          </div>

          <Link
            to="/services"
            className="group inline-flex w-fit items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm text-white transition duration-300 hover:border-amethyst hover:bg-amethyst/10"
          >
            Explore All Services
            <ArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>

        {/* Service cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.number}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-amethyst/50 hover:bg-white/[0.045] hover:shadow-[0_15px_50px_rgba(139,44,245,0.12)] sm:p-8"
              >
                <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-amethyst/0 blur-3xl transition-colors duration-500 group-hover:bg-amethyst/15" />

                <div className="relative flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-amethyst/30 bg-amethyst/10 text-amethyst transition-all duration-300 group-hover:border-cyan/40 group-hover:bg-cyan/10 group-hover:text-cyan">
                    <Icon size={23} strokeWidth={1.7} />
                  </div>

                  <span className="font-instrument text-2xl text-white/20 transition-colors group-hover:text-cyan/70">
                    {service.number}
                  </span>
                </div>

                <h3 className="relative mt-7 text-xl font-semibold text-white sm:text-2xl">
                  {service.title}
                </h3>

                <p className="relative mt-3 min-h-[84px] text-sm leading-7 text-white/55">
                  {service.description}
                </p>

                <div className="relative mt-5 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-white/60 transition-colors group-hover:border-white/15"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  to="/contact"
                  aria-label={`Enquire about ${service.title}`}
                  className="relative mt-7 inline-flex items-center gap-2 text-sm font-medium text-cyan"
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
  );
}
