import Hls from "hls.js";
import { useEffect, useRef } from "react";
import {
  ArrowUpRight,
  GraduationCap,
  BriefcaseBusiness,
  Users,
  Trophy,
} from "lucide-react";

type Company = {
  name: string;
  domain: string;
  color: string;
};

type Candidate = {
  name: string;
  initials: string;
  role: string;
  company: string;
  domain: string;
  color: string;
  skills: string[];
  story: string;
};

const companies: Company[] = [
  { name: "TCS", domain: "tcs.com", color: "#4B8B3B" },
  { name: "Infosys", domain: "infosys.com", color: "#007CC3" },
  { name: "Accenture", domain: "accenture.com", color: "#A100FF" },
  { name: "Capgemini", domain: "capgemini.com", color: "#0070AD" },
  { name: "Cognizant", domain: "cognizant.com", color: "#0033A0" },
  { name: "Wipro", domain: "wipro.com", color: "#7D2AE8" },
];

const candidates: Candidate[] = [
  {
    name: "Aarav Sharma",
    initials: "AS",
    role: "Full Stack Java Developer",
    company: "TCS",
    domain: "tcs.com",
    color: "#4B8B3B",
    skills: ["Java", "Spring Boot", "React"],
    story:
      "Built a strong foundation in Java, backend development and full-stack project work.",
  },
  {
    name: "Priya Deshmukh",
    initials: "PD",
    role: "Software Developer",
    company: "Infosys",
    domain: "infosys.com",
    color: "#007CC3",
    skills: ["JavaScript", "React", "REST APIs"],
    story:
      "Focused on responsive interfaces, API integration and practical frontend development.",
  },
  {
    name: "Rahul Patil",
    initials: "RP",
    role: "Technology Consultant",
    company: "Accenture",
    domain: "accenture.com",
    color: "#A100FF",
    skills: ["Python", "SQL", "Problem Solving"],
    story:
      "Strengthened programming fundamentals and technical interview preparation.",
  },
  {
    name: "Sneha Kulkarni",
    initials: "SK",
    role: "Cloud Engineer",
    company: "Capgemini",
    domain: "capgemini.com",
    color: "#0070AD",
    skills: ["AWS", "Linux", "Docker"],
    story:
      "Developed practical knowledge of cloud concepts and deployment workflows.",
  },
  {
    name: "Aditya Joshi",
    initials: "AJ",
    role: "Data Engineer",
    company: "Cognizant",
    domain: "cognizant.com",
    color: "#0033A0",
    skills: ["Python", "SQL", "Data Pipelines"],
    story:
      "Practised data processing, SQL queries and programming for data engineering.",
  },
  {
    name: "Neha Verma",
    initials: "NV",
    role: "Software Engineer",
    company: "Wipro",
    domain: "wipro.com",
    color: "#7D2AE8",
    skills: ["Java", "SQL", "Git"],
    story:
      "Improved coding confidence through regular practice and technical revision.",
  },
];

function CompanyLogo({
  domain,
  name,
}: {
  domain: string;
  name: string;
}) {
  return (
    <img
      src={`https://www.google.com/s2/favicons?domain=${domain}&sz=128`}
      alt={`${name} logo`}
      title={name}
      loading="lazy"
      className="h-10 w-10 shrink-0 object-contain"
    />
  );
}

