import { Board, CellValue } from "../marubatu";

describe("Board class", () => {
  describe("new", () => {
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
});
