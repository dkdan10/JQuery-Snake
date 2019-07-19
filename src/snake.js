const directions = ["N", "S", "E", "W"]

function plus(arr1, arr2) {
  return [arr1[0] + arr2[0], arr1[1] + arr2[1]]
}

function oppositeDir(dir1, dir2) {
  return (
    dir1 === "N" && dir2 === "S" ||
    dir1 === "S" && dir2 === "N" ||
    dir1 === "E" && dir2 === "W" ||
    dir1 === "W" && dir2 === "E" 
    )
}

export default class Snake{
  constructor(){
    this.direction = "N";
    this.segments = [ [0,19] ];
    this.growTurn = 0;
  }

  head () {
    return this.segments.slice(-1)[0]
  }

  move () {
    const head = this.head()
    switch (directions.indexOf(this.direction)) {
      case 0:
        this.segments.push([head[0], head[1] - 1])
        break;
      case 1:
        this.segments.push([head[0], head[1] + 1])
        break;
      case 2:
        this.segments.push([head[0] + 1, head[1]])
        break;
      case 3:
        this.segments.push([head[0] - 1, head[1]])
        break;
      default:
        console('Hit default... something aint right.')
        break;
    }
    if (this.growTurn >= 0) {
      this.growTurn -= 1;
    } else {
      this.segments.shift();
    }
  }

  turn (newDir) {
    if (directions.indexOf(newDir) !== -1) {
      if (!oppositeDir(this.direction, newDir))
      this.direction = newDir
    }
  }
}