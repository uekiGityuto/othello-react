import React from 'react'
import 'components/Cell/Cell.css'
import { Cell } from 'models/cell'

type Props = {
  cell: Cell
  put: (cell: Cell) => void
}

function colorClass(cell: Cell): string {
  if (cell.isBlack()) {
    return 'Cell-black'
  } else if (cell.isWhite()) {
    return 'Cell-white'
  } else {
    return ''
  }
}

export function VCell({ cell, put }: Props) {
  return (
    <div className="Cell">
      <div
        className={`Cell-stone ${colorClass(cell)}`}
        onClick={() => put(cell)}
      ></div>
    </div>
  )
}
