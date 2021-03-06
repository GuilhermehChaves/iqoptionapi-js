require("../src/Global");
const axios = require("axios");
const IQOptionApi = require("../src/IQOptionApi");

jest.mock("axios");

test("should connect to IQ option", async () => {
    axios.post.mockResolvedValue({ data: { ssid: "1234567" } });
    const api = new IQOptionApi("iqoption.com", "email", "password");
    const { connected, reason } = await api.connect();

    expect(connected).toBe(true);
    expect(reason).toBe("connected");
    expect(SSID).toBe("1234567");
});
