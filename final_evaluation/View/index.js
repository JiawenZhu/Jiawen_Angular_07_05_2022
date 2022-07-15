export const View = (() => {
  const domstr = {
    movieContainer: "#movieLists_container",
  };

  const render = (ele, tmp) => {
    ele.innerHTML = tmp;
  };

  const createTmp = (arr) => {
    let tmp = "";
    arr.forEach((movie) => {
      tmp += `<li class="movie_container">
        <div class="movie_image">
          <img src="${movie.imgUrl}" id="">
        </div>
        <div class="movie_title">${movie.title}</div>
        <div class="movie_outlineInfo">${movie.outlineInfo}</div>
    </li>`;
    });
    return tmp;
  };

  return {
    domstr,
    render,
    createTmp,
  };
})();
