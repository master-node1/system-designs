'use client';

import React, { useState } from 'react';
import { Cpu, Zap, Radio, Code2, Database, Layers, ArrowUpRight } from 'lucide-react';

const metrics = [
  { label: 'Concurrent Traffic Target', value: '300M', icon: Zap, color: 'text-amber-400' },
  { label: 'Years Architecting Microservices', value: '5+', icon: Cpu, color: 'text-blue-400' },
  { label: 'Event Infrastructure', value: 'Kafka', icon: Radio, color: 'text-emerald-400' },
];

const experiences = [
  {
    role: 'Software Engineer',
    company: 'DAZN',
    period: '2024 – Present',
    description: 'Performance Engineer driving scalability and rock-solid reliability for global live sports streaming events.',
    highlights: ['Migrated event streams from Kinesis to Apache Kafka.', 'Led container orchestrations from AWS ECS to EKS.', 'Executed massive load testing protocols via K6.']
  },
  {
    role: 'Software Engineer – L3',
    company: 'Tresm Lab (Nuacem AI)',
    period: '2023 – 2024',
    description: 'Built high-throughput backend layers powering the WhatsApp Business messaging ecosystems.',
    highlights: ['Designed high-velocity Kafka messaging pipelines.', 'Architected NestJS clean implementations.', 'Managed deployments securely on AKS.']
  }
];

const projects = [
  {
    title: 'DAZN MAC 300M Scaling Platform',
    tech: ['Terraform', 'Kafka', 'AWS EKS', 'K6', 'Coralogix'],
    summary: 'Optimized bottlenecks and managed automated autoscaling matrixes to ready infrastructure for 300M concurrent spikes during global events.'
  },
  {
    title: 'WABA Campaign Manager',
    tech: ['NestJS', 'Kafka', 'Redis', 'MariaDB Sharding', 'AKS'],
    summary: 'High-volume broadcast scheduling network engineered with precise system audit trails and custom database sharding routines.'
  }
];

const blogPosts = [
  {
    id: 'post-1',
    title: 'Zero Downtime Architecture: Migrating From AWS Kinesis to Apache Kafka at Scale',
    excerpt: 'Deep technical deep-dive outlining how we converted highly active streaming channels to Kafka nodes without breaking live pipelines.',
    date: 'June 2026',
    readTime: '6 min read',
    category: 'Architecture',
    content: `When handling streaming architectures matching global live match loads, managing throughput limits efficiently is critical. Our legacy Kinesis implementation faced sharp cost cliffs and configuration barriers during live viewer spikes. By moving over to a dedicated Apache Kafka structure on AWS, we simplified state management, refined our custom retry configurations, and brought overall compute operational footprint costs down drastically. Here is the exact schema mapping and partition logic we deployed...`
  },
  {
    id: 'post-2',
    title: 'Hunting Bottlenecks: Implementing Automated Coralogix Dashboards for Peak Node Flows',
    excerpt: 'How to structure high-density monitoring thresholds that trigger defensive scaling alerts before latency breaks your API limits.',
    date: 'May 2026',
    readTime: '4 min read',
    category: 'Observability',
    content: `Monitoring event loops in highly demanding Node.js environments requires telemetry depth beyond basic memory graphs. Using custom performance metrics emitted directly via K6 virtual users, we aggregated data flows into Coralogix to immediately flag thread pools starving for connections. This article walks through setting defensive scaling alert formulas...`
  }
];

