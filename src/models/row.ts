import { Cell } from './cell'

export class Row {
  readonly cells: Cell[]
  constructor(
    readonly num: number,
    cells?: Cell[]
  ) {
    if (cells === undefined) {
      this.cells = [...Array(8)].map((_, i) => new Cell(i, num))
    } else {
      this.cells = cells
    }
  }

  copyWith(newCell: Cell): Row {
    const cells = this.cells.map((c) => {
      if (c.isSame(newCell)) {
        return (c = newCell)
      }
      return c
    })
    return new Row(this.num, cells)
  }

  copyWithCells(newCells: Cell[]): Row {
    const cells = this.cells.map((cell) => {
      const newCell = newCells.find((c) => c.isSame(cell))
      if (newCell) {
        return newCell
      }
      return cell
    })
    return new Row(this.num, cells)
  }
}
