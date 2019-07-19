import Snake from "./snake";

function equals(arr1, arr2) {
  return [arr1[0] === arr2[0] && arr1[1] === arr2[1]]
}

export default class Board {
  constructor() {
    this.snake = new Snake()
    this.generateRandomApple()
  }

  generateRandomApple() {
    let randX = Math.floor(Math.random() * 20);
    let randY = Math.floor(Math.random() * 20)
    while (!this.snake.segments.some(el=> equals(el, [randX,randY]))) {
      randX = Math.floor(Math.random() * 20)
      randY = Math.floor(Math.random() * 20)
    }
    this.apple = [randX, randY]
  }
}