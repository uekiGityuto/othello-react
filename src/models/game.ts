import { WHITE, BLACK, Color } from '../models/color'

export class Game {
  changeTurn(turn: Color): Color {
    if (turn === BLACK) {
      return WHITE
    } else {
      return BLACK
    }
  }
}
