const chai = require("chai");
const chaiHttp = require("chai-http");
const data = require("../../data/data.json");
chai.use(chaiHttp);

class authentication {
    constructor() {
        this.host = data.baseURL;
        this.header = data.header;
    }

    async login(payload) {
        const response = await chai
            .request(this.host)
            .post("/loginservice/loginv2")
            .send(payload)
            .set("Content-Type", this.header)
            .set("Accept", this.header)
        return response
    }
}

module.exports = authentication