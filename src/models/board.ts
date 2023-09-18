import { Row } from './row'
import { Color, WHITE, BLACK } from './color'
import { Cell } from './cell'

export class Board {
  readonly rows: readonly Row[]
  constructor(rows?: Row[]) {
    if (rows === undefined) {
      const initialRows = [...Array(8)].map((_, i) => new Row(i))
      const row3 = initialRows[3]
        .copyWith(new Cell(3, 3).put(BLACK))
        .copyWith(new Cell(4, 3, WHITE))
      const row4 = initialRows[4]
        .copyWith(new Cell(3, 4, WHITE))
        .copyWith(new Cell(4, 4, BLACK))
      this.rows = [
        ...initialRows.slice(0, 3),
        row3,
        row4,
        ...initialRows.slice(5),
      ]
    } else {
      this.rows = rows
    }
  }

  copyWith(newCells: Cell[]): Board {
    const rows = this.rows.map((row) => row.copyWithCells(newCells))
    return new Board(rows)
  }

  put(cell: Cell, turn: Color): Board {
    const cells = this.search(cell, turn)
    if (cells.length === 0) {
      return this
    }
    const reversedCells = cells.map((cell) => cell.reverse())
    const newCells = [...reversedCells, cell.put(turn)]
    return this.copyWith(newCells)
  }

  countBlack(): number {
    let num = 0
    this.rows.forEach((row) =>
      row.cells.forEach((cell) => {
        if (cell.isBlack()) {
          num += 1
        }
      })
    )
    return num
  }

  countWhite(): number {
    let num = 0
    this.rows.forEach((row) =>
      row.cells.forEach((cell) => {
        if (cell.isWhite()) {
          num += 1
        }
      })
    )
    return num
  }

  private refCell(x: number, y: number): Cell | null {
    if (x < 0 || x > 7 || y < 0 || y > 7) {
      return null
    }
    return this.rows[y].cells[x]
  }

  private search(cell: Cell, turn: Color): Cell[] {
    const searchFunc = (
      current: Cell,
      list: Cell[],
      nextFunc: (current: Cell) => Cell | null
    ): Cell[] => {
      const next = nextFunc(current)
      if (!next) {
        return []
      }
      if (next.isNone()) {
        return []
      }
      if (
        (next.isBlack() && turn === WHITE) ||
        (next.isWhite() && turn === BLACK)
      ) {
        list.push(next)
        return searchFunc(next, list, nextFunc)
      }
      return list
    }

    let cells: Cell[] = []
    cells = cells.concat(
      searchFunc(cell, [], (cell) => this.refCell(cell.x, cell.y - 1))
    )
    cells = cells.concat(
      searchFunc(cell, [], (cell) => this.refCell(cell.x, cell.y + 1))
    )
    cells = cells.concat(
      searchFunc(cell, [], (cell) => this.refCell(cell.x - 1, cell.y))
    )
    cells = cells.concat(
      searchFunc(cell, [], (cell) => this.refCell(cell.x + 1, cell.y))
    )
    cells = cells.concat(
      searchFunc(cell, [], (cell) => this.refCell(cell.x - 1, cell.y - 1))
    )
    cells = cells.concat(
      searchFunc(cell, [], (cell) => this.refCell(cell.x + 1, cell.y - 1))
    )
    cells = cells.concat(
      searchFunc(cell, [], (cell) => this.refCell(cell.x - 1, cell.y + 1))
    )
    cells = cells.concat(
      searchFunc(cell, [], (cell) => this.refCell(cell.x + 1, cell.y + 1))
    )

    return cells
  }
}
