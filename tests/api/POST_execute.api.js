const chai = require("chai");
const chaiHttp = require("chai-http");
const data = require("../../data/data.json");
const { executeData } = require("../../data/execute.data")
chai.use(chaiHttp);

class execute {
    constructor() {
        this.host = data.baseURL;
        this.header = data.header;
    }

    async postExecute(payload) {
        const response = await chai
            .request(this.host)
            .post("/cardlesservice/execute")
            .send(payload)
            .set("Content-Type", this.header)
            .set("Accept", this.header)
        return response
    }
}

module.exports = execute