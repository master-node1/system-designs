'use client'

import { useState } from 'react'
import styles from './LoggingDashboard.module.css'
import { TABS, TabId } from '@/lib/data'
import ArchTab from './ArchTab'
import FormatTab from './FormatTab'
import PipelineTab from './PipelineTab'
import StorageTab from './StorageTab'
import ChecklistTab from './ChecklistTab'

function TabContent({ active }: { active: TabId }) {
  switch (active) {
    case 'arch':      return <ArchTab />
    case 'format':    return <FormatTab />
    case 'pipeline':  return <PipelineTab />
    case 'storage':   return <StorageTab />
    case 'checklist': return <ChecklistTab />
  }
}

export default function LoggingDashboard() {
  const [activeTab, setActiveTab] = useState<TabId>('arch')

  return (
    <div className={styles.wrapper}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.tag}>System Design</div>
        <h1 className={styles.title}>
          Distributed Logging<br />Architecture
        </h1>
        <p className={styles.subtitle}>
          Microservices · Debugging &amp; Error Tracking · Performance · Security Audit
        </p>
      </header>

      {/* Tabs */}
      <nav className={styles.tabs} aria-label="Sections">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            className={`${styles.tab} ${activeTab === tab.id ? styles.tabActive : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </nav>

      {/* Content */}
      <main className={styles.content} key={activeTab}>
        <TabContent active={activeTab} />
      </main>
    </div>
  )
}
