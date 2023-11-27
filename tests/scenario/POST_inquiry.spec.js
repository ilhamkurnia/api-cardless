const chai = require("chai");
const chaiHttp = require("chai-http");
const { describe, it } = require("mocha");
const expect = require("chai").expect;
chai.use(chaiHttp);
const auth = require("../api/POST_loginv2.api")
const data = require("../../data/data.json")
const inquiryApi = require("../api/POST_inquiry.api")
const {inquiry} = require ("../../data/inquiry.data")

describe("TC Inquiry Cardless", () => {
    let token = "";

    before(async () => {
        const response = await new auth().login({
            password: data.password,
            fcmToken: data.fcmToken,
            deviceId: data.deviceId,
        });
        token = response.header.access_token
    });

    inquiry.forEach((item) => {
    it("TC Post Inquiry Cardless", async () => {
        const response = await new inquiryApi().postInquiry(token, item.payload);
        expect(response.statusCode).to.be.equal(item.case.status);
    })
    })
})
