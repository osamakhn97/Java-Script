const addMovieModel = document.getElementById("add-modal");
const addMovieBtn = document.querySelector("header button");
const backDrop = document.getElementById("backdrop");
const cancelMovieButton = addMovieModel.querySelector(".btn--passive");
const addConfirmBtn = cancelMovieButton.nextElementSibling;
const entryTextSection = document.getElementById("entry-text");
const inputs = addMovieModel.querySelectorAll("input");
const movies = [];
const deleteModal = document.getElementById("delete-modal");

// console.log(addConfirmBtn);
console.log(inputs);
// console.log(cancelMovieButton);
// console.log(addMovieBtn)
const updateUi = () => {
  if (movies.length === 0) {
    entryTextSection.style.display = "block";
  } else {
    entryTextSection.style.display = "none";
  }
};
const deleteMovie = (movieId) => {
  let movieIndex = 0;
  console.log("initiated");
  movies.forEach((e) => {
    if (e.movieId === movieId) {
      movies.splice(movieIndex, 1);
      console.log(movies);
      const listRoot = document.getElementById("movie-list");
      listRoot.children[movieIndex].remove();
      updateUi();
    } else {
      movieIndex++;
    }
  });
};

const deletMovieHandler = (movieId) => {
  deleteModal.classList.add("visible");
  togggleBackDrop();
  const choice = document.getElementById("choice");
  const no = choice.querySelector("button");
  const yes = no.nextElementSibling;
  console.log(yes);
  console.log(no);
  yes.addEventListener("click", () => {
    deleteModal.classList.remove("visible");
    deleteMovie(movieId);
    togggleBackDrop();
  });
  no.addEventListener("click", () => {
    deleteModal.classList.remove("visible");
    togggleBackDrop();
  });
};
const renderMovies = (movieId, title, imageUrl, rating) => {
  const newMovieElement = document.createElement("li");
  newMovieElement.className = `movie-element`;
  newMovieElement.innerHTML = `
    <div class="movie-element__image">
    <img src = "${imageUrl}" alt = ${title}>
    </div>
    <div class= "movie-element__info">
    <h2>${title}</h2>
    <p>${rating}/5 stars</p>

    </div>
    `;
  newMovieElement.addEventListener(
    "click",
    deletMovieHandler.bind(null, movieId)
  );
  const listRoot = document.getElementById("movie-list");
  listRoot.append(newMovieElement);
};
const togggleBackDrop = () => {
  backDrop.classList.toggle("visible");
};

const clearInputs = () => {
  inputs.forEach((e) => {
    e.value = "";
  });
};
const toggleMovieModal = () => {
  addMovieModel.classList.toggle("visible");

  togggleBackDrop();
};
const addMovieHandler = () => {
  const title = inputs[0].value;
  const imgUrl = inputs[1].value;
  const rating = inputs[2].value;

  if (
    title.trim() === "" ||
    imgUrl.trim() === "" ||
    rating.trim() === "" ||
    +rating > 5 ||
    +rating < 1
  ) {
    alert("please enter a valid  values");
    clearInputs();
  } else {
    const obj = {
      movieId: Math.random().toString(),
      movieName: title,
      imgUrl: imgUrl,
      rating: rating,
    };
    movies.push(obj);
    renderMovies(obj.movieId, obj.movieName, obj.imgUrl, obj.rating);
    clearInputs();
    updateUi();
    toggleMovieModal();
    // console.log(movies);
  }
};

addMovieBtn.addEventListener("click", toggleMovieModal);
backDrop.addEventListener("click", () => {
  //This is optional you can disable it.....
  addMovieModel.classList.remove("visible");
  deleteModal.classList.remove("visible");
  togggleBackDrop();
});
cancelMovieButton.addEventListener("click", toggleMovieModal);
addConfirmBtn.addEventListener("click", addMovieHandler);


//........................................................

