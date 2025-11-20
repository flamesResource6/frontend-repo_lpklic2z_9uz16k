import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-12 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-5"
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl blur opacity-20" />
              <div className="relative rounded-2xl bg-slate-800/60 border border-white/10 p-6">
                <img src="https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=1400&auto=format&fit=crop" alt="Profile" className="rounded-xl object-cover w-full h-64" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-7"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white">About</h2>
            <p className="mt-4 text-white/80 leading-relaxed">
              I'm a software professional with a passion for building end-to-end experiences — from thoughtful UX to robust systems. I enjoy collaborating across design and engineering to ship polished products.
            </p>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              {["React & TypeScript","Node & FastAPI","Cloud & DevOps","Design Systems"].map((skill) => (
                <div key={skill} className="rounded-xl bg-white/5 border border-white/10 p-4 text-white/80">
                  {skill}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
