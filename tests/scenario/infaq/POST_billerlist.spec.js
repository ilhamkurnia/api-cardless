const chai = require("chai");
const chaiHttp = require("chai-http");
const { describe, it } = require("mocha");
const expect = require("chai").expect;
chai.use(chaiHttp);
const auth = require("../../api/POST_loginv2.api")
const data = require("../../../data/data.json")
const billerListAPI = require("../../api/infaq/POST_billerlist.api")
const {billerList} = require ("../../../data/infaq.data")

describe("Scenario Biller List", () => {
    let token = "";

    before(async () => {
        const response = await new auth().login({
            password: data.password,
            fcmToken: data.fcmToken,
            deviceId: data.deviceId,
        });
        token = response.header.access_token
    });

    billerList.forEach((item) => {
    it("TC Post Biller List", async () => {
        const response = await new billerListAPI().postBillerList(token, item.payload);
        // console.log(response.response)
        expect(response.statusCode).to.be.equal(item.case.status);
        console.log(response.text)
    })
    })
})