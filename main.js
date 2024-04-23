import "./style.css";
import { fetchAnime } from "./utils";
import { register } from "swiper/element/bundle";
// register Swiper custom elements
register();

const navButton = document.getElementById("navButton");
const navMenu = document.getElementById("navMenu");
console.log(navButton);

navButton.addEventListener("click", () => {
  navMenu.classList.toggle("hidden");
});

const userLogin = document.getElementById("userLogin");
const loginContainer = document.createElement("main");
userLogin.addEventListener("click", () => {
  loginContainer.classList =
    "min-h-dvh w-full bg-black/70 absolute top-0 flex justify-center items-center";
  // "min-h-dvh w-full absolute flex justify-center items-center bg-black/75";
  loginContainer.innerHTML = `<div id="loginCard" class="w-1/4 h-1/3 bg-white rounded relative animate-loginOpen">
  <form class="flex flex-col items-center p-3 gap-10 flex-1">
    <div class="text-center">
      <h1 class="text-3xl font-bold text-purple-600">Member Login</h1>
      <p>Sign in to continue to 9Anime</p>
    </div>
    <div class="min-w-full flex flex-col gap-3">
      <label class="relative flex items-center" for="userEmail"
        ><input
          class="py-2 px-2 rounded min-w-full bg-black/10 placeholder:px-2"
          placeholder="Enter your email"
        /><span class="material-symbols-outlined absolute right-2">
          person
        </span></label
      >

      <label class="relative flex items-center" for="userPassword"
        ><input
          type="password"
          class="py-2 px-2 rounded min-w-full bg-black/10 placeholder:px-2 "
          placeholder="Enter your password"
        /><span class="material-symbols-outlined absolute right-2">
          lock
        </span></label
      >
    </div>
    <div class="flex justify-between min-w-full">
      <label><input type="checkbox" /> Remember Me</label>
      <span class="text-purple-600 cursor-pointer"
        >Forgot password?</span
      >
    </div>
    <div class="w-full text-center"> 
      <input
        type="submit"
        value="LOGIN"
        class="bg-purple-600 w-full p-3 rounded text-white tracking-widest"
      />
      <p class="text-sm">Dont have an account? <button class="text-purple-600">Register</button></p>
    </div>
  </form>
  <button class="material-symbols-outlined absolute top-2 right-2" id="closeLogin">
    close
  </button>
</div>`;
  app.appendChild(loginContainer);
  //Login Close|Open//
  const closeLogin = loginContainer.querySelector("#closeLogin");
  closeLogin.addEventListener("click", () => {
    loginCard.classList.remove("animate-loginOpen");
    loginCard.classList.add("animate-loginClose");
    setTimeout(() => {
      loginContainer.remove();
    }, 300);
  });

  const loginCard = loginContainer.querySelector("#loginCard");
  console.log(loginCard);
  loginContainer.addEventListener("click", (event) => {
    if (loginContainer === event.target) {
      loginAnimation();
    }
  });
});

function loginAnimation() {
  loginCard.classList.remove("animate-loginOpen");
  loginCard.classList.add("animate-loginClose");
  setTimeout(() => {
    loginContainer.remove();
  }, 300);
}

//Vertical Menu//
const vertMenu = document.getElementById("vertMenu");
const vertBtn = document.getElementById("vertBtn");

vertBtn.addEventListener("click", (event) => {
  vertMenu.classList.toggle("hidden");
});

//Search//
const searchBTN = document.querySelector("#searchBTN");
const searchAnime = document.getElementById("searchInput");

//click
searchAnime.addEventListener("click", () => {
  const data = fetchAnime(searchAnime.value);
  console.log(data);
});

//Random//
