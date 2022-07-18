export const View = (() => {
  const domstr = {
    movieContainer: "#movieLists_container",
    rightBtn: ".btn_right",
    leftBtn: ".btn_left",
  };

  const render = (ele, tmp) => {
    ele.innerHTML = tmp;
  };

  const createTmp = (arr) => {
    let tmp = "";
    arr.forEach((movie) => {
      tmp += `<li class="movie_block" id="${movie.id}">
        <div class="movie_image">
          <img src="${movie.imgUrl}">
        </div>
        <div class="movie_title">${movie.name}</div>
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
