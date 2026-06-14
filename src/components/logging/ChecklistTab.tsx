'use client'

import { useState } from 'react'
import Card from './Card'
import styles from './ChecklistTab.module.css'
import { CHECKLIST_GROUPS, ChecklistGroup } from '@/lib/data'

function ChecklistGroupCard({ group }: { group: ChecklistGroup }) {
  const [checked, setChecked] = useState<Set<string>>(new Set())

  const toggle = (id: string) => {
    setChecked((prev) => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })
  }

  return (
    <Card color={group.color} title={group.title}>
      <ul className={styles.list}>
        {group.items.map((item) => {
          const done = checked.has(item.id)
          return (
            <li key={item.id} className={`${styles.item} ${done ? styles.doneItem : ''}`}>
              <button
                className={`${styles.checkBtn} ${done ? styles.checked : ''}`}
                onClick={() => toggle(item.id)}
                aria-label={done ? 'Uncheck' : 'Check'}
              >
                {done && '✓'}
              </button>
              <span className={styles.checkText}>{item.text}</span>
            </li>
          )
        })}
      </ul>
    </Card>
  )
}

export default function ChecklistTab() {
  const total = CHECKLIST_GROUPS.reduce((acc, g) => acc + g.items.length, 0)

  return (
    <div>
      <p className={styles.hint}>
        <span className={styles.liveDot} />
        Click items to track your progress &mdash; {total} tasks across all categories
      </p>
      <div className={styles.grid}>
        {CHECKLIST_GROUPS.map((group) => (
          <ChecklistGroupCard key={group.title} group={group} />
        ))}
      </div>
    </div>
  )
}
