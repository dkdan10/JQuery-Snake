import SnakeView from "./snake-view";


$(() => {
  const gameEl = $('.snake');
  const extraText = $('.additional-text');
  new SnakeView(gameEl, extraText);
})