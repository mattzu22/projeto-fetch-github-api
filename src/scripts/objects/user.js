const user = {
  avatarUrl: "",
  name: "",
  bio: "",
  userName: "",
  following: 0,
  followers: 0,
  repositories: [],
  events: [],
  setInfo(githubUser) {
    this.avatarUrl = githubUser.avatar_url;
    this.name = githubUser.name;
    this.bio = githubUser.bio;
    this.userName = githubUser.login;
    this.following = githubUser.following;
    this.followers = githubUser.followers;
  },
  setInfoRepositories(repositories) {
    this.repositories = repositories;
  },
  setEvents(eventsUser) {
    this.events = eventsUser;
  },
};

export { user };
