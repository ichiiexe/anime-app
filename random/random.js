import "../style.css";
import { getRandom, getAnimeInfo, getEpisodes } from "../utils";

const random = await getRandom();
const { episodes } = random;
if (episodes != 0) {
  const [info, episode] = await Promise.all([
    getAnimeInfo(random.id),
    getEpisodes(episodes[0].id),
  ]);
  console.log(episode);

  const source = episode.sources;
  const defaultSource = source.filter((item) =>
    Object.values(item).includes("default")
  );
  console.log(defaultSource);

  const content = document.getElementById("content");
  const videoplayer = document.createElement("video");
  videoplayer.classList = "w-full h-full";
  videoplayer.innerHTML = `<source class="w-full h-full" src="${defaultSource[0].url}" />`;

  content.appendChild(videoplayer);
}
