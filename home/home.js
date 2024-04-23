import "../style.css";
import axios from "axios";
import { getPopular, getRecentEpisodes, getTrending } from "../utils";

const [popularAnime, recentAnime, trendingAnime] = await Promise.all([
  getPopular(),
  getRecentEpisodes(),
  getTrending(),
]);

popularAnime.results.forEach((pop) => {
  const containerpop = document.getElementById("topContainer");

  const animeCard = document.createElement("swiper-slide");
  animeCard.classList =
    "flex flex-col items-center bg-black p-2 rounded max-w-5xl sm:flex-row sm:gap-5";

  animeCard.innerHTML = `
  <div class="flex flex-1 flex-shrink flex-grow w-full">
                <iframe
                  class="w-full md:h-56 xl:h-64"
                  src="https://www.youtube.com/embed/${pop.trailer.id}?autoplay=1&mute=.50"
                >
                </iframe>
              </div>
              <div class="flex-1 text-xs">
                <div class="">
                  <p class="text-2xl font-bold text-purple-600">
                    ${pop.title.english}
                  </p>
                  <h1>${pop.title.native}</h1>
                  <p class="my-5 line-clamp-5 ">${pop.description}</p>
                </div>
                <div class="hidden md:flex md:text-left md:gap-14">
                  <div class="">
                    <p>
                      <span class="text-purple-600">Score</span>:
                      ${pop.rating}/100
                    </p>
                    <p><span class="text-purple-600">Type</span>: ${pop.type}</p>
                    <p>
                      <span class="text-purple-600">Status</span>: ${pop.status}
                    </p>
                    <p>
                      <span class="text-purple-600">Date Aired</span>:
                      ${pop.releaseDate}
                    </p>
                  </div>
                  <div class="">
                    <p>
                      <span class="text-purple-600">Episodes</span>:
                      ${pop.totalEpisodes}
                    </p>
                    <p>
                      <span class="text-purple-600">Duration</span>:
                      ${pop.duration} mins
                    </p>
                    <p id="genre" class="">
                      <span class="text-purple-600">Genre</span>: ${pop.genres}
                    </p>
                  </div>
              </div>`;

  containerpop.appendChild(animeCard);
});

const recentAniContainer = document.getElementById("recentAnime");

recentAnime.results.forEach((anime) => {
  const recentCard = document.createElement("swiper-slide");
  recentCard.classList = "line-clamp-1 w-full h-full text-center";
  recentCard.innerHTML = `<div>
  <img class="w-full max-h-60" src="${anime.image}" />
  <h1 class="text-sm">${anime.title.english}</h1>
  </div>`;

  recentAniContainer.appendChild(recentCard);
});

const trendingAniContainer = document.getElementById("trendingAnime");

trendingAnime.results.forEach((trend) => {
  const recentCard = document.createElement("swiper-slide");
  recentCard.classList = "line-clamp-1 w-full h-full text-center";
  recentCard.innerHTML = `<div>
  <img class="w-full max-h-60" src="${trend.image}" />\
  <h1 class="text-sm">${trend.title.english}</h1>
  </div>`;

  trendingAniContainer.appendChild(recentCard);
});