export default function PlacementPage() {
  const videoRef = useRef<HTMLVideoElement>(null);

useEffect(() => {
  const video = videoRef.current;
  if (!video) return;

  const videoUrl =
    "https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8";

  if (Hls.isSupported()) {
    const hls = new Hls();
    hls.loadSource(videoUrl);
    hls.attachMedia(video);

    return () => hls.destroy();
  }

  if (video.canPlayType("application/vnd.apple.mpegurl")) {
    video.src = videoUrl;
  }
}, []);
  return (
    <main className="relative min-h-screen overflow-hidden bg-jet text-white">
      {/* Background video */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[760px]">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover object-center brightness-125"
        >
          <source
            src="https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8"
            type="video/mp4"
          />
        </video>

        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Decorative glow */}
      <div className="pointer-events-none absolute right-0 top-[500px] h-72 w-72 rounded-full bg-cyan/5 blur-[100px]" />

      {/* Hero section */}
      <section className="relative px-5 pb-16 pt-40 text-center sm:px-8 sm:pt-48">
        <p className="mb-4 text-xs font-semibold tracking-[0.35em] text-cyan sm:text-sm">
          YOUR SKILLS. YOUR FUTURE.
        </p>

        <h1 className="font-instrument text-5xl leading-tight sm:text-7xl">
          Learning Today,
          <br />
          <span className="text-amethyst">Success Tomorrow.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
          Develop industry-relevant skills, prepare for technical
          interviews and take the next step in your technology career.
        </p>

        <a
          href="/contact"
          className="mt-8 inline-flex items-center gap-3 rounded-full bg-amethyst px-6 py-3 text-sm font-semibold text-white transition hover:bg-amethyst/80"
        >
          Start Your Journey
          <ArrowUpRight size={18} />
        </a>
      </section>

      {/* Achievement statistics */}
      <section className="relative px-5 pb-20 sm:px-8">
        <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-3">
          {[
            {
              value: "500+",
              label: "Training Completed",
              icon: GraduationCap,
              color: "text-cyan",
            },
            {
              value: "450+",
              label: "Placement Success",
              icon: BriefcaseBusiness,
              color: "text-amethyst",
            },
            {
              value: "100+",
              label: "Featured Career Stories",
              icon: Trophy,
              color: "text-cyan",
            },
          ].map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-[#0b0b10]/75 p-7 text-center backdrop-blur-xl transition hover:border-amethyst/40"
              >
                <Icon
                  className={`mx-auto mb-4 ${stat.color}`}
                  size={28}
                />
                <p className="text-4xl font-semibold tracking-tight">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-white/60">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Company logos */}
      <section className="relative border-y border-white/10 bg-black/25 px-5 py-12 backdrop-blur-sm sm:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="text-center text-xs font-semibold tracking-[0.3em] text-white/50">
            EXPLORE CAREER DESTINATIONS
          </p>

          <div className="mt-8 grid grid-cols-2 items-center gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {companies.map((company) => (
              <div
                key={company.name}
                className="flex items-center justify-center gap-3 rounded-xl border border-white/10 bg-[#0b0b10]/80 px-3 py-4 transition hover:border-white/25"
              >
                <CompanyLogo
                  domain={company.domain}
                  name={company.name}
                />
                <span
                  className="text-sm font-semibold"
                  style={{ color: company.color }}
                >
                  {company.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success stories */}
      <section className="relative px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-3 text-xs font-semibold tracking-[0.3em] text-cyan">
                CAREER JOURNEYS
              </p>
              <h2 className="font-instrument text-4xl sm:text-5xl">
                Success <span className="text-amethyst">Stories</span>
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-white/60">
              Every career starts with learning, practice and the
              confidence to take the next step.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {candidates.map((candidate, index) => (
              <article
                key={candidate.name}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b10]/90 p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-amethyst/50 hover:shadow-[0_15px_45px_rgba(139,44,245,0.12)]"
              >
                <div
                  className="absolute inset-x-0 top-0 h-1"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${candidate.color}, transparent)`,
                  }}
                />

                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div
                      className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border text-lg font-bold"
                      style={{
                        color: candidate.color,
                        borderColor: `${candidate.color}55`,
                        backgroundColor: `${candidate.color}18`,
                      }}
                    >
                      {candidate.initials}
                    </div>

                    <div>
                      <h3 className="font-semibold">
                        {candidate.name}
                      </h3>
                      <p className="mt-1 text-xs leading-5 text-white/55">
                        {candidate.role}
                      </p>
                    </div>
                  </div>

                  <span className="text-xs text-white/35">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="my-6 rounded-xl border border-white/10 bg-white/[0.025] p-4">
                  <p className="mb-3 text-[10px] font-semibold tracking-[0.2em] text-white/45">
                    FEATURED COMPANY
                  </p>

                  <div className="flex items-center gap-3">
                    <CompanyLogo
                      domain={candidate.domain}
                      name={candidate.company}
                    />
                    <span
                      className="font-semibold"
                      style={{ color: candidate.color }}
                    >
                      {candidate.company}
                    </span>
                  </div>
                </div>

                <p className="text-sm leading-7 text-white/65">
                  {candidate.story}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {candidate.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/65"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="mt-auto border-t border-white/10 pt-4 mt-6">
                  <a
                    href="/contact"
                    className="flex items-center justify-between text-sm font-medium text-cyan transition hover:text-white"
                  >
                    Build Your Career
                    <ArrowUpRight
                      size={17}
                      className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </a>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-8 text-center text-xs leading-6 text-white/40">
            Illustrative candidate profiles and stories. Replace with
            verified candidate details before publishing.
          </p>
        </div>
      </section>

      {/* Call to action */}
      <section className="relative px-5 pb-24 sm:px-8">
        <div className="mx-auto max-w-5xl rounded-3xl border border-amethyst/25 bg-gradient-to-br from-amethyst/15 via-[#0b0b10] to-cyan/5 px-6 py-12 text-center sm:px-12 sm:py-16">
          <Users className="mx-auto mb-5 text-cyan" size={32} />

          <h2 className="font-instrument text-4xl sm:text-5xl">
            Your Story Could Be Next.
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-white/60">
            Start building practical skills for your future in software
            development.
          </p>

          <a
            href="/contact"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-cyan px-6 py-3 text-sm font-semibold text-jet transition hover:bg-white"
          >
            Contact InspireITC
            <ArrowUpRight size={18} />
          </a>
        </div>
      </section>
    </main>
  );
}