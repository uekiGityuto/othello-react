import React from 'react'
import { VBoard } from 'components/Board'
import 'components/Game/Game.css'
import { useTurn } from 'components/hooks/useTurn'
import { useBoard } from 'components/hooks/useBoard'
import { Color, BLACK, WHITE } from 'models/color'

function note(turn: Color): string {
  if (turn == BLACK) {
    return '黒の番です'
  } else if (turn == WHITE) {
    return '白の番です'
  } else {
    return '手番が異常です'
  }
}

export function Game() {
  const [turn, changeTurn] = useTurn()
  const [board, put] = useBoard(turn, changeTurn)
  return (
    <div className="Game">
      <div className="Game-header">
        <h1>オセロ</h1>
        <div className="Game-note">{note(turn)}</div>
        <div className="result">
          黒の数: {board.countBlack()}、白の数: {board.countWhite()}
        </div>
      </div>
      <div className="Game-main">
        <VBoard board={board} onClick={put}></VBoard>
      </div>
    </div>
  )
}
