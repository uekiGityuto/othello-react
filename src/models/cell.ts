import { WHITE, BLACK, Color } from './color'

export class Cell {
  constructor(
    readonly x: number,
    readonly y: number,
    readonly cellState: Color | null = null
  ) {}

  isNone(): boolean {
    return this.cellState === null
  }

  isBlack(): boolean {
    return this.cellState === BLACK
  }

  isWhite(): boolean {
    return this.cellState === WHITE
  }

  isSame(cell: Cell): boolean {
    return this.x === cell.x && this.y === cell.y
  }

  put(color: Color): Cell {
    return new Cell(this.x, this.y, color)
  }

  reverse(): Cell {
    switch (this.cellState) {
      case BLACK:
        return new Cell(this.x, this.y, WHITE)
      case WHITE:
        return new Cell(this.x, this.y, BLACK)
      default:
        console.log('石が置かれていません')
        return this
    }
  }
}
