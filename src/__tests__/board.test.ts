import { Board, CellValue } from "../board";

describe("Board class", () => {
  describe("#new Board", () => {
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

  describe("#posToIndex", () => {
    test("(1, 1) => 4", () => {
      expect(Board.posToIndex(1, 1)).toBe(4);
    });

    test("(0, 2) => 6", () => {
      expect(Board.posToIndex(0, 2)).toBe(6);
    });
  });

  describe("#indexToPos", () => {
    test("4 =>(1, 1)", () => {
      expect(Board.indexToPos(4)).toEqual([1, 1]);
    });

    test("6 =>(0, 2)", () => {
      expect(Board.indexToPos(6)).toEqual([0, 2]);
    });
  });

  describe("#parse", () => {
    test("'---------' => Board", () => {
      const b = Board.parse("---------");
      expect(b.cells).toEqual(new Board().cells);
    });

    test("'' => error", () => {
      expect(() => Board.parse("")).toThrowError();
    });

    test("'ox-ox-ox-ox-' => error", () => {
      expect(() => Board.parse("ox-ox-ox-ox-")).toThrowError();
    });

    test("'abcdefghi' => error", () => {
      expect(() => Board.parse("abcdefghi")).toThrowError("");
    });

    test("'ooox-x---' => Board", () => {
      const b = Board.parse("ooox-x---");
      expect(b.cells).toEqual([
        CellValue.Maru,
        CellValue.Maru,
        CellValue.Maru,
        CellValue.Batu,
        CellValue.Kara,
        CellValue.Batu,
        CellValue.Kara,
        CellValue.Kara,
        CellValue.Kara,
      ]);
    });
  });

  describe("#toString", () => {
    test("Board => 'ooox-x---'", () => {
      expect(Board.parse("ooox-x---").toString()).toEqual("ooox-x---");
    });
    test("new Board => '---------'", () => {
      expect(new Board().toString()).toEqual("---------");
    });
  });
<<<<<<< HEAD

  describe("#win", () => {
    test("まっさらな Board は win(CellValue.Maru) すると falseになる", () => {
      expect(new Board().win(CellValue.Maru)).toBe(false);
    });
    test("Boardの状態がooo----xxだった時マルがwin", () => {
      expect(Board.parse("ooo----xx").win(CellValue.Maru)).toEqual(true);
    });
    test("Boardの状態がooo----xxだった時バツがloose", () => {
      expect(Board.parse("ooo----xx").win(CellValue.Batu)).toEqual(false);
    });
    test("Boardの状態がo--xo-x-oだった時マルがwin", () => {
      expect(Board.parse("o--xo-x-o").win(CellValue.Maru)).toEqual(true);
    });
    test("Boardの状態がxxx----ooだった時バツがwin", () => {
      expect(Board.parse("xxx----oo").win(CellValue.Batu)).toEqual(true);
    });
    test("Boardの状態がx--ox-o-xだった時バツがwin", () => {
      expect(Board.parse("x--ox-o-x").win(CellValue.Batu)).toEqual(true);
    });
  });
=======
>>>>>>> 4248e7c2c0b45bbe95c15ff51dd14cba6cad3262
});
