const IQOptionApi = require('./IQOptionApi');

class IQOption {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }

    connect() {
        this.api = new IQOptionApi("iqoption.com", this.email, this.password);
    }
}

module.exports = IQOption;