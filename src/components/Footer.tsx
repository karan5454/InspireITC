
import { Link } from "react-router-dom";
import { Mail, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-white/10 bg-jet px-6 py-10"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 sm:flex-row">
        <Link to="/" className="text-xl font-bold">
          Inspire<span className="text-amethyst">ITC</span>
        </Link>

        <p className="text-center text-sm text-white/50">
          Innovation. Technology. Growth.
        </p>

        <div className="flex gap-5">
          <a
            href="mailto:info@inspireitc.com"
            aria-label="Email InspireITC"
            className="text-white/70 hover:text-cyan"
          >
            <Mail size={20} />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="text-white/70 hover:text-cyan"
          >
           <ArrowUpRight size={20} />
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-white/70 hover:text-cyan"
          >
            <ArrowUpRight size={20} />
          </a>
        </div>
      </div>

      <p className="mt-8 text-center text-xs text-white/40">
        © {new Date().getFullYear()} InspireITC. All rights reserved.
      </p>
    </footer>
  );
}
