import { getRepositories } from "./services/repositories.js";
import { getUser } from "./services/user.js";
import { getEvents } from "./services/events.js";

import { user } from "./objects/user.js";
import { screen } from "./objects/screen.js";

document.getElementById("btn-search").addEventListener("click", () => {
  const userName = document.getElementById("input-search").value;
  if (renderNotFound(userName)) return;
  getUserData(userName);
});

document.getElementById("input-search").addEventListener("keyup", (e) => {
  const userName = e.target.value;
  const key = e.which || e.keyCode;
  const enterKeyPressed = key === 13;

  if (enterKeyPressed) {
    if (renderNotFound(userName)) return;
    getUserData(userName);
  }
});

function renderNotFound(userName) {
  if (userName.length === 0) {
    alert("Preencha o campo com o nome do usuário do GitHub");
    return true;
  }
}

async function getUserData(userName) {
  const userResponse = await getUser(userName);

  if (userResponse.message === "Not Found") {
    screen.renderNotFound();
    return;
  }

  const repositoriesResponse = await getRepositories(userName);

  const eventsUserResponse = await getEvents(userName);

  user.setInfo(userResponse);

  user.setInfoRepositories(repositoriesResponse);

  user.setEvents(eventsUserResponse);

  screen.renderUser(user);
}
