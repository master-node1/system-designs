export default function WabaCampaignManagerPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 space-y-8">
      <h1 className="text-4xl font-bold tracking-tight text-zinc-100">WABA Campaign Manager Architecture</h1>
      <p className="text-zinc-400 max-w-3xl text-lg leading-relaxed">
        This architecture explores high-throughput WhatsApp Business messaging with Kafka-based delivery, nested service orchestration, and robust audit trails.
      </p>
      <div className="grid gap-4">
        <div className="rounded-3xl border border-zinc-800 bg-surface/30 p-6">
          <h2 className="text-2xl font-semibold text-zinc-100">Core design</h2>
          <p className="mt-3 text-sm text-zinc-400 leading-7">
            Build a campaign manager that separates message scheduling from delivery, uses Kafka for event-driven reliability, and stores message audit records in a WORM-compliant data store.
          </p>
        </div>
      </div>
    </div>
  )
}
