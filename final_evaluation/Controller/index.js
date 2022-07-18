import { Model } from "../Model/index.js";
import { View } from "../View/index.js";
const DISPLAYANUMBER = 4;

const Controller = ((model, view) => {
  const state = new model.State();
  let totalNumMovies = 0;
  
  const display = (index) => {
    model.getMovies().then((movies) => {
      totalNumMovies = movies.length;
      const initMovies = movies.slice(index - DISPLAYANUMBER, index);
      state.movieList = [...initMovies];
    });
  };

  const displayOnClick = () => {
    const rightBtn = document.querySelector(view.domstr.rightBtn);
    const leftBtn = document.querySelector(view.domstr.leftBtn);
    let curIndex = DISPLAYANUMBER;

    rightBtn.addEventListener("click", (e) => {
      display(++curIndex);
      if(curIndex > totalNumMovies){
        curIndex = DISPLAYANUMBER;
        display(curIndex);
      }
    });

    leftBtn.addEventListener("click", (e) => {
      display(--curIndex);
      if(curIndex <= DISPLAYANUMBER){
        curIndex = DISPLAYANUMBER;
        display(curIndex);
        window.alert("this is the end");
      }
    });
  };

  const bootstrap = () => {
    // initial display
    display(DISPLAYANUMBER);
    displayOnClick();
  };

  return { bootstrap };
})(Model, View);
Controller.bootstrap();
