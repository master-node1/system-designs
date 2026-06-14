import React from 'react'
import styles from './Card.module.css'

type CardColor = 'blue' | 'orange' | 'green' | 'yellow'

interface CardProps {
  title?: string
  color?: CardColor
  children: React.ReactNode
  className?: string
}

export default function Card({ title, color = 'blue', children, className = '' }: CardProps) {
  return (
    <div className={`${styles.card} ${styles[color]} ${className}`}>
      {title && <div className={styles.cardTitle}>{title}</div>}
      {children}
    </div>
  )
}
