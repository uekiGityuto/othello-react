import { useState } from 'react'
import { Board } from 'models/board'
import { Cell } from 'models/cell'
import { Color } from 'models/color'

export function useBoard(turn: Color, changeTurn: () => void) {
  const [board, setBoard] = useState(new Board())

  const put = (cell: Cell) => {
    const newBoard = board.put(cell, turn)
    if (newBoard === board) {
      alert('そこには置けません')
    } else {
      setBoard(newBoard)
      changeTurn()
    }
  }

  return [board, put] as const
}
