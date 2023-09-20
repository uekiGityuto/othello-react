import React from 'react'
import { VRow } from 'components/Row'
import 'components/Board/Board.css'
import { Board } from 'models/board'
import { Cell } from 'models/cell'

type Props = {
  board: Board
  onClick: (cell: Cell) => void
}

export function VBoard({ board, onClick }: Props) {
  return (
    <div className="Board">
      {board.rows.map((row, _) => (
        <VRow key={row.num} row={row} onClick={onClick}></VRow>
      ))}
    </div>
  )
}
