const axios = require('axios');

class Login {
    constructor() {
        this.url = "https://auth.iqoption.com/api/v2/login";
    }
   
    async send(username, password) {
        const data = {
            "identifier": username,
            "password": password,
        }

        return await axios.post(this.url, data)
    }
}

module.exports = new Login();