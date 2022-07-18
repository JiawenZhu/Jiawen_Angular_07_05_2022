import { Api } from "../api/api.js";
import { View } from "../View/index.js";
export const Model = ((api, view) => {
  class Movie {
    constructor(image, title, outlineInfo) {
      this.image = image;
      this.title = title;
      this.outlineInfo = outlineInfo;
    }
  }

  class State {
    #movies = [];

    get movieList() {
      return this.#movies;
    }

    set movieList(movies) {
      this.#movies = [...movies];

      const movieContainer = document.querySelector(view.domstr.movieContainer);
      const tmp = view.createTmp(this.#movies);
      view.render(movieContainer, tmp);
    }

  }

  const { getMovies } = api;
  return {
    State,
    Movie,
    getMovies,
  };
})(Api, View);
