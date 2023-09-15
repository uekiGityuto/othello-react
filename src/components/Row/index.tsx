import React from 'react'
import { VCell } from 'components/Cell'
import 'components/Row/Row.css'
import { Row } from 'models/row'

type Props = {
  row: Row
}

export function VRow({row}: Props) {
  return (
    <div className="Row">
      {row.cells.map((cell, i) => (
        <VCell key={i} cell={cell}></VCell>
      ))}
    </div>
  )
}
