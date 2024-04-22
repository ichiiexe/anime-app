import { register } from "swiper/element/bundle";
import "../style.css";
import Swiper from "swiper";
// register Swiper custom elements
register();

const swiper = new Swiper(".swiper", {
  // If we need pagination
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
