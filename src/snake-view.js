import Board from "./board";

function equals(arr1, arr2) {
  return (arr1[0] === arr2[0] && arr1[1] === arr2[1])
}

export default class SnakeView {
  constructor($el) {
    this.$el = $el;
    this.board = new Board();
    this.setupKeyBinds();
    this.gameInterval = setInterval(() => {
      this.step()
    }, 100);
  }

  step () {
    this.board.snake.move();
    this.$el.empty();
    this.render();
  }

  render () {
    let over = false
    if (this.board.snake.segments.some(seg => seg[0] > 19 || seg[0] < 0 || seg[1] > 19 || seg[1] < 0)) {
      over = true
    }
    for (let i = 0; i < 20; i++) {
      const $ul = $('<ul>')
      for (let j = 0; j < 20; j++) {
        const $li = $('<li>')
        // Snake snake is at segment
        const snakesAtPos = this.board.snake.segments.filter(segment => equals([j, i], segment))
        if (snakesAtPos.length === 1) {
          $li.addClass('snake-body')
        } else if (snakesAtPos.length > 1) {
          over = true
        }
        if (equals(this.board.apple, [j,i])) {
          // if snake is at apple
          if (this.board.snake.segments.filter(segment => equals([j,i], segment)).length){
            this.board.snake.growTurn = 2;
            this.board.generateRandomApple();
          } else {
            $li.addClass('apple');
          }
        }
        $ul.append($li);
      }
      this.$el.append($ul)
    }
    if (over) this.gameOver()
  }

  gameOver() {
    window.clearInterval(this.gameInterval);
    const $h1 = $('<h2>')
    $h1.text("You Lose")
    const $h2 = $('<h1>')
    $h2.text("Press Space to Restart")
    this.$el.append($h1)
    this.$el.append($h2)
  }

  setupKeyBinds() {
    $(document).keydown(e => {
      if (e.keyCode === 38) {
        this.board.snake.turn("N")
      } else if (e.keyCode === 39) {
        this.board.snake.turn("E")
      } else if (e.keyCode === 40) {
        this.board.snake.turn("S")
      } else if (e.keyCode === 37) {
        this.board.snake.turn("W")
      } else if (e.keyCode === 32) {
        this.board = new Board();
        this.gameInterval = setInterval(() => {
          this.step()
        }, 100);
      }
    })
  }
}