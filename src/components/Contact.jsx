import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    // Placeholder interaction
    setTimeout(() => setStatus('Thanks! I will get back to you soon.'), 800)
  }

  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Contact</h2>
            <p className="mt-4 text-white/80">Have an interesting project or opportunity? Let’s talk.</p>
            <form onSubmit={handleSubmit} className="mt-8 space-y-4">
              <input required placeholder="Name" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
              <input type="email" required placeholder="Email" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
              <textarea required placeholder="Message" rows="4" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
              <button type="submit" className="px-5 py-3 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 text-white font-semibold shadow-lg shadow-cyan-500/20 ring-1 ring-white/20 hover:scale-[1.02] active:scale-100 transition-transform">
                Send Message
              </button>
              {status && <p className="text-white/80">{status}</p>}
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl bg-gradient-to-br from-slate-800/60 to-slate-800/40 border border-white/10 p-6"
          >
            <h3 className="text-white font-semibold">Currently exploring</h3>
            <ul className="mt-3 space-y-2 text-white/70 text-sm list-disc list-inside">
              <li>Interactive 3D interfaces</li>
              <li>AI-assisted UX flows</li>
              <li>Design systems at scale</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
