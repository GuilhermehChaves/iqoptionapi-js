require("./Global");
const login = require("./http/Login");
const ConnectionResponse = require("./response/ConnectionResponse");

module.exports = class IQOptionApi {
    constructor(host, username, password, proxies = null) {
        this.https_url = `https://${host}/api`;
        this.wss_url = `wss://${host}/echo/websocket`;
        this.username = username;
        this.password = password;
        this.proxies = proxies;

        this.buy_successfull = null;
    }

    getSSID() {
        let response = null;

        try {
            response = login.send(this.username, this.password);
        } catch (ex) {
            return ex;
        }

        return response;
    }

    async connect() {
        ssl_mutual_exclusion = false;
        ssl_mutual_exclusion_write = false;

        if (SSID != null) {
            return null;
        }
        const response = await this.getSSID();
        try {
            SSID = response.data.ssid;
        } catch (exception) {
            // close
            return new ConnectionResponse(false, response.data.message);
        }

        return new ConnectionResponse(true, "connected");
    }
};
