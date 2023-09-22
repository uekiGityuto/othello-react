import { useState } from 'react'
import { Color, BLACK, WHITE } from 'models/color'

export function usePass(
  turn: Color,
  changeTurn: () => void,
  setOpen: (open: boolean) => void
) {
  const [eachPassCount, setEachPassCount] = useState({black: 0, white: 0})

  const pass = () => {
    if (turn === BLACK) {
      if(eachPassCount.black === 2) {
        setOpen(true)
      } else {
        setEachPassCount((prevEachCount) => {
          return {...eachPassCount, black: prevEachCount.black + 1}
        })
        changeTurn()
      }
    } else if(turn === WHITE) {
      if(eachPassCount.white === 2) {
        setOpen(true)
      } else {
        setEachPassCount((prevEachCount) => {
          return {...eachPassCount, white: prevEachCount.white + 1}
        })
        changeTurn()
      }
    }
  }

  return [eachPassCount, pass] as const
}
