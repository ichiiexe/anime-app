import axios from "axios";

const url = "https://animeapi-mu.vercel.app/anime/zoro/";
const searchInput = document.getElementById("searchInput");

export async function fetchAnime(searchInput) {
  try {
    const { data } = await axios.get(`${url}${searchInput}`);
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
}
