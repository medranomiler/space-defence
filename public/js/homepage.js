const highscoresBtn = document.querySelector("#highscores-btn");
const playBtn = document.querySelector("#play-btn");
// const logoutBtn = document.getElementById("logout-btn");

highscoresBtn.addEventListener("click", (e) => {
  e.preventDefault();
  document.location.replace("/api/highscore");
});

playBtn.addEventListener("click", (e) => {
  e.preventDefault();
  document.location.replace("/api/game");
});

// logoutBtn.addEventListener("click", async (e) => {
//   console.log("button clicked");
//   e.preventDefault();

//   const response = await fetch("/api/users/logout", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//   });

//   if (response.ok) {
//     document.location.replace("/");
//   } else {
//     alert(response.statusText);
//   }
// });
