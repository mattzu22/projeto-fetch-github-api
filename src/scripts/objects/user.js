
const user = {
    avatarUrl: '',
    name: '',
    bio: '',
    userName: '',
    following: '',
    followers: '',
    repositories: [],
    events: [],
    setInfo(gitHubUser){
        this.avatarUrl = gitHubUser.avatar_url
        this.name = gitHubUser.name
        this.bio = gitHubUser.bio
        this.userName = gitHubUser.login
        this.following = gitHubUser.following
        this.followers = gitHubUser.followers
    },
    setInfoRepositories(repositories){
        this.repositories = repositories
    },
    setEvents(eventsUser){
        this.events = eventsUser
    }

}


export { user }