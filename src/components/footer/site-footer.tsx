import Link from "~/components/primitives/link"

const links = [
  { href: "/about", label: "About" },
  { href: "/achievements", label: "Achievements" },
  { href: "/robot", label: "Robot" },
  { href: "/resources", label: "Resources" },
  { href: "/partnerships", label: "Partnerships" },
  { href: "/contact", label: "Contact" }
]

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-white/10 bg-black/45">
      <div className="mx-auto w-full max-w-7xl px-4 py-10 md:px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.18em] text-tiffany-200/90">
              FTC Team 25832
            </p>
            <p className="max-w-xl text-sm text-white/70">
              Ripples builds competition robots, open tooling, and outreach
              programs for global FIRST teams.
            </p>
          </div>
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-white/80">
              {links.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="transition hover:text-tiffany-200 hover:underline"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="mt-8 border-t border-white/10 pt-4 text-xs text-white/50">
          <p>
            © {new Date().getFullYear()} Ripples 25832. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
