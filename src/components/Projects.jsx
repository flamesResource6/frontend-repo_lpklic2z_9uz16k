import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Interactive 3D Portfolio',
    description: 'A playful 3D experience powered by Spline and Framer Motion.',
    tags: ['React', 'Spline', 'Framer Motion'],
    link: '#',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1600&auto=format&fit=crop'
  },
  {
    title: 'Design System Kit',
    description: 'Accessible components with comprehensive documentation.',
    tags: ['Design Systems', 'Accessibility', 'Storybook'],
    link: '#',
    image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1600&auto=format&fit=crop'
  },
  {
    title: 'Data Visualization Dashboard',
    description: 'Real-time insights with elegant charts and interactions.',
    tags: ['React', 'D3', 'Tailwind'],
    link: '#',
    image: 'https://images.unsplash.com/photo-1759661966728-4a02e3c6ed91?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxEYXRhJTIwVmlzdWFsaXphdGlvbiUyMERhc2hib2FyZHxlbnwwfDB8fHwxNzYzNjY5NjA2fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80'
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Projects</h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <motion.a
              key={p.title}
              href={p.link}
              target={p.link?.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group relative rounded-2xl overflow-hidden bg-white/5 border border-white/10"
            >
              <img src={p.image} alt="Project" className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="p-5">
                <h3 className="text-white font-semibold text-lg">{p.title}</h3>
                <p className="mt-1 text-white/70 text-sm">{p.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/80">{t}</span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
