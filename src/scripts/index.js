import { getRepositories } from '/src/scripts/services/repositories.js'
import { getUser } from '/src/scripts/services/user.js'
import { getEvents } from '/src/scripts/services/user.js'

import { user } from '/src/scripts/objects/user.js'
import { screen } from '/src/scripts/objects/screen.js'

document.getElementById("btn-search").addEventListener("click", () => {
  const userName = document.getElementById("input-search").value;
  if(renderNotFound(userName)) return
  getUserData(userName);
});

document.getElementById("input-search").addEventListener("keyup", (e) => {
  const userName = e.target.value;
  const key = e.which || e.keyCode;
  const enterKeyPressed = key === 13;

  if (enterKeyPressed) {
    if(renderNotFound(userName)) return
    getUserData(userName);
  }
});

function renderNotFound(userName){
  if(userName.length === 0){
    alert('Preencha o campo com o nome do usuário do GitHub')
    return true
  }
}

async function getUserData(userName) {

  const userResponse = await getUser(userName);
 
  if(userResponse.message === 'Not Found'){
    screen.renderNotFound()
    return
  }

  const repositoriesResponse = await getRepositories(userName);

  const eventsUserResponse = await getEvents(userName);
  console.log(eventsUserResponse[16].payload.commits[0].message);
  
  user.setInfo(userResponse);

  user.setRepositories(repositoriesResponse);

  user.setEvents(eventsUserResponse);

  console.log(eventsUserResponse);
  console.log(user);
 
  screen.renderUser(user);
  
}



























// function getUserRepositories(userName) {
//   getrepositories(userName).then((reposData) => {
//     let repositoriesItens = "";
//     reposData.forEach((repo) => {
//       repositoriesItens += `<li>
//                               <a href="${repo.html_url}" target="_blank">
//                                 ${repo.name}
//                               </a>  
//                             </li>                      
//                             `;
//     });
//     document.querySelector(".profile-data")
//     .innerHTML +=   `   <div class="repositories section">
//                             <h2>Repositorios</h2>
//                             <ul>
//                             ${repositoriesItens}      
//                             </ul>
//                         </div>
//                     `;
//   });
// }
