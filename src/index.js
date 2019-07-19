import SnakeView from "./snake-view";


$(() => {
  const gameEl = $('.snake');
  const gameView = new SnakeView(gameEl);
})