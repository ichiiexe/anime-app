import "../style.css";
import {
  getPopular,
  getRecentEpisodes,
  getTrending,
  getAnimeInfo,
} from "../utils";

const [popularAnime, recentAnime, trendingAnime] = await Promise.all([
  getPopular(),
  getRecentEpisodes(),
  getTrending(),
]);

popularAnime.results.forEach((pop) => {
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
    <p><span class="text-purple-600">Score</span>: ${pop.rating}/100</p>
      <p><span class="text-purple-600">Type</span>: ${pop.type}</p>
      <p><span class="text-purple-600">Status</span>: ${pop.status} </p>
      <p><span class="text-purple-600">Date Aired</span>: ${pop.releaseDate}</p>
    </div>
    <div class="flex-1">
      <p><span class="text-purple-600">Episodes</span>: ${pop.totalEpisodes}</p>
      <p><span class="text-purple-600">Duration</span>: ${pop.duration} mins</p>
      <p id="genre" class=""><span class="text-purple-600 ">Genre</span>: ${pop.genres} </p>
    </div>
  </div>
</div>
</div>`;

  containerpop.appendChild(animeCard);
});

const recentAniContainer = document.getElementById("recentAnime");

recentAnime.results.forEach((anime) => {
  const recentCard = document.createElement("swiper-slide");
  recentCard.classList = "line-clamp-1 text-center relative w-full h-full";
  recentCard.id = anime.id;
  recentCard.innerHTML = `
  <a href="/watch/watch.html?id="> 
  <img class="w-full h-60"  src="${anime.image}" />
  <h1 class="text-sm">${anime.title.english}</h1>
  </a>
`;

  recentAniContainer.appendChild(recentCard);
});

const trendingAniContainer = document.getElementById("trendingAnime");

trendingAnime.results.forEach((trend) => {
  const recentCard = document.createElement("swiper-slide");
  recentCard.classList = "line-clamp-1 text-center w-full h-full";
  recentCard.id = trend.id;
  recentCard.innerHTML = `
  <img class="w-full h-60" src="${trend.image}" />
  <h1 class="text-sm">${trend.title.english}</h1>
  <span></span>
 `;

  trendingAniContainer.appendChild(recentCard);
});
const aniCard = document.querySelectorAll("swiper-slide");
