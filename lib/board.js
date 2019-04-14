Object.defineProperty(exports, "__esModule", { value: true });
class Board {
    //new Board();した時に呼ばれる
    //特別なmethod
    constructor() {
        this.cells = Array(9).fill(CellValue.Kara);
    }
    /* ------- static method ------- */
    /**
     *2次元配列を1次元配列に変換する。
     * @param x x座標 値は0〜2
     * @param y y座標 値は0〜2
     */
    static posToIndex(x, y) {
        return x + y * 3;
    }
    /**
     *1次元配列を2次元配列に変換する。
     * @param i 1次元配列の値 値は0〜8
     */
    static indexToPos(i) {
        const y = Math.floor(i / 3);
        const x = i % 3;
        return [x, y];
    }
    /**
     *文字列データを内部データにする。
     */
    static parse(c) {
        const board = new Board();
        const a = c.split("");
        if (a.length !== 9) {
            throw new Error("入力文字列の長さが9ではないよ");
        }
        for (let i = 0; i < 9; i++) {
            if (a[i] === CellValue.Maru) {
                board.cells[i] = CellValue.Maru;
            }
            else if (a[i] === CellValue.Batu) {
                board.cells[i] = CellValue.Batu;
            }
            else if (a[i] === CellValue.Kara) {
                board.cells[i] = CellValue.Kara;
            }
            else {
                throw new Error("まるでもばつでもからでもないよ");
            }
        }
        return board;
    }
    /* ------- instance method -------  */
    toString() {
        return this.cells.join("");
    }
    win(o) {
        const list = [
            { i1: 0, i2: 1, i3: 2 },
            { i1: 3, i2: 4, i3: 5 },
            { i1: 6, i2: 7, i3: 8 },
            { i1: 0, i2: 3, i3: 6 },
            { i1: 1, i2: 4, i3: 7 },
            { i1: 2, i2: 5, i3: 8 },
            { i1: 0, i2: 4, i3: 8 },
            { i1: 2, i2: 4, i3: 6 },
        ];
        return list.some((v) => this.cells[v.i1] === o && this.cells[v.i2] === o && this.cells[v.i3] === o);
    }
    draw() {
        return !this.cells.find((v) => v === CellValue.Kara) && !this.win(CellValue.Maru) && !this.win(CellValue.Batu);
    }
    end() {
        return this.draw() || this.win(CellValue.Maru) || this.win(CellValue.Batu);
    }
    play(x, y) {
        // karaCountは奇数偶数でどちらの手番かを判定するためのやつ　偶数=バツ
        const karaCount = this.cells.filter((v) => v === CellValue.Kara).length;
        const turn = karaCount % 2 === 0 ? CellValue.Batu : CellValue.Maru;
        const i = Board.posToIndex(x, y);
        if (this.cells[i] === CellValue.Maru || this.cells[i] === CellValue.Batu) {
            throw new Error("まるでもばつでもからでもないよ");
        }
        this.cells[i] = turn;
        return this;
    }
}
exports.Board = Board;
// enum とは 特定の値しか入らない値型 を新しい型として作成する
/**
 * まるばつゲームのボードのマスをCellと考えたときにそれぞれに入る値を定義する。
 * 許可する値 = {Maru:"o", Batu:"x", Kara:"-"}
 */
var CellValue;
(function (CellValue) {
    CellValue["Maru"] = "o";
    CellValue["Batu"] = "x";
    CellValue["Kara"] = "-";
})(CellValue = exports.CellValue || (exports.CellValue = {}));
//# sourceMappingURL=board.js.map