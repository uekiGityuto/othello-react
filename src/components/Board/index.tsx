import React from 'react'
import { VRow } from 'components/Row'
import 'components/Board/Board.css'
import { Board } from 'models/board'

type Props = {
  board: Board
}

export function VBoard({ board }: Props) {
  return (
    <div className="Board">
      {board.rows.map((row, _) => (
        <VRow key={row.num} row={row}></VRow>
      ))}
    </div>
  )
}
