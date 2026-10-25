import { ArrowUpRight, Code2 } from "lucide-react";

type Course = {
  title: string;
  desc: string;
  tech: string[];
  logos: [string, string][];
};

const courses: Course[] = [
  {
    title: "Full Stack Java Developer",
    desc: "Build modern web applications, REST APIs and scalable backend services.",
    tech: ["Java", "Spring Boot", "React", "MySQL"],
    logos: [
      ["Java", "java/java-original.svg"],
      ["Spring", "spring/spring-original.svg"],
      ["React", "react/react-original.svg"],
      ["MySQL", "mysql/mysql-original.svg"],
    ],
  },
  {
    title: "Full Stack .NET Developer",
    desc: "Develop business applications using .NET and modern frontend tools.",
    tech: ["C#", ".NET", "Angular", "SQL Server"],
    logos: [
      ["C#", "csharp/csharp-original.svg"],
      [".NET", "dot-net/dot-net-original.svg"],
      ["Angular", "angular/angular-original.svg"],
      ["SQL", "microsoftsqlserver/microsoftsqlserver-original.svg"],
    ],
  },
  {
    title: "MERN Stack Developer",
    desc: "Create full-stack web applications with JavaScript technologies.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    logos: [
      ["MongoDB", "mongodb/mongodb-original.svg"],
      ["Express", "express/express-original.svg"],
      ["React", "react/react-original.svg"],
      ["Node.js", "nodejs/nodejs-original.svg"],
    ],
  },
  {
    title: "Python Developer",
    desc: "Learn Python, backend development, APIs and database integration.",
    tech: ["Python", "Django", "FastAPI", "SQL"],
    logos: [
      ["Python", "python/python-original.svg"],
      ["Django", "django/django-plain.svg"],
      ["FastAPI", "fastapi/fastapi-original.svg"],
      ["MySQL", "mysql/mysql-original.svg"],
    ],
  },
  {
    title: "Data Engineer",
    desc: "Work with data pipelines, processing systems and cloud platforms.",
    tech: ["Python", "SQL", "Spark", "AWS"],
    logos: [
      ["Python", "python/python-original.svg"],
      ["MySQL", "mysql/mysql-original.svg"],
      ["Spark", "apachespark/apachespark-original.svg"],
      ["AWS", "amazonwebservices/amazonwebservices-original-wordmark.svg"],
    ],
  },
  {
    title: "Data Analyst",
    desc: "Analyze datasets and turn business data into useful insights.",
    tech: ["Python", "SQL", "Power BI", "Excel"],
    logos: [
      ["Python", "python/python-original.svg"],
      ["MySQL", "mysql/mysql-original.svg"],
      ["Power BI", "powerbi/powerbi-original.svg"],
      ["Excel", "microsoftsqlserver/microsoftsqlserver-original.svg"],
    ],
  },
  {
    title: "DevOps Engineer",
    desc: "Learn deployment automation, containers and CI/CD workflows.",
    tech: ["Docker", "Kubernetes", "Jenkins", "Linux"],
    logos: [
      ["Docker", "docker/docker-original.svg"],
      ["Kubernetes", "kubernetes/kubernetes-original.svg"],
      ["Jenkins", "jenkins/jenkins-original.svg"],
      ["Linux", "linux/linux-original.svg"],
    ],
  },
  {
    title: "Cloud Engineer",
    desc: "Understand cloud infrastructure, deployment and cloud services.",
    tech: ["AWS", "Azure", "Docker", "Linux"],
    logos: [
      ["AWS", "amazonwebservices/amazonwebservices-original-wordmark.svg"],
      ["Azure", "azure/azure-original.svg"],
      ["Docker", "docker/docker-original.svg"],
      ["Linux", "linux/linux-original.svg"],
    ],
  },
  {
    title: "Android Developer",
    desc: "Build mobile applications using Kotlin and Android technologies.",
    tech: ["Kotlin", "Android", "Firebase", "Git"],
    logos: [
      ["Kotlin", "kotlin/kotlin-original.svg"],
      ["Android", "android/android-original.svg"],
      ["Firebase", "firebase/firebase-plain.svg"],
      ["Git", "git/git-original.svg"],
    ],
  },
  {
    title: "QA Automation Engineer",
    desc: "Automate software testing and improve application quality.",
    tech: ["Java", "Selenium", "Cypress", "Git"],
    logos: [
      ["Java", "java/java-original.svg"],
      ["Selenium", "selenium/selenium-original.svg"],
      ["Cypress", "cypressio/cypressio-original.svg"],
      ["Git", "git/git-original.svg"],
    ],
  },
  {
    title: "Cybersecurity Engineer",
    desc: "Explore security fundamentals, networking and Linux tools.",
    tech: ["Linux", "Python", "Networking", "Git"],
    logos: [
      ["Linux", "linux/linux-original.svg"],
      ["Python", "python/python-original.svg"],
      ["Bash", "bash/bash-original.svg"],
      ["Git", "git/git-original.svg"],
    ],
  },
  {
    title: "AI / ML Engineer",
    desc: "Explore machine learning, AI applications and data science tools.",
    tech: ["Python", "TensorFlow", "PyTorch", "NumPy"],
    logos: [
      ["Python", "python/python-original.svg"],
      ["TensorFlow", "tensorflow/tensorflow-original.svg"],
      ["PyTorch", "pytorch/pytorch-original.svg"],
      ["NumPy", "numpy/numpy-original.svg"],
    ],
  },
];

