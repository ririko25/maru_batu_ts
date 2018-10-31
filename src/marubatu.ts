export class Board {
  cells: CellValue[];


  //new Board();した時に呼ばれる
  constructor() {
    // TODO:初期化処理を書く。
    this.cells = Array(9).fill(CellValue.Kara);
  }
}

export enum CellValue {
  Maru = "o",
  Batu = "x",
  Kara = "-",
}
