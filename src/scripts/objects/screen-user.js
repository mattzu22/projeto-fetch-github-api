
const screenUser = {
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
                    </div>`
  },
  
  renderNotFound() {
    this.userProfile.innerHTML = `<h3>Usuário não encontrado</h3>`;
  },
};

export { screenUser };
