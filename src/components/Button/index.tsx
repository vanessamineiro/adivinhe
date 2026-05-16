import type React from 'react'
import styles from './styles.module.css'

type Props = React.ComponentProps<"button"> & {
  tittle: string
}

export function Button({ tittle, ...rest }: Props) {
  return (
    <button type="button" className={styles.button} {...rest}>{tittle}</button>
  )
}