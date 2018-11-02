export class Board {
  cells: CellValue[];

  //new Board();した時に呼ばれる
  //特別なmethod
  constructor() {
    this.cells = Array(9).fill(CellValue.Kara);
  }
  //メソッド名
  public static posToIndex(x: number, y: number): number {
    return x + y * 3;
  }
  public static indexToPos(i: number): [number, number] {
    const y = Math.floor(i / 3);
    const x = i % 3;
    return [x, y];
  }
}

export enum CellValue {
  Maru = "o",
  Batu = "x",
  Kara = "-",
}
