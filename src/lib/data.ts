export type TabId = 'arch' | 'format' | 'pipeline' | 'storage' | 'checklist'

export interface Tab {
  id: TabId
  label: string
}

export const TABS: Tab[] = [
  { id: 'arch', label: '01 Architecture' },
  { id: 'format', label: '02 Log Format' },
  { id: 'pipeline', label: '03 Pipeline' },
  { id: 'storage', label: '04 Storage & Retention' },
  { id: 'checklist', label: '05 Implementation Checklist' },
]

export interface ChecklistItem {
  id: string
  text: string
}

export interface ChecklistGroup {
  title: string
  color: 'blue' | 'orange' | 'yellow' | 'green'
  items: ChecklistItem[]
}

export const CHECKLIST_GROUPS: ChecklistGroup[] = [
  {
    title: 'Foundation',
    color: 'blue',
    items: [
      { id: 'f1', text: 'Define structured JSON schema — all services must conform' },
      { id: 'f2', text: 'Add trace_id + span_id injection via middleware (all services)' },
      { id: 'f3', text: 'Set up OpenTelemetry SDK across all services' },
      { id: 'f4', text: 'Deploy Fluent Bit as DaemonSet on Kubernetes' },
      { id: 'f5', text: 'Deploy Kafka cluster with topics: logs.app, logs.audit, metrics.perf' },
      { id: 'f6', text: 'Set DEBUG=OFF in all production configs' },
    ],
  },
  {
    title: 'Debugging & Errors',
    color: 'orange',
    items: [
      { id: 'd1', text: 'Instrument all HTTP endpoints with request/response logging' },
      { id: 'd2', text: 'Capture stack traces on unhandled exceptions (structured, not raw)' },
      { id: 'd3', text: 'Set up Elasticsearch index for app logs with ILM 30-day policy' },
      { id: 'd4', text: 'Create Kibana dashboard: error rate by service' },
      { id: 'd5', text: 'Configure alert: ERROR rate > 1% / minute → PagerDuty' },
      { id: 'd6', text: 'Set up Jaeger for distributed trace visualization' },
    ],
  },
  {
    title: 'Performance Monitoring',
    color: 'yellow',
    items: [
      { id: 'p1', text: 'Log duration_ms on every outbound call (DB, HTTP, queue)' },
      { id: 'p2', text: 'Emit RED metrics: Rate, Errors, Duration per endpoint' },
      { id: 'p3', text: 'Set up Prometheus scrape + Grafana dashboards' },
      { id: 'p4', text: 'Alert: p99 latency > 2s on critical paths' },
      { id: 'p5', text: 'Implement tail-based trace sampling for slow requests' },
      { id: 'p6', text: 'Weekly SLA report: uptime + error budget consumption' },
    ],
  },
  {
    title: 'Security & Audit',
    color: 'green',
    items: [
      { id: 'a1', text: 'Audit every: login, logout, permission change, data export, admin action' },
      { id: 'a2', text: 'Separate Kafka topic + WORM S3 bucket for audit logs' },
      { id: 'a3', text: 'Implement PII hashing / masking in logging middleware' },
      { id: 'a4', text: 'Alert: > 10 auth failures per user in 5 minutes' },
      { id: 'a5', text: 'Alert: first-time admin login from new IP/country' },
      { id: 'a6', text: 'Encrypt audit logs at rest + restrict read access to security team' },
      { id: 'a7', text: '7-year retention with legal hold on audit bucket' },
      { id: 'a8', text: 'Run quarterly audit log access review' },
    ],
  },
]

export interface AlertRule {
  condition: string
  action: string
}

export const ALERT_RULES: AlertRule[] = [
  { condition: 'ERROR rate > 1% / min', action: 'PagerDuty P2' },
  { condition: '5xx spike > 10 in 30s', action: 'PagerDuty P1' },
  { condition: 'p99 latency > 2s', action: 'Slack #alerts' },
  { condition: 'Service silent > 60s', action: 'PagerDuty P1' },
  { condition: 'Audit: new IP + admin', action: 'Security team' },
  { condition: 'Auth failures > 10 / user', action: 'Auto-lock + alert' },
]

export interface StorageTier {
  tier: string
  tierColor: string
  store: string
  logTypes: string
  retention: string
  access: string
  cost: string
}

export const STORAGE_TIERS: StorageTier[] = [
  {
    tier: '● HOT',
    tierColor: 'var(--error)',
    store: 'Elasticsearch',
    logTypes: 'App, Error, Perf',
    retention: '30 days',
    access: 'Real-time search, dashboards, alerting',
    cost: '$$$ (SSD)',
  },
  {
    tier: '● WARM',
    tierColor: 'var(--warn)',
    store: 'Elasticsearch (frozen) or ClickHouse',
    logTypes: 'App, Perf',
    retention: '1 year',
    access: 'Ad-hoc queries, incident review',
    cost: '$$ (HDD)',
  },
  {
    tier: '● COLD',
    tierColor: 'var(--muted)',
    store: 'S3 / GCS (Parquet)',
    logTypes: 'All types',
    retention: '2+ years',
    access: 'Compliance, bulk analytics via Athena/BQ',
    cost: '$ (object)',
  },
  {
    tier: '● AUDIT',
    tierColor: 'var(--success)',
    store: 'WORM (S3 Object Lock)',
    logTypes: 'Security, Auth, Admin',
    retention: '7 years (legal)',
    access: 'Compliance review, forensics',
    cost: '$ + legal hold',
  },
]
