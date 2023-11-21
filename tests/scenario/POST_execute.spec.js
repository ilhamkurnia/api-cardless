const chai = require("chai");
const chaiHttp = require("chai-http");
const { describe, it } = require("mocha");
const expect = require("chai").expect;
chai.use(chaiHttp);
const auth = require("../api/POST_loginv2.api")
const data = require("../../data/data.json")
const execute = require("../api/POST_execute.api")

describe("TC Execute", () => {
    let token = "";

    before(async () => {
        const response = await new auth().login({
            password: data.password,
            fcmToken: data.fcmToken,
            deviceId: data.deviceId,
        });
        token = response.header.access_token
    });

    it("TC Post Execute Cardless", async () => {
        const response = await new execute().postExecute(token, {
        });
        expect(response.statusCode).to.be.equal(201);
    })
})