const chai = require("chai");
const chaiHttp = require("chai-http");
const { describe, it } = require("mocha");
const expect = require("chai").expect;
chai.use(chaiHttp);
const auth = require("../api/POST_loginv2.api")
const data = require("../../data/data.json")
const {parameter} = require("../../data/parameter_list.data")
const parameterApi = require("../api/POST_parameter.api")

describe("TC GET Parameter", () => {
    let token = "";

    before(async () => {
        const response = await new auth().login({
            password: data.password,
            fcmToken: data.fcmToken,
            deviceId: data.deviceId,
        });
        token = response.header.access_token
    });
    parameter.forEach((item) =>{
    it(item.case.title, async () => {
        const response = await new parameterApi().getParameter(token, {
        });
        expect(response.statusCode).to.be.equal(item.case.status);
    })
    })
})