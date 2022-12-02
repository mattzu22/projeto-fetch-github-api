export const screenEvents = {
  userProfile: document.querySelector(".profile-data"),

  renderEvents(user) {
    let eventsUser = "";

    user.events.forEach((event) => {
      if (event.payload.commits) {
        event.payload.commits.forEach((commit) => {
          eventsUser += `<li>
                            <p>
                              <span class="name">${event.repo.name}</span> - ${commit.message}
                            </p>
                           </li>`;
        });
      }
    });

    if (user.events.length > 0) {
      this.userProfile.innerHTML += `<div class="events">
                                        <h2>Eventos</h2>
                                        <ul>${eventsUser}</ul>
                                     </div>`;
    } else {

      this.userProfile.innerHTML += `<div class="events">
                                        <h2>Eventos</h2>
                                        <ul>
                                          <li>
                                            <h3>Nem um evento recente encontrado😣</h3>  
                                          </li>
                                        </ul>
                                     </div>`;
    }
  },
};
