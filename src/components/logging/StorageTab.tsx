import Card from './Card'
import styles from './StorageTab.module.css'
import { STORAGE_TIERS } from '@/lib/data'

const METRICS = [
  { val: '3', label: 'Storage Tiers' },
  { val: '30d', label: 'Hot Retention' },
  { val: '1yr', label: 'Warm Retention' },
  { val: '7yr', label: 'Audit Archive' },
]

const INDEX_TIPS = [
  'One index per service per day: payment-2025.11.14',
  'ILM policy: hot→warm at 30d, delete at 365d',
  'Shard size: target 30–50 GB per shard',
  'Audit index: separate cluster, no delete policy',
  'Force merge on rollover to reduce segment count',
]

const COST_TIPS = [
  'Drop DEBUG logs before Kafka (save ~40% volume)',
  'Compress with LZ4 in transit, Zstd at rest',
  'Deduplicate repeated ERROR bursts (token bucket)',
  'Sample high-frequency INFO events (>1k/s)',
  'S3 Intelligent Tiering for cold archive',
  'Review top-volume services monthly',
]

export default function StorageTab() {
  return (
    <div>
      <div className={styles.metricRow}>
        {METRICS.map((m) => (
          <div key={m.label} className={styles.metric}>
            <div className={styles.metricVal}>{m.val}</div>
            <div className={styles.metricLabel}>{m.label}</div>
          </div>
        ))}
      </div>

      <Card color="blue" title="Tiered Storage Plan">
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Tier</th>
                <th>Store</th>
                <th>Log Types</th>
                <th>Retention</th>
                <th>Access Pattern</th>
                <th>Est. Cost</th>
              </tr>
            </thead>
            <tbody>
              {STORAGE_TIERS.map((row) => (
                <tr key={row.tier}>
                  <td><span style={{ color: row.tierColor }}>{row.tier}</span></td>
                  <td>{row.store}</td>
                  <td>{row.logTypes}</td>
                  <td>{row.retention}</td>
                  <td>{row.access}</td>
                  <td>{row.cost}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      <div className={styles.grid2}>
        <Card color="green" title="Index Strategy (Elasticsearch)">
          <ul className={styles.tipList}>
            {INDEX_TIPS.map((t) => (
              <li key={t}>✦ {t}</li>
            ))}
          </ul>
        </Card>
        <Card color="orange" title="Cost Controls">
          <ul className={styles.tipList}>
            {COST_TIPS.map((t) => (
              <li key={t}>✦ {t}</li>
            ))}
          </ul>
        </Card>
      </div>
    </div>
  )
}
