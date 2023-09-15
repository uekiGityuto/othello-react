import React from 'react'
import { VCell } from 'components/Cell'
import 'components/Row/Row.css'
import { Row } from 'models/row'

type Props = {
  row: Row
}

export function VRow({ row }: Props) {
  return (
    <div className="Row">
      {row.cells.map((cell, _) => (
        <VCell key={`${cell.x}-${cell.y}`} cell={cell}></VCell>
      ))}
    </div>
  )
}
