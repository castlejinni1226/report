const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYjNhYWVlNWYxYWUyZWUwMjViZjAzYjYzZGM2M2Y1ZCIsInN1YiI6IjY1OTc2N2YxMGU2NGFmMzE5YThjMThlZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WFpcy72hzLFJG-KeQGphAp9eFXTwipQJRsQmfd19Gxg'
  }
};


fetch('https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1', options)
    .then(response => response.json())
    .then(data => {
        const lcContainer = document.getElementById('main');
        data.results.forEach((movie, index) => {
            const movieCard = createMovieCard(index, movie.title, movie.original_title, movie.poster_path, movie.vote_average, movie.overview, movie.id);
            lcContainer.appendChild(movieCard);
        });
    })
    .catch(err => console.error(err));
function createMovieCard(index, title, otitle, poster_path, vote_average, overview, id) {
    const movieContainer = document.createElement('div');
    const imageElement = document.createElement('img');
    const plusContainer = document.createElement('div');
    const titleElement = document.createElement('div');
    const otitleElement = document.createElement('div');
    const starElement = document.createElement('div');
    const hrElement = document.createElement('hr');
    const overviewElement = document.createElement('div');

    movieContainer.className = 'card';
    imageElement.className = 'poster';
    plusContainer.className = 'plus';
    titleElement.className = 'p_title';
    otitleElement.className = 'p-otitle';
    starElement.className = 'p_star';
    overviewElement.className = 'p_over';
    let round = Math.round(vote_average * 10) / 10;
    imageElement.src = 'https://image.tmdb.org/t/p/original' + poster_path;
    titleElement.textContent = title;
    otitleElement.textContent = `(${otitle})`;
    starElement.textContent = `:별:️ 평점 : ${round}`;
    overviewElement.textContent = overview;
    plusContainer.appendChild(titleElement);
    plusContainer.appendChild(otitleElement);
    plusContainer.appendChild(starElement);
    plusContainer.appendChild(hrElement);
    plusContainer.appendChild(overviewElement);
    movieContainer.appendChild(imageElement);
    movieContainer.appendChild(plusContainer);
    function handlePosterClick() {
        alert(`해당 영화의 ID : ${id}`);
    }
    imageElement.addEventListener('click', handlePosterClick);
    return movieContainer;
}

