import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] pt-28 overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Gradient overlay for readability */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/30 to-slate-900/80" />

          <div className="relative grid lg:grid-cols-12 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 ring-1 ring-white/15 text-white/80 backdrop-blur mb-4">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                Open to opportunities
              </div>
              <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white">
                Hey, I'm Maha
              </h1>
              <p className="mt-4 text-lg text-white/80 max-w-xl">
                A product-focused engineer crafting delightful, performant web experiences. I love turning complex problems into simple, elegant interfaces.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#projects" className="px-5 py-3 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 text-white font-semibold shadow-lg shadow-cyan-500/20 ring-1 ring-white/20 hover:scale-[1.02] active:scale-100 transition-transform">
                  View Projects
                </a>
                <a href="#contact" className="px-5 py-3 rounded-xl bg-white/10 text-white ring-1 ring-white/15 hover:bg-white/15 transition-colors">
                  Contact Me
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
