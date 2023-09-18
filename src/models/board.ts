import { Row } from './row'
import { Color, WHITE, BLACK } from './color'
import { Cell } from './cell'

export class Board {
  readonly rows: Row[]
  constructor(rows?: Row[]) {
    if (rows === undefined) {
      const rows = [...Array(8)].map((_, i) => new Row(i))
      rows[3].cells[3] = rows[3].cells[3].put(BLACK)
      rows[3].cells[4] = rows[3].cells[4].put(WHITE)
      rows[4].cells[3] = rows[4].cells[3].put(WHITE)
      rows[4].cells[4] = rows[4].cells[4].put(BLACK)
      this.rows = rows
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
