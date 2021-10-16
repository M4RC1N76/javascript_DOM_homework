document.addEventListener('DOMContentLoaded', () => {
// console.log('loaded', window);
const movieForm = document.querySelector('#new-form');
movieForm.addEventListener('submit', handleMovieFormSubmit);

// ADD Delete button
const deleteButton = document.querySelector('#delete-all');
deleteButton.addEventListener('click', handleDeleteButtonClick);
});

const handleMovieFormSubmit = function (event) {
event.preventDefault();
console.dir(event.target);
// console.log(event.target.movie.value);

const movieListItem = createListItem (event.target);
const movieItem = document.querySelector('#movie-list');
movieItem.appendChild(movieListItem);

const inputs = document.querySelectorAll('input');
inputs.forEach(function (item) {
    item.value = '';
});

};

const createListItem = function(form) {
newListElement = document.createElement('li');
newListElement.classList.add('movie-list');

const newMovie = document.createElement('h2');
newMovie.textContent = form.movie.value;
newListElement.appendChild(newMovie);

const newDirector = document.createElement('h3');
newDirector.textContent = form.director.value;
newListElement.appendChild(newDirector);


const newRating = document.createElement('p');
newRating.textContent = form.rating.value;
newListElement.appendChild(newRating);
    
return newListElement;
};

const handleDeleteButtonClick = function () {
    const movieList = document.querySelector('#movie-list');
    movieList.innerHTML = '';
};

