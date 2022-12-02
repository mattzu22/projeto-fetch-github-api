const screenRepo = {

  userProfile: document.querySelector(".profile-data"),

  renderRepositories(user){
    let repositoriesItens = ""

    user.repositories.forEach(
      (repo) =>
        (repositoriesItens += `<li>
                                  <a href="${repo.html_url}" target="_blank">${repo.name}
                                    <div class="info-repo">
                                      <div class="info">
                                        <span>🚀 ${repo.forks}</span>
                                      </div>
                                      <div class="info">
                                        <span>🧑‍💻 ${repo.watchers}</span>
                                      </div>
                                      <div class="info">
                                        <span>⭐ ${repo.stargazers_count}</span>
                                      </div>
                                      <div class="info">
                                        <span>🧑‍🏫 ${repo.language ?? 'Sem linguagem'}</span>
                                      </div>
                                    </div>
                                  </a>
                        
                               </li>`)
    );

    if (user.repositories.length > 0) {
      this.userProfile.innerHTML += `<div class="repositories section">
                                        <h2>Repositorios</h2>
                                        <ul>${repositoriesItens}</ul>
                                     </div>`;
    }}}

    export { screenRepo }