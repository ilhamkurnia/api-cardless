const chai = require("chai");
const chaiHttp = require("chai-http");
const { describe, it } = require("mocha");
const expect = require("chai").expect;
chai.use(chaiHttp);
const auth = require("../api/POST_loginv2.api")
const {login} = require("../../data/login.data");

describe("TestCase Authentication", () => {
    login.forEach((item) => {
        it(item.case.title, async () => {
        const response = await new auth.login(item.payload);
        expect(response.status).to.be.equal(item.case.status)
    })
    });
    
});