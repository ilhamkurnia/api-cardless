const chai = require("chai");
const chaiHttp = require("chai-http");
const { describe, it } = require("mocha");
const expect = require("chai").expect;
chai.use(chaiHttp);
const auth = require("../api/POST_loginv2.api")
const data = require("../../data/data.json")
const sofApi = require("../api/POST_soflist.api")
const {sofList} = require ("../../data/myAccount.data")

describe("TC SOF", () => {
    let token = "";

    before(async () => {
        const response = await new auth().login({
            password: data.password,
            fcmToken: data.fcmToken,
            deviceId: data.deviceId,
        });
        token = response.header.access_token
    });

    sofList.forEach((item) => {
    it("TC Post SOF", async () => {
        const response = await new sofApi().postSOF(token, item.payload);
        // console.log(response.text)
        expect(response.statusCode).to.be.equal(item.case.status);
    })
    })
})