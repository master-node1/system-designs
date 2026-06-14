export interface BlogPost {
  id: string
  title: string
  excerpt: string
  date: string
  readTime: string
  category: string
  content: string
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'post-1',
    title: 'Zero Downtime Architecture: Migrating From AWS Kinesis to Apache Kafka at Scale',
    excerpt: 'A technical walk-through of migrating low-latency live event streams from managed Kinesis to dedicated Kafka clusters while preserving end-to-end delivery guarantees.',
    date: 'June 2026',
    readTime: '7 min read',
    category: 'Architecture',
    content: `When handling streaming architectures matching global live match loads, managing throughput limits efficiently is critical. Our legacy Kinesis implementation faced sharp cost cliffs and configuration barriers during live viewer spikes. By moving to a dedicated Apache Kafka structure on AWS, we simplified state management, refined our custom retry configurations, and brought overall compute operational footprint costs down drastically.

We introduced a partitioning strategy keyed by match_id and region, enforced exactly-once semantics through transactional producers, and separated audit events into a write-once Kafka topic. This migration strategy preserved all live pipelines with zero service interruption and reduced shadow data duplication by 42%.

The article also includes the schema mapping, consumer group design, topic retention profile, and the observability blueprint we used to validate throughput under 20M events per minute.`,
  },
  {
    id: 'post-2',
    title: 'Hunting Bottlenecks: Implementing Automated Coralogix Dashboards for Peak Node Flows',
    excerpt: 'A guide to building automated dashboards and alerting rules that detect thread starvation, queue backpressure, and latency spikes before production traffic breaks.',
    date: 'May 2026',
    readTime: '5 min read',
    category: 'Observability',
    content: `Monitoring event loops in highly demanding Node.js environments requires telemetry depth beyond basic memory graphs. Using custom performance metrics emitted directly via K6 virtual users, we aggregated data flows into Coralogix to immediately flag thread pools starving for connections.

I detail how we built synthetic transaction probes, derived service-level indicators from Kafka consumer lag, and created dashboard sections for CPU saturation, GC pause distribution, and request fan-out delays. The post also explains how we wired these dashboards into automated Slack and PagerDuty notifications, so the team could react to emerging issues before latency climbed above SLO targets.

By shifting from reactive log alerts to proactive metric-driven alerts, the platform cut mean time to detection by 68% and prevented multiple peak-running outages during high-volume campaigns.`,
  },
]
