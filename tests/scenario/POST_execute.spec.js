const chai = require("chai");
const chaiHttp = require("chai-http");
const { describe, it } = require("mocha");
const expect = require("chai").expect;
chai.use(chaiHttp);
const auth = require("../api/POST_loginv2.api")
const data = require("../../data/data.json")
const executeApi = require("../api/POST_execute.api")
const {execute} = require ("../../data/execute.data")
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

    execute.forEach((item) =>{
    it(item.case.title, async () => {
        const response = await new executeApi().postExecute(token,item.payload);
        expect(response.statusCode).to.be.equal(201);
    })
    })
})