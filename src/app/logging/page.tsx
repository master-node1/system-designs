import Link from 'next/link'

const systemDesigns = [
  {
    slug: 'distributed-logging',
    title: 'Distributed Logging Architecture',
    description: 'Observability pipeline for microservices, audit logs, and performance telemetry.',
  },
  {
    slug: 'waba-campaign-manager',
    title: 'WABA Campaign Manager Architecture',
    description: 'High-throughput WhatsApp Business campaign orchestration with reliable delivery and audit trails.',
  },
  {
    slug: 'ecommerce-order-analytics',
    title: 'E-Commerce Order & Analytics Architecture',
    description: 'Event-driven order processing and real-time analytics for modern commerce platforms.',
  },
]

export default function SystemDesignIndexPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 space-y-10">
      <section className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/50 text-xs text-zinc-400 font-mono">
          System design catalog
        </div>
        <div className="space-y-3">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-100">System Designs I’ve built</h1>
          <p className="text-zinc-400 max-w-3xl text-lg leading-relaxed">
            Browse architecture blueprints for systems I designed across observability, event-driven messaging, analytics, and production-grade cloud infrastructure.
          </p>
        </div>
      </section>

      <div className="grid gap-4">
        {systemDesigns.map((system) => (
          <Link
            key={system.slug}
            href={`/logging/${system.slug}`}
            className="group block rounded-3xl border border-zinc-800 bg-surface/30 p-6 transition-all hover:border-brand hover:bg-zinc-900/70"
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-mono uppercase tracking-[0.28em] text-zinc-500">System design</p>
                <h2 className="mt-3 text-2xl font-semibold text-zinc-100 transition-colors group-hover:text-brand">{system.title}</h2>
              </div>
              <span className="text-amber-400 text-sm font-medium">View</span>
            </div>
            <p className="mt-4 text-sm leading-6 text-zinc-400">{system.description}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
