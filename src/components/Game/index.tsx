import React from 'react'
import { VBoard } from 'components/Board'
import 'components/Game/Game.css'
import { Board } from 'models/board'

export function Game() {
  const board = new Board()
  return (
    <div className="Board">
      <VBoard board={board}></VBoard>
    </div>
  )
}