export default function Home() {
  const [activePostId, setActivePostId] = useState<string | null>(null);

  return (
    <div className="max-w-5xl mx-auto px-6 py-12 space-y-24">
      <section className="space-y-6 pt-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/50 text-xs text-zinc-400 font-mono">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          Available for High-Scale Technical Consulting
        </div>
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight max-w-3xl leading-[1.15]">
          Engineering Performance for Platforms Handling <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-accent">Massive Scale</span>.
        </h1>
        <p className="text-zinc-400 text-lg sm:text-xl max-w-2xl font-light leading-relaxed">
          Hi, I am <strong className="text-zinc-200 font-semibold">Hari Sireddi</strong>. I design microservices, configure fault-tolerant event buses, and harden cloud systems utilizing NestJS, Kafka, and AWS.
        </p>
      </section>

      <section id="metrics" className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {metrics.map((metric, i) => {
          const Icon = metric.icon;
          return (
            <div key={i} className="border border-zinc-800/80 bg-surface/50 p-6 rounded-xl flex items-center justify-between">
              <div>
                <p className="text-xs font-mono tracking-wider text-zinc-500 uppercase">{metric.label}</p>
                <p className="text-3xl font-bold mt-1 text-zinc-100">{metric.value}</p>
              </div>
              <Icon className={`w-8 h-8 ${metric.color} opacity-80`} />
            </div>
          );
        })}
      </section>

      <hr className="border-zinc-900" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-7 space-y-16">
          <section id="experience" className="space-y-8">
            <h2 className="text-xl font-bold font-mono tracking-wide text-zinc-400 uppercase flex items-center gap-2">
              <Layers className="w-4 h-4 text-brand" /> Production Experience
            </h2>
            <div className="space-y-8 border-l border-zinc-800 pl-4 ml-2">
              {experiences.map((exp, i) => (
                <div key={i} className="relative space-y-2 group">
                  <div className="absolute -left-[21px] top-1.5 w-3 h-3 rounded-full bg-zinc-800 group-hover:bg-brand transition-colors" />
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-zinc-100">{exp.role}</h3>
                      <p className="text-sm text-zinc-400">{exp.company}</p>
                    </div>
                    <span className="text-xs font-mono text-zinc-500">{exp.period}</span>
                  </div>
                  <p className="text-sm text-zinc-400 leading-relaxed">{exp.description}</p>
                  <ul className="text-xs text-zinc-500 space-y-1 pt-1 list-disc list-inside">
                    {exp.highlights.map((h, idx) => <li key={idx}>{h}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section id="projects" className="space-y-8">
            <h2 className="text-xl font-bold font-mono tracking-wide text-zinc-400 uppercase flex items-center gap-2">
              <Code2 className="w-4 h-4 text-accent" /> Key Systems Built
            </h2>
            <div className="grid grid-cols-1 gap-4">
              {projects.map((proj, i) => (
                <div key={i} className="border border-zinc-800 bg-surface/30 p-5 rounded-xl hover:border-zinc-700 transition-colors space-y-3">
                  <div className="flex justify-between items-center">
                    <h3 className="font-bold text-zinc-200">{proj.title}</h3>
                    <ArrowUpRight className="w-4 h-4 text-zinc-600" />
                  </div>
                  <p className="text-sm text-zinc-400 leading-relaxed">{proj.summary}</p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {proj.tech.map((t, idx) => (
                      <span key={idx} className="bg-zinc-900 px-2 py-0.5 rounded text-[11px] font-mono text-zinc-400 border border-zinc-800">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div id="blog" className="lg:col-span-5 space-y-8">
          <h2 className="text-xl font-bold font-mono tracking-wide text-zinc-400 uppercase flex items-center gap-2">
            <Database className="w-4 h-4 text-amber-500" /> Technical Insights
          </h2>
          
          <div className="space-y-6">
            {blogPosts.map((post) => (
              <div 
                key={post.id} 
                className={`p-5 rounded-xl border transition-all cursor-pointer ${
                  activePostId === post.id 
                    ? 'border-brand bg-zinc-900/40' 
                    : 'border-zinc-800/60 bg-surface/20 hover:border-zinc-700'
                }`}
                onClick={() => setActivePostId(activePostId === post.id ? null : post.id)}
              >
                <div className="flex items-center justify-between text-xs font-mono text-zinc-500 mb-2">
                  <span>{post.category}</span>
                  <span>{post.date}</span>
                </div>
                <h3 className="font-bold text-zinc-200 group-hover:text-brand transition-colors mb-2">
                  {post.title}
                </h3>
                <p className="text-sm text-zinc-400 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>

                {activePostId === post.id && (
                  <div className="mt-4 pt-4 border-t border-zinc-800 text-sm text-zinc-300 space-y-3 leading-relaxed bg-black/30 p-3 rounded-lg font-mono">
                    {post.content.split('\n').map((para, pIdx) => (
                      <p key={pIdx}>{para.trim()}</p>
                    ))}
                  </div>
                )}
                
                <div className="mt-3 flex items-center justify-between text-xs font-mono text-brand pt-1">
                  <span>{activePostId === post.id ? 'Close Article' : 'Read Deep-Dive →'}</span>
                  <span className="text-zinc-500">{post.readTime}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
