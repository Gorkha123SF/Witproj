const movies = [
  "The Shawshank Redemption",
  "The Godfather",
  "The Dark Knight",
  "Pulp Fiction",
  "Inception",
  "Forrest Gump",
  "Fight Club",
  "The Matrix",
  "Interstellar",
  "Gladiator"
];

const searchInput = document.getElementById("searchInput");
const movieList = document.getElementById("movieList");

// Function to display movies
function displayMovies(filteredMovies) {
  movieList.innerHTML = "";
  if (filteredMovies.length === 0) {
    movieList.innerHTML = "<li>No results found.</li>";
    return;
  }

  filteredMovies.forEach(movie => {
    const li = document.createElement("li");
    li.textContent = movie;
    movieList.appendChild(li);
  });
}

// Initial display
displayMovies(movies);

// Filter movies in real-time
searchInput.addEventListener("input", () => {
  const searchText = searchInput.value.toLowerCase();
  const filtered = movies.filter(movie =>
    movie.toLowerCase().includes(searchText)
  );
  displayMovies(filtered);
});
