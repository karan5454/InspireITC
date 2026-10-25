
import ServicesSection from "../components/ServicesSection";
import HeroSection from "../components/HeroSection";


const companies = [
  { name: "TCS", logo: "https://www.google.com/s2/favicons?domain=tcs.com&sz=128" },
  { name: "Infosys", logo: "https://www.google.com/s2/favicons?domain=infosys.com&sz=128" },
  { name: "Wipro", logo: "https://www.google.com/s2/favicons?domain=wipro.com&sz=128" },
  { name: "HCLTech", logo: "https://www.google.com/s2/favicons?domain=hcltech.com&sz=128" },
  { name: "Tech Mahindra", logo: "https://www.google.com/s2/favicons?domain=techmahindra.com&sz=128" },
  { name: "Accenture", logo: "https://www.google.com/s2/favicons?domain=accenture.com&sz=128" },
  { name: "Google", logo: "https://www.google.com/s2/favicons?domain=google.com&sz=128" },
  { name: "Microsoft", logo: "https://www.google.com/s2/favicons?domain=microsoft.com&sz=128" },
  { name: "IBM", logo: "https://www.google.com/s2/favicons?domain=ibm.com&sz=128" },
  { name: "Amazon", logo: "https://www.google.com/s2/favicons?domain=amazon.com&sz=128" },
];


const reviews = [
  {
    name: "Priya Sharma",
    role: "Aspiring Software Developer",
    text: "The practical learning approach helped me understand technology concepts and improve my confidence.",
  },
  {
    name: "Rahul Deshmukh",
    role: "Web Development Learner",
    text: "A structured learning experience with a focus on real-world development skills and problem solving.",
  },
  {
    name: "Sneha Patil",
    role: "IT Career Aspirant",
    text: "The focus on hands-on projects and career preparation makes the learning journey more meaningful.",
  },
];

function CompanyMarquee() {
  return (
    <section className="overflow-hidden border-y border-white/10 bg-[#08080C] py-12 sm:py-16">
      <div className="mx-auto mb-9 max-w-7xl px-6 text-center">
        <p className="mb-3 text-xs tracking-[0.25em] text-cyan sm:text-sm">
          YOUR FUTURE, YOUR AMBITION
        </p>

        <h2 className="font-instrument text-3xl text-white sm:text-4xl">
          Companies Our Learners Aspire To Join
        </h2>

        <p className="mt-3 text-sm text-white/50">
          Explore opportunities across India's leading IT companies and global technology brands.
        </p>
      </div>

      <div className="company-marquee relative">
        <div className="company-track flex w-max items-center">
          {[0, 1].map((group) => (
            <div
              key={group}
              aria-hidden={group === 1}
              className="flex shrink-0 items-center gap-12 pr-12 sm:gap-20 sm:pr-20"
            >
              {companies.map((company) => (
                <div
                  key={`${group}-${company.name}`}
                  title={company.name}
                  className="flex h-16 w-32 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] px-5 transition duration-300 hover:border-amethyst/60 hover:bg-white/[0.07] sm:w-40"
                >
                  <img
                    src={company.logo}
                    alt={group === 0 ? `${company.name} logo` : ""}
                    loading="lazy"
                    className="h-10 w-10 shrink-0 object-contain"
                    onError={(event) => {
                      event.currentTarget.style.display = "none";
                    }}
                  />
                  <span className="sr-only">{company.name}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ReviewsSection() {
  return (
    <section className="bg-jet px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs tracking-[0.25em] text-cyan sm:text-sm">
            LEARNING THAT MOVES YOU FORWARD
          </p>

          <h2 className="font-instrument text-4xl text-white sm:text-5xl">
            Every Step Builds Confidence
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/55 sm:text-base">
            Discover the kind of learning experience we aim to create through
            practical skills, projects, and career preparation.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <article
              key={review.name}
              className="group rounded-2xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-amethyst/50 hover:bg-white/[0.06] hover:shadow-[0_12px_40px_rgba(139,44,245,0.10)] sm:p-8"
            >
              <div className="mb-5 flex gap-1 text-lg text-amber-400" aria-label="Illustrative five-star rating">
                {"★★★★★".split("").map((star, index) => (
                  <span key={index}>{star}</span>
                ))}
              </div>

              <p className="min-h-24 leading-7 text-white/75">
                “{review.text}”
              </p>

              <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-amethyst/40 bg-amethyst/15 font-semibold text-cyan">
                  {review.name
                    .split(" ")
                    .map((part) => part[0])
                    .join("")}
                </div>

                <div>
                  <h3 className="font-medium text-white">{review.name}</h3>
                  <p className="mt-1 text-xs text-white/45">{review.role}</p>
                </div>
              </div>

              <p className="mt-4 text-[10px] uppercase tracking-wider text-white/30">
                Sample testimonial — replace with verified feedback
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <HeroSection />

      <section className="bg-jet px-6 py-20 text-center">
        <p className="mb-3 text-sm tracking-[0.25em] text-cyan">
          WELCOME TO INSPIREITC
        </p>

        <h2 className="font-instrument text-4xl text-white sm:text-5xl">
          Technology Meets Opportunity
        </h2>

        <p className="mx-auto mt-5 max-w-2xl leading-7 text-white/60">
          We help businesses grow with modern IT solutions and help aspiring
          developers prepare for their technology careers.
        </p>
      </section>
      <ServicesSection />

      <CompanyMarquee />

      <ReviewsSection />

      <style>{`
        .company-marquee {
          overflow: hidden;
          width: 100%;
          -webkit-mask-image: linear-gradient(
            to right,
            transparent,
            black 8%,
            black 92%,
            transparent
          );
          mask-image: linear-gradient(
            to right,
            transparent,
            black 8%,
            black 92%,
            transparent
          );
        }

        .company-track {
          animation: inspireitc-marquee 32s linear infinite;
          will-change: transform;
        }

        .company-marquee:hover .company-track {
          animation-play-state: paused;
        }

        @keyframes inspireitc-marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .company-track {
            animation: none;
          }
        }
      `}</style>
    </>
  );
}
