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
        <div className="rounded-3xl border border-zinc-800 bg-surface/30 p-6">
          <h2 className="text-2xl font-semibold text-zinc-100">Architecture HLDs</h2>
          <p className="mt-3 text-sm text-zinc-400 leading-7">
            Reference high-level design documents for infra and application architecture below.
          </p>
          <div className="mt-4 grid gap-6">
            <div>
              <div className="text-sm text-zinc-300 mb-2">Infrastructure HLD (preview)</div>
              <div className="w-full h-96 overflow-hidden rounded-lg border border-zinc-800">
                <iframe
                  title="Infrastructure HLD"
                  src="https://drive.google.com/file/d/1Sh6jIflDXGErtmv4S0Kz9cfnmw4Vwo23/preview"
                  className="w-full h-full border-0"
                  allowFullScreen
                />
              </div>
            </div>

            <div>
              <div className="text-sm text-zinc-300 mb-2">Application HLD (preview)</div>
              <div className="w-full h-96 overflow-hidden rounded-lg border border-zinc-800">
                <iframe
                  title="Application HLD"
                  src="https://drive.google.com/file/d/1qcw8Wjxa5IaOJ4PX8XnBlucrHokJWOm8/preview"
                  className="w-full h-full border-0"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
