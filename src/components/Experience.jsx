import { motion } from 'framer-motion'

const items = [
  {
    role: 'Software Engineer',
    company: 'Tech Company',
    period: '2021 — Present',
    points: [
      'Built and maintained scalable web apps used by thousands of users',
      'Collaborated with cross-functional teams to deliver impactful features',
      'Led performance and accessibility improvements across the stack',
    ],
  },
  {
    role: 'Frontend Developer',
    company: 'Startup Inc.',
    period: '2019 — 2021',
    points: [
      'Developed component libraries and design systems',
      'Implemented CI/CD workflows and testing best practices',
      'Shipped features rapidly while maintaining high quality',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Experience</h2>
        <div className="mt-10 grid gap-6">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="rounded-2xl bg-white/5 border border-white/10 p-6"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <h3 className="text-xl font-semibold text-white">{item.role}</h3>
                  <p className="text-white/70">{item.company}</p>
                </div>
                <p className="text-white/60 text-sm">{item.period}</p>
              </div>
              <ul className="mt-4 list-disc list-inside space-y-2 text-white/80">
                {item.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
