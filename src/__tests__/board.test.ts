import { Board, CellValue } from "../board";

describe("Board class", () => {
  describe("new Board", () => {
    test("newしたら長さが9の配列が返ってくる", () => {
      const b = new Board();
      expect(b.cells.length).toBe(9);
    });
    test("newしたら中身が9個のCellValue.Karaが詰まっている", () => {
      const b = new Board();
      expect(b.cells).toEqual([
        CellValue.Kara,
        CellValue.Kara,
        CellValue.Kara,
        CellValue.Kara,
        CellValue.Kara,
        CellValue.Kara,
        CellValue.Kara,
        CellValue.Kara,
        CellValue.Kara,
      ]);
    });
  });
  describe("posToIndex", () => {
    test("(1, 1) => 4", () => {
      expect(Board.posToIndex(1, 1)).toBe(4);
    });
    test("(0, 2) => 6", () => {
      expect(Board.posToIndex(0, 2)).toBe(6);
    });
  });
});
