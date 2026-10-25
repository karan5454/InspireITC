import { useState } from "react";
import {
  Mail,
  ArrowUpRight,
  Send,
  User,
  Phone,
  MessageSquare,
  Sparkles,
  Plus,
  Minus,
} from "lucide-react";

const faqs = [
  {
    question: "What is InspireITC?",
    answer:
      "InspireITC helps people explore IT services, technical learning opportunities, and career growth options.",
  },
  {
    question: "What services do you offer?",
    answer:
      "Visit our Services page to explore our IT solutions and learn how we can help with your requirements.",
  },
  {
    question: "Do you provide software developer training?",
    answer:
      "Explore our Training page to learn about available technology courses and practical learning opportunities.",
  },
  {
    question: "Which technologies can I learn?",
    answer:
      "Depending on the available training programs, you can explore technologies such as Java, web development, Python, and cloud computing.",
  },
  {
    question: "Do you help with placement preparation?",
    answer:
      "Visit our Placement page to explore career support and interview preparation information.",
  },
  {
    question: "Can beginners contact InspireITC?",
    answer:
      "Yes! Share your interests, current skills, and learning goals through the contact form.",
  },
  {
    question: "Can I enquire about an IT project?",
    answer:
      "Absolutely. Describe your project requirements in the message box so the team can understand your needs.",
  },
  {
    question: "How can I enquire about course fees?",
    answer:
      "Mention the course or technology you are interested in, and submit your enquiry for further information.",
  },
  {
    question: "Are online learning options available?",
    answer:
      "Contact us with your preferred learning mode so we can provide information about available options.",
  },
  {
    question: "How do I share my requirements?",
    answer:
      "Fill in your name, email, contact number, and a short description using the contact form above.",
  },
  {
    question: "How soon will I receive a response?",
    answer:
      "Response time may vary. Please provide accurate contact details so the team can get back to you.",
  },
  {
    question: "How can I contact InspireITC directly?",
    answer:
      "You can email info@inspireitc.com or use the contact form and social media links on this page.",
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    description: "",
  });

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const updateField = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      `Website Enquiry from ${form.name}`
    );

    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nContact Number: ${form.phone}\n\nDescription:\n${form.description}`
    );

    window.location.href = `mailto:info@inspireitc.com?subject=${subject}&body=${body}`;
  };

  return (
    <main className="relative isolate overflow-hidden bg-jet text-white">
      {/* CONTACT PAGE BACKGROUND VIDEO */}
<div className="pointer-events-none absolute inset-x-0 top-0 -z-0 h-[650px] overflow-hidden">
  <video
    autoPlay
    muted
    loop
    playsInline
    preload="metadata"
    className="h-full w-full object-cover object-center opacity-60"
  >
    <source
      src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260419_065931_e3ca7b53-d32e-4ad5-81de-dc9d6fcfda6d.mp4"
      type="video/mp4"
    />
  </video>

  <div className="absolute inset-0 bg-gradient-to-b from-jet/30 via-jet/50 to-jet" />
</div>
      {/* CONTACT HERO */}
      <section className="relative px-5 pb-16 pt-36 sm:px-8 sm:pt-44">
        <div className="pointer-events-none absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-amethyst/20 blur-[120px]" />
        <div className="pointer-events-none absolute right-0 top-64 h-64 w-64 rounded-full bg-cyan/10 blur-[110px]" />

        <div className="relative mx-auto max-w-6xl">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-cyan" />
            <p className="text-xs font-semibold tracking-[0.3em] text-cyan sm:text-sm">
              GET IN TOUCH
            </p>
          </div>

          <h1 className="max-w-4xl font-instrument text-5xl leading-[1.05] sm:text-7xl lg:text-8xl">
            Let's build something
            <span className="mt-2 block bg-gradient-to-r from-amethyst via-cyan to-white bg-clip-text text-transparent">
              extraordinary.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-white/60 sm:text-base sm:leading-8">
            Have a project in mind, looking to upgrade your skills, or ready
            for your next career move? Tell us what you need. Let's make it
            happen together.
          </p>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="relative px-5 pb-24 sm:px-8">
        <div className="pointer-events-none absolute left-1/4 top-1/3 h-72 w-72 rounded-full bg-amethyst/10 blur-[120px]" />

        <div className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-16">
          {/* LEFT INFORMATION */}
          <div className="pt-4">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] shadow-[0_0_35px_rgba(139,44,245,0.15)]">
              <Sparkles className="h-7 w-7 text-cyan" />
            </div>

            <h2 className="font-instrument text-4xl sm:text-5xl">
              Your next big idea starts here.
            </h2>

            <p className="mt-5 max-w-md text-sm leading-7 text-white/55 sm:text-base">
              Send us a message with your requirements. We look forward to
              hearing from you and exploring how we can help.
            </p>

            <div className="mt-10 space-y-5">
              <a
                href="mailto:info@inspireitc.com"
                className="group flex items-center gap-4"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] transition group-hover:border-cyan/50 group-hover:bg-cyan/10">
                  <Mail className="h-5 w-5 text-cyan" />
                </span>
                <span>
                  <span className="block text-xs text-white/40">EMAIL US</span>
                  <span className="mt-1 block text-sm transition group-hover:text-cyan sm:text-base">
                    info@inspireitc.com
                  </span>
                </span>
                <ArrowUpRight className="ml-auto h-4 w-4 text-white/40 transition group-hover:text-cyan" />
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] transition group-hover:border-cyan/50 group-hover:bg-cyan/10">
                <ArrowUpRight className="h-5 w-5 text-cyan" />
                </span>
                <span>
                  <span className="block text-xs text-white/40">
                    CONNECT WITH US
                  </span>
                  <span className="mt-1 block text-sm transition group-hover:text-cyan sm:text-base">
                    LinkedIn
                  </span>
                </span>
                <ArrowUpRight className="ml-auto h-4 w-4 text-white/40 transition group-hover:text-cyan" />
              </a>

              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] transition group-hover:border-cyan/50 group-hover:bg-cyan/10">
                  <ArrowUpRight className="h-5 w-5 text-cyan" />
                </span>
                <span>
                  <span className="block text-xs text-white/40">
                    FOLLOW US
                  </span>
                  <span className="mt-1 block text-sm transition group-hover:text-cyan sm:text-base">
                    Instagram
                  </span>
                </span>
                <ArrowUpRight className="ml-auto h-4 w-4 text-white/40 transition group-hover:text-cyan" />
              </a>
            </div>
          </div>

          {/* TRANSPARENT 3D GLASS FORM */}
          <div className="relative [perspective:1200px]">
            <div className="pointer-events-none absolute -inset-1 rounded-[30px] bg-gradient-to-br from-amethyst/30 via-cyan/10 to-amethyst/20 opacity-70 blur-xl" />

            <form
              onSubmit={handleSubmit}
              className="relative rounded-[26px] border border-white/[0.14] bg-white/[0.055] p-5 shadow-[0_25px_90px_rgba(0,0,0,0.4)] backdrop-blur-2xl transition-transform duration-500 hover:[transform:rotateX(1deg)_rotateY(-1deg)] sm:p-8 lg:p-9"
            >
              <div className="mb-8 flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold tracking-[0.25em] text-cyan">
                    CONTACT FORM
                  </p>
                  <h3 className="mt-3 font-instrument text-3xl sm:text-4xl">
                    Send us a message
                  </h3>
                  <p className="mt-2 text-sm text-white/45">
                    All fields are required.
                  </p>
                </div>

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-amethyst/30 bg-amethyst/10">
                  <Send className="h-5 w-5 text-cyan" />
                </div>
              </div>

              <div className="space-y-5">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-2 block text-sm text-white/75"
                  >
                    Full Name
                  </label>
                  <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/20 px-4 transition focus-within:border-cyan/60 focus-within:ring-2 focus-within:ring-cyan/10">
                    <User className="h-4 w-4 shrink-0 text-white/35" />
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      maxLength={100}
                      value={form.name}
                      onChange={updateField}
                      placeholder="Enter your full name"
                      className="min-w-0 flex-1 bg-transparent py-3.5 text-sm text-white outline-none placeholder:text-white/30"
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="mb-2 block text-sm text-white/75"
                    >
                      Email Address
                    </label>
                    <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/20 px-4 transition focus-within:border-cyan/60 focus-within:ring-2 focus-within:ring-cyan/10">
                      <Mail className="h-4 w-4 shrink-0 text-white/35" />
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        maxLength={254}
                        value={form.email}
                        onChange={updateField}
                        placeholder="you@example.com"
                        className="min-w-0 w-full bg-transparent py-3.5 text-sm text-white outline-none placeholder:text-white/30"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="mb-2 block text-sm text-white/75"
                    >
                      Contact Number
                    </label>
                    <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/20 px-4 transition focus-within:border-cyan/60 focus-within:ring-2 focus-within:ring-cyan/10">
                      <Phone className="h-4 w-4 shrink-0 text-white/35" />
                      <input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        required
                        maxLength={20}
                        pattern="[+0-9() -]{7,20}"
                        title="Enter a valid contact number."
                        value={form.phone}
                        onChange={updateField}
                        placeholder="+91 98765 43210"
                        className="min-w-0 w-full bg-transparent py-3.5 text-sm text-white outline-none placeholder:text-white/30"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-description"
                    className="mb-2 block text-sm text-white/75"
                  >
                    Description
                  </label>
                  <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-black/20 px-4 transition focus-within:border-cyan/60 focus-within:ring-2 focus-within:ring-cyan/10">
                    <MessageSquare className="mt-4 h-4 w-4 shrink-0 text-white/35" />
                    <textarea
                      id="contact-description"
                      name="description"
                      required
                      minLength={10}
                      maxLength={2000}
                      rows={4}
                      value={form.description}
                      onChange={updateField}
                      placeholder="Tell us about your project, training needs, or enquiry..."
                      className="min-w-0 w-full resize-y bg-transparent py-3.5 text-sm leading-6 text-white outline-none placeholder:text-white/30"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-amethyst to-[#6825d9] px-6 py-4 text-sm font-semibold text-white shadow-[0_8px_30px_rgba(139,44,245,0.25)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(0,229,255,0.18)] focus:outline-none focus:ring-2 focus:ring-cyan focus:ring-offset-2 focus:ring-offset-jet"
                >
                  Send Message
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </button>

                <p className="text-center text-xs leading-5 text-white/35">
                  Your email app will open with your message prepared.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="relative border-t border-white/[0.08] px-5 py-20 sm:px-8 sm:py-28">
        <div className="pointer-events-none absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-amethyst/10 blur-[120px]" />

        <div className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="text-xs font-semibold tracking-[0.3em] text-cyan">
              NEED TO KNOW
            </p>
            <h2 className="mt-4 font-instrument text-5xl leading-tight sm:text-6xl">
              Frequently asked
              <span className="block text-white/40">questions.</span>
            </h2>
            <p className="mt-5 max-w-sm text-sm leading-7 text-white/50">
              Have a question? Find quick answers to some of the things people
              ask us most often.
            </p>
          </div>

          <div className="divide-y divide-white/10 border-y border-white/10">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div key={faq.question}>
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center gap-4 py-5 text-left sm:py-6"
                  >
                    <span className="w-7 shrink-0 text-xs text-cyan/80">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="flex-1 text-sm font-medium leading-6 text-white/85 transition hover:text-cyan sm:text-base">
                      {faq.question}
                    </span>

                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 text-cyan">
                      {isOpen ? (
                        <Minus className="h-4 w-4" />
                      ) : (
                        <Plus className="h-4 w-4" />
                      )}
                    </span>
                  </button>

                  {isOpen && (
                    <p className="max-w-2xl pb-6 pl-11 pr-8 text-sm leading-7 text-white/50">
                      {faq.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="px-5 pb-24 sm:px-8">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] px-6 py-12 text-center sm:px-12 sm:py-16">
          <div className="pointer-events-none absolute left-1/2 top-0 h-40 w-72 -translate-x-1/2 rounded-full bg-amethyst/20 blur-[80px]" />

          <p className="relative text-xs font-semibold tracking-[0.3em] text-cyan">
            YOUR NEXT STEP STARTS HERE
          </p>
          <h2 className="relative mt-4 font-instrument text-4xl sm:text-6xl">
            Let's make it happen.
          </h2>
          <a
            href="mailto:info@inspireitc.com"
            className="relative mt-8 inline-flex items-center gap-3 rounded-xl border border-white/15 bg-white/[0.06] px-6 py-3.5 text-sm font-medium transition hover:border-cyan/50 hover:bg-cyan/10"
          >
            <Mail className="h-4 w-4 text-cyan" />
            info@inspireitc.com
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </main>
  );
}