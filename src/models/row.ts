import { Cell } from './cell'

export class Row {
  private _num: number
  private _cells: Cell[]

  constructor(num: number) {
    this._num = num
    this._cells = [...Array(8)].map((_, i) => new Cell(i, num))
  }

  get num() {
    return this._num
  }

  get cells() {
    return this._cells
  }
}