function getLogoUrl(path: string): string {
  return `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${path}`;
}

export default function TrainingPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-jet text-white">
      {/* Background video */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[720px]">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="h-full w-full object-cover brightness-125"
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_171521_25968ba2-b594-4b32-aab7-f6b69398a6fa.mp4"
            type="video/mp4"
          />
        </video>

        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-jet/75 to-jet" />
      </div>

      {/* Page heading */}
      <section className="relative px-5 pb-12 pt-40 text-center sm:px-8 sm:pt-48">
        <p className="mb-4 text-xs font-semibold tracking-[0.35em] text-cyan sm:text-sm">
          LEARN · BUILD · GROW
        </p>

        <h1 className="font-instrument text-5xl sm:text-7xl">
          Developer <span className="text-amethyst">Training</span>
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
          Explore technology learning tracks and build practical skills
          for your software development career.
        </p>

        <div className="mt-7 flex flex-wrap justify-center gap-3 text-xs text-white/70 sm:text-sm">
          <span className="rounded-full border border-white/15 bg-black/30 px-4 py-2">
            12 Learning Tracks
          </span>
          <span className="rounded-full border border-white/15 bg-black/30 px-4 py-2">
            Modern Technologies
          </span>
          <span className="rounded-full border border-white/15 bg-black/30 px-4 py-2">
            Practical Skills
          </span>
        </div>
      </section>

      {/* Course cards */}
      <section className="relative px-5 pb-24 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, index) => (
            <article
              key={course.title}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b10]/90 p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-amethyst/60 hover:shadow-[0_12px_45px_rgba(139,44,245,0.15)]"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amethyst to-transparent opacity-0 transition group-hover:opacity-100" />

              <div className="mb-6 flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-amethyst/25 bg-amethyst/10 text-amethyst">
                  <Code2 size={22} />
                </div>

                <span className="text-xs tracking-widest text-white/40">
                  TRACK {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <h2 className="text-xl font-semibold leading-snug sm:text-2xl">
                {course.title}
              </h2>

              <p className="mt-3 min-h-[48px] text-sm leading-6 text-white/60">
                {course.desc}
              </p>

              {/* Technology logos */}
              <div className="my-6 flex flex-wrap gap-3">
                {course.logos.map(([name, path]) => (
                  <div
                    key={name}
                    title={name}
                    className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] p-2.5 transition hover:border-cyan/40 hover:bg-white/[0.08]"
                  >
                    <img
                      src={getLogoUrl(path)}
                      alt={name}
                      title={name}
                      loading="lazy"
                      className="h-full w-full object-contain"
                      onError={(event) => {
                        event.currentTarget.style.visibility = "hidden";
                      }}
                    />
                  </div>
                ))}
              </div>

              {/* Technology tags */}
              <div className="mb-6 flex flex-wrap gap-2">
                {course.tech.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-white/70 transition hover:border-amethyst/50 hover:text-white"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              {/* Contact link */}
              <div className="mt-auto border-t border-white/10 pt-4">
                <a
                  href="/contact"
                  className="flex items-center justify-between text-sm font-medium text-cyan transition hover:text-white"
                >
                  Enquire about course
                  <ArrowUpRight
                    size={18}
                    className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}