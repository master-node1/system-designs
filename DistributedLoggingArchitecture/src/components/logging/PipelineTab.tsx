import Card from './Card'
import styles from './PipelineTab.module.css'
import { ALERT_RULES } from '@/lib/data'

const FLOW_STEPS = [
  {
    num: '01',
    title: 'Emit to stdout/stderr',
    body: (
      <>
        Services log structured JSON only. No log files. Container runtime captures output. Use{' '}
        <code>pino</code>, <code>logrus</code>, or <code>structlog</code>.
      </>
    ),
  },
  {
    num: '02',
    title: 'Fluent Bit Collector',
    body: 'Deployed as Kubernetes DaemonSet. Tails container logs, parses JSON, enriches with pod/namespace metadata. Buffers locally on node.',
  },
  {
    num: '03',
    title: 'Kafka Topics',
    body: (
      <>
        Separate topics: <code>logs.app</code>, <code>logs.audit</code>, <code>metrics.perf</code>.
        Partitioned by service name. Retention: 7 days on bus.
      </>
    ),
  },
  {
    num: '04',
    title: 'Stream Processing',
    body: 'Kafka Streams / Flink for anomaly detection, sampling, and routing. Drop DEBUG logs in prod. Flag ERRORs for immediate alerting.',
  },
  {
    num: '05',
    title: 'Write to Stores',
    body: 'Hot logs → Elasticsearch. Metrics → Prometheus. Audit → WORM. Cold archive → S3 with Parquet partitioning by service+date.',
  },
]

const SAMPLING = [
  { label: 'AUDIT / ERROR', desc: '100% — never sample', color: 'var(--error)' },
  { label: 'WARN', desc: '100% in prod, 50% staging', color: 'var(--warn)' },
  { label: 'INFO', desc: '100% prod, 10% high-volume paths', color: 'var(--info)' },
  { label: 'DEBUG', desc: 'OFF in prod, 100% dev/staging', color: '#c678dd' },
  { label: 'Traces', desc: 'Head-based 10%, tail-based 100% for errors', color: 'var(--success)' },
]

export default function PipelineTab() {
  return (
    <div className={styles.grid}>
      <Card color="blue" title="Ingestion Pipeline">
        <div className={styles.flow}>
          {FLOW_STEPS.map((step) => (
            <div key={step.num} className={styles.step}>
              <div className={styles.stepNum}>{step.num}</div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepBody}>{step.body}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>

      <div className={styles.right}>
        <Card color="orange" title="Alerting Rules">
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Condition</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {ALERT_RULES.map((rule) => (
                <tr key={rule.condition}>
                  <td>{rule.condition}</td>
                  <td>{rule.action}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>

        <Card color="yellow" title="Sampling Strategy">
          <ul className={styles.samplingList}>
            {SAMPLING.map((s) => (
              <li key={s.label}>
                📌 <strong style={{ color: 'var(--text)' }}>{s.label}</strong> — {s.desc}
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </div>
  )
}
