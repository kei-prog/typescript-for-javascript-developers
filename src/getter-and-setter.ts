export {};

// * owner
//   * 所有者
//   * 初期化時に設定できる。
//   * 途中で変更できない。
//   * 参照できる。
// * secretNumber
//   * 個人番号
//   * 初期化時に設定できる。
//   * 途中で変更できる。
//   * 参照できない。

class MyNumberCard {
  // private _owner: string;
  // private _secretNumber: number;

  constructor(
    private _owner: string,
    private _secretNumber: number,
  ) {}

  get owner() {
    return this._owner;
  }

  set secretNumber(secretNumber: number) {
    this._secretNumber = secretNumber;
  }

  debugPrint() {
    return `secretNumber: ${this._secretNumber}`;
  }
}

let card = new MyNumberCard("Taro", 1234567890);
// card.owner = "ham";
console.log(card.debugPrint());
card.secretNumber = 1111111111;
console.log(card.secretNumber);
console.log(card.debugPrint());
// console.log(card);
