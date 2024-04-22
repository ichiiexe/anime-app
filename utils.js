import axios from "axios";

// Global//
const baseURL = "http://localhost:3000/";
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

export async function getPopular() {
  const url = `${baseURL}meta/anilist/popular`;
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

export async function getRecentEpisodes() {
  const url = `${baseURL}meta/anilist/recent-episodes`;
  try {
    const { data } = await axios.get(url, {
      params: {
        page: 1,
        perPage: 20,
        provider: "gogoanime",
      },
    });
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
}
