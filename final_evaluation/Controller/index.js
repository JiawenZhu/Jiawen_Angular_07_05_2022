import { Model } from "../Model/index.js";
import { View } from "../View/index.js";

const Controller = ((model, view) => {
  const state = new model.State();

  const init = () => {
    model.getMovies().then((movies) => {
      state.movieList = [...movies];
    });
  };

  const bootstrap = () => {
    init();
  };

  return { bootstrap };
})(Model, View);
Controller.bootstrap();
