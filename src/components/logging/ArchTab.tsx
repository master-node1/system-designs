import styles from './ArchTab.module.css'
import Card from './Card'

const services = ['Auth Service', 'Order Service', 'Payment Service', 'User Service', 'Gateway / API']
const collectors = [
  { icon: '📦', label: 'Fluent Bit', sub: 'sidecar / DaemonSet' },
  { icon: '🔗', label: 'OpenTelemetry', sub: 'traces + metrics' },
]
const buses = [{ icon: '⚡', label: 'Apache Kafka', sub: 'logs · traces · audit' }]
const stores = [
  { icon: '🔍', label: 'Elasticsearch', sub: 'hot storage 30d' },
  { icon: '🗄️', label: 'S3 / GCS', sub: 'cold archive 2yr' },
  { icon: '📊', label: 'Prometheus', sub: 'metrics' },
  { icon: '🔐', label: 'Immutable Audit', sub: 'WORM store' },
]
const ui = [
  { icon: '📈', label: 'Kibana / Grafana' },
  { icon: '🚨', label: 'PagerDuty / Slack' },
  { icon: '🕵️', label: 'Jaeger (Traces)' },
]

function ArchNode({ icon, label, sub, variant }: { icon: string; label: string; sub?: string; variant: string }) {
  return (
    <div className={`${styles.node} ${styles[variant]}`}>
      <span className={styles.nodeIcon}>{icon}</span>
      <span>{label}</span>
      {sub && <small className={styles.nodeSub}>{sub}</small>}
    </div>
  )
}

export default function ArchTab() {
  return (
    <div>
      <div className={styles.diagram}>
        {/* Services */}
        <div className={styles.layerLabel}>▸ Services Layer</div>
        <div className={styles.row}>
          {services.map((s) => (
            <div key={s} className={`${styles.node} ${styles.svc}`}>
              <span className={styles.nodeIcon}>🔷</span>
              <span>{s}</span>
            </div>
          ))}
        </div>
        <div className={styles.arrow}>↓ structured JSON logs (stdout/stderr)</div>

        {/* Collection */}
        <div className={styles.layerLabel}>▸ Collection Layer</div>
        <div className={styles.row}>
          {collectors.map((c) => (
            <ArchNode key={c.label} {...c} variant="col" />
          ))}
        </div>
        <div className={styles.arrow}>↓ forward &amp; enrich</div>

        {/* Bus */}
        <div className={styles.layerLabel}>▸ Message Bus</div>
        <div className={styles.row}>
          {buses.map((b) => (
            <ArchNode key={b.label} {...b} variant="bus" />
          ))}
        </div>
        <div className={styles.arrow}>↓ consume streams</div>

        {/* Storage */}
        <div className={styles.layerLabel}>▸ Processing &amp; Storage</div>
        <div className={styles.row}>
          {stores.map((s) => (
            <ArchNode key={s.label} {...s} variant="store" />
          ))}
        </div>
        <div className={styles.arrow}>↓ visualize &amp; alert</div>

        {/* UI */}
        <div className={styles.layerLabel}>▸ Observation Layer</div>
        <div className={styles.row}>
          {ui.map((u) => (
            <ArchNode key={u.label} {...u} variant="ui" />
          ))}
        </div>
      </div>

      <div className={styles.grid3}>
        <Card color="blue" title="Correlation">
          <p className={styles.desc}>
            Every log line carries a <code className={styles.code}>trace_id</code> and{' '}
            <code className={styles.code}>span_id</code> so you can trace one request
            across every service end-to-end.
          </p>
        </Card>
        <Card color="orange" title="Resilience">
          <p className={styles.desc}>
            Kafka decouples producers from consumers. Services never block on logging.
            If your observability stack goes down, logs queue safely.
          </p>
        </Card>
        <Card color="green" title="Separation">
          <p className={styles.desc}>
            Audit logs go to a <strong>separate, append-only</strong> topic and WORM
            store — completely isolated from debug logs and untouchable by service code.
          </p>
        </Card>
      </div>
    </div>
  )
}
