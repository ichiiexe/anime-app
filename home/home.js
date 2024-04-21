import "../style.css";
import axios from "axios";
import { register } from "swiper/element/bundle";
// register Swiper custom elements
register();

async function getPopular() {
  const url = "https://animeapi-mu.vercel.app/meta/anilist/popular";
  try {
    const { data } = await axios.get(url, {
      params: {
        page: 1,
        perPage: 10,
      },
    });
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
}
const popularAnime = await getPopular();
const popList = popularAnime.results;
popList.forEach((pop) => {
  console.log(pop);
  const containerpop = document.getElementById("topContainer");

  const animeCard = document.createElement("swiper-slide");
  animeCard.classList = "flex justify-center items-center";

  animeCard.innerHTML = `
  <div class="p-5 flex bg-white/5 justify-center gap-10 rounded-2xl w-2/3">
<iframe
  class="flex-1"
  width="640"
  height="360"
  src="https://www.youtube.com/embed/${pop.trailer.id}?autoplay=1&mute=.50"
>
</iframe>
<div class="flex flex-1 flex-col gap-10 justify-center">
  <div class="">
    <p class="text-2xl font-bold text-purple-600">${pop.title.english}</p>
    <h1>${pop.title.native}</h1>
    <p class="mt-5 line-clamp-5">${pop.description}</p>
  </div>
  <div class="flex gap-5">
    <div class="flex-1">
      <p><span class="text-purple-600">Type</span>: ${pop.type}</p>
      <p><span class="text-purple-600">Status</span>: ${pop.status} </p>
      <p><span class="text-purple-600">Date Aired</span>: ${pop.releaseDate}</p>
      <p id="genre" class="flex"><span class="text-purple-600">Genre</span>: </p>
    </div>
    <div class="flex-1">
      <p><span class="text-purple-600">Score</span>: ${pop.rating}/100</p>
      <p><span class="text-purple-600">Episodes</span>: ${pop.totalEpisodes}</p>
      <p><span class="text-purple-600">Duration</span>: ${pop.duration} mins</p>
    </div>
  </div>
</div>
</div>`;

  containerpop.appendChild(animeCard);

  // pop.genres.forEach((genre) => {
  //   const genrecont = containerpop.querySelector("#genre");
  //   const genreLink = document.createElement("a");
  //   genreLink.textContent = ` ${genre}${genre <= genre.length ? "" : ","}`;
  //   genrecont.appendChild(genreLink);
  // });
});

async function getPopularTrailer() {
  const url = "https://animeapi-mu.vercel.app/anime/animefox/info?id=";
  const data = async () => {
    try {
      const { data } = await axios.get(url, { params: { id: "spy-x-family" } });
      return data;
    } catch (err) {
      throw new Error(err.message);
    }
  };
}

async function getRecentEpisodes() {
  const url = "https://animeapi-mu.vercel.app/meta/anilist/recent-episodes";
  try {
    const { data } = await axios.get(url, {
      params: {
        page: 1,
        perPage: 15,
        provider: "gogoanime",
      },
    });
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
}

// console.log(getRecentEpisodes());
