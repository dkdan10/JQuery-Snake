export default class AIPlayer {
    constructor(board) {
        this.board = board
        this.lastPos = this.board.snake.head()
    }

    makeMove() {
        const head = this.board.snake.head()
        if (head[1] === 0) {
            if (this.lastPos[0] === head[0]) {
                this.board.snake.turn("E");
            } else {
                this.board.snake.turn("S");
            }
        }
        if (head[1] === 18 && head[0] !== 0 && head[0] !== 19) {
            console.log(this.lastPos[0], head[0])
            if (this.lastPos[0] === head[0]) {
                this.board.snake.turn("E");
            } else {
                this.board.snake.turn("N");
            }
        } else if (head[0] === 19 && head[1] === 19) {
            this.board.snake.turn("W")
        } else if (head[0] === 0 && head[1] === 19) {
            this.board.snake.turn("N")
        }
        this.lastPos = head
    }

}