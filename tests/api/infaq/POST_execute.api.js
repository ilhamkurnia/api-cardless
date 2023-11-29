const chai = require("chai");
const chaiHttp = require("chai-http");
const data = require("../../../data/data.json");
chai.use(chaiHttp);

class executeInfaq{
    constructor() {
        this.host = data.baseURL;
        this.header = data.header;
    }

    async postExecuteInfaq(token, payload) {
        const response = await chai
            .request(this.host)
            .post("/ziswafservice/infaq/execute")
            .set("Authorization", "Bearer " + token)
            .set("Content-Type", this.header)
            .set("Accept", this.header)
            .send(payload)
        return response
    }
}

module.exports = executeInfaq