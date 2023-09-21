import React from 'react'
import Button from '@mui/material/Button'
import Snackbar from '@mui/material/Snackbar'
import MuiAlert, { AlertProps } from '@mui/material/Alert'
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

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
  }
)

export function Game() {
  const [open, setOpen] = React.useState(false)
  const [turn, changeTurn] = useTurn()
  const [board, put] = useBoard(turn, changeTurn, setOpen)
  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return
    }

    setOpen(false)
  }
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
      <div className="Game-footer">
        <Button variant="contained" color="info" onClick={changeTurn}>
          パス
        </Button>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: '100%' }}
          >
            ここには置けません。
          </Alert>
        </Snackbar>
      </div>
    </div>
  )
}
