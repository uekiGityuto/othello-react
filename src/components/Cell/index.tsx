import React from 'react'
import 'components/Cell/Cell.css'
import { Cell } from 'models/cell'

type Props = {
  cell: Cell
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

export function VCell({ cell }: Props) {
  return (
    <div className="Cell">
      <div className={`Cell-stone ${colorClass(cell)}`}></div>
    </div>
  )
}
