const axios = require('axios')

const url = 'https://api.github.com/users/Simon-Francis/'

async function getRepos() {
    let response = await axios.get(url)
    console.log(responde.data)
}

getRepos()