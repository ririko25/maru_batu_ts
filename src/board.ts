export class Board {
  cells: Array<CellValue>;

  //new Board();した時に呼ばれる
  //特別なmethod
  constructor() {
    this.cells = Array(9).fill(CellValue.Kara);
  }

  /* ------- static method ------- */

  /**
   *2次元配列を1次元配列に変換する。
   * @param x x座標
   * @param y y座標
   */
  public static posToIndex(x: number, y: number): number {
    return x + y * 3;
  }

  /**
   *1次元配列を2次元配列に変換する。
   * @param i 1次元配列の値
   */
  public static indexToPos(i: number): [number, number] {
    const y = Math.floor(i / 3);
    const x = i % 3;
    return [x, y];
  }

  /**
   *文字列データを内部データにする。
   */
  public static parse(c: string): Board {
    const board = new Board();
    const a = c.split("");
    if (a.length !== 9) {
      throw new Error("入力文字列の長さが9ではないよ");
    }
    for (let i = 0; i < 9; i++) {
      if (a[i] === CellValue.Maru) {
        board.cells[i] = CellValue.Maru;
      } else if (a[i] === CellValue.Batu) {
        board.cells[i] = CellValue.Batu;
      } else if (a[i] === CellValue.Kara) {
        board.cells[i] = CellValue.Kara;
      } else {
        throw new Error("まるでもばつでもからでもないよ");
      }
    }
    return board;
  }

  /* ------- instance method -------  */
  public toString(): string {
    return this.cells.join("");
  }
}

// enum とは 特定の値しか入らない値型 を新しい型として作成する
/**
 * まるばつゲームのボードのマスをCellと考えたときにそれぞれに入る値を定義する。
 * 許可する値 = {Maru:"o", Batu:"x", Kara:"-"}
 */
export enum CellValue {
  Maru = "o",
  Batu = "x",
  Kara = "-",
}
