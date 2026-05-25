async function searchMovie() {

  let movieName =

    document
    .getElementById("search")
    .value;


  let movies =

    document
    .getElementById("movies");


  // Replace with your API Key

  let apiKey = "7e97c452";


  let url =

  `https://www.omdbapi.com/?s=${movieName}&apikey=${apiKey}`;


  let response = await fetch(url);

  let data = await response.json();


  movies.innerHTML = "";


  if(data.Response === "True") {


    data.Search.forEach(async (movie) => {

      let detailsUrl =

      `https://www.omdbapi.com/?i=${movie.imdbID}&apikey=${apiKey}`;


      let detailsResponse =

        await fetch(detailsUrl);


      let details =

        await detailsResponse.json();


      movies.innerHTML += `

        <div class="movie-card">

          <img src="${details.Poster}">

          <h2>
            ${details.Title}
          </h2>

          <p>
            ⭐ Rating:
            ${details.imdbRating}
          </p>

          <p>
            📅 Year:
            ${details.Year}
          </p>

          <p>
            🎭 Genre:
            ${details.Genre}
          </p>

          <p>
            🎬 Actors:
            ${details.Actors}
          </p>

          <p>
            🎥 Director:
            ${details.Director}
          </p>

          <p>
            🌍 Language:
            ${details.Language}
          </p>

          <p>
            ⏳ Runtime:
            ${details.Runtime}
          </p>

        </div>
      `;
    });

  }

  else {

    movies.innerHTML =
      "❌ Movie Not Found";
  }
}