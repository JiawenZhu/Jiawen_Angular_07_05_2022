//* ~~~~~~~~~~~~~~~~~~~~~ Api ~~~~~~~~~~~~~~~~~~~~~
export const Api = (() => {
  const baseUrl = 'http://localhost:4232';
	const path = "movies";

	const getMovies = () =>
		fetch([baseUrl, path].join("/")).then((response) => response.json());

	return {
		getMovies,
	};
})();