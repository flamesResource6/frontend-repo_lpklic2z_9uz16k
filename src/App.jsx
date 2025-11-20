import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Background gradient accents */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute top-[-10%] left-[-10%] h-[40rem] w-[40rem] rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute bottom-[-10%] right-[-10%] h-[40rem] w-[40rem] rounded-full bg-cyan-400/20 blur-3xl" />
      </div>

      <Navbar />
      <main className="relative">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />

        {/* Footer */}
        <footer className="py-10 border-t border-white/10 text-center text-white/60">
          <p>© {new Date().getFullYear()} Maha Hiremath — Crafted with care.</p>
        </footer>
      </main>
    </div>
  )
}

export default App
