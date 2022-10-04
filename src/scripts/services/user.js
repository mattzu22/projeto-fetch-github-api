import { baseUrl } from '/src/scripts/variables.js'
 
async function getUser(userName) {
    const response = await fetch(`${baseUrl}/${userName}`);
    return await response.json();
  }

  async function getEvents(userName){
    const response = await fetch(`${baseUrl}/${userName}/events`);
    return await response.json();
  }

  
  export { getUser, getEvents }
