export default function EcommerceOrderAnalyticsPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 space-y-8">
      <h1 className="text-4xl font-bold tracking-tight text-zinc-100">E-Commerce Order & Analytics Architecture</h1>
      <p className="text-zinc-400 max-w-3xl text-lg leading-relaxed">
        This design covers event-driven order processing, analytics streaming, inventory consistency, and real-time dashboards for customer and operations teams.
      </p>
      <div className="grid gap-4">
        <div className="rounded-3xl border border-zinc-800 bg-surface/30 p-6">
          <h2 className="text-2xl font-semibold text-zinc-100">Core design</h2>
          <p className="mt-3 text-sm text-zinc-400 leading-7">
            Use Kafka topics for order events, separate read models for analytics, and containerized services in EKS to scale event ingestion while keeping inventory and reporting systems decoupled.
          </p>
        </div>
      </div>
    </div>
  )
}
