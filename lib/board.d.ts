export declare class Board {
    cells: Array<CellValue>;
    constructor();
    /**
     *2次元配列を1次元配列に変換する。
     * @param x x座標 値は0〜2
     * @param y y座標 値は0〜2
     */
    static posToIndex(x: number, y: number): number;
    /**
     *1次元配列を2次元配列に変換する。
     * @param i 1次元配列の値 値は0〜8
     */
    static indexToPos(i: number): [number, number];
    /**
     *文字列データを内部データにする。
     */
    static parse(c: string): Board;
    toString(): string;
    win(o: CellValue): boolean;
    draw(): boolean;
    end(): boolean;
    play(x: number, y: number): Board;
}
/**
 * まるばつゲームのボードのマスをCellと考えたときにそれぞれに入る値を定義する。
 * 許可する値 = {Maru:"o", Batu:"x", Kara:"-"}
 */
export declare enum CellValue {
    Maru = "o",
    Batu = "x",
    Kara = "-"
}
