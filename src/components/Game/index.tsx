import React from 'react'
import { VBoard } from 'components/Board'
import 'components/Game/Game.css'
import { useBoard } from 'components/hooks/useBoard'

export function Game() {
  const [board, put] = useBoard()
  return (
    <div className="Game">
      <div className="Game-main">
        <VBoard board={board} put={put}></VBoard>
      </div>
    </div>
  )
}
