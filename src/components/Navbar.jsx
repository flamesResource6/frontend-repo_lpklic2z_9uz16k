import { useState } from 'react'
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-6 backdrop-blur supports-[backdrop-filter]:bg-slate-900/40 bg-slate-900/60 border border-white/10 rounded-2xl shadow-lg">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#home" className="group inline-flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 grid place-items-center text-white font-bold shadow-inner shadow-white/20 ring-1 ring-white/20">
                MH
              </div>
              <span className="text-white/90 font-semibold tracking-tight group-hover:text-white transition-colors">Maha Hiremath</span>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="text-sm text-white/70 hover:text-white transition-colors">
                  {item.label}
                </a>
              ))}
              <div className="h-6 w-px bg-white/10" />
              <div className="flex items-center gap-3">
                <a href="https://www.linkedin.com/in/maha-hiremath-hvr" target="_blank" rel="noreferrer" className="p-2 rounded-lg hover:bg-white/10 text-white/80 hover:text-white transition-colors">
                  <Linkedin size={18} />
                </a>
                <a href="mailto:hiremath.maha@example.com" className="p-2 rounded-lg hover:bg-white/10 text-white/80 hover:text-white transition-colors">
                  <Mail size={18} />
                </a>
                <a href="https://github.com/" target="_blank" rel="noreferrer" className="p-2 rounded-lg hover:bg-white/10 text-white/80 hover:text-white transition-colors">
                  <Github size={18} />
                </a>
              </div>
            </nav>

            <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-lg text-white/80 hover:text-white hover:bg-white/10">
              {open ? <X /> : <Menu />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-4 py-3">
              <div className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="text-white/80 hover:text-white rounded-lg px-3 py-2 hover:bg-white/10">
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
