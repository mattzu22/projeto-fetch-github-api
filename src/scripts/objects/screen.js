const screen = {
  userProfile: document.querySelector(".profile-data"),
  renderUser(user) {
    this.userProfile.innerHTML = `<div class="info">
                         <img src="${user.avatarUrl}">
                         <div class="data">
                             <h1>
                             ${user.name ?? "Não possui nome cadastrado 😣"}
                             </h1>
                             <p>
                             ${user.bio ?? "Não possui bios cadastrada 😢"}
                             </p>
                             <div class="status">
                              <p>👥Seguidores: ${user.followers}</p>
                              <p>👥Seguindo: ${user.following}</p>
                             </div>
                         </div>
                    </div>`;

    let repositoriesItens = "";

    user.repositories.forEach( repo =>
        (repositoriesItens += `<li><a href="${repo.html_url}" target="_blank">${repo.name}</a></li>`)
    );

    if (user.repositories.length > 0) {
      this.userProfile.innerHTML += `<div class="repositories section">
                                        <h2>Repositorios</h2>
                                        <ul>${repositoriesItens}</ul>
                                     </div>`;
    }

    let eventsUser = "";

    user.events.forEach( eventUser => {

        if(eventUser.payload.commits){
        
          eventUser.payload.commits.forEach( commit => {
      
            eventsUser += `<li>${eventUser.repo.name} - ${commit.message}</li>`
          
          })

          console.log('tem commits');
        }
    });

    if (user.events.length > 0) {
      this.userProfile.innerHTML += `<div class="events">
                                        <h2>Events</h2>
                                        <ul>${eventsUser}</ul>
                                     </div>`;
                   
    }

    
  },

  renderNotFound(){
    this.userProfile.innerHTML = `<h3>Usuário não encontrado</h3>`
  }
};

export { screen };
