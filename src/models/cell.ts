import { WHITE, BLACK, Color } from './color'

export class Cell {
  private _x: number
  private _y: number
  private _cellState: Color | null

  constructor(x: number, y: number) {
    this._x = x
    this._y = y
    this._cellState = null
  }

  get x() {
    return this._x
  }

  get y() {
    return this._y
  }

  isNone(): boolean {
    return this._cellState === null
  }

  isBlack(): boolean {
    return this._cellState === BLACK
  }

  isWhite(): boolean {
    return this._cellState === WHITE
  }

  put(color: Color): void {
    this._cellState = color
  }

  reverse() {
    switch (this._cellState) {
      case BLACK:
        this._cellState = WHITE
        return
      case WHITE:
        this._cellState = BLACK
        return
      default:
        console.log('何も裏返せない')
        return
    }
  }
}
