import React from 'react'
import { VCell } from 'components/Cell'
import 'components/Row/Row.css'
import { Row } from 'models/row'
import { Cell } from 'models/cell'

type Props = {
  row: Row
  put: (cell: Cell) => void
}

export function VRow({ row, put }: Props) {
  return (
    <div className="Row">
      {row.cells.map((cell, _) => (
        <VCell key={`${cell.x}-${cell.y}`} cell={cell} put={put}></VCell>
      ))}
    </div>
  )
}
