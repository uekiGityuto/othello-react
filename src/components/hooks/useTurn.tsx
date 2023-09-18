import { useState } from 'react'
import { Color, BLACK, WHITE } from 'models/color'

export function useTurn() {
  const [turn, setTurn] = useState<Color>(BLACK)

  const changeTurn = () => {
    if (turn === BLACK) {
      setTurn(WHITE)
    } else {
      setTurn(BLACK)
    }
  }

  return [turn, changeTurn] as const
}
