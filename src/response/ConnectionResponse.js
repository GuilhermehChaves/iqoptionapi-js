module.exports = class ConnectionResponse {
    constructor(connected, reason) {
        this.connected = connected;
        this.reason = reason;
    }
};
