import React from 'react'
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'
import { buttonStyle } from 'utils/style'
import 'pages/Home/Home.css'
import othello from 'assets/images/othello.jpg'

export function Home() {
  const navigate = useNavigate()

  return (
    <div className="Home">
      <div className="Home-btn-area">
        <Button
          variant="contained"
          className="Home-game-btn"
          sx={buttonStyle}
          onClick={() => navigate('/game')}
        >
          ゲーム開始
        </Button>
      </div>
      <div className="Home-img-area">
        <img className="Home-img" alt="othello" src={othello} />
      </div>
    </div>
  )
}
