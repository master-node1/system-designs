import Card from './Card'
import styles from './FormatTab.module.css'

export default function FormatTab() {
  return (
    <div>
      <Card color="blue" title="Standard Log Schema (JSON)">
        <p className={styles.schemaDesc}>
          All services emit structured JSON. No free-text log messages. Fields are mandatory unless marked optional.
        </p>
        <div className={styles.logExample}>
          <span className={styles.muted}>{'{'}</span><br />
          &nbsp;&nbsp;<span className={styles.key}>&quot;timestamp&quot;</span>: <span className={styles.str}>&quot;2025-11-14T09:32:11.482Z&quot;</span>,<br />
          &nbsp;&nbsp;<span className={styles.key}>&quot;level&quot;</span>:&nbsp;&nbsp;&nbsp;&nbsp; <span className={styles.warn}>&quot;WARN&quot;</span>,<br />
          &nbsp;&nbsp;<span className={styles.key}>&quot;service&quot;</span>:&nbsp;&nbsp; <span className={styles.str}>&quot;payment-service&quot;</span>,<br />
          &nbsp;&nbsp;<span className={styles.key}>&quot;version&quot;</span>:&nbsp;&nbsp; <span className={styles.str}>&quot;v2.4.1&quot;</span>,<br />
          &nbsp;&nbsp;<span className={styles.key}>&quot;env&quot;</span>:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span className={styles.str}>&quot;production&quot;</span>,<br />
          &nbsp;&nbsp;<span className={styles.key}>&quot;host&quot;</span>:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span className={styles.str}>&quot;pod-payment-77b9f-x4k2p&quot;</span>,<br />
          <br />
          &nbsp;&nbsp;<span className={styles.comment}>// Correlation — links to distributed trace</span><br />
          &nbsp;&nbsp;<span className={styles.key}>&quot;trace_id&quot;</span>:&nbsp; <span className={styles.str}>&quot;4bf92f3577b34da6a3ce929d0e0e4736&quot;</span>,<br />
          &nbsp;&nbsp;<span className={styles.key}>&quot;span_id&quot;</span>:&nbsp;&nbsp; <span className={styles.str}>&quot;00f067aa0ba902b7&quot;</span>,<br />
          &nbsp;&nbsp;<span className={styles.key}>&quot;request_id&quot;</span>: <span className={styles.str}>&quot;req_8f3kXp29Lm&quot;</span>,<br />
          &nbsp;&nbsp;<span className={styles.key}>&quot;user_id&quot;</span>:&nbsp;&nbsp; <span className={styles.str}>&quot;usr_anon_a4e9c3&quot;</span>,{' '}
          <span className={styles.comment}>// hashed PII</span><br />
          <br />
          &nbsp;&nbsp;<span className={styles.comment}>// Event</span><br />
          &nbsp;&nbsp;<span className={styles.key}>&quot;event&quot;</span>:&nbsp;&nbsp;&nbsp;&nbsp; <span className={styles.str}>&quot;payment.provider.timeout&quot;</span>,<br />
          &nbsp;&nbsp;<span className={styles.key}>&quot;message&quot;</span>:&nbsp;&nbsp; <span className={styles.str}>&quot;Stripe gateway timeout after 5000ms&quot;</span>,<br />
          &nbsp;&nbsp;<span className={styles.key}>&quot;duration_ms&quot;</span>: <span className={styles.num}>5012</span>,<br />
          <br />
          &nbsp;&nbsp;<span className={styles.comment}>// Context (optional, structured)</span><br />
          &nbsp;&nbsp;<span className={styles.key}>&quot;ctx&quot;</span>: {'{'}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.key}>&quot;order_id&quot;</span>: <span className={styles.str}>&quot;ord_9f3a2b&quot;</span>,<br />
          &nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.key}>&quot;amount_cents&quot;</span>: <span className={styles.num}>4999</span>,<br />
          &nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.key}>&quot;currency&quot;</span>: <span className={styles.str}>&quot;USD&quot;</span>,<br />
          &nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.key}>&quot;retry_count&quot;</span>: <span className={styles.num}>1</span><br />
          &nbsp;&nbsp;{'}'}<br />
          {'}'}
        </div>
      </Card>

      <div className={styles.grid2}>
        <Card color="orange" title="Severity Levels">
          <div className={styles.badges}>
            <span className={`${styles.badge} ${styles.error}`}>ERROR</span>
            <span className={`${styles.badge} ${styles.warn}`}>WARN</span>
            <span className={`${styles.badge} ${styles.info}`}>INFO</span>
            <span className={`${styles.badge} ${styles.debug}`}>DEBUG</span>
            <span className={`${styles.badge} ${styles.audit}`}>AUDIT</span>
          </div>
          <ul className={styles.levelList}>
            <li><span className={styles.errorText}>ERROR</span> — Requires immediate attention / alerts</li>
            <li><span className={styles.warnText}>WARN</span> — Degraded state, needs investigation</li>
            <li><span className={styles.infoText}>INFO</span> — Normal business events (production)</li>
            <li><span className={styles.debugText}>DEBUG</span> — Verbose detail (disabled in prod)</li>
            <li><span className={styles.auditText}>AUDIT</span> — Security events (always on, immutable)</li>
          </ul>
        </Card>

        <Card color="green" title="PII & Privacy Rules">
          <ul className={styles.privacyList}>
            <li>✦ Never log passwords, tokens, or secrets</li>
            <li>✦ Hash user IDs before logging (SHA-256 + salt)</li>
            <li>✦ Truncate card numbers: last 4 digits only</li>
            <li>✦ Mask emails: <code className={styles.inlineCode}>j***@example.com</code></li>
            <li>✦ Strip full IP addresses from app logs</li>
            <li>✦ Audit logs retain full identity (separate store)</li>
          </ul>
        </Card>
      </div>
    </div>
  )
}
