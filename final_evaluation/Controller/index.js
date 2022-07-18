import { Model } from "../Model/index.js";
import { View } from "../View/index.js";
const displayNumber = 4;

const Controller = ((model, view) => {
  const state = new model.State();
  let totalNumMovies = 0;
  const display = (index) => {
    model.getMovies().then((movies) => {
      totalNumMovies = movies.length;
      const initMovies = movies.slice(index - displayNumber, index);
      state.movieList = [...initMovies];
    });
  };

  const displayOnClick = () => {
    const rightBtn = document.querySelector(view.domstr.rightBtn);
    const leftBtn = document.querySelector(view.domstr.leftBtn);
    let curIndex = displayNumber;

    rightBtn.addEventListener("click", (e) => {
      display(++curIndex);
      if(curIndex > totalNumMovies){
        curIndex = displayNumber;
        display(curIndex);
      }
    });

    leftBtn.addEventListener("click", (e) => {
      display(--curIndex);
      if(curIndex <= displayNumber){
        curIndex = displayNumber;
        display(curIndex);
        window.alert("this is the end");
      }
    });
  };

  const bootstrap = () => {
    // initial display
    display(displayNumber);
    displayOnClick();
  };

  return { bootstrap };
})(Model, View);
Controller.bootstrap();
