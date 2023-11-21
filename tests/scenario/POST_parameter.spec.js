const chai = require("chai");
const chaiHttp = require("chai-http");
const { describe, it } = require("mocha");
const expect = require("chai").expect;
chai.use(chaiHttp);
const auth = require("../api/POST_loginv2.api")
const data = require("../../data/data.json")
const parameter = require("../api/POST_parameter.api")

describe("TC Parameter", () => {
    let token = "";

    before(async () => {
        const response = await new auth().login({
            password: data.password,
            fcmToken: data.fcmToken,
            deviceId: data.deviceId,
        });
        token = response.header.access_token
    });

    it("TC Get Parameter Cardless", async () => {
        const response = await new parameter().getParameter(token, {
        });
        expect(response.statusCode).to.be.equal(201);
    })
})