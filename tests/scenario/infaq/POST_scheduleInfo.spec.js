const chai = require("chai");
const chaiHttp = require("chai-http");
const { describe, it } = require("mocha");
const expect = require("chai").expect;
chai.use(chaiHttp);
const auth = require("../../api/POST_loginv2.api")
const data = require("../../../data/data.json")
const scheduleInfoAPI = require("../../api/infaq/POST_scheduleinfo.api")
const {scheduleInfo} = require ("../../../data/infaq.data")

describe("Scenario Schedule Info", () => {
    let token = "";

    before(async () => {
        const response = await new auth().login({
            password: data.password,
            fcmToken: data.fcmToken,
            deviceId: data.deviceId,
        });
        token = response.header.access_token
    });

    scheduleInfo.forEach((item) => {
    it("TC Post Schedule Info", async () => {
        const response = await new scheduleInfoAPI().postScheduleInfo(token);
        expect(response.statusCode).to.be.equal(item.case.status);
    })
    })
})